import { a7 as __astro_tag_component__, j as Fragment, a6 as createVNode } from './astro__UYtZeqd.mjs';
import { t as $$Image } from './pages/__DYJJjHjB.mjs';
import 'clsx';

const frontmatter = {
  "heroImage": "/src/assets/images/photo-1614605008553-d98daabfa5b6.jpeg",
  "category": "Programming",
  "description": "A Journey with AstroJS, Shadcn, Tailwind, and TinaCMS. How I built a website for my local chess club using modern web technologies.",
  "pubDate": "2024-02-11T23:00:00.000Z",
  "tags": ["Web", "Chess", "Tailwind", "Astro"],
  "title": "Crafting the \xC9chiquier Ni\xE7ois Website",
  "minutesRead": "3 min read"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 2,
    "slug": "astrojs",
    "text": "AstroJS"
  }, {
    "depth": 2,
    "slug": "shadcnui",
    "text": "Shadcn/ui"
  }, {
    "depth": 2,
    "slug": "tinacms",
    "text": "TinaCMS"
  }, {
    "depth": 2,
    "slug": "conclusion",
    "text": "Conclusion"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: ["I recently had the opportunity to work on a website for my local chess club, the ", createVNode(_components.a, {
        href: "https://www.echiquiernicois.com/",
        children: "\xC9chiquier Ni\xE7ois"
      }), ".\nThe club was looking for a modern website that would allow them to easily update their content without having to write any code.\nI decided to use this opportunity to experiment with some new technologies and frameworks. In this article, I will share my experience building the website using AstroJS, Shadcn/ui, Tailwind, and TinaCMS."]
    }), "\n", createVNode(_components.h2, {
      id: "astrojs",
      children: "AstroJS"
    }), "\n", createVNode(_components.p, {
      children: ["Astro is a new static site generator that allows you to build blazing-fast websites using modern web technologies. It is designed to be flexible and extensible, allowing you to use your favorite tools and frameworks.\nI had previously used it to build a few small projects like this ", createVNode(_components.a, {
        href: "https://corentings.dev",
        children: "website"
      }), " or ", createVNode(_components.a, {
        href: "https://astrocket.corentings.dev",
        children: "Astrocket"
      }), " and was impressed by its performance and ease of use like the ability to use React, Vue, Solid, or any other framework you like.\nI never found a framework with a better developer experience than Astro."]
    }), "\n", createVNode(_components.h2, {
      id: "shadcnui",
      children: "Shadcn/ui"
    }), "\n", createVNode(_components.p, {
      children: ["I never used Shadcn before, but I\u2019ve been told on a Discord server that it was a really good UI library. I decided to give it a try and I was not disappointed.\nThankfully I found a nice ", createVNode(_components.a, {
        href: "https://astro-nomy.vercel.app/",
        children: "template"
      }), " that I could use as a starting point for the website.\nHowever, even if the template was really nice and Shadcn fulfilled my expectations, I really don\u2019t like React and that\u2019s why I probably won\u2019t use Shadcn again in the future. I really hope I will find a similar library for Solid or Svelte."]
    }), "\n", createVNode(_components.h2, {
      id: "tinacms",
      children: "TinaCMS"
    }), "\n", createVNode(_components.p, {
      children: "TinaCMS is a powerful and flexible headless CMS that allows you to edit your content directly in your website. It is designed to be easy to use and to integrate seamlessly with your existing tools and workflows.\nI had never used it before, but I had heard good things about it and decided to give it a try. I was impressed by how easy it was to set up and how intuitive it was to use.\nI was able to create a custom content model for the website and give the club members access to edit the content without having to write any code."
    }), "\n", createVNode(_components.p, {
      children: "In the past I had to work with WordPress and I hated it. I was really happy to find a modern and flexible alternative to WordPress that allowed me to use my favorite tools and frameworks without having to compromise on editor experience. I will definitely use TinaCMS again in the future."
    }), "\n", createVNode(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", createVNode(_components.p, {
      children: ["Building the ", createVNode(_components.a, {
        href: "https://www.echiquiernicois.com",
        children: "\xC9chiquier Ni\xE7ois website"
      }), " was a great experience and I learned a lot along the way.\nI was able to experiment with some new technologies and frameworks and was impressed by how easy it was to build a modern website using AstroJS, Tailwind, and TinaCMS."]
    }), "\n", createVNode(_components.p, {
      children: "For the future, I will probably use AstroJS again, but I will try to find a UI library that is not based on React. I will definitely use TinaCMS again and I am excited to see how it evolves in the future."
    }), "\n", createVNode(_components.p, {
      children: ["I hope this article was helpful and that it inspired you to experiment with some new technologies and frameworks. If you have any questions or feedback, feel free to reach out to me on ", createVNode(_components.a, {
        href: "https://github.com/corentings",
        children: "GitHub"
      }), " or ", createVNode(_components.a, {
        href: "https://twitter.com/GSCorentinDev",
        children: "Twitter"
      }), "."]
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
const url = "src/content/blog/Crafting-the-chiquier-Niois-Website.mdx";
const file = "/workspaces/corentings.github.io/src/content/blog/Crafting-the-chiquier-Niois-Website.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/workspaces/corentings.github.io/src/content/blog/Crafting-the-chiquier-Niois-Website.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
