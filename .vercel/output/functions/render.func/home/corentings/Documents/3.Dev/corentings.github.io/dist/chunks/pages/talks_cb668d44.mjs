import i18next, { t, changeLanguage } from 'i18next';
import * as url2 from 'url';
import '@proload/core';
import '@proload/plugin-tsm';
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, h as addAttribute, F as Fragment, u as unescapeHTML, m as maybeRenderHead, s as spreadAttributes, j as renderSlot, k as renderHead, l as createTransitionScope } from '../astro_6b2906f3.mjs';
/* empty css                                       *//* empty css                          */import fsBackend from 'i18next-fs-backend';
import module2 from 'module';
import path2 from 'path';
import 'clsx';
import localeEmoji from 'locale-emoji';
import ISO6991 from 'iso-639-1';
import { IconSet } from '@iconify/tools';
import { optimize } from 'svgo';

module2.createRequire(import.meta.url);
      const __filename = url2.fileURLToPath(import.meta.url);
      path2.dirname(__filename);
      
var g={config:{defaultLocale:"cimode",locales:[],namespaces:"translation",defaultNamespace:"translation",load:["server"],routes:{},flatRoutes:{},showDefaultLocale:!1,trailingSlash:"ignore",resourcesBasePath:"/locales"}},A=e=>{let r={};for(let n in e)n==="routes"&&(r=y(e[n])),g.config[n]=e[n];g.config.flatRoutes=r;},y=(e,r=[],n=[],s=null)=>{let o=s||{};for(let t in e)if(typeof e[t]=="object"&&e[t]!==null)y(e[t],[...r,t],[...n,Object.prototype.hasOwnProperty.call(e[t],"index")?e[t].index:t],o);else {let l="/"+r.join("/"),i="/"+n.join("/");t==="index"?(o[l]=i,l+="/"+t,i+="/"+t,o[l]=i):(l+="/"+t,i+="/"+e[t],o[l]=i);}return o};var m=(e,r)=>{if(e==="/")return e;switch(r){case"always":return e.endsWith("/")?e:e+"/";case"never":return e.replace(/\/$/,"");default:return e}},P=(e="/",r=null,n="/")=>{r||(r=i18next.language);let s=e.split("/").filter(f=>f!==""),o=n.split("/").filter(f=>f!=="");JSON.stringify(s).startsWith(JSON.stringify(o).replace(/]+$/,""))&&s.splice(0,o.length),e=s.length===0?"":s.join("/"),n=o.length===0?"/":"/"+o.join("/")+"/";let{flatRoutes:t,showDefaultLocale:l,defaultLocale:i,locales:a,trailingSlash:c}=g.config;if(!a.includes(r))return console.warn(`WARNING(astro-i18next): "${r}" locale is not supported, add it to the locales in your astro config.`),m(`${n}${e}`,c);if(s.length===0)return m(l?`${n}${r}`:r===i?n:`${n}${r}`,c);if(r===i){let f=Object.keys(t).find(d=>t[d]==="/"+e);typeof f<"u"&&(s=f.split("/").filter(d=>d!==""));}for(let f of a)if(s[0]===f){s.shift();break}(l||r!==i)&&(s=[r,...s]);let u=n+s.join("/");return Object.prototype.hasOwnProperty.call(t,u.replace(/\/$/,""))?m(t[u.replace(/\/$/,"")],c):m(u,c)},T=(e,r=null,n="/")=>{let[s,,o,...t]=e.split("/");return s+"//"+o+P(t.join("/"),r,n)};function fe(e){A(e);}

i18next.use(fsBackend).init({"supportedLngs": ["en","fr","de",],"fallbackLng": ["en","fr","de",],"ns": "translation","defaultNS": "translation","initImmediate": false,"backend": {"loadPath": "/home/corentings/Documents/3.Dev/corentings.github.io/public/locales/{{lng}}/{{ns}}.json",},});fe({"defaultLocale": "en","locales": ["en","fr","de",],"namespaces": "translation","defaultNamespace": "translation","load": ["server",],"routes": {},"flatRoutes": {},"showDefaultLocale": false,"trailingSlash": "ignore","resourcesBasePath": "/locales","fallbackLocale": "en",});

const $$Astro$k = createAstro("https://corentings.dev");
const $$HeadHrefLangs$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs$1;
  const supportedLanguages = i18next.languages;
  const currentUrl = Astro2.url.href;
  const defaultLanguage = g.config.defaultLocale;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<link rel="alternate" hreflang="x-default"${addAttribute(T(currentUrl, defaultLanguage), "href")}>${supportedLanguages.map((supportedLanguage) => renderTemplate`<link rel="alternate"${addAttribute(supportedLanguage, "hreflang")}${addAttribute(T(currentUrl, supportedLanguage), "href")}>`)}` })}`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/utils/HeadHrefLangs.astro", void 0);

