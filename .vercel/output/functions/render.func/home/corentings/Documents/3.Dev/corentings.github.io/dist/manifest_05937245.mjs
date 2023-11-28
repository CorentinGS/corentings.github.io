import { serialize, parse } from 'cookie';
import { bold } from 'kleur/colors';
import 'string-width';
import mime from 'mime';
import { A as AstroError, t as ResponseSentError, y as MiddlewareNoDataOrNextCalled, z as MiddlewareNotAResponse, G as GetStaticPathsRequired, B as InvalidGetStaticPathsReturn, D as InvalidGetStaticPathsEntry, H as GetStaticPathsExpectedParams, J as GetStaticPathsInvalidRouteParam, P as PageNumberParamNotFound, K as GetStaticPathsRemovedRSSHelper, N as NoMatchingStaticPathFound, O as PrerenderDynamicEndpointPathCollide, Q as LocalsNotAnObject, T as ASTRO_VERSION, C as ClientAddressNotAvailable, S as StaticClientAddressNotAvailable, V as renderEndpoint } from './chunks/astro_c6bab29e.mjs';
import 'clsx';
import { t as trimSlashes } from './chunks/astro/assets-service_de271127.mjs';
import { compile } from 'path-to-regexp';

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
function responseHasCookies(response) {
  return Reflect.has(response, astroCookiesSymbol);
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
        return ensureCookiesAttached(apiContext, value);
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
      return ensureCookiesAttached(apiContext, value);
    }
  });
}
function ensureCookiesAttached(apiContext, response) {
  if (apiContext.cookies !== void 0 && !responseHasCookies(response)) {
    attachCookiesToResponse(response, apiContext.cookies);
  }
  return response;
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}

function routeIsRedirect(route) {
  return route?.type === "redirect";
}
function routeIsFallback(route) {
  return route?.type === "fallback";
}
function redirectRouteGenerate(redirectRoute, data) {
  const routeData = redirectRoute.redirectRoute;
  const route = redirectRoute.redirect;
  if (typeof routeData !== "undefined") {
    return routeData?.generate(data) || routeData?.pathname || "/";
  } else if (typeof route === "string") {
    return route;
  } else if (typeof route === "undefined") {
    return "/";
  }
  return route.destination;
}
function redirectRouteStatus(redirectRoute, method = "GET") {
  const routeData = redirectRoute.redirectRoute;
  if (typeof routeData?.redirect === "object") {
    return routeData.redirect.status;
  } else if (method !== "GET") {
    return 308;
  }
  return 301;
}

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...GetStaticPathsInvalidRouteParam,
      message: GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  route
}) {
  if ((!ssr || route.prerender) && !mod.getStaticPaths) {
    throw new AstroError({
      ...GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logger, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...InvalidGetStaticPathsReturn,
      message: InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (typeof pathObject === "object" && Array.isArray(pathObject) || pathObject === null) {
      throw new AstroError({
        ...InvalidGetStaticPathsEntry,
        message: InvalidGetStaticPathsEntry.message(
          Array.isArray(pathObject) ? "array" : typeof pathObject
        )
      });
    }
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        logger.warn(
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        logger.warn(
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}

function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, route) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, route.component);
    const [key, value] = next;
    if (value !== void 0) {
      acc[key] = typeof value === "string" ? trimSlashes(value) : value.toString();
    }
    return acc;
  }, {});
  return JSON.stringify(route.generate(validatedParams));
}

function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new AstroError({
        ...PageNumberParamNotFound,
        message: PageNumberParamNotFound.message(paramName)
      });
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      const current = correctIndexRoute(routeMatch.generate({ ...params }));
      const next = pageNum === lastPage ? void 0 : correctIndexRoute(routeMatch.generate({ ...params, page: String(pageNum + 1) }));
      const prev = pageNum === 1 ? void 0 : correctIndexRoute(
        routeMatch.generate({
          ...params,
          page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
        })
      );
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: { current, next, prev }
          }
        }
      };
    });
    return result;
  };
}
function correctIndexRoute(route) {
  if (route === "") {
    return "/";
  }
  return route;
}

