import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro__UYtZeqd.mjs';
import 'clsx';
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
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/blog","isIndex":true,"type":"page","pattern":"^\\/de\\/blog\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/blog/index.astro","pathname":"/de/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/discord","isIndex":false,"type":"page","pattern":"^\\/de\\/discord\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/discord.astro","pathname":"/de/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/experiences","isIndex":false,"type":"page","pattern":"^\\/de\\/experiences\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/experiences.astro","pathname":"/de/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/projects","isIndex":false,"type":"page","pattern":"^\\/de\\/projects\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/projects.astro","pathname":"/de/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/talks","isIndex":false,"type":"page","pattern":"^\\/de\\/talks\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/talks.astro","pathname":"/de/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de","isIndex":true,"type":"page","pattern":"^\\/de\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/index.astro","pathname":"/de","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/discord","isIndex":false,"type":"page","pattern":"^\\/discord\\/?$","segments":[[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discord.astro","pathname":"/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiences","isIndex":false,"type":"page","pattern":"^\\/experiences\\/?$","segments":[[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiences.astro","pathname":"/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/blog","isIndex":true,"type":"page","pattern":"^\\/fr\\/blog\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/blog/index.astro","pathname":"/fr/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/discord","isIndex":false,"type":"page","pattern":"^\\/fr\\/discord\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/discord.astro","pathname":"/fr/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/experiences","isIndex":false,"type":"page","pattern":"^\\/fr\\/experiences\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/experiences.astro","pathname":"/fr/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/projects","isIndex":false,"type":"page","pattern":"^\\/fr\\/projects\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/projects.astro","pathname":"/fr/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/talks","isIndex":false,"type":"page","pattern":"^\\/fr\\/talks\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/talks.astro","pathname":"/fr/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","isIndex":true,"type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/talks","isIndex":false,"type":"page","pattern":"^\\/talks\\/?$","segments":[[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/talks.astro","pathname":"/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.6nTkAbsu.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.7.1_@types+node@20.11.30_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Ba1O_4gv.js"},{"type":"external","value":"/_astro/page.6nTkAbsu.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DZQV-Txy.css"},{"type":"external","src":"/_astro/_slug_.CUS6wPbr.css"}],"routeData":{"route":"/de/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/de\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/de/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Ba1O_4gv.js"},{"type":"external","value":"/_astro/page.6nTkAbsu.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DZQV-Txy.css"},{"type":"external","src":"/_astro/_slug_.CUS6wPbr.css"}],"routeData":{"route":"/fr/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/fr\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/fr/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.6nTkAbsu.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://corentings.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/Write.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/Category.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/ListCategories.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/de/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/category/[category]/[page].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/fr/category/[category]/[page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/ListPosts.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/ListRelatedPosts.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/TabletOfContentsHeading.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/components/blog/TableOfContents.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/de/projects.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/de/talks.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/fr/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/fr/projects.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/fr/talks.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/pages/talks.astro",{"propagation":"in-tree","containsHead":true}],["/workspaces/corentings.github.io/src/layouts/BlogPostLayout.astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/de/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/de/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["/workspaces/corentings.github.io/src/pages/fr/discord.astro",{"propagation":"none","containsHead":true}],["\u0000@astro-page:src/pages/fr/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/talks@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.7.1_@types+node@20.11.30_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CmHq-qFI.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_-DttFFS8.mjs","\u0000@astrojs-manifest":"manifest_DwqbMEfs.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.7.1_@types+node@20.11.30_typescript@5.3.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_QIGWnlEY.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__BU1JBY3L.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_xEt1GoT3.mjs","\u0000@astro-page:src/pages/category/[category]/[page]@_@astro":"chunks/_page__BDjbUGum.mjs","\u0000@astro-page:src/pages/de/blog/[slug]@_@astro":"chunks/_slug__eE_WeUv4.mjs","\u0000@astro-page:src/pages/de/blog/index@_@astro":"chunks/index_BjOsKFCT.mjs","\u0000@astro-page:src/pages/de/blog/[...page]@_@astro":"chunks/_.._Brtdd-7w.mjs","\u0000@astro-page:src/pages/de/category/[category]/[page]@_@astro":"chunks/_page__LnbVrEHz.mjs","\u0000@astro-page:src/pages/de/discord@_@astro":"chunks/discord_C4qr58qL.mjs","\u0000@astro-page:src/pages/de/experiences@_@astro":"chunks/experiences_COJYx2Ol.mjs","\u0000@astro-page:src/pages/de/projects@_@astro":"chunks/projects_BJvqFtto.mjs","\u0000@astro-page:src/pages/de/talks@_@astro":"chunks/talks_uRUDCbEc.mjs","\u0000@astro-page:src/pages/de/index@_@astro":"chunks/index_CIyUz_Us.mjs","\u0000@astro-page:src/pages/discord@_@astro":"chunks/discord_BRsPM1KP.mjs","\u0000@astro-page:src/pages/experiences@_@astro":"chunks/experiences_dJyiWOAf.mjs","\u0000@astro-page:src/pages/fr/blog/[slug]@_@astro":"chunks/_slug__DEZ8UcCz.mjs","\u0000@astro-page:src/pages/fr/blog/index@_@astro":"chunks/index_B9o5bToO.mjs","\u0000@astro-page:src/pages/fr/blog/[...page]@_@astro":"chunks/_.._CKlZ8_wx.mjs","\u0000@astro-page:src/pages/fr/category/[category]/[page]@_@astro":"chunks/_page__BbHgGJlO.mjs","\u0000@astro-page:src/pages/fr/discord@_@astro":"chunks/discord_BWdV3CQ7.mjs","\u0000@astro-page:src/pages/fr/experiences@_@astro":"chunks/experiences_Cl9z2VXA.mjs","\u0000@astro-page:src/pages/fr/projects@_@astro":"chunks/projects_B1oZK8Qc.mjs","\u0000@astro-page:src/pages/fr/talks@_@astro":"chunks/talks_B15OJsIg.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"chunks/index_BboQqU7V.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_VVBUWM_Q.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_z6F-0Xkl.mjs","\u0000@astro-page:src/pages/talks@_@astro":"chunks/talks_8OYPDz0y.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DNdPDAPY.mjs","/workspaces/corentings.github.io/src/content/blog/Crafting-the-chiquier-Niois-Website.mdx?astroContentCollectionEntry=true":"chunks/Crafting-the-chiquier-Niois-Website_DvUMjWHA.mjs","/workspaces/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx?astroContentCollectionEntry=true":"chunks/dnf5-step-by-step_BOtLx0YT.mjs","/workspaces/corentings.github.io/src/content/blog/docker-and-go.mdx?astroContentCollectionEntry=true":"chunks/docker-and-go_BZqTSNp2.mjs","/workspaces/corentings.github.io/src/content/blog/mergesort-parallel.mdx?astroContentCollectionEntry=true":"chunks/mergesort-parallel_DoXG89vx.mjs","/workspaces/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx?astroContentCollectionEntry=true":"chunks/optimizing-goroutines-sum-of-squares_DsIsRNqR.mjs","/workspaces/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx?astroContentCollectionEntry=true":"chunks/simple-go-vs-goroutines_DeHK3Z_I.mjs","/workspaces/corentings.github.io/src/content/blog/Crafting-the-chiquier-Niois-Website.mdx?astroPropagatedAssets":"chunks/Crafting-the-chiquier-Niois-Website_CJFDdDLE.mjs","/workspaces/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx?astroPropagatedAssets":"chunks/dnf5-step-by-step_C6ZaqLmM.mjs","/workspaces/corentings.github.io/src/content/blog/docker-and-go.mdx?astroPropagatedAssets":"chunks/docker-and-go_BETyvUI2.mjs","/workspaces/corentings.github.io/src/content/blog/mergesort-parallel.mdx?astroPropagatedAssets":"chunks/mergesort-parallel_-2m8CYXV.mjs","/workspaces/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx?astroPropagatedAssets":"chunks/optimizing-goroutines-sum-of-squares_Djo7QloD.mjs","/workspaces/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx?astroPropagatedAssets":"chunks/simple-go-vs-goroutines_eYgM_joH.mjs","/workspaces/corentings.github.io/src/content/blog/Crafting-the-chiquier-Niois-Website.mdx":"chunks/Crafting-the-chiquier-Niois-Website_BnMHBzWG.mjs","/workspaces/corentings.github.io/src/content/blog/dnf5-step-by-step.mdx":"chunks/dnf5-step-by-step_CzkyMcpW.mjs","/workspaces/corentings.github.io/src/content/blog/docker-and-go.mdx":"chunks/docker-and-go_iqZDnlLE.mjs","/workspaces/corentings.github.io/src/content/blog/mergesort-parallel.mdx":"chunks/mergesort-parallel_By20xVWF.mjs","/workspaces/corentings.github.io/src/content/blog/optimizing-goroutines-sum-of-squares.mdx":"chunks/optimizing-goroutines-sum-of-squares_GqgmXQyQ.mjs","/workspaces/corentings.github.io/src/content/blog/simple-go-vs-goroutines.mdx":"chunks/simple-go-vs-goroutines_CikTriyk.mjs","astro:scripts/page.js":"_astro/page.6nTkAbsu.js","/astro/hoisted.js?q=0":"_astro/hoisted.CEsT5Ip7.js","/astro/hoisted.js?q=1":"_astro/hoisted.Ba1O_4gv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/docker-and-go.DDgqQ7PR.webp","/_astro/photo-1614605008553-d98daabfa5b6.DPLA9vuk.jpeg","/_astro/dnf5-step-by-step.StzaIbFk.webp","/_astro/simple-go-vs-goroutines.BQLadO_l.webp","/_astro/mergesort-parallel.Bc0vtqZo.webp","/_astro/optimizing-goroutines-sum-of-squares.BtZ1W1eJ.webp","/_astro/moutmout.BuQJDhDn.png","/_astro/edt-uca.BAT8MrJ5.png","/_astro/gauntlet.BB1nC-tL.png","/_astro/chessbet.BOSa6OhM.png","/_astro/kitsu.DsNCqJKW.png","/_astro/en.OZQMVISK.png","/_astro/Stouuf.BCh_wV1c.png","/_astro/onetoo.Di0SzPP7.jpg","/_astro/logo_tfd.C9M_r-PG.png","/_astro/petit_prince.BSQAmL05.png","/_astro/MF_STOUUF.CYNt-mkr.png","/_astro/talk1.BdQayUFY.jpg","/_astro/justin.0MgqFU9K.jpeg","/_astro/stouuf2.Dc4WAtwJ.webp","/_astro/iu_logo.T00gDkDc.png","/_astro/educative.DFnAshOR.webp","/_astro/hackerrank.CMToSmjJ.png","/_astro/logo_qualialtis.CkfEeX0o.png","/_astro/estaca.Bmx8fU2N.jpg","/_astro/uca.DBDOvl-D.png","/_astro/chesscom_logo.B0djrmrB.png","/_astro/ffe_logo.9b6ewcWt.png","/_astro/logo_en.DgF0w6zp.png","/_astro/ktk.tdUBE7yx.jpg","/_astro/docker_infographie.DHAVvVnE.jpg","/_astro/avatar.Dv88nVY3.webp","/_astro/syne-latin-400-normal.DB4NJALv.woff2","/_astro/syne-latin-ext-400-normal.PGGusRSq.woff2","/_astro/nunito-cyrillic-400-normal.CMsAdKHI.woff2","/_astro/syne-greek-400-normal.BX_XEq77.woff2","/_astro/nunito-cyrillic-ext-400-normal.CiC2fk4J.woff2","/_astro/nunito-vietnamese-400-normal.BowtMkz5.woff2","/_astro/nunito-latin-ext-400-normal.Z5e_fnxp.woff2","/_astro/nunito-latin-400-normal.CA33qtOw.woff2","/_astro/syne-latin-400-normal.dkZrcp6X.woff","/_astro/syne-latin-ext-400-normal.Dh_9VyT6.woff","/_astro/nunito-cyrillic-400-normal.hvcJLrVW.woff","/_astro/syne-greek-400-normal.CT5yBDpa.woff","/_astro/nunito-cyrillic-ext-400-normal.CUrc3HHF.woff","/_astro/nunito-vietnamese-400-normal.BnU0WwCs.woff","/_astro/nunito-latin-ext-400-normal.DZILPSLY.woff","/_astro/nunito-latin-400-normal.nExtXIcZ.woff","/_astro/_slug_.CUS6wPbr.css","/_astro/_slug_.DZQV-Txy.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/google4db6b9a279eaaeb6.html","/mstile-150x150.png","/open-graph.jpeg","/robots.txt","/safari-pinned-tab.svg","/sign.svg","/site.webmanifest","/_astro/hoisted.Ba1O_4gv.js","/_astro/hoisted.CEsT5Ip7.js","/_astro/index.DqH004Bo.js","/_astro/page.6nTkAbsu.js","/fonts/Lufga-Bold.woff2","/fonts/Lufga-Regular.woff2","/locales/de/translation.json","/locales/en/translation.json","/locales/fr/translation.json","/_astro/page.6nTkAbsu.js","/blog/index.html","/de/blog/index.html","/de/discord/index.html","/de/experiences/index.html","/de/projects/index.html","/de/talks/index.html","/de/index.html","/discord/index.html","/experiences/index.html","/fr/blog/index.html","/fr/discord/index.html","/fr/experiences/index.html","/fr/projects/index.html","/fr/talks/index.html","/fr/index.html","/projects/index.html","/talks/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