const interpolate = (i18nKey, referenceString, namespace = null) => {
  const localizedString = t(i18nKey, { ns: namespace });
  if (localizedString === i18nKey) {
    console.warn(`WARNING(astro-i18next): missing translation key ${i18nKey}.`);
    return referenceString;
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = referenceString.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return localizedString;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let interpolatedString = localizedString;
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    interpolatedString = interpolatedString.replaceAll(
      `<${index}>`,
      `<${referencedTag.name}${referencedTag.attributes}>`
    );
    interpolatedString = interpolatedString.replaceAll(
      `</${index}>`,
      `</${referencedTag.name}>`
    );
  }
  return interpolatedString;
};
const createReferenceStringFromHTML = (html) => {
  const allowedTags = ["strong", "br", "em", "i", "b"];
  let forbiddenStrings = [];
  if (i18next.options) {
    forbiddenStrings = [
      "keySeparator",
      "nsSeparator",
      "pluralSeparator",
      "contextSeparator"
    ].map((key) => {
      return {
        key,
        str: i18next.options[key]
      };
    }).filter(function(val) {
      return typeof val !== "undefined";
    });
  }
  const tagsRegex = /<([\w\d]+)([^>]*)>/gi;
  const referenceStringMatches = html.match(tagsRegex);
  if (!referenceStringMatches) {
    console.warn(
      "WARNING(astro-i18next): default slot does not include any HTML tag to interpolate! You should use the `t` function directly."
    );
    return html;
  }
  const referenceTags = [];
  referenceStringMatches.forEach((tagNode) => {
    const [, name, attributes] = tagsRegex.exec(tagNode);
    referenceTags.push({ name, attributes });
    tagsRegex.exec("");
  });
  let sanitizedString = html.replace(/\s+/g, " ").trim();
  for (let index = 0; index < referenceTags.length; index++) {
    const referencedTag = referenceTags[index];
    if (allowedTags.includes(referencedTag.name) && referencedTag.attributes.trim().length === 0) {
      continue;
    }
    sanitizedString = sanitizedString.replaceAll(
      new RegExp(`<${referencedTag.name}[^>]*?\\s*\\/>`, "gi"),
      `<${index}/>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `<${referencedTag.name}${referencedTag.attributes}>`,
      `<${index}>`
    );
    sanitizedString = sanitizedString.replaceAll(
      `</${referencedTag.name}>`,
      `</${index}>`
    );
  }
  for (let index = 0; index < forbiddenStrings.length; index++) {
    const { key, str } = forbiddenStrings[index];
    if (sanitizedString.includes(str)) {
      console.warn(
        `WARNING(astro-i18next): "${str}" was found in a <Trans> translation key, but it is also used as ${key}. Either explicitly set an i18nKey or change the value of ${key}.`
      );
    }
  }
  return sanitizedString;
};

const $$Astro$j = createAstro("https://corentings.dev");
const $$Trans = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Trans;
  const { i18nKey, ns } = Astro2.props;
  const referenceString = await Astro2.slots.render("default");
  let key;
  if (typeof i18nKey === "string") {
    key = i18nKey;
  } else {
    key = createReferenceStringFromHTML(referenceString);
  }
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(interpolate(key, referenceString, ns))}` })}`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-i18next/src/components/Trans.astro", void 0);

const $$Astro$i = createAstro("https://corentings.dev");
const $$LanguageSelector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const supportedLanguages = i18next.languages;
  const currentLanguage = i18next.language;
  const { pathname } = Astro2.url;
  const { showFlag = false, languageMapping, ...attributes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<select onchange="location = this.value;"${spreadAttributes(attributes)}>${supportedLanguages.map((supportedLanguage) => {
    let value = P(pathname, supportedLanguage);
    const flag = showFlag ? localeEmoji(supportedLanguage) + " " : "";
    let nativeName = "";
    if (languageMapping && languageMapping.hasOwnProperty(supportedLanguage)) {
      nativeName = languageMapping[supportedLanguage];
    } else {
      nativeName = ISO6991.getNativeName(supportedLanguage);
    }
    const label = flag + nativeName;
    return renderTemplate`<option${addAttribute(value, "value")}${addAttribute(supportedLanguage === currentLanguage, "selected")}>${label}</option>`;
  })}</select>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-i18next/src/components/LanguageSelector.astro", void 0);

const $$Astro$h = createAstro("https://corentings.dev");
const $$HeadHrefLangs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$HeadHrefLangs;
  const supportedLanguages = i18next.languages;
  const currentUrl = Astro2.url.href;
  return renderTemplate`${supportedLanguages.map((supportedLanguage) => renderTemplate`<link rel="alternate"${addAttribute(supportedLanguage, "hreflang")}${addAttribute(T(currentUrl, supportedLanguage), "href")}>`)}`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-i18next/src/components/HeadHrefLangs.astro", void 0);

const $$Astro$g = createAstro("https://corentings.dev");
const $$ThemeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ThemeSwitcher;
  const themes = ["light", "dark", "dracula", "memnix", "luxury", "cyberpunk", "black"];
  return renderTemplate`${maybeRenderHead()}<select data-choose-theme id="theme-select" name="theme-option" class="select select-bordered select-secondary select-md max-w-xs bg-base-200 text-base-content"><option disabled selected>Pick your theme</option>${themes.map((theme) => renderTemplate`<option${addAttribute(theme, "value")}>${theme.charAt(0).toUpperCase() + theme.slice(1)}</option>`)}</select>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/utils/ThemeSwitcher.astro", void 0);

