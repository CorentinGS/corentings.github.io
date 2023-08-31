import { serialize, parse } from 'cookie';
import { bold } from 'kleur/colors';
import 'string-width';
import { A as AstroError, y as ResponseSentError, D as MiddlewareNoDataOrNextCalled, H as MiddlewareNotAResponse, J as ASTRO_VERSION, C as ClientAddressNotAvailable, S as StaticClientAddressNotAvailable, K as renderEndpoint, t as LocalsNotAnObject } from './chunks/astro.7e698fde.mjs';
import 'clsx';
import mime from 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol = Symbol.for("astro.responseSent");
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  #request;
  #requestValues;
  #outgoing;
  constructor(request) {
    this.#request = request;
    this.#requestValues = null;
    this.#outgoing = null;
  }
  /**
   * Astro.cookies.delete(key) is used to delete a cookie. Using this method will result
   * in a Set-Cookie header added to the response.
   * @param key The cookie to delete
   * @param options Options related to this deletion, such as the path of the cookie.
   */
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options?.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options?.path) {
      serializeOptions.path = options.path;
    }
    this.#ensureOutgoingMap().set(key, [
      DELETED_VALUE,
      serialize(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  /**
   * Astro.cookies.get(key) is used to get a cookie value. The cookie value is read from the
   * request. If you have set a cookie via Astro.cookies.set(key, value), the value will be taken
   * from that set call, overriding any values already part of the request.
   * @param key The cookie to get.
   * @returns An object containing the cookie value as well as convenience methods for converting its value.
   */
  get(key) {
    if (this.#outgoing?.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return void 0;
      }
    }
    const values = this.#ensureParsed();
    if (key in values) {
      const value = values[key];
      return new AstroCookie(value);
    }
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    if (this.#outgoing?.has(key)) {
      let [, , isSetValue] = this.#outgoing.get(key);
      return isSetValue;
    }
    const values = this.#ensureParsed();
    return !!values[key];
  }
  /**
   * Astro.cookies.set(key, value) is used to set a cookie's value. If provided
   * an object it will be stringified via JSON.stringify(value). Additionally you
   * can provide options customizing how this cookie will be set, such as setting httpOnly
   * in order to prevent the cookie from being read in client-side JavaScript.
   * @param key The name of the cookie to set.
   * @param value A value, either a string or other primitive or an object.
   * @param options Options for the cookie, such as the path and security settings.
   */
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    this.#ensureOutgoingMap().set(key, [
      serializedValue,
      serialize(key, serializedValue, serializeOptions),
      true
    ]);
    if (this.#request[responseSentSymbol]) {
      throw new AstroError({
        ...ResponseSentError
      });
    }
  }
  /**
   * Astro.cookies.header() returns an iterator for the cookies that have previously
   * been set by either Astro.cookies.set() or Astro.cookies.delete().
   * This method is primarily used by adapters to set the header on outgoing responses.
   * @returns
   */
  *headers() {
    if (this.#outgoing == null)
      return;
    for (const [, value] of this.#outgoing) {
      yield value[1];
    }
  }
  #ensureParsed() {
    if (!this.#requestValues) {
      this.#parse();
    }
    if (!this.#requestValues) {
      this.#requestValues = {};
    }
    return this.#requestValues;
  }
  #ensureOutgoingMap() {
    if (!this.#outgoing) {
      this.#outgoing = /* @__PURE__ */ new Map();
    }
    return this.#outgoing;
  }
  #parse() {
    const raw = this.#request.headers.get("cookie");
    if (!raw) {
      return;
    }
    this.#requestValues = parse(raw);
  }
}

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachCookiesToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return [];
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
  return [];
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function info(opts, label, message) {
  return log(opts, "info", label, message);
}
function warn(opts, label, message) {
  return log(opts, "warn", label, message);
}
function error(opts, label, message) {
  return log(opts, "error", label, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
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
  info(label, message) {
    info(this.options, label, message);
  }
  warn(label, message) {
    warn(this.options, label, message);
  }
  error(label, message) {
    error(this.options, label, message);
  }
  debug(label, message, ...args) {
    debug(this.options, label, message, args);
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
    debug(this.options, this.label, message);
  }
}

async function callMiddleware(logger, onRequest, apiContext, responseFunction) {
  let nextCalled = false;
  let responseFunctionPromise = void 0;
  const next = async () => {
    nextCalled = true;
    responseFunctionPromise = responseFunction();
    return responseFunctionPromise;
  };
  let middlewarePromise = onRequest(apiContext, next);
  return await Promise.resolve(middlewarePromise).then(async (value) => {
    if (isEndpointOutput(value)) {
      logger.warn(
        "middleware",
        `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${bold("Response")} objects.`
      );
    }
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

const encoder = new TextEncoder();
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const clientLocalsSymbol = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  initResponseWithEncoding();
  const context = {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    ResponseWithEncoding,
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol in request)) {
        if (adapterName) {
          throw new AstroError({
            ...ClientAddressNotAvailable,
            message: ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol);
    }
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol, val);
      }
    }
  });
  return context;
}
let ResponseWithEncoding;
let initResponseWithEncoding = () => {
  class LocalResponseWithEncoding extends Response {
    constructor(body, init, encoding) {
      if (typeof body === "string") {
        if (typeof Buffer !== "undefined" && Buffer.from) {
          body = Buffer.from(body, encoding);
        } else if (encoding == null || encoding === "utf8" || encoding === "utf-8") {
          body = encoder.encode(body);
        }
      }
      super(body, init);
      if (encoding) {
        this.headers.set("X-Astro-Encoding", encoding);
      }
    }
  }
  ResponseWithEncoding = LocalResponseWithEncoding;
  initResponseWithEncoding = () => {
  };
  return LocalResponseWithEncoding;
};
async function callEndpoint(mod, env, ctx, onRequest) {
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName
  });
  let response;
  if (onRequest) {
    response = await callMiddleware(
      env.logger,
      onRequest,
      context,
      async () => {
        return await renderEndpoint(mod, context, env.ssr, env.logger);
      }
    );
  } else {
    response = await renderEndpoint(mod, context, env.ssr, env.logger);
  }
  const isEndpointSSR = env.ssr && !ctx.route?.prerender;
  if (response instanceof Response) {
    if (isEndpointSSR && response.headers.get("X-Astro-Encoding")) {
      env.logger.warn(
        "ssr",
        "`ResponseWithEncoding` is ignored in SSR. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    attachCookiesToResponse(response, context.cookies);
    return response;
  }
  env.logger.warn(
    "astro",
    `${ctx.route.component} returns a simple object which is deprecated. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information.`
  );
  if (isEndpointSSR) {
    if (response.hasOwnProperty("headers")) {
      env.logger.warn(
        "ssr",
        "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    if (response.encoding) {
      env.logger.warn(
        "ssr",
        "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
  }
  let body;
  const headers = new Headers();
  const pathname = ctx.route ? (
    // Try the static route `pathname`
    ctx.route.pathname ?? // Dynamic routes don't include `pathname`, so synthesize a path for these (e.g. 'src/pages/[slug].svg')
    ctx.route.segments.map((s) => s.map((p) => p.content).join("")).join("/")
  ) : (
    // Fallback to pathname of the request
    ctx.pathname
  );
  const mimeType = mime.getType(pathname) || "text/plain";
  headers.set("Content-Type", `${mimeType};charset=utf-8`);
  if (response.encoding) {
    headers.set("X-Astro-Encoding", response.encoding);
  }
  if (response.body instanceof Uint8Array) {
    body = response.body;
    headers.set("Content-Length", body.byteLength.toString());
  } else if (typeof Buffer !== "undefined" && Buffer.from) {
    body = Buffer.from(response.body, response.encoding);
    headers.set("Content-Length", body.byteLength.toString());
  } else if (response.encoding == null || response.encoding === "utf8" || response.encoding === "utf-8") {
    body = encoder.encode(response.body);
    headers.set("Content-Length", body.byteLength.toString());
  } else {
    body = response.body;
  }
  response = new Response(body, {
    status: 200,
    headers
  });
  attachCookiesToResponse(response, context.cookies);
  return response;
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
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
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/discord","type":"page","pattern":"^\\/discord\\/?$","segments":[[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discord.astro","pathname":"/discord","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links.astro","pathname":"/links","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/optimizing-goroutines-sum-of-squares/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/optimizing-goroutines-sum-of-squares","type":"page","pattern":"^\\/blog\\/optimizing-goroutines-sum-of-squares\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"optimizing-goroutines-sum-of-squares","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/optimizing-goroutines-sum-of-squares.mdx","pathname":"/blog/optimizing-goroutines-sum-of-squares","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/simple-go-vs-goroutines/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/simple-go-vs-goroutines","type":"page","pattern":"^\\/blog\\/simple-go-vs-goroutines\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"simple-go-vs-goroutines","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/simple-go-vs-goroutines.mdx","pathname":"/blog/simple-go-vs-goroutines","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/mergesort-parallel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/mergesort-parallel","type":"page","pattern":"^\\/blog\\/mergesort-parallel\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"mergesort-parallel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/mergesort-parallel.mdx","pathname":"/blog/mergesort-parallel","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/dnf5-step-by-step/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/dnf5-step-by-step","type":"page","pattern":"^\\/blog\\/dnf5-step-by-step\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"dnf5-step-by-step","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/dnf5-step-by-step.mdx","pathname":"/blog/dnf5-step-by-step","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/docker-and-go/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/docker-and-go","type":"page","pattern":"^\\/blog\\/docker-and-go\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"docker-and-go","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/docker-and-go.mdx","pathname":"/blog/docker-and-go","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"de/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de","type":"page","pattern":"^\\/de\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/index.astro","pathname":"/de","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"de/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/discord","type":"page","pattern":"^\\/de\\/discord\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/discord.astro","pathname":"/de/discord","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"de/links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/links","type":"page","pattern":"^\\/de\\/links\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/links.astro","pathname":"/de/links","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"de/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/blog","type":"page","pattern":"^\\/de\\/blog\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/blog.astro","pathname":"/de/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/discord","type":"page","pattern":"^\\/fr\\/discord\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/discord.astro","pathname":"/fr/discord","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/links","type":"page","pattern":"^\\/fr\\/links\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/links.astro","pathname":"/fr/links","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/blog","type":"page","pattern":"^\\/fr\\/blog\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/blog.astro","pathname":"/fr/blog","prerender":true,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.30c903a1.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2ec8a331.js"},{"type":"external","value":"/_astro/page.30c903a1.js"}],"styles":[{"type":"external","src":"/_astro/blog.9db58d19.css"},{"type":"external","src":"/_astro/dnf5-step-by-step.9ff3c03e.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"site":"https://corentings.dev","base":"/","compressHTML":true,"componentMetadata":[["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/de/blog.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/de/index.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/de/links.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/fr/blog.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/fr/index.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/fr/links.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/links.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/discord.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/de/discord.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/fr/discord.astro",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog/dnf5-step-by-step.mdx",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/rss.xml.js",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog/docker-and-go.mdx",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog/mergesort-parallel.mdx",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog/optimizing-goroutines-sum-of-squares.mdx",{"propagation":"none","containsHead":true}],["/home/yume/Documents/3.Dev/corentings.github.io/src/pages/blog/simple-go-vs-goroutines.mdx",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,n)=>{let s=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),s();break}});for(let e of n.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss.xml.js.e171c224.mjs","\u0000@astrojs-manifest":"manifest.b8fa87bf.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint@_@js.f770d76f.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index@_@astro.09699096.mjs","\u0000@astro-page:src/pages/discord@_@astro":"chunks/discord@_@astro.7b955b10.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss.f9c20a7a.mjs","\u0000@astro-page:src/pages/links@_@astro":"chunks/links@_@astro.24438a57.mjs","\u0000@astro-page:src/pages/blog/optimizing-goroutines-sum-of-squares@_@mdx":"chunks/optimizing-goroutines-sum-of-squares@_@mdx.7ac3fd42.mjs","\u0000@astro-page:src/pages/blog/simple-go-vs-goroutines@_@mdx":"chunks/simple-go-vs-goroutines@_@mdx.a298264f.mjs","\u0000@astro-page:src/pages/blog/mergesort-parallel@_@mdx":"chunks/mergesort-parallel@_@mdx.e7efef2a.mjs","\u0000@astro-page:src/pages/blog/dnf5-step-by-step@_@mdx":"chunks/dnf5-step-by-step@_@mdx.aeac2ea1.mjs","\u0000@astro-page:src/pages/blog/docker-and-go@_@mdx":"chunks/docker-and-go@_@mdx.56d9c9e8.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog@_@astro.88bbdcdc.mjs","\u0000@astro-page:src/pages/de/index@_@astro":"chunks/index@_@astro.18e601cb.mjs","\u0000@astro-page:src/pages/de/discord@_@astro":"chunks/discord@_@astro.ff61e95e.mjs","\u0000@astro-page:src/pages/de/links@_@astro":"chunks/links@_@astro.6658ff6e.mjs","\u0000@astro-page:src/pages/de/blog@_@astro":"chunks/blog@_@astro.41ba6686.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"chunks/index@_@astro.3f829aa8.mjs","\u0000@astro-page:src/pages/fr/discord@_@astro":"chunks/discord@_@astro.29ab8830.mjs","\u0000@astro-page:src/pages/fr/links@_@astro":"chunks/links@_@astro.82452d26.mjs","\u0000@astro-page:src/pages/fr/blog@_@astro":"chunks/blog@_@astro.21bf8f83.mjs","/home/yume/Documents/3.Dev/corentings.github.io/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp.32a2c9e1.mjs","/home/yume/Documents/3.Dev/corentings.github.io/src/layouts/BlogPostLayout.astro":"chunks/BlogPostLayout.77e7b8ea.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.d64346ce.js","/astro/hoisted.js?q=0":"_astro/hoisted.2ec8a331.js","astro:scripts/page.js":"_astro/page.30c903a1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/docker_infographie.2cc25f38.jpg","/_astro/moutmout.83b7cb34.png","/_astro/gauntlet.3b27a876.png","/_astro/edt-uca.bf1891f7.png","/_astro/Stouuf.28dfc25f.png","/_astro/en.43378d6a.png","/_astro/kitsu.f270832d.png","/_astro/avatar.ab91b8c2.webp","/_astro/dnf5-step-by-step.ae28dbfe.webp","/_astro/simple-go-vs-goroutines.b26f09f7.webp","/_astro/docker-and-go.f39e84b6.webp","/_astro/iu_logo.dcf9709d.png","/_astro/optimizing-goroutines-sum-of-squares.834d3e0a.webp","/_astro/mergesort-parallel.ca34db33.webp","/_astro/MF_STOUUF.ea72d709.png","/_astro/logo_qualialtis.897702f8.png","/_astro/onetoo.cba55fd9.jpg","/_astro/educative.33a3ec4d.webp","/_astro/hackerrank.74a8489c.png","/_astro/uca.29bebf88.png","/_astro/estaca.b372c7ab.jpg","/_astro/ktk.cec8abcb.jpg","/_astro/syne-greek-400-normal.367cc5e5.woff2","/_astro/syne-latin-ext-400-normal.8a540c73.woff2","/_astro/syne-latin-400-normal.e751716c.woff2","/_astro/nunito-cyrillic-ext-400-normal.29a4d00e.woff2","/_astro/nunito-cyrillic-400-normal.ce5142e3.woff2","/_astro/nunito-vietnamese-400-normal.7ed3b3e7.woff2","/_astro/nunito-latin-ext-400-normal.a8aed46d.woff2","/_astro/nunito-latin-400-normal.5e2f97ea.woff2","/_astro/syne-greek-400-normal.921d033b.woff","/_astro/syne-latin-ext-400-normal.f08f6030.woff","/_astro/syne-latin-400-normal.ee8feac2.woff","/_astro/nunito-cyrillic-ext-400-normal.1d745188.woff","/_astro/nunito-cyrillic-400-normal.97bcb68f.woff","/_astro/nunito-vietnamese-400-normal.75527a88.woff","/_astro/nunito-latin-ext-400-normal.2ab34252.woff","/_astro/nunito-latin-400-normal.a83a13e0.woff","/_astro/blog.9db58d19.css","/_astro/dnf5-step-by-step.9ff3c03e.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/google4db6b9a279eaaeb6.html","/mstile-150x150.png","/robots.txt","/rss.xml","/safari-pinned-tab.svg","/site.webmanifest","/vercel.json","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.f794c5e0.js","/_astro/hoisted.2ec8a331.js","/_astro/hoisted.d64346ce.js","/_astro/page.30c903a1.js","/locales/de/translation.json","/locales/en/translation.json","/locales/fr/translation.json","/_astro/page.30c903a1.js","/index.html","/discord/index.html","/links/index.html","/blog/optimizing-goroutines-sum-of-squares/index.html","/blog/simple-go-vs-goroutines/index.html","/blog/mergesort-parallel/index.html","/blog/dnf5-step-by-step/index.html","/blog/docker-and-go/index.html","/blog/index.html","/de/index.html","/de/discord/index.html","/de/links/index.html","/de/blog/index.html","/fr/index.html","/fr/discord/index.html","/fr/links/index.html","/fr/blog/index.html"]});

export { AstroCookies as A, Logger as L, attachCookiesToResponse as a, callEndpoint as b, createAPIContext as c, dateTimeFormat as d, callMiddleware as e, AstroIntegrationLogger as f, getSetCookiesFromResponse as g, levels as l, manifest };
