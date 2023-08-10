import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as addAttribute, $ as $$Image, e as renderSlot, f as renderHead } from '../renderers.mjs';
import { $ as $$Icon, B as BlogPosts, P, a as $$LanguageSelector, b as $$ThemeSwitcher, c as $$Navbar, d as $$HeadHrefLangs } from './prerender.9bc3a3b2.mjs';
/* empty css                                      */import { t } from 'i18next';
import 'path-to-regexp';
import 'cookie';
import 'kleur/colors';
import 'node:fs';
import 'node:http';
import 'node:tls';
import 'mime';
import 'string-width';
import 'mime/lite.js';
import 'html-escaper';
import 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import '@iconify/tools';
import 'svgo';
/* empty css                         */import 'i18next-fs-backend';
import 'module';
import 'path';
import 'locale-emoji';
import 'iso-639-1';

const $$Astro$1 = createAstro("https://corentings.dev");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { blogPost } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative min-h-screen w-full bg-base-100 p-5">
  <div class="hoveranimation absolute left-1 top-[0.5rem] z-10 hidden lg:block">
    <a href="/blog" class="btn-ghost btn text-xl md:text-2xl lg:text-3xl" rel="prefetch">
      ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:arrow-left", "class": "h-10 w-10" })}
    </a>
  </div>
  <div${addAttribute((blogPost.dark_background === true ? "text-white" : "text-black") + " relative mx-auto mb-4 w-full max-w-screen-lg md:mb-0", "class")} style="height: 24em">
    ${renderComponent($$result, "Image", $$Image, { "src": blogPost.image, "class": "absolute left-0 top-0 z-0 h-full w-full object-cover", "alt": blogPost.title, "loading": "eager", "format": "avif", "aspectRatio": 16 / 9, "quality": "high", "width": 1024, "height": 1024 })}
    <div class="absolute bottom-0 left-0 z-20 p-4">
      <span class="badge-secondary badge mb-2 inline-flex items-center justify-center px-4 py-1 uppercase">${blogPost.category}</span>
      <h1 class="text-4xl leading-tight">
        ${blogPost.title}
      </h1>
      <div class="mt-3 flex">
        ${renderComponent($$result, "Image", $$Image, { "src": blogPost.author.avatar, "format": "avif", "quality": 50, "loading": "eager", "alt": blogPost.author.name, "width": "32", "height": "32", "aspectRatio": "1/1", "class": "mr-2 h-10 w-10 rounded-full object-cover" })}
        <div>
          <div class="flex flex-col">
            <span>${blogPost.author.name}</span>
            <span>${blogPost.date} ・${blogPost.timeToRead}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto mt-12 max-w-screen-lg px-4 text-lg leading-relaxed lg:px-0">
    ${renderSlot($$result, $$slots["default"])}
  </div>
</div>`;
}, "/home/yume/Documents/3.Dev/corentings.github.io/src/components/blog/BlogPost.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://corentings.dev");
const $$BlogPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  const blogPost = BlogPosts.getBlogPostByLink(frontmatter.link);
  let meta = {};
  if (blogPost) {
    meta = {
      title: blogPost.title,
      description: blogPost.description,
      image: blogPost.image,
      date: blogPost.date,
      author: "Corentin Giaufer--Saubert"
    };
  } else {
    meta = {
      title: frontmatter.title,
      description: frontmatter.description,
      image: frontmatter.image,
      date: frontmatter.date
    };
  }
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n<head>\n    <script async src="https://umami.memnix.app/script.js" data-website-id="fca9df7f-70a1-466a-9fc8-d745bb4c33f0"><\/script>\n    <script>\n        // \u261D\uFE0F This script prevent the FART effect.\n        if (localStorage.getItem("theme") === null) {\n            document.documentElement.setAttribute("data-theme", "light")\n        } else document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"))\n        // "theme" LocalStorage value is set by the package to remember user preference.\n        // The value is checked and applyed before rendering anything.\n    <\/script>\n    \n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width">\n    <meta name="generator"', '>\n    <link rel="icon" href="/favicon.ico">\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">\n    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">\n    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">\n    <meta name="description"', '>\n    <meta name="og:title"', '>\n    <meta name="og:site_name" content="CorentinGS">\n    <meta name="article:author"', '>\n    <meta name="article:published_time"', '>\n    <meta name="og:description"', '>\n    <meta name="og:type" content="article">\n    <meta name="og:url" content="https://corentings.dev">\n    <meta name="og:image"', '>\n    <meta name="twitter:card" content="summary_large_image">\n    <meta name="twitter:url" content="https://corentings.dev">\n    <meta name="twitter:creator" content="GSCorentinDev">\n    <meta name="twitter:title"', '>\n    <meta name="twitter:description"', '>\n    <meta name="twitter:image"', ">\n    ", "\n    <title>", "</title>\n", "</head>\n<body>\n<main>\n    <!-- Navbar -->\n    ", "\n    <!-- Page Slot -->\n    ", '\n\n    <input type="checkbox" id="my-modal-6" class="modal-toggle">\n    <label for="my-modal-6" class="modal cursor-pointer modal-bottom sm:modal-middle">\n        <label class="modal-box relative" for="">\n            <ul class="menu w-80 overflow-y-auto bg-base-100 p-4">\n\n                <li class="py-3">\n                    ', '\n                </li>\n                <li class="py-3">\n                    ', "\n                </li>\n                <li>\n                    <a", ' rel="nofollow prefetch">', "</a>\n                </li>\n                <li>\n                    <a", ' rel="nofollow prefetch">\n                        ', "\n                    </a>\n                </li>\n            </ul>\n        </label>\n    </label>\n</main>\n</body>\n</html>"])), addAttribute(Astro2.generator, "content"), addAttribute(meta.description, "content"), addAttribute(meta.title, "content"), addAttribute(meta.author, "content"), addAttribute(meta.date, "content"), addAttribute(meta.description, "content"), addAttribute(meta.image, "content"), addAttribute(meta.title, "content"), addAttribute(meta.description, "content"), addAttribute(meta.image, "content"), renderComponent($$result, "HeadHrefLangs", $$HeadHrefLangs, {}), frontmatter.title, renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "lang": false }), renderComponent($$result, "BlogPost", $$BlogPost, { "blogPost": blogPost }, { "default": ($$result2) => renderTemplate`
        ${renderSlot($$result2, $$slots["default"])}
    ` }), renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, {}), renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "showFlag": true, "class": "my-select-class select-bordered select-secondary select select-md w-full max-w-xs bg-base-200 text-base-content" }), addAttribute(P("/blog"), "href"), t("navbar.blog"), addAttribute(P("/links"), "href"), t("navbar.links"));
}, "/home/yume/Documents/3.Dev/corentings.github.io/src/layouts/BlogPostLayout.astro", void 0);

export { $$BlogPostLayout as default };
