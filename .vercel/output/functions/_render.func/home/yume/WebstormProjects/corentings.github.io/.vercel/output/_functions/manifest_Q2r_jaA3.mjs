import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import 'string-width';
import './chunks/astro_7zUASvUU.mjs';
import 'clsx';
import 'cssesc';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/blog","isIndex":true,"type":"page","pattern":"^\\/de\\/blog\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/blog/index.astro","pathname":"/de/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de","isIndex":true,"type":"page","pattern":"^\\/de\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/index.astro","pathname":"/de","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/discord","isIndex":false,"type":"page","pattern":"^\\/de\\/discord\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/discord.astro","pathname":"/de/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/experiences","isIndex":false,"type":"page","pattern":"^\\/de\\/experiences\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/experiences.astro","pathname":"/de/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/projects","isIndex":false,"type":"page","pattern":"^\\/de\\/projects\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/projects.astro","pathname":"/de/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/talks","isIndex":false,"type":"page","pattern":"^\\/de\\/talks\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/talks.astro","pathname":"/de/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/discord","isIndex":false,"type":"page","pattern":"^\\/discord\\/?$","segments":[[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discord.astro","pathname":"/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiences","isIndex":false,"type":"page","pattern":"^\\/experiences\\/?$","segments":[[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiences.astro","pathname":"/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/blog","isIndex":true,"type":"page","pattern":"^\\/fr\\/blog\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/blog/index.astro","pathname":"/fr/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/discord","isIndex":false,"type":"page","pattern":"^\\/fr\\/discord\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/discord.astro","pathname":"/fr/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/experiences","isIndex":false,"type":"page","pattern":"^\\/fr\\/experiences\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/experiences.astro","pathname":"/fr/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/projects","isIndex":false,"type":"page","pattern":"^\\/fr\\/projects\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/projects.astro","pathname":"/fr/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/talks","isIndex":false,"type":"page","pattern":"^\\/fr\\/talks\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/talks.astro","pathname":"/fr/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/talks","isIndex":false,"type":"page","pattern":"^\\/talks\\/?$","segments":[[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/talks.astro","pathname":"/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.nDAPtdgv.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.UMDnjw3f.js"},{"type":"external","value":"/_astro/page.nDAPtdgv.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Fp4q3cIN.css"},{"type":"external","src":"/_astro/_slug_.Cfj9ATC3.css"}],"routeData":{"route":"/de/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/de\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/de/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.UMDnjw3f.js"},{"type":"external","value":"/_astro/page.nDAPtdgv.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.Fp4q3cIN.css"},{"type":"external","src":"/_astro/_slug_.Cfj9ATC3.css"}],"routeData":{"route":"/fr/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/fr\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/fr/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.nDAPtdgv.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://corentings.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/yume/WebstormProjects/corentings.github.io/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/talks.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/talks.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/talks.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/Write.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/Category.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/ListCategories.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/ListPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/ListRelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/TabletOfContentsHeading.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/components/blog/TableOfContents.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/layouts/BlogPostLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/de/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/de/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/yume/WebstormProjects/corentings.github.io/src/pages/fr/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/fr/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/talks@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_yVARDPWw.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_kBdAiVbV.mjs","\u0000@astrojs-manifest":"manifest_Q2r_jaA3.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_J8QDqJ1B.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_AqDbine4.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__5ra_dPJZ.mjs","\u0000@astro-page:src/pages/category/[category]/[page]@_@astro":"chunks/_page__ZZwdxBa8.mjs","\u0000@astro-page:src/pages/de/blog/index@_@astro":"chunks/index_bLlYUvkL.mjs","\u0000@astro-page:src/pages/de/blog/[slug]@_@astro":"chunks/_slug__pzYeulVV.mjs","\u0000@astro-page:src/pages/de/blog/[...page]@_@astro":"chunks/_.._nrUijXfu.mjs","\u0000@astro-page:src/pages/de/category/[category]/[page]@_@astro":"chunks/_page__Airi945t.mjs","\u0000@astro-page:src/pages/de/index@_@astro":"chunks/index_WUe7d1lK.mjs","\u0000@astro-page:src/pages/de/discord@_@astro":"chunks/discord_t6inODen.mjs","\u0000@astro-page:src/pages/de/experiences@_@astro":"chunks/experiences_bK58ZdD1.mjs","\u0000@astro-page:src/pages/de/projects@_@astro":"chunks/projects_9oatyOGE.mjs","\u0000@astro-page:src/pages/de/talks@_@astro":"chunks/talks_1NSIzxsh.mjs","\u0000@astro-page:src/pages/discord@_@astro":"chunks/discord_n1VMksNw.mjs","\u0000@astro-page:src/pages/experiences@_@astro":"chunks/experiences_urLk-aKt.mjs","\u0000@astro-page:src/pages/fr/blog/index@_@astro":"chunks/index_xBVbTME7.mjs","\u0000@astro-page:src/pages/fr/blog/[slug]@_@astro":"chunks/_slug__Y08Ljfs3.mjs","\u0000@astro-page:src/pages/fr/blog/[...page]@_@astro":"chunks/_.._oiylyf_q.mjs","\u0000@astro-page:src/pages/fr/category/[category]/[page]@_@astro":"chunks/_page__fOSUryJf.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"chunks/index_N9hwlZNX.mjs","\u0000@astro-page:src/pages/fr/discord@_@astro":"chunks/discord_JmdsKLUt.mjs","\u0000@astro-page:src/pages/fr/experiences@_@astro":"chunks/experiences_gjMnyVDv.mjs","\u0000@astro-page:src/pages/fr/projects@_@astro":"chunks/projects_1K24ptWX.mjs","\u0000@astro-page:src/pages/fr/talks@_@astro":"chunks/talks_OLwJwlPc.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_6pWVWB6d.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_T5HK17EJ.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_ISqyQNfk.mjs","\u0000@astro-page:src/pages/talks@_@astro":"chunks/talks_hWU3NVB7.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx?astroContentCollectionEntry=true":"chunks/dnf5-step-by-step_pxWaOInN.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/docker-and-go.mdx?astroContentCollectionEntry=true":"chunks/docker-and-go_6N35N91q.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/mergesort-parallel.mdx?astroContentCollectionEntry=true":"chunks/mergesort-parallel_ZEju7Uv-.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx?astroContentCollectionEntry=true":"chunks/optimizing-goroutines-sum-of-squares_bwJpbAM8.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx?astroContentCollectionEntry=true":"chunks/simple-go-vs-goroutines_QWrYY-TH.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx?astroPropagatedAssets":"chunks/dnf5-step-by-step_8wAEBE6w.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/docker-and-go.mdx?astroPropagatedAssets":"chunks/docker-and-go_9JmhQgMO.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/mergesort-parallel.mdx?astroPropagatedAssets":"chunks/mergesort-parallel_Z_-bJab9.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx?astroPropagatedAssets":"chunks/optimizing-goroutines-sum-of-squares_n--i7ysd.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx?astroPropagatedAssets":"chunks/simple-go-vs-goroutines_u1o3xi76.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx":"chunks/dnf5-step-by-step_sgLxjS-e.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/docker-and-go.mdx":"chunks/docker-and-go_9vldt1aa.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/mergesort-parallel.mdx":"chunks/mergesort-parallel_NmaHWDrh.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx":"chunks/optimizing-goroutines-sum-of-squares_pueIhvpE.mjs","/home/yume/WebstormProjects/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx":"chunks/simple-go-vs-goroutines_T6mtPjqo.mjs","astro:scripts/page.js":"_astro/page.nDAPtdgv.js","/astro/hoisted.js?q=0":"_astro/hoisted.dcZKRcM3.js","/astro/hoisted.js?q=1":"_astro/hoisted.UMDnjw3f.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/moutmout.bkCQ4Q5x.png","/_astro/gauntlet.QdZwvrS_.png","/_astro/edt-uca.QE_DKyeY.png","/_astro/Stouuf.Qof8FdXM.png","/_astro/kitsu.7DQqiSlq.png","/_astro/petit_prince.UkAJi9Ob.png","/_astro/logo_tfd.vTP6_jxu.png","/_astro/MF_STOUUF.mDbfppK4.png","/_astro/onetoo.4tEszz-2.jpg","/_astro/iu_logo.E9NIA5A3.png","/_astro/logo_qualialtis.pHxHl9KM.png","/_astro/educative.xZwLITkZ.webp","/_astro/hackerrank.jE6EpoyZ.png","/_astro/uca.wQzr5fg6.png","/_astro/estaca.ZsfH1Njf.jpg","/_astro/ktk.LXVARO8s.jpg","/_astro/chesscom_logo.dHY65qwR.png","/_astro/ffe_logo.PW-nsHFr.png","/_astro/talk1.XUGslBWD.jpg","/_astro/stouuf2.3OFgLcCR.webp","/_astro/justin.NDIKhVPS.jpeg","/_astro/avatar.7_PJ1WN5.webp","/_astro/dnf5-step-by-step.Erc2iGxZ.webp","/_astro/docker-and-go.w4KkOz0f.webp","/_astro/mergesort-parallel.XNL7amaF.webp","/_astro/optimizing-goroutines-sum-of-squares.bWdVtXiZ.webp","/_astro/syne-greek-400-normal.V_1xKu-0.woff2","/_astro/syne-latin-ext-400-normal.DxhrrEUq.woff2","/_astro/syne-latin-400-normal.weDSQC77.woff2","/_astro/nunito-cyrillic-ext-400-normal.ogtn5OCU.woff2","/_astro/nunito-cyrillic-400-normal.jLAHShyO.woff2","/_astro/nunito-vietnamese-400-normal.aMLTJM-e.woff2","/_astro/nunito-latin-ext-400-normal.GeXv358a.woff2","/_astro/nunito-latin-400-normal.gN96rTsK.woff2","/_astro/simple-go-vs-goroutines.UC2nTv5T.webp","/_astro/syne-greek-400-normal.k-cgQ6Wq.woff","/_astro/syne-latin-ext-400-normal.4f_Vck-v.woff","/_astro/syne-latin-400-normal.HZGa3Kel.woff","/_astro/nunito-cyrillic-ext-400-normal.lK3NxxxU.woff","/_astro/nunito-cyrillic-400-normal.Ib3CS61V.woff","/_astro/nunito-vietnamese-400-normal.Z1NFsArM.woff","/_astro/nunito-latin-ext-400-normal.2SCz0i2H.woff","/_astro/nunito-latin-400-normal.JxMbVyHG.woff","/_astro/docker_infographie.xwFb1ZxH.jpg","/_astro/_slug_.Fp4q3cIN.css","/_astro/_slug_.Cfj9ATC3.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/google4db6b9a279eaaeb6.html","/mstile-150x150.png","/open-graph.jpeg","/robots.txt","/rss.xml","/safari-pinned-tab.svg","/sign.svg","/site.webmanifest","/vercel.json","/_astro/hoisted.UMDnjw3f.js","/_astro/hoisted.dcZKRcM3.js","/_astro/index.ZzraLCNQ.js","/_astro/page.nDAPtdgv.js","/admin/index.html","/fonts/Lufga-Bold.woff2","/fonts/Lufga-Regular.woff2","/admin/assets/SchemaReference.es-f3dae08e.js","/admin/assets/brace-fold.es-f2e3735d.js","/admin/assets/closebrackets.es-e969742b.js","/admin/assets/codemirror.es-52e8b92d.js","/admin/assets/codemirror.es2-5884f31a.js","/admin/assets/comment.es-39699bae.js","/admin/assets/dialog.es-dffe62e7.js","/admin/assets/dialog.es2-02b3b4e7.js","/admin/assets/foldgutter.es-b6cee46a.js","/admin/assets/forEachState.es-b2033c2b.js","/admin/assets/hint.es-1be428db.js","/admin/assets/hint.es2-1d751acc.js","/admin/assets/index-4c2a5f0c.js","/admin/assets/index-89dc876d.js","/admin/assets/index-ccfb8d68.css","/admin/assets/info-addon.es-c9b2027b.js","/admin/assets/info.es-72947530.js","/admin/assets/javascript.es-3c6957c5.js","/admin/assets/jump-to-line.es-d901ea33.js","/admin/assets/jump.es-c2465e5e.js","/admin/assets/lint.es-fe7166bb.js","/admin/assets/lint.es2-da1b22d1.js","/admin/assets/lint.es3-cd820215.js","/admin/assets/matchbrackets.es-97d2e827.js","/admin/assets/matchbrackets.es2-f53f57e6.js","/admin/assets/mode-indent.es-057a4f6a.js","/admin/assets/mode.es-bbc8d01f.js","/admin/assets/mode.es2-10f8f9b6.js","/admin/assets/mode.es3-567b00b9.js","/admin/assets/search.es-1c15f5ea.js","/admin/assets/searchcursor.es-b1a352a2.js","/admin/assets/searchcursor.es2-cbfe7cae.js","/admin/assets/show-hint.es-b981493e.js","/admin/assets/sublime.es-e2a3eb60.js","/locales/de/translation.json","/locales/en/translation.json","/locales/fr/translation.json","/_astro/page.nDAPtdgv.js","/blog/index.html","/de/blog/index.html","/de/index.html","/de/discord/index.html","/de/experiences/index.html","/de/projects/index.html","/de/talks/index.html","/discord/index.html","/experiences/index.html","/fr/blog/index.html","/fr/index.html","/fr/discord/index.html","/fr/experiences/index.html","/fr/projects/index.html","/fr/talks/index.html","/index.html","/projects/index.html","/talks/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