async function callGetStaticPaths({
  mod,
  route,
  routeCache,
  logger,
  ssr
}) {
  const cached = routeCache.get(route);
  if (!mod) {
    throw new Error("This is an error caused by Astro and not your code. Please file an issue.");
  }
  if (cached?.staticPaths) {
    return cached.staticPaths;
  }
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  let staticPaths = [];
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  staticPaths = await mod.getStaticPaths({
    // Q: Why the cast?
    // A: So users downstream can have nicer typings, we have to make some sacrifice in our internal typings, which necessitate a cast here
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(GetStaticPathsRemovedRSSHelper);
    }
  });
  validateGetStaticPathsResult(staticPaths, logger, route);
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  routeCache.set(route, { ...cached, staticPaths: keyedStaticPaths });
  return keyedStaticPaths;
}
class RouteCache {
  logger;
  cache = {};
  mode;
  constructor(logger, mode = "production") {
    this.logger = logger;
    this.mode = mode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]?.staticPaths) {
      this.logger.warn(
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
}
function findPathItemByKey(staticPaths, params, route, logger) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  logger.debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}

async function getParamsAndProps(opts) {
  const { logger, mod, route, routeCache, pathname, ssr } = opts;
  if (!route || route.pathname) {
    return [{}, {}];
  }
  const params = getRouteParams(route, pathname) ?? {};
  if (routeIsRedirect(route) || routeIsFallback(route)) {
    return [params, {}];
  }
  if (mod) {
    validatePrerenderEndpointCollision(route, mod, params);
  }
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    logger,
    ssr
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route, logger);
  if (!matchedStaticPath && (ssr ? route.prerender : true)) {
    throw new AstroError({
      ...NoMatchingStaticPathFound,
      message: NoMatchingStaticPathFound.message(pathname),
      hint: NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = matchedStaticPath?.props ? { ...matchedStaticPath.props } : {};
  return [params, props];
}
function getRouteParams(route, pathname) {
  if (route.params.length) {
    const paramsMatch = route.pattern.exec(decodeURIComponent(pathname));
    if (paramsMatch) {
      return getParams(route.params)(paramsMatch);
    }
  }
}
function validatePrerenderEndpointCollision(route, mod, params) {
  if (route.type === "endpoint" && mod.getStaticPaths) {
    const lastSegment = route.segments[route.segments.length - 1];
    const paramValues = Object.values(params);
    const lastParam = paramValues[paramValues.length - 1];
    if (lastSegment.length === 1 && lastSegment[0].dynamic && lastParam === void 0) {
      throw new AstroError({
        ...PrerenderDynamicEndpointPathCollide,
        message: PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: PrerenderDynamicEndpointPathCollide.hint(route.component),
        location: {
          file: route.component
        }
      });
    }
  }
}

const clientLocalsSymbol$1 = Symbol.for("astro.locals");
async function createRenderContext(options) {
  const request = options.request;
  const pathname = options.pathname ?? new URL(request.url).pathname;
  const [params, props] = await getParamsAndProps({
    mod: options.mod,
    route: options.route,
    routeCache: options.env.routeCache,
    pathname,
    logger: options.env.logger,
    ssr: options.env.ssr
  });
  const context = {
    ...options,
    pathname,
    params,
    props,
    locales: options.locales,
    routingStrategy: options.routingStrategy,
    defaultLocale: options.defaultLocale
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$1);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$1, val);
      }
    }
  });
  return context;
}
function parseLocale(header) {
  if (header === "*") {
    return [{ locale: header, qualityValue: void 0 }];
  }
  const result = [];
  const localeValues = header.split(",").map((str) => str.trim());
  for (const localeValue of localeValues) {
    const split = localeValue.split(";").map((str) => str.trim());
    const localeName = split[0];
    const qualityValue = split[1];
    if (!split) {
      continue;
    }
    if (qualityValue && qualityValue.startsWith("q=")) {
      const qualityValueAsFloat = Number.parseFloat(qualityValue.slice("q=".length));
      if (Number.isNaN(qualityValueAsFloat) || qualityValueAsFloat > 1) {
        result.push({
          locale: localeName,
          qualityValue: void 0
        });
      } else {
        result.push({
          locale: localeName,
          qualityValue: qualityValueAsFloat
        });
      }
    } else {
      result.push({
        locale: localeName,
        qualityValue: void 0
      });
    }
  }
  return result;
}
function sortAndFilterLocales(browserLocaleList, locales) {
  const normalizedLocales = locales.map(normalizeTheLocale);
  return browserLocaleList.filter((browserLocale) => {
    if (browserLocale.locale !== "*") {
      return normalizedLocales.includes(normalizeTheLocale(browserLocale.locale));
    }
    return true;
  }).sort((a, b) => {
    if (a.qualityValue && b.qualityValue) {
      if (a.qualityValue > b.qualityValue) {
        return -1;
      } else if (a.qualityValue < b.qualityValue) {
        return 1;
      }
    }
    return 0;
  });
}
function computePreferredLocale(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = void 0;
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    const firstResult = browserLocaleList.at(0);
    if (firstResult) {
      if (firstResult.locale !== "*") {
        result = locales.find(
          (locale) => normalizeTheLocale(locale) === normalizeTheLocale(firstResult.locale)
        );
      }
    }
  }
  return result;
}
function computePreferredLocaleList(request, locales) {
  const acceptHeader = request.headers.get("Accept-Language");
  let result = [];
  if (acceptHeader) {
    const browserLocaleList = sortAndFilterLocales(parseLocale(acceptHeader), locales);
    if (browserLocaleList.length === 1 && browserLocaleList.at(0).locale === "*") {
      return locales;
    } else if (browserLocaleList.length > 0) {
      for (const browserLocale of browserLocaleList) {
        const found = locales.find(
          (l) => normalizeTheLocale(l) === normalizeTheLocale(browserLocale.locale)
        );
        if (found) {
          result.push(found);
        }
      }
    }
  }
  return result;
}
function computeCurrentLocale(request, locales, routingStrategy, defaultLocale) {
  const requestUrl = new URL(request.url);
  for (const segment of requestUrl.pathname.split("/")) {
    for (const locale of locales) {
      if (normalizeTheLocale(locale) === normalizeTheLocale(segment)) {
        return locale;
      }
    }
  }
  if (routingStrategy === "prefix-other-locales") {
    return defaultLocale;
  }
  return void 0;
}