function JsonLd(item, space) {
  return JSON.stringify(item, safeJsonLdReplacer, space);
}
const ESCAPE_ENTITIES = Object.freeze({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;"
});
const ESCAPE_REGEX = new RegExp(
  `[${Object.keys(ESCAPE_ENTITIES).join("")}]`,
  "g"
);
const ESCAPE_REPLACER = (t) => ESCAPE_ENTITIES[t];
const safeJsonLdReplacer = (() => {
  return (_, value) => {
    switch (typeof value) {
      case "object":
        if (value === null) {
          return void 0;
        }
        return value;
      case "number":
      case "boolean":
      case "bigint":
        return value;
      case "string":
        return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
      default: {
        return void 0;
      }
    }
  };
})();

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(raw || cooked.slice()) }));
var _a$4;
const $$Astro$f = createAstro("https://corentings.dev");
const $$Schema = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Schema;
  const { item, space } = Astro2.props;
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JsonLd(item, space)));
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-seo-schema/dist/Schema.astro", void 0);

const $$Astro$e = createAstro("https://corentings.dev");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$d = createAstro("https://corentings.dev");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$SEO;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Corentin Giaufer--Saubert"><meta name="description" content="Meet CorentinGS, Freelance Backend Developer and Chess lover. Expert in Golang, Docker, Linux. Discover Memnix, a flashcard app. Engage with vibrant communities. Join an innovative journey 🚀"><meta name="robots" content="index, follow"><meta name="og:title" content="Corentin Giaufer Saubert・Freelance・Golang Expert・Chess Lover"><meta name="og:description" content="Meet CorentinGS, Freelance Backend Developer and Chess lover. Expert in Golang, Docker, Linux. Discover Memnix, a flashcard app. Engage with vibrant communities. Join an innovative journey 🚀"><meta name="og:image" content="https://media.licdn.com/dms/image/D4E16AQG54heiPIbrNw/profile-displaybackgroundimage-shrink_350_1400/0/1684257938413?e=1695859200&v=beta&t=krfPUcahukL1BQ5FS0DeLRDVPPjMpRAj8oHc51kZGs0"><meta name="og:url" content="https://corentings.dev"><meta name="og:site_name" content="CorentinGS"><meta name="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@GSCorentinDev"><meta name="twitter:title" content="Corentin Giaufer Saubert・Freelance・Golang Expert・Chess Lover"><meta name="twitter:description" content="Meet CorentinGS, Freelance Backend Developer and Chess lover. Expert in Golang, Docker, Linux. Discover Memnix, a flashcard app. Engage with vibrant communities. Join an innovative journey 🚀"><meta name="theme-color" content="#38555f"><link rel="icon" href="/favicon.ico"><link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180"><link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"><link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#38555f"><link rel="me" href="https://hachyderm.io/@TheLittlePrince">`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/utils/SEO.astro", void 0);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = ({}).ASTRO_ICON_API ?? "https://api.iconify.design/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}.json?icons=${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const svg = new IconSet(await res.json()).toString(name);
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      "cleanupIds",
      {
        name: "prefixIds",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = /* #__PURE__ */ Object.assign({

});
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = /* #__PURE__ */ Object.assign({});
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$c = createAstro("https://corentings.dev");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-iconify/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$b = createAstro("https://corentings.dev");
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet>${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)}</svg>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-iconify/lib/Spritesheet.astro", void 0);

const $$Astro$a = createAstro("https://corentings.dev");
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-iconify/lib/SpriteProvider.astro", void 0);

const $$Astro$9 = createAstro("https://corentings.dev");
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}>${title ? renderTemplate`<title>${title}</title>` : ""}<use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use></svg>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/node_modules/astro-iconify/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

var TimelineCardType = /* @__PURE__ */ ((TimelineCardType2) => {
  TimelineCardType2[TimelineCardType2["School"] = 0] = "School";
  TimelineCardType2[TimelineCardType2["Work"] = 1] = "Work";
  TimelineCardType2[TimelineCardType2["Project"] = 2] = "Project";
  TimelineCardType2[TimelineCardType2["Course"] = 3] = "Course";
  TimelineCardType2[TimelineCardType2["Volunteering"] = 4] = "Volunteering";
  TimelineCardType2[TimelineCardType2["Other"] = 5] = "Other";
  return TimelineCardType2;
})(TimelineCardType || {});

