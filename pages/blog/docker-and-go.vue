<template>
  <div>
    <BlogPost :blogPost="blogPost">
      <h3 class="pb-6 text-2xl">
        How to optimize a Go deployment with Docker ?
      </h3>
      <p class="pb-6">
        In this article, I will present the different steps that led me to optimize the deployment of services in <b>golang</b>
        using <b>docker</b>.
      </p>
      <h3 class="pb-6 text-2xl">
        A simple Dockerfile
      </h3>
      <p>
        When I started Go and deployed a rest api service for my Memnix application, I used a very simple Dockerfile
        that I had found on the internet.
      </p>
      <div class="mockup-code mt-5 mb-5">
        <pre><code>FROM golang:1.19</code></pre>
        <br>
        <pre><code>RUN mkdir -p /go/src/myapp</code></pre>
        <pre><code>WORKDIR /go/src/myapp</code></pre>
        <br>
        <pre><code>COPY . /go/src/myapp</code></pre>
        <br>
        <pre><code>RUN go get -d -v</code></pre>
        <pre><code>RUN go install -v</code></pre>
        <br>
        <pre><code>EXPOSE 8080</code></pre>
        <br>
        <pre><code>CMD ["/go/bin/myapp"]</code></pre>
      </div>
      <p>The problem is that I ended up with a 2GB image while my project compiled locally without docker and optimized
        was only 10MB! So I decided to try to optimize the size of my Docker image as much as possible.
      </p>
      <br>
      <h3 class="pb-6 text-2xl">
        The first step: using a multi-stage build
      </h3>
      <p>
        It is possible to separate our Dockerfile in several parts and to use several images:</p>
      <li>
        One image to build the project
      </li>
      <li>
        A minimalist image to deploy it
      </li>

      <p>
        This method allows us not to keep the sources and all the development tools provided with the golang image.
        Thus, we only keep the binaries.
        I decided to use the <b>golang:1.19-alpine</b> image as the <b>builder</b>.
      </p>
      <div class="mockup-code mt-5 mb-5">
        <pre><code>FROM golang:1.19-alpine as builder</code></pre>
        <br>
        <pre><code>LABEL stage=gobuilder</code></pre>
        <pre><code>ENV CGO_ENABLED=0</code></pre>
        <pre><code>ENV GOOS linux</code></pre>
        <pre><code>WORKDIR /build</code></pre>
        <br>
        <pre><code>COPY go.mod go.sum .</code></pre>
        <pre><code>RUN go mod download</code></pre>
        <br>
        <pre><code>COPY . .</code></pre>
        <pre><code>RUN go get -d -v</code></pre>
        <pre><code>RUN go build -o /app/myapp .</code></pre>
      </div>
      <p>
        This first part of the Dockerfile allows us to copy the sources, to synchronize the packages and to launch the command go build to generate the binary.<br>
        Once the build is finished, we use a minimalist alpine image that will be used for deployment. We just need to copy the binary from our builder and run it.
      </p>
      <div class="mockup-code mt-5 mb-5">
        <pre><code>FROM alpine:latest</code></pre>
        <br>
        <pre><code>WORKDIR /app</code></pre>
        <br>
        <pre><code>COPY --from=builder /app/myapp .</code></pre>
        <br>
        <pre><code>EXPOSE 8080</code></pre>
        <br>
        <pre><code>CMD ["/app/myapp"]</code></pre>
      </div>

      <p>
        After testing this new Dockerfile, the final image was 34MB. It's far from the original 10MB but it's still much better than 2GB.
      </p>
      <br>
      <h3 class="pb-6 text-2xl">
        Improve the build process
      </h3>
      <p>It is possible in Golang to add flags to the build command in order to slightly optimize the binary size.<br>
        After a little research on internet, I discovered the existence of "-s -w" flags. After testing them locally, I noticed an improvement of a few MB so I decided to add them to my Dockerfile.<br>
        I also discovered <a href="https://upx.github.io/" class="font-bold underline text-accent">Upx</a> which is a small program that allows to compress binary files to reduce their size.
        I tested this little software in a terminal and I noticed an improvement of almost <b>50%</b> on the size of the Memnix api. So I also added this step to my Dockerfile.</p>
      <div class="mockup-code mt-5 mb-5">
        <pre><code>FROM golang:1.19-alpine as builder</code></pre>
        <br>
        <pre><code>LABEL stage=gobuilder</code></pre>
        <pre><code>ENV CGO_ENABLED=0</code></pre>
        <pre><code>ENV GOOS linux</code></pre>
        <pre><code>RUN apk update --no-cache && apk add upx</code></pre>
        <pre><code>WORKDIR /build</code></pre>
        <br>
        <pre><code>COPY go.mod go.sum .</code></pre>
        <pre><code>RUN go mod download</code></pre>
        <br>
        <pre><code>COPY . .</code></pre>
        <pre><code>RUN go get -d -v</code></pre>
        <pre><code>RUN go build -ldflags="-s -w"  -o /app/myapp .</code></pre>
        <pre><code>RUN upx /app/myapp</code></pre>
        <br>
        <pre><code>FROM alpine:3.14</code></pre>
        <br>
        <pre><code>WORKDIR /app</code></pre>
        <br>
        <pre><code>COPY --from=builder /app/myapp .</code></pre>
        <br>
        <pre><code>EXPOSE 8080</code></pre>
        <br>
        <pre><code>CMD ["/app/myapp"]</code></pre>
      </div>
      <br>
      <p>
        And here is my new Dockerfile! It may seem much longer and more complex than the first version but in the end, the result is very interesting. After testing this new Dockerfile, the final image is 16Mb so only 6Mb more than the version without Docker which is almost negligible.
      </p>
      <br>
      <h3 class="pb-6 text-2xl">
        Conclusion
      </h3>
      <p>
        Docker is a great tool to simplify application development and deployment, but it can be problematic if used incorrectly. This experience helped me understand how to better use Docker and how to optimize my images.<br>
        This article is inspired by a <a href="https://twitter.com/GSCorentinDev/status/1564536030795075585?s=20&t=l2hgvKBPDMVs4pS6um2HeA" class="font-bold underline text-accent">twitter thread</a> and the complete code of my Dockerfile is available on my <a href="https://github.com/memnix/memnix-rest/blob/e8e52b3d10731df5b2767f0d24bcdcb5d13d72e3/Dockerfile" class="font-bold underline text-accent">github</a>.<br>
        I hope this first article will interest you, don't hesitate to give me feedback so I can improve for the next articles and share your tips on Docker or Golang!<br>
        Here is a small infographic that summarizes the evolution of our Docker image. It's in French but I think you can understand it anyway.
      </p>
      <nuxt-img src="https://media-exp1.licdn.com/dms/image/D4E12AQHotzXp5YiILw/article-inline_image-shrink_1500_2232/0/1661955794766?e=1673481600&v=beta&t=zF5WizfPOTjfVGi5KAxQFCKpP6PMGJSmelU7_K4ZP1U"
                alt="Docker Infographic" class="mt-5 mb-5"/>
    </BlogPost>
  </div>
</template>

<script lang="ts" setup>
import {BlogPosts} from "~/utils/blog";

const blogPost = BlogPosts.blogPosts[0];

useHead({
  title: "CorentinGS - Deploying a Go application with Docker",
  meta: [
    {
      name: "description",
      content: "How to deploy an optimized Go application with Docker",
    },
    { name: "og:type", content: "website" },
    { name: "og:title", content: "CorentinGS - Computer Science Student" },
    {
      name: "og:description",
      content:
          "Corentin Giaufer Saubert - How to deploy an optimized Go application with Docker",
    },
    {
      name: "og:image",
      content:
          "https://images.unsplash.com/photo-1646627927863-19874c27316b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    },
    { name: "og:url", content: "https://corentings.vercel.app/blog/docker-and-go" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "CorentinGS - Computer Science Student" },
    {
      name: "twitter:description",
      content:
          "Corentin Giaufer Saubert - How to deploy an optimized Go application with Docker",
    },
    {
      name: "twitter:image",
      content:
          "https://images.unsplash.com/photo-1646627927863-19874c27316b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
    },
    { name: "twitter:url", content: "https://corentings.vercel.app/blog/docker-and-go" },
  ],
});
</script>

<style scoped></style>