const encoder = new TextEncoder();
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const clientLocalsSymbol = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName,
  locales,
  routingStrategy,
  defaultLocale
}) {
  let preferredLocale = void 0;
  let preferredLocaleList = void 0;
  let currentLocale = void 0;
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
    get preferredLocale() {
      if (preferredLocale) {
        return preferredLocale;
      }
      if (locales) {
        preferredLocale = computePreferredLocale(request, locales);
        return preferredLocale;
      }
      return void 0;
    },
    get preferredLocaleList() {
      if (preferredLocaleList) {
        return preferredLocaleList;
      }
      if (locales) {
        preferredLocaleList = computePreferredLocaleList(request, locales);
        return preferredLocaleList;
      }
      return void 0;
    },
    get currentLocale() {
      if (currentLocale) {
        return currentLocale;
      }
      if (locales) {
        currentLocale = computeCurrentLocale(request, locales, routingStrategy, defaultLocale);
      }
      return currentLocale;
    },
    url: new URL(request.url),
    get clientAddress() {
      if (clientAddressSymbol in request) {
        return Reflect.get(request, clientAddressSymbol);
      }
      if (adapterName) {
        throw new AstroError({
          ...ClientAddressNotAvailable,
          message: ClientAddressNotAvailable.message(adapterName)
        });
      } else {
        throw new AstroError(StaticClientAddressNotAvailable);
      }
    },
    get locals() {
      let locals = Reflect.get(request, clientLocalsSymbol);
      if (locals === void 0) {
        locals = {};
        Reflect.set(request, clientLocalsSymbol, locals);
      }
      if (typeof locals !== "object") {
        throw new AstroError(LocalsNotAnObject);
      }
      return locals;
    },
    // We define a custom property, so we can check the value passed to locals
    set locals(val) {
      if (typeof val !== "object") {
        throw new AstroError(LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol, val);
      }
    }
  };
  return context;
}
class ResponseWithEncoding extends Response {
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
async function callEndpoint(mod, env, ctx, onRequest) {
  const context = createAPIContext({
    request: ctx.request,
    params: ctx.params,
    props: ctx.props,
    site: env.site,
    adapterName: env.adapterName,
    routingStrategy: ctx.routingStrategy,
    defaultLocale: ctx.defaultLocale,
    locales: ctx.locales
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
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/experiences","type":"page","pattern":"^\\/experiences\\/?$","segments":[[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/experiences.astro","pathname":"/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/discord","type":"page","pattern":"^\\/discord\\/?$","segments":[[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/discord.astro","pathname":"/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/links","type":"page","pattern":"^\\/links\\/?$","segments":[[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/links.astro","pathname":"/links","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/talks","type":"page","pattern":"^\\/talks\\/?$","segments":[[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/talks.astro","pathname":"/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/optimizing-goroutines-sum-of-squares/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/optimizing-goroutines-sum-of-squares","type":"page","pattern":"^\\/blog\\/optimizing-goroutines-sum-of-squares\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"optimizing-goroutines-sum-of-squares","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/optimizing-goroutines-sum-of-squares.mdx","pathname":"/blog/optimizing-goroutines-sum-of-squares","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/simple-go-vs-goroutines/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/simple-go-vs-goroutines","type":"page","pattern":"^\\/blog\\/simple-go-vs-goroutines\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"simple-go-vs-goroutines","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/simple-go-vs-goroutines.mdx","pathname":"/blog/simple-go-vs-goroutines","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/mergesort-parallel/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/mergesort-parallel","type":"page","pattern":"^\\/blog\\/mergesort-parallel\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"mergesort-parallel","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/mergesort-parallel.mdx","pathname":"/blog/mergesort-parallel","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/dnf5-step-by-step/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/dnf5-step-by-step","type":"page","pattern":"^\\/blog\\/dnf5-step-by-step\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"dnf5-step-by-step","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/dnf5-step-by-step.mdx","pathname":"/blog/dnf5-step-by-step","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/docker-and-go/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/docker-and-go","type":"page","pattern":"^\\/blog\\/docker-and-go\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"docker-and-go","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/docker-and-go.mdx","pathname":"/blog/docker-and-go","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de","type":"page","pattern":"^\\/de\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/index.astro","pathname":"/de","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/experiences","type":"page","pattern":"^\\/de\\/experiences\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/experiences.astro","pathname":"/de/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/projects","type":"page","pattern":"^\\/de\\/projects\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/projects.astro","pathname":"/de/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/discord","type":"page","pattern":"^\\/de\\/discord\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/discord.astro","pathname":"/de/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/links","type":"page","pattern":"^\\/de\\/links\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/links.astro","pathname":"/de/links","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/talks","type":"page","pattern":"^\\/de\\/talks\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/talks.astro","pathname":"/de/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"de/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/de/blog","type":"page","pattern":"^\\/de\\/blog\\/?$","segments":[[{"content":"de","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/de/blog.astro","pathname":"/de/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr","type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/index.astro","pathname":"/fr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/experiences/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/experiences","type":"page","pattern":"^\\/fr\\/experiences\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"experiences","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/experiences.astro","pathname":"/fr/experiences","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/projects","type":"page","pattern":"^\\/fr\\/projects\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/projects.astro","pathname":"/fr/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/discord/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/discord","type":"page","pattern":"^\\/fr\\/discord\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"discord","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/discord.astro","pathname":"/fr/discord","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/links/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/links","type":"page","pattern":"^\\/fr\\/links\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"links","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/links.astro","pathname":"/fr/links","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/talks/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/talks","type":"page","pattern":"^\\/fr\\/talks\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"talks","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/talks.astro","pathname":"/fr/talks","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fr/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fr/blog","type":"page","pattern":"^\\/fr\\/blog\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr/blog.astro","pathname":"/fr/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.30c903a1.js"}],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.804ae878.js"},{"type":"external","value":"/_astro/page.30c903a1.js"}],"styles":[{"type":"external","src":"/_astro/blog.200951e3.css"},{"type":"external","src":"/_astro/dnf5-step-by-step.f784048a.css"}],"routeData":{"route":"/rss.xml","type":"endpoint","pattern":"^\\/rss\\.xml$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://corentings.dev","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/blog.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/links.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/talks.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/blog.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/experiences.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/links.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/talks.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/links.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/talks.astro",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/links@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/de/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/experiences@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/links@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/fr/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/links@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/talks@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/discord.astro",{"propagation":"none","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/de/discord.astro",{"propagation":"none","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/fr/discord.astro",{"propagation":"none","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog/dnf5-step-by-step.mdx",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog/docker-and-go.mdx",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog/mergesort-parallel.mdx",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog/optimizing-goroutines-sum-of-squares.mdx",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/pages/blog/simple-go-vs-goroutines.mdx",{"propagation":"in-tree","containsHead":true}],["/home/corentings/Documents/3.Dev/corentings.github.io/src/layouts/BlogPostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/dnf5-step-by-step@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/docker-and-go@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/mergesort-parallel@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/optimizing-goroutines-sum-of-squares@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/simple-go-vs-goroutines@_@mdx",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_3352b445.mjs","\u0000@astrojs-manifest":"manifest_05937245.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_a5ba2d37.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_a52dd52d.mjs","\u0000@astro-page:src/pages/experiences@_@astro":"chunks/experiences_9c9f4224.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_b7c94172.mjs","\u0000@astro-page:src/pages/discord@_@astro":"chunks/discord_869f5e9c.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_43ff9749.mjs","\u0000@astro-page:src/pages/links@_@astro":"chunks/links_f3674dab.mjs","\u0000@astro-page:src/pages/talks@_@astro":"chunks/talks_2adbbb7c.mjs","\u0000@astro-page:src/pages/blog/optimizing-goroutines-sum-of-squares@_@mdx":"chunks/optimizing-goroutines-sum-of-squares_619a1003.mjs","\u0000@astro-page:src/pages/blog/simple-go-vs-goroutines@_@mdx":"chunks/simple-go-vs-goroutines_78956989.mjs","\u0000@astro-page:src/pages/blog/mergesort-parallel@_@mdx":"chunks/mergesort-parallel_ea207125.mjs","\u0000@astro-page:src/pages/blog/dnf5-step-by-step@_@mdx":"chunks/dnf5-step-by-step_3dbef3ba.mjs","\u0000@astro-page:src/pages/blog/docker-and-go@_@mdx":"chunks/docker-and-go_1fa27688.mjs","\u0000@astro-page:src/pages/blog@_@astro":"chunks/blog_ef8a7d27.mjs","\u0000@astro-page:src/pages/de/index@_@astro":"chunks/index_364d4024.mjs","\u0000@astro-page:src/pages/de/experiences@_@astro":"chunks/experiences_6de4dcd2.mjs","\u0000@astro-page:src/pages/de/projects@_@astro":"chunks/projects_e4fe278c.mjs","\u0000@astro-page:src/pages/de/discord@_@astro":"chunks/discord_b3b3b1e7.mjs","\u0000@astro-page:src/pages/de/links@_@astro":"chunks/links_8e2dd92b.mjs","\u0000@astro-page:src/pages/de/talks@_@astro":"chunks/talks_e2c52d78.mjs","\u0000@astro-page:src/pages/de/blog@_@astro":"chunks/blog_c611bb0e.mjs","\u0000@astro-page:src/pages/fr/index@_@astro":"chunks/index_7544ef35.mjs","\u0000@astro-page:src/pages/fr/experiences@_@astro":"chunks/experiences_20a0f04f.mjs","\u0000@astro-page:src/pages/fr/projects@_@astro":"chunks/projects_ea3f36a3.mjs","\u0000@astro-page:src/pages/fr/discord@_@astro":"chunks/discord_ca865cc8.mjs","\u0000@astro-page:src/pages/fr/links@_@astro":"chunks/links_69f05e6f.mjs","\u0000@astro-page:src/pages/fr/talks@_@astro":"chunks/talks_d0922ca5.mjs","\u0000@astro-page:src/pages/fr/blog@_@astro":"chunks/blog_1f1a4f16.mjs","/home/corentings/Documents/3.Dev/corentings.github.io/src/layouts/BlogPostLayout.astro":"chunks/BlogPostLayout_74500abc.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.cc4b1e42.js","/astro/hoisted.js?q=0":"_astro/hoisted.804ae878.js","astro:scripts/page.js":"_astro/page.30c903a1.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/docker_infographie.2cc25f38.jpg","/_astro/syne-latin-ext-400-normal.cd929e6e.woff2","/_astro/nunito-cyrillic-400-normal.ce5142e3.woff2","/_astro/nunito-vietnamese-400-normal.7ed3b3e7.woff2","/_astro/nunito-latin-ext-400-normal.a8aed46d.woff2","/_astro/nunito-cyrillic-ext-400-normal.29a4d00e.woff2","/_astro/nunito-latin-400-normal.5e2f97ea.woff2","/_astro/syne-latin-400-normal.3eb86aa9.woff2","/_astro/nunito-vietnamese-400-normal.75527a88.woff","/_astro/nunito-latin-400-normal.a83a13e0.woff","/_astro/syne-greek-400-normal.8cbf4335.woff","/_astro/nunito-cyrillic-ext-400-normal.1d745188.woff","/_astro/nunito-cyrillic-400-normal.97bcb68f.woff","/_astro/syne-latin-400-normal.e286bb6c.woff","/_astro/syne-latin-ext-400-normal.717c191e.woff","/_astro/nunito-latin-ext-400-normal.2ab34252.woff","/_astro/avatar.ab91b8c2.webp","/_astro/dnf5-step-by-step.ae28dbfe.webp","/_astro/logo_tfd.39f2a0ec.png","/_astro/docker-and-go.f39e84b6.webp","/_astro/simple-go-vs-goroutines.b26f09f7.webp","/_astro/stouuf2.8d719f56.webp","/_astro/moutmout.83b7cb34.png","/_astro/petit_prince.4414bc8d.png","/_astro/onetoo.cba55fd9.jpg","/_astro/MF_STOUUF.ea72d709.png","/_astro/mergesort-parallel.ca34db33.webp","/_astro/optimizing-goroutines-sum-of-squares.834d3e0a.webp","/_astro/gauntlet.3b27a876.png","/_astro/edt-uca.bf1891f7.png","/_astro/kitsu.f270832d.png","/_astro/Stouuf.28dfc25f.png","/_astro/iu_logo.dcf9709d.png","/_astro/hackerrank.74a8489c.png","/_astro/estaca.b372c7ab.jpg","/_astro/educative.33a3ec4d.webp","/_astro/uca.29bebf88.png","/_astro/logo_qualialtis.897702f8.png","/_astro/ktk.cec8abcb.jpg","/_astro/chesscom_logo.32ec802e.png","/_astro/blog.200951e3.css","/_astro/dnf5-step-by-step.f784048a.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/browserconfig.xml","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/google4db6b9a279eaaeb6.html","/mstile-150x150.png","/robots.txt","/rss.xml","/safari-pinned-tab.svg","/sign.svg","/site.webmanifest","/vercel.json","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.baf7d03b.js","/_astro/hoisted.804ae878.js","/_astro/hoisted.cc4b1e42.js","/_astro/page.30c903a1.js","/locales/de/translation.json","/locales/en/translation.json","/locales/fr/translation.json","/_astro/page.30c903a1.js","/index.html","/experiences/index.html","/projects/index.html","/discord/index.html","/links/index.html","/talks/index.html","/blog/optimizing-goroutines-sum-of-squares/index.html","/blog/simple-go-vs-goroutines/index.html","/blog/mergesort-parallel/index.html","/blog/dnf5-step-by-step/index.html","/blog/docker-and-go/index.html","/blog/index.html","/de/index.html","/de/experiences/index.html","/de/projects/index.html","/de/discord/index.html","/de/links/index.html","/de/talks/index.html","/de/blog/index.html","/fr/index.html","/fr/experiences/index.html","/fr/projects/index.html","/fr/discord/index.html","/fr/links/index.html","/fr/talks/index.html","/fr/blog/index.html"]});

export { AstroCookies as A, Logger as L, RouteCache as R, computePreferredLocaleList as a, computeCurrentLocale as b, computePreferredLocale as c, dateTimeFormat as d, redirectRouteStatus as e, redirectRouteGenerate as f, routeIsFallback as g, attachCookiesToResponse as h, createAPIContext as i, callEndpoint as j, callMiddleware as k, levels as l, AstroIntegrationLogger as m, manifest, getSetCookiesFromResponse as n, createRenderContext as o, routeIsRedirect as r };