const imgAvatar = new Proxy({"src":"/_astro/avatar.ab91b8c2.webp","width":1080,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

class Profile {
  static full_name = "Corentin Giaufer Saubert";
  static short_name = "Corentin GS";
  static title = "Freelance backend developer";
  static location = "Nice, France";
  static email = "contact@corentings.dev";
  static avatar = imgAvatar;
}
class Config {
  static twitter = "GSCorentinDev";
  static facebook = "";
  static instagram = "";
  static youtube = "";
  static github = "CorentinGS";
  static linkedin = "corentin-giaufer-saubert/";
  static medium = "";
  static patreon = "";
  static discord = "https://discord.gg/wc4PQsd7eE";
  static telegram = "";
  static reddit = "";
  static twitch = "";
  static stackoverflow = "";
  static devto = "";
  static mastodon = "https://hachyderm.io/@TheLittlePrince";
  static rss = "/rss.xml";
}
class Experiences {
  static _experiences = [
    {
      name: t("experiences.bsc_cs.title"),
      type: TimelineCardType.School,
      description: t("experiences.bsc_cs.description"),
      start_date: "2023",
      tools: "Java",
      link: "https://www.iu.org/bachelor/computer-science/",
      image: ""
    },
    {
      name: t("experiences.freelance.title"),
      type: TimelineCardType.Work,
      description: t("experiences.freelance.description"),
      start_date: "2022",
      tools: "Golang, PostgreSQL, Docker...",
      link: "https://corentings.dev/"
    },
    {
      name: t("experiences.stouuf.title"),
      type: TimelineCardType.Personal,
      description: t("experiences.stouuf.description"),
      start_date: "2022",
      tools: "Canva, Tailwindcss",
      image: "",
      link: "https://stouuf.net/"
    },
    {
      name: t("experiences.educative.title"),
      type: TimelineCardType.Course,
      description: t("experiences.educative.description"),
      start_date: "2022",
      tools: "C, Golang, Data Structure, Java",
      link: "https://www.Educative.io",
      image: "https://res.cloudinary.com/practicaldev/image/fetch/s---FKkgQBv--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/246442/81bbdd1a-3596-4e44-b522-758c0839afa6.png"
    },
    {
      name: t("experiences.hackerrank.title"),
      type: TimelineCardType.Course,
      description: t("experiences.hackerrank.description"),
      start_date: "March 2022",
      end_date: "March 2022",
      tools: "Golang, Python",
      link: "https://www.hackerrank.com/certificates/03173cedd98b",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png"
    },
    {
      name: t("experiences.memnix.title"),
      type: TimelineCardType.Personal,
      description: t("experiences.memnix.description"),
      start_date: "2021",
      image: "https://github.com/memnix/memnix/blob/main/assets/images/moutmout.png?raw=true",
      link: "https://memnix.app/",
      tools: "Golang, Nuxt, PostgreSQL, Docker..."
    },
    {
      type: TimelineCardType.School,
      description: t("experiences.unice.description"),
      link: "https://univ-cotedazur.fr/",
      image: "https://univ-cotedazur.fr/medias/photo/uca-logo-haut-2-_1646652165191-?ID_FICHE=1167951",
      name: t("experiences.unice.title"),
      start_date: "September 2021",
      end_date: "December 2022",
      location: "Nice, France",
      tools: "Python, Arduino"
    },
    {
      type: TimelineCardType.Work,
      description: t("experiences.onetoo.description"),
      image: "https://media-exp2.licdn.com/dms/image/C4E0BAQF9j7wBRv2oBQ/company-logo_200_200/0/1592988142210?e=2147483647&v=beta&t=XLLVYgKGUPYmLdMt3qXgFR4UlGif3KM5sGJ4_c1O278",
      name: t("experiences.onetoo.title"),
      start_date: "June 2021",
      end_date: "July 2021",
      location: "Nice, France",
      link: "https://www.one-too.com/"
    },
    {
      type: TimelineCardType.School,
      description: t("experiences.estaca.description"),
      link: "https://www.estaca.fr/",
      image: "https://pbs.twimg.com/profile_images/755292884308459522/ewGGfLoa_400x400.jpg",
      name: t("experiences.estaca.title"),
      start_date: "2020",
      end_date: "2021",
      location: "Laval, France"
    },
    {
      type: TimelineCardType.School,
      name: t("experiences.bac.title"),
      description: t("experiences.bac.description"),
      start_date: "2020",
      location: "Valognes, France",
      link: "https://www.lycee-valognes.fr/"
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.ktk.title"),
      description: t("experiences.ktk.description"),
      start_date: "2019",
      end_date: "2019",
      link: "https://www.ktkamp.com/",
      image: "https://images.squarespace-cdn.com/content/v1/5f402f8de96cb40645d516ba/1602983171206-LM9GX2J3VWHV3US6C2MH/ktk+logo.jpg?format=1500w",
      location: "Orlando, Florida"
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.ppl.title"),
      description: t("experiences.ppl.description"),
      start_date: "2019",
      location: "Cherbourg, France",
      link: "https://ac-cherbourg.com/"
    },
    {
      type: TimelineCardType.Work,
      name: t("experiences.qualialtis.title"),
      description: t("experiences.qualialtis.description"),
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France",
      tools: "Kubernetes, Helm, Debian",
      link: "https://www.qualialtis.com/",
      image: "/img/logo_qualialtis.png"
    },
    {
      type: TimelineCardType.Personal,
      name: t("experiences.copernicus.title"),
      description: t("experiences.copernicus.description"),
      start_date: "2018",
      end_date: "2018",
      location: "Toulouse, France"
    }
  ];
  static get experiences() {
    return this._experiences;
  }
}

const $$Astro$8 = createAstro("https://corentings.dev");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Logo;
  return renderTemplate`${maybeRenderHead()}<span class="sr-only">Corentin GS</span><svg class=" fill-current h-16 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path d="M297.31 360.7q66.63 3.67 132.57 13.74c20.83 3.18 41.57 7.41 62.3 11.19 2.43.45 6.05 3.48 3.87 6.19-1.41 1.74-6.05 1.54-7.8 1.19-64.69-12.87-130.07-20.15-195.94-22.32a.9.9 0 0 0-.83.49q-10.69 21.56-21.72 43.14-2.25 4.4-3.59 5.84c-2.43 2.6-6.88 1.04-7.68-2.4q-.29-1.28.91-4.08 9.3-21.72 18.95-43.2a.25.24 12.7 0 0-.22-.34q-37.42-1.19-74.85-.15a.85.83 11.9 0 0-.72.46q-10.53 21.34-21.4 42.88c-1.11 2.2-2.66 4.85-3.88 6.43-1.83 2.38-5.95 2.08-7.46-.49-1.19-2.02-.09-4.15.77-6.18q8.93-21.13 18.21-42.1.22-.49-.31-.47-33.23 1.27-66.25 4.73-11.49 1.2-12.44 1.41c-8.82 1.96-14.91 9.67-20.99 15.65-15.29 15.04-32.5 29.4-54.81 31.42-9.16.83-24.57-2.63-23-15.3 2.68-21.69 48.7-31.96 65.95-35.88 9.21-2.09 16.58-4.45 21.99-10.87q28.81-34.15 58.31-80.18c54.29-84.7 99.07-176.27 134.91-270.21q1.83-4.79 3.32-6.3c3.68-3.72 12.27-3.05 11.83 4-.27 4.39-2.39 11.12-4.31 16.12q-36.79 95.54-86.1 185.26c-27.83 50.64-58.74 99.64-94.28 145.26q-2.35 3.01-3.77 6.72a1.86 1.86 0 0 0 1.1 2.42q2.26.82 5.05.46 33.99-4.41 68.2-5.75a1.24 1.24 0 0 0 1.07-.71q12.27-26.59 24.88-53.01c6.84-14.32 12.76-28.9 18.96-43.44.68-1.59 2.48-5.63 4.01-6.46 2.9-1.58 7.47-1.21 8.95 2.08 1.72 3.86-1.8 7.32-.18 10.55q.21.43.68.53c2.86.58 5.64-2.41 7.59-3.35 10.03-4.8 25.53-12.43 33.41-1.76q1.24 1.68 3.45 7.38c1.44 3.72 8.7 2.23 11.68 1.46q8.07-2.1 16.26-3.79a1 .98-83.3 0 0 .7-.56q1.39-3.1 2.84-6.19c2.08-4.39 3-7.71 8.02-7.23 6.89.66 5.35 6.43 4.23 10.98a2.31 2.29-46.6 0 0 .03 1.21q.99 3.17 4.2 1.25c9.75-5.8 30.32-17.06 38.62-3.33q1.4 2.31 2.59 5.92c1.92 5.8 19.02.22 23.45-1.04q4.7-1.33 10.05-.81a1.7 1.7 0 0 1 1.52 1.48c.33 2.64-1.31 2.93-3.27 3.61q-14.99 5.24-30.04 10.33c-4.78 1.62-7.64 7.86-10.62 11.6-12.76 16.07-35.92 21.17-55.29 21.07q-.51-.01-.91.3c-4.01 3.06-7.16 9.79-9.39 14.45-4.51 9.41-9.19 18.72-13.72 28.12q-.26.55.34.58Zm-23.37-92.28q-23.22 11.53-37.03 32.48-1.02 1.54-1.04 2.95a1.29 1.29 0 0 0 1.7 1.25q7.46-2.48 14.22-6.54 5.81-3.49 26.05-16.5 2.5-1.6 3.36-3.56 2.02-4.63-.43-9.74a1.47 1.45-.4 0 0-.72-.7q-2.84-1.27-6.11.36Zm58.87 34.43c12.01-5.89 22.8-13.69 34.17-20.68q2.52-1.55 3.4-3.5c1.87-4.13 1.19-14.21-6.39-10.64q-23.66 11.14-38.03 33.39-.77 1.19-.88 2.43a1.11 1.11 0 0 0 1.34 1.19q3.47-.76 6.39-2.19Zm-11.58-26.03q.12-.28-.17-.19-10.66 3.56-21.39 7.27c-7.4 2.56-8.66 7.47-13.17 12.96-12.74 15.54-35.85 20.49-54.86 20.4q-.5-.01-.9.32c-4.8 3.94-8.83 13.11-11.33 18.39q-5.38 11.4-10.95 22.61a.23.22 12 0 0 .21.32c24.67-.59 49.15.07 73.82.93q.52.02.74-.45c12.73-27.53 26.11-54.68 38-82.56ZM72.01 386.45c-14.21.93-29.09 6.14-40.21 15.2-8.15 6.63-3.92 15.07 6.69 10.88q20.65-8.14 33.79-25.57.41-.55-.27-.51Z"></path></svg>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/Index/Logo.astro", void 0);

const $$Astro$7 = createAstro("https://corentings.dev");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Header;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class=""><nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1"><a href="/" class="-m-1.5 p-1.5 flex hoveranimation text-xl normal-case lg:text-3xl">${renderComponent($$result, "Logo", $$Logo, { "class": "w-8 h-8 mr-2" })}</a></div><div class="flex lg:hidden"><label for="my-modal-6" class="btn btn-ghost lg:hidden"><svg class="inline-block h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path></svg></label></div><div class="hidden lg:flex lg:gap-x-12"><a${addAttribute(P("/projects"), "href")} class="text-md font-semibold leading-6">Projects</a><a${addAttribute(P("/talks"), "href")} class="text-md font-semibold leading-6">Talks</a><a${addAttribute(P("/experiences"), "href")} class="text-md font-semibold leading-6">Experiences</a><a${addAttribute(P("/blog"), "href")} class="text-md font-semibold leading-6">Articles</a></div><div class="hidden lg:flex lg:flex-1 lg:justify-end"><button class="btn btn-ghost" onclick="my_modal_1.showModal()">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:settings", "class": "w-6 h-6" })}</button><dialog id="my_modal_1" class="modal"><div class="modal-box"><!-- Modal header --><div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t "><h3 class="text-lg font-semibold">
Customize your experience
</h3><form method="dialog"><button class="btn btn-ghost" data-modal-close><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg><span class="sr-only">Close modal</span></button></form></div><!-- Modal body --><form action="#" class="p-4 md:p-5"><div class="grid gap-4 mb-4 grid-cols-2"><div class="col-span-2 sm:col-span-1"><label for="language" class="block mb-2 text-sm font-medium">Language</label>${renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "id": "language", "showFlag": true, "class": "my-select-class select select-bordered select-secondary select-md w-full max-w-xs bg-base-200 text-base-content" })}</div><div class="col-span-2"><label for="theme" class="block mb-2 text-sm font-medium">Theme</label>${renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "id": "theme" })}</div></div></form></div><form method="dialog" class="modal-backdrop"><button>close</button></form></dialog></div></nav><!-- Main modal --><!-- Mobile menu, show/hide based on menu open state. --></header>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/utils/Header.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$6 = createAstro("https://corentings.dev");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<html", "", "><head><title>Corentin Giaufer Saubert\u30FBFreelance\u30FBGolang\u30FBChess Lover</title>", '<script async src="https://umami.memnix.app/script.js" data-website-id="5bf74955-9bdd-4461-8b7b-3d3aacaf94bb"><\/script><script>\n        // \u261D\uFE0F This script prevent the FART effect.\n        if (localStorage.getItem("theme") === null) {\n            document.documentElement.setAttribute("data-theme", "dark")\n        } else document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"))\n        // "theme" LocalStorage value is set by the package to remember user preference.\n        // The value is checked and applyed before rendering anything.\n    <\/script><meta name="generator"', ">", "", "", "", "</head><body><main><!-- Navbar -->", "<!-- Page Slot -->", '<input type="checkbox" id="my-modal-6" class="modal-toggle"><label for="my-modal-6" class="modal cursor-pointer modal-bottom sm:modal-middle"><label class="modal-box relative" for=""><ul class="menu w-80 overflow-y-auto bg-base-100 p-4"><li class="py-3">', '</li><li class="py-3">', "</li><li><a", ' class="text-md font-semibold leading-6">Projects</a></li><li><a', ' class="text-md font-semibold leading-6">Talks</a></li><li><a', ' class="text-md font-semibold leading-6">Experiences</a></li><li><a', ' class="text-md font-semibold leading-6">Articles</a></li></ul></label></label></main></body></html>'])), addAttribute(i18next.language, "lang"), addAttribute(createTransitionScope($$result, "smooz4hq"), "data-astro-transition-persist"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap" }), addAttribute(Astro2.generator, "content"), renderComponent($$result, "SEO", $$SEO, {}), renderComponent($$result, "HeadHrefLangs", $$HeadHrefLangs$1, {}), renderComponent($$result, "Schema", $$Schema, { "item": {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Corentin Giaufer--Saubert",
    alternateName: "CorentinGS",
    jobTitle: "Freelance Backend Developer",
    description: "I'm a 20-year-old freelance backend developer and BSC. Computer Science student with a passion for technology and open-source. Explore my projects, including Memnix, an open-source flashcard app, and discover vibrant communities I manage. Join me on an innovative journey through technology and creativity.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: ["Universit\xE9 C\xF4te d'Azur", "IU International University of Applied Sciences"]
    },
    url: "https://corentings.dev",
    image: "https://corentings.dev/favicon-32x32.png",
    sameAs: [
      "https://twitter.com/GSCorentinDev",
      "https://www.linkedin.com/in/corentin-giaufer-saubert/",
      "https://github.com/corentings",
      "https://hachyderm.io/@TheLittlePrince"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "The Kafejo",
        "url": "https://corentings.dev/discord"
      },
      {
        "@type": "Organization",
        "name": "Memnix",
        "url": "https://memnix.app"
      }
    ],
    knowsAbout: ["Golang", "Linux", "Docker", "Computer Science", "Chess", "C/C++"],
    email: "contact@corentings.dev",
    "knowsLanguage": ["French", "English"],
    "worksFor": {
      "@type": "Organization",
      "name": "CorentinGS",
      "url": "https://corentings.dev"
    }
  } }), renderHead(), renderComponent($$result, "Header", $$Header, { "lang": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ThemeSwitcher", $$ThemeSwitcher, { "class": "mx-auto w-full" }), renderComponent($$result, "LanguageSelector", $$LanguageSelector, { "showFlag": true, "class": "my-select-class select-bordered select-secondary select select-md w-full max-w-xs bg-base-200 text-base-content" }), addAttribute(P("/projects"), "href"), addAttribute(P("/talks"), "href"), addAttribute(P("/experiences"), "href"), addAttribute(P("/blog"), "href"));
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/layouts/Layout.astro", "self");

const $$Astro$5 = createAstro("https://corentings.dev");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const social = Config;
  const profile = Profile;
  const copyrightYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer items-center bg-base-200 p-4"><div class="grid-flow-col items-center"><p>
Copyright © ${copyrightYear} - All right reserved - ${profile.full_name}</p></div><div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"><a${addAttribute(`mailto:${profile.email}`, "href")} target="_blank" aria-label="mail" rel="noopener noreferrer nofollow">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:mail", "class": "hoveranimation h-6 w-6" })}</a><a${addAttribute("https://twitter.com/" + social.twitter, "href")} target="_blank" aria-label="twitter" rel="noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, { "name": "ri:twitter-x-fill", "class": "hoveranimation h-6 w-6" })}</a><a${addAttribute(social.discord, "href")} target="_blank" aria-label="discord" rel="nofollow noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, { "name": "la:discord", "class": "hoveranimation h-6 w-6" })}</a><a${addAttribute("https://github.com/" + social.github, "href")} target="_blank" aria-label="github" rel="me noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:github", "class": "hoveranimation h-6 w-6" })}</a><a${addAttribute("https://www.linkedin.com/in/" + social.linkedin, "href")} target="_blank" aria-label="linkedin" rel="me noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:linkedin", "class": "hoveranimation h-6 w-6" })}</a><a rel="me noopener noreferrer"${addAttribute(social.mastodon, "href")} aria-label="mastodon" target="_blank">${renderComponent($$result, "Icon", $$Icon, { "name": "la:mastodon", "class": "hoveranimation h-6 w-6" })}</a><a${addAttribute(social.rss, "href")} aria-label="rss" rel="noopener noreferrer">${renderComponent($$result, "Icon", $$Icon, { "name": "la:rss", "class": "hoveranimation h-6 w-6" })}</a></div></footer>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/utils/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://corentings.dev");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, description, href, date, location, cta } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="group relative flex flex-col items-start"><h3 class="text-base font-semibold tracking-tight"><div class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-base-200 opacity-0 transition group-hover:scale-100 group-hover:opacity-100  sm:-inset-x-6 sm:rounded-2xl"></div><a${addAttribute(href, "href")} target="_blank" rel="noreferrer"><span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span class="relative z-10">${title}</span></a></h3><p class="relative z-10 order-first mb-3 flex items-center text-sm text-base-content/60 pl-3.5"><span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true"><span class="h-4 w-0.5 rounded-full bg-base-content/60"></span></span>${location}${"\u30FB"}${date}</p><p class="relative z-10 mt-2 text-sm text-base-content/60">${description}</p><div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-primary">${cta != null ? renderTemplate`<span>${cta}</span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>` : null}</div></article>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/talks/Card.astro", void 0);

const $$Astro$3 = createAstro("https://corentings.dev");
const $$Talks$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Talks$3;
  const talks = [
    {
      title: t("talks.uca_1.title"),
      date: "2023",
      location: "Universite Nice Sophia Antipolis",
      href: "https://gdsc.community.dev/events/details/developer-student-clubs-cote-dazur-university-presents-introduction-aux-microservices-avec-go/",
      description: t("talks.uca_1.description"),
      cta: t("talks.learn_more")
    },
    {
      title: t("talks.demi_siecle.title"),
      date: "2023",
      location: "Demi-Si\xE8cle",
      description: t("talks.demi_siecle.description")
    }
  ];
  const podcasts = [{
    title: t("talks.avocado_1.title"),
    date: "2023",
    location: "Avocado Growth : Portrait tech",
    description: t("talks.avocado_1.description"),
    cta: t("talks.coming_soon")
  }];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(t("talks.talks"), "aria-labelledby")} class="md:border-l md:border-secondary-100 md:pl-6  mt-20 py-10"><div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"><h2 class="text-sm font-semibold">${t("talks.talks")}</h2><div class="md:col-span-3"><div class="space-y-16">${talks.map((talk) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...talk })}`)}</div></div></div></div><div${addAttribute(t("talks.podcasts"), "aria-labelledby")} class="md:border-l md:border-secondary-100 md:pl-6  mt-20 py-10"><div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4"><h2 class="text-sm font-semibold">${t("talks.podcasts")}</h2><div class="md:col-span-3"><div class="space-y-16">${podcasts.map((talk) => renderTemplate`${renderComponent($$result, "Card", $$Card, { ...talk })}`)}</div></div></div></div>`;
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/components/talks/Talks.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://corentings.dev");
const $$Talks$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Talks$2;
  changeLanguage("en");
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<script type="text/javascript">
    document.addEventListener(
        'astro:page-load',
        () => {
            const backToTop = () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            };

            // This only runs once.
            mybutton = document.getElementById('btn-back-to-top');
            mybutton.addEventListener('click', backToTop);

            // Hide button when not needed
            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.classList.remove('hidden');
                } else {
                    mybutton.classList.add('hidden');
                }
            };
        },
    );

