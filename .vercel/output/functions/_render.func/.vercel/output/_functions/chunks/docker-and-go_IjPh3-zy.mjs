import { _ as __astro_tag_component__, F as Fragment, V as createVNode } from './astro_uM0hqRJo.mjs';
import { v as $$Image } from './pages/__o-4sg6ds.mjs';
import 'clsx';

const __0_______assets_docker_infographie_jpg__ = new Proxy({"src":"/_astro/docker_infographie.xwFb1ZxH.jpg","width":800,"height":2000,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/yume/WebstormProjects/corentings.github.io/src/assets/docker_infographie.jpg";
							}
							
							return target[name];
						}
					});

const frontmatter = {
  "author": "Corentin GS",
  "heroImage": "../../assets/blog/docker-and-go.webp",
  "category": "Programming",
  "description": "Learn how to optimize a Go deployment with Docker.",
  "pubDate": "2022-11-08T23:00:00.000Z",
  "tags": ["Optimization", "Docker", "Golang"],
  "title": "How to optimize a Go deployment with Docker ",
  "minutesRead": "4 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-to-optimize-a-go-deployment-with-docker",
    "text": "How to optimize a Go deployment with Docker ?"
  }, {
    "depth": 2,
    "slug": "a-simple-dockerfile",
    "text": "A simple Dockerfile"
  }, {
    "depth": 2,
    "slug": "the-first-step-using-a-multi-stage-build",
    "text": "The first step: using a multi-stage build"
  }, {
    "depth": 2,
    "slug": "improve-the-build-process",
    "text": "Improve the build process"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
      "astro-image": "astro-image",
      code: "code",
      h2: "h2",
      li: "li",
      p: "p",
      pre: "pre",
      span: "span",
      strong: "strong",
      ul: "ul",
      ...props.components
    },
    _component0 = _components["astro-image"];
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "how-to-optimize-a-go-deployment-with-docker",
      children: "How to optimize a Go deployment with Docker ?"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["In this article, I will present the different steps that led me to optimize the deployment of services in ", createVNode(_components.strong, {
        children: "golang"
      }), "\nusing ", createVNode(_components.strong, {
        children: "docker"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "a-simple-dockerfile",
      children: "A simple Dockerfile"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "When I started Go and deployed a rest api service for my Memnix application, I used a very simple Dockerfile\nthat I had found on the internet."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " golang:1.19"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " mkdir -p /go/src/myapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "WORKDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " /go/src/myapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " . /go/src/myapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go get -d -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go install -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "EXPOSE"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " 8080"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "CMD"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\"/go/bin/myapp\""
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "]"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "The problem is that I ended up with a 2GB image while my project compiled locally without docker and optimized was only 10MB! So I decided to try to optimize the size of my Docker image as much as possible."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "the-first-step-using-a-multi-stage-build",
      children: "The first step: using a multi-stage build"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "It is possible to separate our Dockerfile in several parts and to use several images:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "One image to build the project"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "A minimalist image to deploy it"
        }), "\n", createVNode("br", {}), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["This method allows us not to keep the sources and all the development tools provided with the golang image.\nThus, we only keep the binaries.\nI decided to use the ", createVNode(_components.strong, {
        children: "golang:1.19-alpine"
      }), " image as the ", createVNode(_components.strong, {
        children: "builder"
      }), "."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " golang:1.19-alpine "
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " builder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "LABEL"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " stage=gobuilder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " CGO_ENABLED=0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " GOOS linux"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "WORKDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " /build"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go.mod go.sum ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go mod download"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " . ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go get -d -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go build -o /app/myapp ."
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "This first part of the Dockerfile allows us to copy the sources, to synchronize the packages and to launch the command go build to generate the binary.\nOnce the build is finished, we use a minimalist alpine image that will be used for deployment. We just need to copy the binary from our builder and run it."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " alpine:latest"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "WORKDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " /app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " --from=builder /app/myapp ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "EXPOSE"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " 8080"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "CMD"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\"/app/myapp\""
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "]"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "After testing this new Dockerfile, the final image was 34MB. It\u2019s far from the original 10MB but it\u2019s still much better than 2GB."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "improve-the-build-process",
      children: "Improve the build process"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["It is possible in Golang to add flags to the build command in order to slightly optimize the binary size.\nAfter a little research on internet, I discovered the existence of \u201C-s -w\u201D flags. After testing them locally, I noticed an improvement of a few MB so I decided to add them to my Dockerfile.\nI also discovered ", createVNode("a", {
        href: "https://upx.github.io/",
        class: "font-bold underline text-accent",
        children: "Upx"
      }), " which is a small program that allows to compress binary files to reduce their size.\nI tested this little software in a terminal and I noticed an improvement of almost ", createVNode("b", {
        children: "50%"
      }), " on the size of the Memnix api. So I also added this step to my Dockerfile."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.pre, {
      class: "astro-code material-theme-palenight",
      style: {
        backgroundColor: "#292D3E",
        color: "#babed8",
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      },
      tabindex: "0",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " golang:1.19-alpine "
          }), createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "as"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " builder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "LABEL"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " stage=gobuilder"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " CGO_ENABLED=0"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "ENV"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " GOOS linux"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " apk update --no-cache && apk add upx"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "WORKDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " /build"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go.mod go.sum ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go mod download"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " . ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go get -d -v"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " go build -ldflags="
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\"-s -w\""
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "  -o /app/myapp ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "RUN"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " upx /app/myapp"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "FROM"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " alpine:3.14"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "WORKDIR"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " /app"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "COPY"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " --from=builder /app/myapp ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "EXPOSE"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " 8080"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F78C6C"
            },
            children: "CMD"
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: " ["
          }), createVNode(_components.span, {
            style: {
              color: "#C3E88D"
            },
            children: "\"/app/myapp\""
          }), createVNode(_components.span, {
            style: {
              color: "#BABED8"
            },
            children: "]"
          })]
        })]
      })
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "And here is my new Dockerfile! It may seem much longer and more complex than the first version but in the end, the result is very interesting. After testing this new Dockerfile, the final image is 16Mb so only 6Mb more than the version without Docker which is almost negligible."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: ["Docker is a great tool to simplify application development and deployment, but it can be problematic if used incorrectly. This experience helped me understand how to better use Docker and how to optimize my images.\nThis article is inspired by a ", createVNode("a", {
        href: "https://twitter.com/GSCorentinDev/status/1564536030795075585?s=20&t=l2hgvKBPDMVs4pS6um2HeA",
        class: "font-bold underline text-accent",
        children: "twitter thread"
      }), " and the complete code of my Dockerfile is available on my ", createVNode("a", {
        href: "https://github.com/memnix/memnix-rest/blob/e8e52b3d10731df5b2767f0d24bcdcb5d13d72e3/Dockerfile",
        class: "font-bold underline text-accent",
        children: "github"
      }), ".\nI hope this first article will interest you, don\u2019t hesitate to give me feedback so I can improve for the next articles and share your tips on Docker or Golang!"]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Here is a small infographic that summarizes the evolution of our Docker image.\nIt\u2019s in French but I think you can understand it anyway."
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: createVNode(_component0, {
        src: __0_______assets_docker_infographie_jpg__,
        alt: "Docker Infographic"
      })
    }), "\n", createVNode("img", {
      src: "../../assets/docker_infographie.jpg",
      alt: "Docker Infographic"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/blog/docker-and-go.mdx";
const file = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/docker-and-go.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/yume/WebstormProjects/corentings.github.io/src/content/blog/docker-and-go.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