<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "CorentinGS" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hoveranimation btn btn-accent btn-sm fixed bottom-12 right-5 z-50 hidden" id="btn-back-to-top"${addAttribute(createTransitionScope($$result2, "s7dmxdpk"), "data-astro-transition-persist")}>${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-up", "class": "h-6 w-6" })}</div><section class="lg:py-15 py-6 md:py-10 mx-auto w-full max-w-7xl lg:px-8"><div class="relative px-4 sm:px-8 lg:px-12"><div class="relative flex flex-col"><h2 class="text-2xl font-bold md:text-3xl lg:text-5xl">${t("talks.title")}</h2><p class="mt-8 text-xl">${t("talks.description")}
🎙️✨
</p></div></div></section><section class="mx-auto w-full max-w-7xl lg:px-8 pb-10"><div class="relative px-4 sm:px-8 lg:px-12">${renderComponent($$result2, "Talks", $$Talks$3, {})}</div></section>${renderComponent($$result2, "Footer", $$Footer, {})}` }));
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/talks.astro", "self");

const $$file$2 = "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/talks.astro";
const $$url$2 = "/talks";

const talks$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
      __proto__: null,
      default: $$Talks$2,
      file: $$file$2,
      url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://corentings.dev");
const $$Talks$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Talks$1;
  changeLanguage("de");
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<script type="text/javascript">
    document.addEventListener(
        'astro:page-load',
        () => {
            const backToTop = () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            };

            // This only runs once.
            mybutton = document.getElementById('btn-back-to-top');
            mybutton.addEventListener('click', backToTop);

            // Hide button when not needed
            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.classList.remove('hidden');
                } else {
                    mybutton.classList.add('hidden');
                }
            };
        },
    );

<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "CorentinGS" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hoveranimation btn btn-accent btn-sm fixed bottom-12 right-5 z-50 hidden" id="btn-back-to-top"${addAttribute(createTransitionScope($$result2, "vq7edzkc"), "data-astro-transition-persist")}>${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-up", "class": "h-6 w-6" })}</div><section class="lg:py-15 py-6 md:py-10 mx-auto w-full max-w-7xl lg:px-8"><div class="relative px-4 sm:px-8 lg:px-12"><div class="relative flex flex-col"><h2 class="text-2xl font-bold md:text-3xl lg:text-5xl">${t("talks.title")}</h2><p class="mt-8 text-xl">${t("talks.description")}
🎙️✨
</p></div></div></section><section class="mx-auto w-full max-w-7xl lg:px-8 pb-10"><div class="relative px-4 sm:px-8 lg:px-12">${renderComponent($$result2, "Talks", $$Talks$3, {})}</div></section>${renderComponent($$result2, "Footer", $$Footer, {})}` }));
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/talks.astro", "self");

const $$file$1 = "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/talks.astro";
const $$url$1 = "/de/talks";

const talks$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
      __proto__: null,
      default: $$Talks$1,
      file: $$file$1,
      url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://corentings.dev");
const $$Talks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Talks;
  changeLanguage("fr");
  return renderTemplate(_a || (_a = __template(["", `<script type="text/javascript">
    document.addEventListener(
        'astro:page-load',
        () => {
            const backToTop = () => {
                window.scrollTo({top: 0, behavior: 'smooth'});
            };

            // This only runs once.
            mybutton = document.getElementById('btn-back-to-top');
            mybutton.addEventListener('click', backToTop);

            // Hide button when not needed
            window.onscroll = function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    mybutton.classList.remove('hidden');
                } else {
                    mybutton.classList.add('hidden');
                }
            };
        },
    );

<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "CorentinGS" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="hoveranimation btn btn-accent btn-sm fixed bottom-12 right-5 z-50 hidden" id="btn-back-to-top"${addAttribute(createTransitionScope($$result2, "grdnk7di"), "data-astro-transition-persist")}>${renderComponent($$result2, "Icon", $$Icon, { "name": "lucide:arrow-up", "class": "h-6 w-6" })}</div><section class="lg:py-15 py-6 md:py-10 mx-auto w-full max-w-7xl lg:px-8"><div class="relative px-4 sm:px-8 lg:px-12"><div class="relative flex flex-col"><h2 class="text-2xl font-bold md:text-3xl lg:text-5xl">${t("talks.title")}</h2><p class="mt-8 text-xl">${t("talks.description")}
🎙️✨
</p></div></div></section><section class="mx-auto w-full max-w-7xl lg:px-8 pb-10"><div class="relative px-4 sm:px-8 lg:px-12">${renderComponent($$result2, "Talks", $$Talks$3, {})}</div></section>${renderComponent($$result2, "Footer", $$Footer, {})}` }));
}, "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/talks.astro", "self");

const $$file = "/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/talks.astro";
const $$url = "/fr/talks";

const talks = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
      __proto__: null,
      default: $$Talks,
      file: $$file,
      url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Icon as $, Config as C, Profile as P, TimelineCardType as T, $$Trans as a, $$Footer as b, $$Layout as c, P as d, $$LanguageSelector as e, $$ThemeSwitcher as f, $$ViewTransitions as g, talks$1 as h, imgAvatar as i, talks as j, talks$2 as t };
