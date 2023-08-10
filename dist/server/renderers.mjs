import { compile } from 'path-to-regexp';
import { serialize, parse } from 'cookie';
import { yellow, dim, bold, cyan, red, reset } from 'kleur/colors';
import 'node:fs';
import 'node:http';
import { TLSSocket } from 'node:tls';
import mime from 'mime';
import 'string-width';
import mime$1 from 'mime/lite.js';
import { escape } from 'html-escaper';

const AstroErrorData = {
  /**
   * @docs
   * @kind heading
   * @name Astro Errors
   */
  /**
   * @docs
   * @message
   * Unknown compiler error.
   * @see
   * - [withastro/compiler issues list](https://astro.build/issues/compiler)
   * @description
   * Astro encountered an unknown error while compiling your files. In most cases, this is not your fault, but an issue in our compiler.
   *
   * If there isn't one already, please [create an issue](https://astro.build/issues/compiler).
   */
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    hint: "This is almost always a problem with the Astro compiler, not your code. Please open an issue at https://astro.build/issues/compiler."
  },
  // 1xxx and 2xxx codes are reserved for compiler errors and warnings respectively
  /**
   * @docs
   * @see
   * - [Enabling SSR in Your Project](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project)
   * - [Astro.redirect](https://docs.astro.build/en/reference/api-reference/#astroredirect)
   * @description
   * The `Astro.redirect` function is only available when [Server-side rendering](/en/guides/server-side-rendering/) is enabled.
   *
   * To redirect on a static website, the [meta refresh attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) can be used. Certain hosts also provide config-based redirects (ex: [Netlify redirects](https://docs.netlify.com/routing/redirects/)).
   * @deprecated since version 2.6
   */
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    message: "Redirects are only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  /**
   * @docs
   * @see
   * - [Official integrations](https://docs.astro.build/en/guides/integrations-guide/#official-integrations)
   * - [Astro.clientAddress](https://docs.astro.build/en/reference/api-reference/#astroclientaddress)
   * @description
   * The adapter you're using unfortunately does not support `Astro.clientAddress`.
   */
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  /**
   * @docs
   * @see
   * - [Enabling SSR in Your Project](https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project)
   * - [Astro.clientAddress](https://docs.astro.build/en/reference/api-reference/#astroclientaddress)
   * @description
   * The `Astro.clientAddress` property is only available when [Server-side rendering](https://docs.astro.build/en/guides/server-side-rendering/) is enabled.
   *
   * To get the user's IP address in static mode, different APIs such as [Ipify](https://www.ipify.org/) can be used in a [Client-side script](https://docs.astro.build/en/guides/client-side-scripts/) or it may be possible to get the user's IP using a serverless function hosted on your hosting provider.
   */
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    message: "`Astro.clientAddress` is only available when using `output: 'server'` or `output: 'hybrid'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  /**
   * @docs
   * @see
   * - [getStaticPaths()](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * @description
   * A [dynamic route](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) was matched, but no corresponding path was found for the requested parameters. This is often caused by a typo in either the generated or the requested path.
   */
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  /**
   * @docs
   * @message Route returned a `RETURNED_VALUE`. Only a Response can be returned from Astro files.
   * @see
   * - [Response](https://docs.astro.build/en/guides/server-side-rendering/#response)
   * @description
   * Only instances of [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned inside Astro files.
   * ```astro title="pages/login.astro"
   * ---
   * return new Response(null, {
   *  status: 404,
   *  statusText: 'Not found'
   * });
   *
   * // Alternatively, for redirects, Astro.redirect also returns an instance of Response
   * return Astro.redirect('/login');
   * ---
   * ```
   *
   */
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  /**
   * @docs
   * @see
   * - [`client:media`](https://docs.astro.build/en/reference/directives-reference/#clientmedia)
   * @description
   * A [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) parameter is required when using the `client:media` directive.
   *
   * ```astro
   * <Counter client:media="(max-width: 640px)" />
   * ```
   */
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  /**
   * @docs
   * @message Unable to render `COMPONENT_NAME`. There are `RENDERER_COUNT` renderer(s) configured in your `astro.config.mjs` file, but none were able to server-side render `COMPONENT_NAME`.
   * @see
   * - [Frameworks components](https://docs.astro.build/en/core-concepts/framework-components/)
   * - [UI Frameworks](https://docs.astro.build/en/guides/integrations-guide/#official-integrations)
   * @description
   * None of the installed integrations were able to render the component you imported. Make sure to install the appropriate integration for the type of component you are trying to include in your page.
   *
   * For JSX / TSX files, [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/), [@astrojs/preact](https://docs.astro.build/en/guides/integrations-guide/preact/) or [@astrojs/solid-js](https://docs.astro.build/en/guides/integrations-guide/solid-js/) can be used. For Vue and Svelte files, the [@astrojs/vue](https://docs.astro.build/en/guides/integrations-guide/vue/) and [@astrojs/svelte](https://docs.astro.build/en/guides/integrations-guide/svelte/) integrations can be used respectively
   */
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are" : "is"} ${validRenderersCount} renderer${plural ? "s" : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were" : "it was not"} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  /**
   * @docs
   * @see
   * - [addRenderer option](https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option)
   * - [Hydrating framework components](https://docs.astro.build/en/core-concepts/framework-components/#hydrating-interactive-components)
   * @description
   * Astro tried to hydrate a component on the client, but the renderer used does not provide a client entrypoint to use to hydrate.
   *
   */
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  /**
   * @docs
   * @see
   * - [`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly)
   * @description
   *
   * `client:only` components are not run on the server, as such Astro does not know (and cannot guess) which renderer to use and require a hint. Like such:
   *
   * ```astro
   *	<SomeReactComponent client:only="react" />
   * ```
   */
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * The `params` property in `getStaticPaths`'s return value (an array of objects) should also be an object.
   *
   * ```astro title="pages/blog/[id].astro"
   * ---
   * export async function getStaticPaths() {
   *	return [
   *		{ params: { slug: "blog" } },
   * 		{ params: { slug: "about" } }
   * 	];
   *}
   *---
   * ```
   */
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * `getStaticPaths`'s return value must be an array of objects.
   *
   * ```ts title="pages/blog/[id].astro"
   * export async function getStaticPaths() {
   *	return [ // <-- Array
   *		{ params: { slug: "blog" } },
   * 		{ params: { slug: "about" } }
   * 	];
   *}
   * ```
   */
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [RSS Guide](https://docs.astro.build/en/guides/rss/)
   * @description
   * `getStaticPaths` no longer expose an helper for generating a RSS feed. We recommend migrating to the [@astrojs/rss](https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss)integration instead.
   */
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * Every route specified by `getStaticPaths` require a `params` property specifying the path parameters needed to match the route.
   *
   * For instance, the following code:
   * ```astro title="pages/blog/[id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: '1' } }
   * 	];
   * }
   * ---
   * ```
   * Will create the following route: `site.com/blog/1`.
   */
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * Since `params` are encoded into the URL, only certain types are supported as values.
   *
   * ```astro title="/route/[id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: '1' } } // Works
   * 		{ params: { id: 2 } } // Works
   * 		{ params: { id: false } } // Does not work
   * 	];
   * }
   * ---
   * ```
   *
   * In routes using [rest parameters](https://docs.astro.build/en/core-concepts/routing/#rest-parameters), `undefined` can be used to represent a path with no parameters passed in the URL:
   *
   * ```astro title="/route/[...id].astro"
   * ---
   * export async function getStaticPaths() {
   * 	return [
   * 		{ params: { id: 1 } } // /route/1
   * 		{ params: { id: 2 } } // /route/2
   * 		{ params: { id: undefined } } // /route/
   * 	];
   * }
   * ---
   * ```
   */
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  /**
   * @docs
   * @see
   * - [Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [Server-side Rendering](https://docs.astro.build/en/guides/server-side-rendering/)
   * @description
   * In [Static Mode](https://docs.astro.build/en/core-concepts/routing/#static-ssg-mode), all routes must be determined at build time. As such, dynamic routes must `export` a `getStaticPaths` function returning the different paths to generate.
   */
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build. This error can also occur if using \`export const prerender = true;\`.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  /**
   * @docs
   * @see
   * - [Named slots](https://docs.astro.build/en/core-concepts/astro-components/#named-slots)
   * @description
   * Certain words cannot be used for slot names due to being already used internally.
   */
  ReservedSlotName: {
    title: "Invalid slot name.",
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  /**
   * @docs
   * @see
   * - [Server-side Rendering](https://docs.astro.build/en/guides/server-side-rendering/)
   * - [Adding an Adapter](https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter)
   * @description
   * To use server-side rendering, an adapter needs to be installed so Astro knows how to generate the proper output for your targeted deployment platform.
   */
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    message: `Cannot use \`output: 'server'\` or \`output: 'hybrid'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  /**
   * @docs
   * @description
   * No import statement was found for one of the components. If there is an import statement, make sure you are using the same identifier in both the imports and the component usage.
   */
  NoMatchingImport: {
    title: "No import found for component.",
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * InvalidPrerenderExport: A `prerender` export has been detected, but its value cannot be statically analyzed.
   * @description
   * The `prerender` feature only supports a subset of valid JavaScript — be sure to use exactly `export const prerender = true` so that our compiler can detect this directive at build time. Variables, `let`, and `var` declarations are not supported.
   */
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    message: (prefix, suffix, isHydridOuput) => {
      const defaultExpectedValue = isHydridOuput ? "false" : "true";
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`${defaultExpectedValue}\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * InvalidComponentArgs: Invalid arguments passed to `<MyAstroComponent>` component.
   * @description
   * Astro components cannot be rendered manually via a function call, such as `Component()` or `{items.map(Component)}`. Prefer the component syntax `<Component />` or `{items.map(item => <Component {...item} />)}`.
   */
  InvalidComponentArgs: {
    title: "Invalid component arguments.",
    message: (name) => `Invalid arguments passed to${name ? ` <${name}>` : ""} component.`,
    hint: "Astro components cannot be rendered directly via function call, such as `Component()` or `{items.map(Component)}`."
  },
  /**
   * @docs
   * @see
   * - [Pagination](https://docs.astro.build/en/core-concepts/routing/#pagination)
   * @description
   * The page number parameter was not found in your filepath.
   */
  PageNumberParamNotFound: {
    title: "Page number param not found.",
    message: (paramName) => `[paginate()] page number param \`${paramName}\` not found in your filepath.`,
    hint: "Rename your file to `[page].astro` or `[...page].astro`."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * - [Image component](https://docs.astro.build/en/guides/assets/#image--astroassets)
   * - [Image component#alt](https://docs.astro.build/en/guides/assets/#alt-required)
   * @description
   * The `alt` property allows you to provide descriptive alt text to users of screen readers and other assistive technologies. In order to ensure your images are accessible, the `Image` component requires that an `alt` be specified.
   *
   * If the image is merely decorative (i.e. doesn’t contribute to the understanding of the page), set `alt=""` so that screen readers know to ignore the image.
   */
  ImageMissingAlt: {
    title: "Missing alt property.",
    message: "The alt property is required.",
    hint: "The `alt` property is important for the purpose of accessibility, without it users using screen readers or other assistive technologies won't be able to understand what your image is supposed to represent. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt for more information."
  },
  /**
   * @docs
   * @see
   * - [Image Service API](https://docs.astro.build/en/reference/image-service-reference/)
   * @description
   * There was an error while loading the configured image service. This can be caused by various factors, such as your image service not properly exporting a compatible object in its default export, or an incorrect path.
   *
   * If you believe that your service is properly configured and this error is wrong, please [open an issue](https://astro.build/issues/).
   */
  InvalidImageService: {
    title: "Error while loading image service.",
    message: "There was an error loading the configured image service. Please see the stack trace for more information."
  },
  /**
   * @docs
   * @message
   * Missing width and height attributes for `IMAGE_URL`. When using remote images, both dimensions are always required in order to avoid cumulative layout shift (CLS).
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * - [Image component#width-and-height](https://docs.astro.build/en/guides/assets/#width-and-height)
   * @description
   * For remote images, `width` and `height` cannot be inferred from the original file. As such, in order to avoid CLS, those two properties are always required.
   *
   * If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets).
   */
  MissingImageDimension: {
    title: "Missing image dimensions",
    message: (missingDimension, imageURL) => `Missing ${missingDimension === "both" ? "width and height attributes" : `${missingDimension} attribute`} for ${imageURL}. When using remote images, both dimensions are always required in order to avoid CLS.`,
    hint: "If your image is inside your `src` folder, you probably meant to import it instead. See [the Imports guide for more information](https://docs.astro.build/en/guides/imports/#other-assets)."
  },
  /**
   * @docs
   * @description
   * The built-in image services do not currently support optimizing all image formats.
   *
   * For unsupported formats such as SVGs and GIFs, you may be able to use an `img` tag directly:
   * ```astro
   * ---
   * import rocket from '../assets/images/rocket.svg';
   * ---
   *
   * <img src={rocket.src} width={rocket.width} height={rocket.height} alt="A rocketship in space." />
   * ```
   */
  UnsupportedImageFormat: {
    title: "Unsupported image format",
    message: (format, imagePath, supportedFormats) => `Received unsupported format \`${format}\` from \`${imagePath}\`. Currently only ${supportedFormats.join(
      ", "
    )} are supported by our image services.`,
    hint: "Using an `img` tag directly instead of the `Image` component might be what you're looking for."
  },
  /**
   * @docs
   * @see
   * - [`getStaticPaths()`](https://docs.astro.build/en/reference/api-reference/#getstaticpaths)
   * - [`params`](https://docs.astro.build/en/reference/api-reference/#params)
   * @description
   * The endpoint is prerendered with an `undefined` param so the generated path will collide with another route.
   *
   * If you cannot prevent passing `undefined`, then an additional extension can be added to the endpoint file name to generate the file with a different name. For example, renaming `pages/api/[slug].ts` to `pages/api/[slug].json.ts`.
   */
  PrerenderDynamicEndpointPathCollide: {
    title: "Prerendered dynamic endpoint has path collision.",
    message: (pathname) => `Could not render \`${pathname}\` with an \`undefined\` param as the generated path will collide during prerendering. Prevent passing \`undefined\` as \`params\` for the endpoint's \`getStaticPaths()\` function, or add an additional extension to the endpoint's filename.`,
    hint: (filename) => `Rename \`${filename}\` to \`${filename.replace(/\.(js|ts)/, (m) => `.json` + m)}\``
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * An image's `src` property is not valid. The Image component requires the `src` attribute to be either an image that has been ESM imported or a string. This is also true for the first parameter of `getImage()`.
   *
   * ```astro
   * ---
   * import { Image } from "astro:assets";
   * import myImage from "../assets/my_image.png";
   * ---
   *
   * <Image src={myImage} alt="..." />
   * <Image src="https://example.com/logo.png" width={300} height={300} alt="..." />
   * ```
   *
   * In most cases, this error happens when the value passed to `src` is undefined.
   */
  ExpectedImage: {
    title: "Expected src to be an image.",
    message: (options) => `Expected \`src\` property to be either an ESM imported image or a string with the path of a remote image. Received \`${options}\`.`,
    hint: "This error can often happen because of a wrong path. Make sure the path to your image is correct."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * `getImage()`'s first parameter should be an object with the different properties to apply to your image.
   *
   * ```ts
   * import { getImage } from "astro:assets";
   * import myImage from "../assets/my_image.png";
   *
   * const optimizedImage = await getImage({src: myImage, width: 300, height: 300});
   * ```
   *
   * In most cases, this error happens because parameters were passed directly instead of inside an object.
   */
  ExpectedImageOptions: {
    title: "Expected image options.",
    message: (options) => `Expected getImage() parameter to be an object. Received \`${options}\`.`
  },
  /**
   * @docs
   * @message
   * Could not find requested image `IMAGE_PATH` at `FULL_IMAGE_PATH`.
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * Astro could not find an image you included in your Markdown content. Usually, this is simply caused by a typo in the path.
   *
   * Images in Markdown are relative to the current file. To refer to an image that is located in the same folder as the `.md` file, the path should start with `./`
   */
  MarkdownImageNotFound: {
    title: "Image not found.",
    message: (imagePath, fullImagePath) => `Could not find requested image \`${imagePath}\`${fullImagePath ? ` at \`${fullImagePath}\`.` : "."}`,
    hint: "This is often caused by a typo in the image path. Please make sure the file exists, and is spelled correctly."
  },
  /**
   * @docs
   * @description
   * Making changes to the response, such as setting headers, cookies, and the status code cannot be done outside of page components.
   */
  ResponseSentError: {
    title: "Unable to set response.",
    message: "The response has already been sent to the browser and cannot be altered."
  },
  /**
   * @docs
   * @description
   * Thrown when the middleware does not return any data or call the `next` function.
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware((context, _) => {
   * 	// doesn't return anything or call `next`
   * 	context.locals.someData = false;
   * });
   * ```
   */
  MiddlewareNoDataOrNextCalled: {
    title: "The middleware didn't return a response or call `next`.",
    message: "The middleware needs to either return a `Response` object or call the `next` function."
  },
  /**
   * @docs
   * @description
   * Thrown in development mode when middleware returns something that is not a `Response` object.
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware(() => {
   *   return "string"
   * });
   * ```
   */
  MiddlewareNotAResponse: {
    title: "The middleware returned something that is not a `Response` object.",
    message: "Any data returned from middleware must be a valid `Response` object."
  },
  /**
   * @docs
   * @description
   *
   * Thrown in development mode when `locals` is overwritten with something that is not an object
   *
   * For example:
   * ```ts
   * import {defineMiddleware} from "astro/middleware";
   * export const onRequest = defineMiddleware((context, next) => {
   *   context.locals = 1541;
   *   return next();
   * });
   * ```
   */
  LocalsNotAnObject: {
    title: "Value assigned to `locals` is not accepted.",
    message: "`locals` can only be assigned to an object. Other values like numbers, strings, etc. are not accepted.",
    hint: "If you tried to remove some information from the `locals` object, try to use `delete` or set the property to `undefined`."
  },
  /**
   * @docs
   * @see
   * - [Assets (Experimental)](https://docs.astro.build/en/guides/assets/)
   * @description
   * When using the default image services, `Image`'s and `getImage`'s `src` parameter must be either an imported image or an URL, it cannot be a filepath.
   *
   * ```astro
   * ---
   * import { Image } from "astro:assets";
   * import myImage from "../my_image.png";
   * ---
   *
   * <!-- GOOD: `src` is the full imported image. -->
   * <Image src={myImage} alt="Cool image" />
   *
   * <!-- BAD: `src` is an image's `src` path instead of the full image. -->
   * <Image src={myImage.src} alt="Cool image" />
   * ```
   */
  LocalImageUsedWrongly: {
    title: "ESM imported images must be passed as-is.",
    message: (imageFilePath) => `\`Image\`'s and \`getImage\`'s \`src\` parameter must be an imported image or an URL, it cannot be a filepath. Received \`${imageFilePath}\`.`
  },
  /**
   * @docs
   * @see
   * - [Astro.glob](https://docs.astro.build/en/reference/api-reference/#astroglob)
   * @description
   * `Astro.glob()` can only be used in `.astro` files. You can use [`import.meta.glob()`](https://vitejs.dev/guide/features.html#glob-import) instead to acheive the same result.
   */
  AstroGlobUsedOutside: {
    title: "Astro.glob() used outside of an Astro file.",
    message: (globStr) => `\`Astro.glob(${globStr})\` can only be used in \`.astro\` files. \`import.meta.glob(${globStr})\` can be used instead to achieve a similar result.`,
    hint: "See Vite's documentation on `import.meta.glob` for more information: https://vitejs.dev/guide/features.html#glob-import"
  },
  /**
   * @docs
   * @see
   * - [Astro.glob](https://docs.astro.build/en/reference/api-reference/#astroglob)
   * @description
   * `Astro.glob()` did not return any matching files. There might be a typo in the glob pattern.
   */
  AstroGlobNoMatch: {
    title: "Astro.glob() did not match any files.",
    message: (globStr) => `\`Astro.glob(${globStr})\` did not return any matching files. Check the pattern for typos.`
  },
  /**
   * @docs
   * @see
   * - [Astro.redirect](https://docs.astro.build/en/reference/api-reference/#astroredirect)
   * @description
   * A redirect must be given a location with the `Location` header.
   */
  RedirectWithNoLocation: {
    title: "A redirect must be given a location with the `Location` header."
  },
  /**
   * @docs
   * @see
   * - [Dynamic routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)
   * @description
   * A dynamic route param is invalid. This is often caused by an `undefined` parameter or a missing [rest parameter](https://docs.astro.build/en/core-concepts/routing/#rest-parameters).
   */
  InvalidDynamicRoute: {
    title: "Invalid dynamic route.",
    message: (route, invalidParam, received) => `The ${invalidParam} param for route ${route} is invalid. Received **${received}**.`
  },
  // No headings here, that way Vite errors are merged with Astro ones in the docs, which makes more sense to users.
  // Vite Errors - 4xxx
  /**
   * @docs
   * @see
   * - [Vite troubleshooting guide](https://vitejs.dev/guide/troubleshooting.html)
   * @description
   * Vite encountered an unknown error while rendering your project. We unfortunately do not know what happened (or we would tell you!)
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownViteError: {
    title: "Unknown Vite Error."
  },
  /**
   * @docs
   * @see
   * - [Type Imports](https://docs.astro.build/en/guides/typescript/#type-imports)
   * @description
   * Astro could not import the requested file. Oftentimes, this is caused by the import path being wrong (either because the file does not exist, or there is a typo in the path)
   *
   * This message can also appear when a type is imported without specifying that it is a [type import](https://docs.astro.build/en/guides/typescript/#type-imports).
   */
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  /**
   * @docs
   * @see
   * - [Glob Patterns](https://docs.astro.build/en/guides/imports/#glob-patterns)
   * @description
   * Astro encountered an invalid glob pattern. This is often caused by the glob pattern not being a valid file path.
   */
  InvalidGlob: {
    title: "Invalid glob pattern.",
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  /**
   * @docs
   * @description
   * Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error.
   */
  FailedToFindPageMapSSR: {
    title: "Astro couldn't find the correct page to render",
    message: "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error. Please file an issue."
  },
  /**
   * @docs
   * @kind heading
   * @name CSS Errors
   */
  // CSS Errors - 5xxx
  /**
   * @docs
   * @see
   * 	- [Styles and CSS](https://docs.astro.build/en/guides/styling/)
   * @description
   * Astro encountered an unknown error while parsing your CSS. Oftentimes, this is caused by a syntax error and the error message should contain more information.
   */
  UnknownCSSError: {
    title: "Unknown CSS Error."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * CSSSyntaxError: Missed semicolon<br/>
   * CSSSyntaxError: Unclosed string<br/>
   * @description
   * Astro encountered an error while parsing your CSS, due to a syntax error. This is often caused by a missing semicolon.
   */
  CSSSyntaxError: {
    title: "CSS Syntax Error."
  },
  /**
   * @docs
   * @kind heading
   * @name Markdown Errors
   */
  // Markdown Errors - 6xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error while parsing your Markdown. Oftentimes, this is caused by a syntax error and the error message should contain more information.
   */
  UnknownMarkdownError: {
    title: "Unknown Markdown Error."
  },
  /**
   * @docs
   * @message
   * **Example error messages:**<br/>
   * can not read an implicit mapping pair; a colon is missed<br/>
   * unexpected end of the stream within a double quoted scalar<br/>
   * can not read a block mapping entry; a multiline key may not be an implicit key
   * @description
   * Astro encountered an error while parsing the frontmatter of your Markdown file.
   * This is often caused by a mistake in the syntax, such as a missing colon or a missing end quote.
   */
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter."
  },
  /**
   * @docs
   * @see
   * - [Modifying frontmatter programmatically](https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically)
   * @description
   * A remark or rehype plugin attempted to inject invalid frontmatter. This occurs when "astro.frontmatter" is set to `null`, `undefined`, or an invalid JSON object.
   */
  InvalidFrontmatterInjectionError: {
    title: "Invalid frontmatter injection.",
    message: 'A remark or rehype plugin attempted to inject invalid frontmatter. Ensure "astro.frontmatter" is set to a valid JSON object that is not `null` or `undefined`.',
    hint: "See the frontmatter injection docs https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically for more information."
  },
  /**
   * @docs
   * @see
   * - [MDX installation and usage](https://docs.astro.build/en/guides/integrations-guide/mdx/)
   * @description
   * Unable to find the official `@astrojs/mdx` integration. This error is raised when using MDX files without an MDX integration installed.
   */
  MdxIntegrationMissingError: {
    title: "MDX integration missing.",
    message: (file) => `Unable to render ${file}. Ensure that the \`@astrojs/mdx\` integration is installed.`,
    hint: "See the MDX integration docs for installation and usage instructions: https://docs.astro.build/en/guides/integrations-guide/mdx/"
  },
  // Config Errors - 7xxx
  /**
   * @docs
   * @see
   * - [Configuration Reference](https://docs.astro.build/en/reference/configuration-reference/)
   * @description
   * Astro encountered an unknown error loading your Astro configuration file.
   * This is often caused by a syntax error in your config and the message should offer more information.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownConfigError: {
    title: "Unknown configuration error."
  },
  /**
   * @docs
   * @see
   * - [--config](https://docs.astro.build/en/reference/cli-reference/#--config-path)
   * @description
   * The specified configuration file using `--config` could not be found. Make sure that it exists or that the path is correct
   */
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  /**
   * @docs
   * @see
   * - [Configuration reference](https://docs.astro.build/en/reference/configuration-reference/)
   * @description
   * Astro detected a legacy configuration option in your configuration file.
   */
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  /**
   * @docs
   * @kind heading
   * @name CLI Errors
   */
  // CLI Errors - 8xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error while starting one of its CLI commands. The error message should contain more information.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownCLIError: {
    title: "Unknown CLI Error."
  },
  /**
   * @docs
   * @description
   * `astro sync` command failed to generate content collection types.
   * @see
   * - [Content collections documentation](https://docs.astro.build/en/guides/content-collections/)
   */
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    message: (errorMessage) => `\`astro sync\` command failed to generate content collection types: ${errorMessage}`,
    hint: "Check your `src/content/config.*` file for typos."
  },
  /**
   * @docs
   * @kind heading
   * @name Content Collection Errors
   */
  // Content Collection Errors - 9xxx
  /**
   * @docs
   * @description
   * Astro encountered an unknown error loading your content collections.
   * This can be caused by certain errors inside your `src/content/config.ts` file or some internal errors.
   *
   * If you can reliably cause this error to happen, we'd appreciate if you could [open an issue](https://astro.build/issues/)
   */
  UnknownContentCollectionError: {
    title: "Unknown Content Collection Error."
  },
  /**
   * @docs
   * @message
   * **Example error message:**<br/>
   * **blog** → **post.md** frontmatter does not match collection schema.<br/>
   * "title" is required.<br/>
   * "date" must be a valid date.
   * @description
   * A Markdown or MDX entry in `src/content/` does not match its collection schema.
   * Make sure that all required fields are present, and that all fields are of the correct type.
   * You can check against the collection schema in your `src/content/config.*` file.
   * See the [Content collections documentation](https://docs.astro.build/en/guides/content-collections/) for more information.
   */
  InvalidContentEntryFrontmatterError: {
    title: "Content entry frontmatter does not match schema.",
    message: (collection, entryId, error) => {
      return [
        `**${String(collection)} \u2192 ${String(
          entryId
        )}** frontmatter does not match collection schema.`,
        ...error.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` → `ENTRY_ID` has an invalid slug. `slug` must be a string.
   * @see
   * - [The reserved entry `slug` field](https://docs.astro.build/en/guides/content-collections/)
   * @description
   * An entry in `src/content/` has an invalid `slug`. This field is reserved for generating entry slugs, and must be a string when present.
   */
  InvalidContentEntrySlugError: {
    title: "Invalid content entry slug.",
    message: (collection, entryId) => {
      return `${String(collection)} \u2192 ${String(
        entryId
      )} has an invalid slug. \`slug\` must be a string.`;
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  /**
   * @docs
   * @see
   * - [The reserved entry `slug` field](https://docs.astro.build/en/guides/content-collections/#defining-custom-slugs)
   * @description
   * A content collection schema should not contain the `slug` field. This is reserved by Astro for generating entry slugs. Remove `slug` from your schema. You can still use custom slugs in your frontmatter.
   */
  ContentSchemaContainsSlugError: {
    title: "Content Schema should not contain `slug`.",
    message: (collectionName) => `A content collection schema should not contain \`slug\` since it is reserved for slug generation. Remove this from your ${collectionName} collection schema.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on the `slug` field."
  },
  /**
   * @docs
   * @message A collection queried via `getCollection()` does not exist.
   * @description
   * When querying a collection, ensure a collection directory with the requested name exists under `src/content/`.
   */
  CollectionDoesNotExistError: {
    title: "Collection does not exist",
    message: (collectionName) => `The collection **${collectionName}** does not exist. Ensure a collection directory with this name exists.`,
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more on creating collections."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains a mix of content and data entries. All entries must be of the same type.
   * @see
   * - [Defining content collections](https://docs.astro.build/en/guides/content-collections/#defining-collections)
   * @description
   * A content collection cannot contain a mix of content and data entries. You must store entries in separate collections by type.
   */
  MixedContentDataCollectionError: {
    title: "Content and data cannot be in same collection.",
    message: (collection) => {
      return `**${collection}** contains a mix of content and data entries. All entries must be of the same type.`;
    },
    hint: "Store data entries in a new collection separate from your content collection."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains entries of type `ACTUAL_TYPE`, but is configured as a `EXPECTED_TYPE` collection.
   * @see
   * - [Defining content collections](https://docs.astro.build/en/guides/content-collections/#defining-collections)
   * @description
   * Content collections must contain entries of the type configured. Collections are `type: 'content'` by default. Try adding `type: 'data'` to your collection config for data collections.
   */
  ContentCollectionTypeMismatchError: {
    title: "Collection contains entries of a different type.",
    message: (collection, expectedType, actualType) => {
      return `${collection} contains ${expectedType} entries, but is configured as a ${actualType} collection.`;
    }
  },
  /**
   * @docs
   * @message `COLLECTION_ENTRY_NAME` failed to parse.
   * @description
   * Collection entries of `type: 'data'` must return an object with valid JSON (for `.json` entries) or YAML (for `.yaml` entries).
   */
  DataCollectionEntryParseError: {
    title: "Data collection entry failed to parse.",
    message: (entryId, errorMessage) => {
      return `**${entryId}** failed to parse: ${errorMessage}`;
    },
    hint: "Ensure your data entry is an object with valid JSON (for `.json` entries) or YAML (for `.yaml` entries)."
  },
  /**
   * @docs
   * @message `COLLECTION_NAME` contains multiple entries with the same slug: `SLUG`. Slugs must be unique.
   * @description
   * Content collection entries must have unique slugs. Duplicates are often caused by the `slug` frontmatter property.
   */
  DuplicateContentEntrySlugError: {
    title: "Duplicate content entry slug.",
    message: (collection, slug) => {
      return `**${collection}** contains multiple entries with the same slug: \`${slug}\`. Slugs must be unique.`;
    }
  },
  /**
   * @docs
   * @see
   * - [devalue library](https://github.com/rich-harris/devalue)
   * @description
   * `transform()` functions in your content config must return valid JSON, or data types compatible with the devalue library (including Dates, Maps, and Sets).
   */
  UnsupportedConfigTransformError: {
    title: "Unsupported transform in content config.",
    message: (parseError) => `\`transform()\` functions in your content config must return valid JSON, or data types compatible with the devalue library (including Dates, Maps, and Sets).
Full error: ${parseError}`,
    hint: "See the devalue library for all supported types: https://github.com/rich-harris/devalue"
  },
  // Generic catch-all - Only use this in extreme cases, like if there was a cosmic ray bit flip
  UnknownError: {
    title: "Unknown Error."
  }
};

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByTitle(title) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].title === title);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { name, title, message, stack, location, hint, frame } = props;
    this.title = title;
    if (name && name !== "Error") {
      this.name = name;
    } else if (this.title) {
      const errorData = (_a = getErrorDataByTitle(this.title)) == null ? void 0 : _a.name;
      if (errorData) {
        this.name = errorData;
      }
    }
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

function validateArgs(args) {
  if (args.length !== 3)
    return false;
  if (!args[0] || typeof args[0] !== "object")
    return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  var _a;
  const name = ((_a = moduleId == null ? void 0 : moduleId.split("/").pop()) == null ? void 0 : _a.replace(".astro", "")) ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...AstroErrorData.InvalidComponentArgs,
        message: AstroErrorData.InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "2.9.3";

function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult) => {
    if (typeof importMetaGlobResult === "string") {
      throw new AstroError({
        ...AstroErrorData.AstroGlobUsedOutside,
        message: AstroErrorData.AstroGlobUsedOutside.message(JSON.stringify(importMetaGlobResult))
      });
    }
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new AstroError({
        ...AstroErrorData.AstroGlobNoMatch,
        message: AstroErrorData.AstroGlobNoMatch.message(JSON.stringify(importMetaGlobResult))
      });
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(site) {
  return {
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    glob: createAstroGlobFn()
  };
}

function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a;
  const { request, params } = context;
  const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` with an \`export const prerender = false\` to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done)
        return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

const escapeHTML = escape;
class HTMLBytes extends Uint8Array {
}
Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  }
});
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
function hasGetReader(obj) {
  return typeof obj.getReader === "function";
}
async function* unescapeChunksAsync(iterable) {
  if (hasGetReader(iterable)) {
    for await (const chunk of streamAsyncIterator(iterable)) {
      yield unescapeHTML(chunk);
    }
  } else {
    for await (const chunk of iterable) {
      yield unescapeHTML(chunk);
    }
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str || hasGetReader(str)) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else if (value === void 0) {
        return [PROP_TYPE.Value];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

function extractDirectives(inputProps, clientDirectives) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!clientDirectives.has(extracted.hydration.directive)) {
            const hydrationMethods = Array.from(clientDirectives.keys()).map((d) => `client:${d}`).join(", ");
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${hydrationMethods}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      // This is for HMR, probably can avoid it in prod
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.componentMetadata.has(factory.moduleId) && hint === "none") {
    hint = result.componentMetadata.get(factory.moduleId).propagation;
  }
  return hint === "in-tree" || hint === "self";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

var astro_island_prebuilt_default = `(()=>{var d;{let h={0:t=>t,1:t=>JSON.parse(t,a),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,a)),5:t=>new Set(JSON.parse(t,a)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},a=(t,e)=>{if(t===""||!Array.isArray(e))return e;let[r,n]=e;return r in h?h[r](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(d=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=async()=>{var o;if(!this.hydrator||!this.isConnected)return;let e=(o=this.parentElement)==null?void 0:o.closest("astro-island[ssr]");if(e){e.addEventListener("astro:hydrate",this.hydrate,{once:!0});return}let r=this.querySelectorAll("astro-slot"),n={},c=this.querySelectorAll("template[data-astro-template]");for(let s of c){let i=s.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[s.getAttribute("data-astro-template")||"default"]=s.innerHTML,s.remove())}for(let s of r){let i=s.closest(this.tagName);i!=null&&i.isSameNode(this)&&(n[s.getAttribute("name")||"default"]=s.innerHTML)}let l=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),a):{};await this.hydrator(this)(this.Component,l,n,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),this.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((e,r)=>{r.disconnect(),setTimeout(()=>this.childrenConnectedCallback(),0)}).observe(this,{childList:!0})}async childrenConnectedCallback(){let e=this.getAttribute("before-hydration-url");e&&await import(e),this.start()}start(){let e=JSON.parse(this.getAttribute("opts")),r=this.getAttribute("client");if(Astro[r]===void 0){window.addEventListener(\`astro:\${r}\`,()=>this.start(),{once:!0});return}Astro[r](async()=>{let n=this.getAttribute("renderer-url"),[c,{default:l}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),o=this.getAttribute("component-export")||"default";if(!o.includes("."))this.Component=c[o];else{this.Component=c;for(let s of o.split("."))this.Component=this.Component[s]}return this.hydrator=l,this.hydrate},e,this)}attributeChangedCallback(){this.hydrate()}},d.observedAttributes=["props"],d))}})();`;

const ISLAND_STYLES = `<style>astro-island,astro-slot,astro-static-slot{display:contents}</style>`;
function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(result, directive) {
  const clientDirectives = result.clientDirectives;
  const clientDirective = clientDirectives.get(directive);
  if (!clientDirective) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  return clientDirective;
}
function getPrescripts(result, type, directive) {
  switch (type) {
    case "both":
      return `${ISLAND_STYLES}<script>${getDirectiveScriptText(
        result,
        directive
      )};${astro_island_prebuilt_default}</script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(result, directive)}</script>`;
  }
  return "";
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => {
  if (k[0] !== "-" && k[1] !== "-")
    return `${kebab(k)}:${v}`;
  if (kebab(k) !== k)
    return `${kebab(k)}:var(${k});${k}:${v}`;
  return `${k}:${v}`;
}).join(";");
function defineScriptVars(vars) {
  var _a;
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${(_a = JSON.stringify(value)) == null ? void 0 : _a.replace(
      /<\/script>/g,
      "\\x3C/script>"
    )};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString)) {
    if (Array.isArray(value) && value.length === 2) {
      return markHTMLString(
        ` ${key}="${toAttributeString(`${toStyleString(value[0])};${value[1]}`, shouldEscape)}"`
      );
    }
    if (typeof value === "object") {
      return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
    }
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement$1(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
function renderAllHeadContent(result) {
  result._metadata.hasRenderedHead = true;
  const styles = Array.from(result.styles).filter(uniqueElements).map(
    (style) => style.props.rel === "stylesheet" ? renderElement$1("link", style) : renderElement$1("style", style)
  );
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script) => {
    return renderElement$1("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement$1("link", link, false));
  let content = links.join("\n") + styles.join("\n") + scripts.join("\n");
  if (result._metadata.extraHead.length > 0) {
    for (const part of result._metadata.extraHead) {
      content += part;
    }
  }
  return markHTMLString(content);
}
function* renderHead() {
  yield { type: "head" };
}
function* maybeRenderHead() {
  yield { type: "maybe-head" };
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
function renderSlot(result, slotted, fallback) {
  if (!slotted && fallback) {
    return renderSlot(result, fallback);
  }
  return {
    async render(destination) {
      await renderChild(destination, typeof slotted === "function" ? slotted(result) : slotted);
    }
  };
}
async function renderSlotToString(result, slotted, fallback) {
  let content = "";
  let instructions = null;
  const temporaryDestination = {
    write(chunk) {
      if (chunk instanceof Response)
        return;
      if (typeof chunk === "object" && "type" in chunk && typeof chunk.type === "string") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunkToString(result, chunk);
      }
    }
  };
  const renderInstance = renderSlot(result, slotted, fallback);
  await renderInstance.render(temporaryDestination);
  return markHTMLString(new SlotString(content, instructions));
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlotToString(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  if (typeof chunk.type === "string") {
    const instruction = chunk;
    switch (instruction.type) {
      case "directive": {
        const { hydration } = instruction;
        let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
        let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
        let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
        if (prescriptType) {
          let prescripts = getPrescripts(result, prescriptType, hydration.directive);
          return markHTMLString(prescripts);
        } else {
          return "";
        }
      }
      case "head": {
        if (result._metadata.hasRenderedHead) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      case "maybe-head": {
        if (result._metadata.hasRenderedHead || result._metadata.headInTree) {
          return "";
        }
        return renderAllHeadContent(result);
      }
      default: {
        if (chunk instanceof Response) {
          return "";
        }
        throw new Error(`Unknown chunk type: ${chunk.type}`);
      }
    }
  } else {
    if (isSlotString(chunk)) {
      let out = "";
      const c = chunk;
      if (c.instructions) {
        for (const instr of c.instructions) {
          out += stringifyChunk(result, instr);
        }
      }
      out += chunk.toString();
      return out;
    }
    return chunk.toString();
  }
}
function chunkToString(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return decoder.decode(chunk);
  } else {
    return stringifyChunk(result, chunk);
  }
}
function chunkToByteArray(result, chunk) {
  if (ArrayBuffer.isView(chunk)) {
    return chunk;
  } else {
    const stringified = stringifyChunk(result, chunk);
    return encoder.encode(stringified.toString());
  }
}
function isRenderInstance(obj) {
  return !!obj && typeof obj === "object" && "render" in obj && typeof obj.render === "function";
}

async function renderChild(destination, child) {
  child = await child;
  if (child instanceof SlotString) {
    destination.write(child);
  } else if (isHTMLString(child)) {
    destination.write(child);
  } else if (Array.isArray(child)) {
    for (const c of child) {
      await renderChild(destination, c);
    }
  } else if (typeof child === "function") {
    await renderChild(destination, child());
  } else if (typeof child === "string") {
    destination.write(markHTMLString(escapeHTML(child)));
  } else if (!child && child !== 0) ; else if (isRenderInstance(child)) {
    await child.render(destination);
  } else if (isRenderTemplateResult(child)) {
    await child.render(destination);
  } else if (isAstroComponentInstance(child)) {
    await child.render(destination);
  } else if (ArrayBuffer.isView(child)) {
    destination.write(child);
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    for await (const value of child) {
      await renderChild(destination, value);
    }
  } else {
    destination.write(child);
  }
}

var _a$1;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a$1] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      const value = slots[name](result);
      this.slotValues[name] = () => value;
    }
  }
  async init(result) {
    this.returnValue = this.factory(result, this.props, this.slotValues);
    return this.returnValue;
  }
  async render(destination) {
    if (this.returnValue === void 0) {
      await this.init(this.result);
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      await value.content.render(destination);
    } else {
      await renderChild(destination, value);
    }
  }
}
_a$1 = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (prop.startsWith("client:")) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
async function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result._metadata.propagators.has(factory)) {
    result._metadata.propagators.set(factory, instance);
    const returnValue = await instance.init(result);
    if (isHeadAndContent(returnValue)) {
      result._metadata.extraHead.push(returnValue.head);
    }
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

var _a;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  async render(destination) {
    for (let i = 0; i < this.htmlParts.length; i++) {
      const html = this.htmlParts[i];
      const exp = this.expressions[i];
      destination.write(markHTMLString(html));
      if (exp || exp === 0) {
        await renderChild(destination, exp);
      }
    }
  }
}
_a = renderTemplateResultSym;
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

async function renderToString(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let str = "";
  let renderedFirstPageChunk = false;
  const destination = {
    write(chunk) {
      if (isPage && !renderedFirstPageChunk) {
        renderedFirstPageChunk = true;
        if (!/<!doctype html/i.test(String(chunk))) {
          const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
          str += doctype;
        }
      }
      if (chunk instanceof Response)
        return;
      str += chunkToString(result, chunk);
    }
  };
  await templateResult.render(destination);
  return str;
}
async function renderToReadableStream(result, componentFactory, props, children, isPage = false, route) {
  const templateResult = await callComponentAsTemplateResultOrResponse(
    result,
    componentFactory,
    props,
    children,
    route
  );
  if (templateResult instanceof Response)
    return templateResult;
  let renderedFirstPageChunk = false;
  return new ReadableStream({
    start(controller) {
      const destination = {
        write(chunk) {
          if (isPage && !renderedFirstPageChunk) {
            renderedFirstPageChunk = true;
            if (!/<!doctype html/i.test(String(chunk))) {
              const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
              controller.enqueue(encoder.encode(doctype));
            }
          }
          if (chunk instanceof Response) {
            throw new AstroError({
              ...AstroErrorData.ResponseSentError
            });
          }
          const bytes = chunkToByteArray(result, chunk);
          controller.enqueue(bytes);
        }
      };
      (async () => {
        try {
          await templateResult.render(destination);
          controller.close();
        } catch (e) {
          if (AstroError.is(e) && !e.loc) {
            e.setLocation({
              file: route == null ? void 0 : route.component
            });
          }
          setTimeout(() => controller.error(e), 0);
        }
      })();
    }
  });
}
async function callComponentAsTemplateResultOrResponse(result, componentFactory, props, children, route) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    return factoryResult;
  } else if (!isRenderTemplateResult(factoryResult)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(route == null ? void 0 : route.route, typeof factoryResult),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlotToString(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid-js", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid-js",
        "@astrojs/vue",
        "@astrojs/svelte",
        "@astrojs/lit"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && Component["astro:html"] === true;
}
const ASTRO_SLOT_EXP = /\<\/?astro-slot\b[^>]*>/g;
const ASTRO_STATIC_SLOT_EXP = /\<\/?astro-static-slot\b[^>]*>/g;
function removeStaticAstroSlot(html, supportsAstroStaticSlot) {
  const exp = supportsAstroStaticSlot ? ASTRO_STATIC_SLOT_EXP : ASTRO_SLOT_EXP;
  return html.replace(exp, "");
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b, _c;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers, clientDirectives } = result;
  const metadata = {
    astroStaticSlot: true,
    displayName
  };
  const { hydration, isPage, props } = extractDirectives(_props, clientDirectives);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ??= e;
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = await renderHTMLElement(
        result,
        Component,
        _props,
        slots
      );
      return {
        render(destination) {
          destination.write(output);
        }
      };
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlotToString(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const renderTemplateResult = renderTemplate`<${Tag}${internalSpreadAttributes(
      props
    )}${markHTMLString(
      childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
    )}`;
    html = "";
    const destination = {
      write(chunk) {
        if (chunk instanceof Response)
          return;
        html += chunkToString(result, chunk);
      }
    };
    await renderTemplateResult.render(destination);
  }
  if (!hydration) {
    return {
      render(destination) {
        var _a2;
        if (slotInstructions) {
          for (const instruction of slotInstructions) {
            destination.write(instruction);
          }
        }
        if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
          destination.write(html);
        } else if (html && html.length > 0) {
          destination.write(
            markHTMLString(
              removeStaticAstroSlot(html, ((_a2 = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _a2.supportsAstroStaticSlot) ?? false)
            )
          );
        }
      }
    };
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        let tagName = ((_c = renderer == null ? void 0 : renderer.ssr) == null ? void 0 : _c.supportsAstroStaticSlot) ? !!metadata.hydrate ? "astro-slot" : "astro-static-slot" : "astro-slot";
        let expectedHTML = key === "default" ? `<${tagName}>` : `<${tagName} name="${key}">`;
        if (!html.includes(expectedHTML)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  return {
    render(destination) {
      if (slotInstructions) {
        for (const instruction of slotInstructions) {
          destination.write(instruction);
        }
      }
      destination.write({ type: "directive", hydration });
      destination.write(markHTMLString(renderElement$1("astro-island", island, false)));
    }
  };
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlotToString(result, slots == null ? void 0 : slots.default);
  return {
    render(destination) {
      if (children == null)
        return;
      destination.write(children);
    }
  };
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => chunkToString(result, instr)).join("") : "";
  return {
    render(destination) {
      destination.write(markHTMLString(hydrationHtml + html));
    }
  };
}
async function renderAstroComponent(result, displayName, Component, props, slots = {}) {
  const instance = await createAstroComponentInstance(result, displayName, Component, props, slots);
  const chunks = [];
  const temporaryDestination = {
    write: (chunk) => chunks.push(chunk)
  };
  await instance.render(temporaryDestination);
  return {
    render(destination) {
      for (const chunk of chunks) {
        destination.write(chunk);
      }
    }
  };
}
async function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    Component = await Component;
  }
  if (isFragmentComponent(Component)) {
    return await renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return await renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return await renderAstroComponent(result, displayName, Component, props, slots);
  }
  return await renderFrameworkComponent(result, displayName, Component, props, slots);
}
async function renderComponentToString(result, displayName, Component, props, slots = {}, isPage = false, route) {
  let str = "";
  let renderedFirstPageChunk = false;
  let head = "";
  if (nonAstroPageNeedsHeadInjection(Component)) {
    for (const headChunk of maybeRenderHead()) {
      head += chunkToString(result, headChunk);
    }
  }
  try {
    const destination = {
      write(chunk) {
        if (isPage && !renderedFirstPageChunk) {
          renderedFirstPageChunk = true;
          if (!/<!doctype html/i.test(String(chunk))) {
            const doctype = result.compressHTML ? "<!DOCTYPE html>" : "<!DOCTYPE html>\n";
            str += doctype + head;
          }
        }
        if (chunk instanceof Response)
          return;
        str += chunkToString(result, chunk);
      }
    };
    const renderInstance = await renderComponent(result, displayName, Component, props, slots);
    await renderInstance.render(destination);
  } catch (e) {
    if (AstroError.is(e) && !e.loc) {
      e.setLocation({
        file: route == null ? void 0 : route.component
      });
    }
    throw e;
  }
  return str;
}
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return !!(pageComponent == null ? void 0 : pageComponent[needsHeadRenderingSymbol]);
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        const str = await renderToString(result, vnode.type, props, slots);
        if (str instanceof Response) {
          throw str;
        }
        const html = markHTMLString(str);
        return html;
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 == null ? void 0 : output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToString(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToString(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      return markHTMLString(output);
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, prerenderElementChildren(tag, children))}</${tag}>`
    )}`
  );
}
function prerenderElementChildren(tag, children) {
  if (typeof children === "string" && (tag === "style" || tag === "script")) {
    return markHTMLString(children);
  } else {
    return children;
  }
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

const isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
let StreamingCompatibleResponse;
function createResponseClass() {
  StreamingCompatibleResponse = class extends Response {
    #isStream;
    #body;
    constructor(body, init) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init);
      this.#isStream = isStream;
      this.#body = body;
    }
    get body() {
      return this.#body;
    }
    async text() {
      if (this.#isStream && isNodeJS) {
        let decoder = new TextDecoder();
        let body = this.#body;
        let out = "";
        for await (let chunk of streamAsyncIterator(body)) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (this.#isStream && isNodeJS) {
        let body = this.#body;
        let chunks = [];
        let len = 0;
        for await (let chunk of streamAsyncIterator(body)) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
    clone() {
      return new StreamingCompatibleResponse(this.#body, {
        status: this.status,
        statusText: this.statusText,
        headers: this.headers
      });
    }
  };
  return StreamingCompatibleResponse;
}
const createResponse = isNodeJS ? (body, init) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init);
  }
  return new StreamingCompatibleResponse(body, init);
} : (body, init) => new Response(body, init);

async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  var _a, _b;
  if (!isAstroComponentFactory(componentFactory)) {
    result._metadata.headInTree = ((_a = result.componentMetadata.get(componentFactory.moduleId)) == null ? void 0 : _a.containsHead) ?? false;
    const pageProps = { ...props ?? {}, "server:root": true };
    const str = await renderComponentToString(
      result,
      componentFactory.name,
      componentFactory,
      pageProps,
      null,
      true,
      route
    );
    const bytes = encoder.encode(str);
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  result._metadata.headInTree = ((_b = result.componentMetadata.get(componentFactory.moduleId)) == null ? void 0 : _b.containsHead) ?? false;
  let body;
  if (streaming) {
    body = await renderToReadableStream(result, componentFactory, props, children, true, route);
  } else {
    body = await renderToString(result, componentFactory, props, children, true, route);
  }
  if (body instanceof Response)
    return body;
  const init = result.response;
  const headers = new Headers(init.headers);
  if (!streaming && typeof body === "string") {
    body = encoder.encode(body);
    headers.set("Content-Length", body.byteLength.toString());
  }
  const response = createResponse(body, { ...init, headers });
  return response;
}

function __astro_tag_component__(Component, rendererName) {
  if (!Component)
    return;
  if (typeof Component !== "function")
    return;
  Object.defineProperty(Component, Renderer, {
    value: rendererName,
    enumerable: false,
    writable: false
  });
}
function spreadAttributes(values = {}, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    const error = e;
    if (Component[Symbol.for("mdx-component")]) {
      throw createFormattedError({
        message: error.message,
        title: error.name,
        hint: `This issue often occurs when your MDX component encounters runtime errors.`,
        name: error.name,
        stack: error.stack
      });
    }
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
function createFormattedError({ message, name, stack, hint }) {
  const error = new Error(message);
  error.name = name;
  error.stack = stack;
  error.hint = hint;
  return error;
}
var server_default = {
  check,
  renderToStaticMarkup
};

const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const onRequest = undefined;

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
    prerender: rawRouteData.prerender
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

const DELETED_EXPIRATION = /* @__PURE__ */ new Date(0);
const DELETED_VALUE = "deleted";
const responseSentSymbol$2 = Symbol.for("astro.responseSent");
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
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
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
    var _a;
    if ((_a = this.#outgoing) == null ? void 0 : _a.has(key)) {
      let [serializedValue, , isSetValue] = this.#outgoing.get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = this.#ensureParsed();
    const value = values[key];
    return new AstroCookie(value);
  }
  /**
   * Astro.cookies.has(key) returns a boolean indicating whether this cookie is either
   * part of the initial request or set via Astro.cookies.set(key)
   * @param key The cookie to check for.
   * @returns
   */
  has(key) {
    var _a;
    if ((_a = this.#outgoing) == null ? void 0 : _a.has(key)) {
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
    if (this.#request[responseSentSymbol$2]) {
      throw new AstroError({
        ...AstroErrorData.ResponseSentError
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
function attachToResponse(response, cookies) {
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
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
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

let lastMessage;
let lastMessageCount = 1;
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(/* @__PURE__ */ new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};

function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}
function slash(path) {
  return path.replace(/\\/g, "/");
}

const RedirectComponentInstance = {
  default() {
    return new Response(null, {
      status: 301
    });
  }
};
const RedirectSinglePageBuiltModule = {
  page: () => Promise.resolve(RedirectComponentInstance),
  onRequest: (ctx, next) => next(),
  renderers: []
};

function routeIsRedirect(route) {
  return (route == null ? void 0 : route.type) === "redirect";
}
function redirectRouteGenerate(redirectRoute, data) {
  const routeData = redirectRoute.redirectRoute;
  const route = redirectRoute.redirect;
  if (typeof routeData !== "undefined") {
    return (routeData == null ? void 0 : routeData.generate(data)) || (routeData == null ? void 0 : routeData.pathname) || "/";
  } else if (typeof route === "string") {
    return route;
  } else if (typeof route === "undefined") {
    return "/";
  }
  return route.destination;
}
function redirectRouteStatus(redirectRoute, method = "GET") {
  const routeData = redirectRoute.redirectRoute;
  if (typeof (routeData == null ? void 0 : routeData.redirect) === "object") {
    return routeData.redirect.status;
  } else if (method !== "GET") {
    return 308;
  }
  return 301;
}

async function callMiddleware(logging, onRequest, apiContext, responseFunction) {
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
      warn(
        logging,
        "middleware",
        `Using simple endpoints can cause unexpected issues in the chain of middleware functions.
It's strongly suggested to use full ${bold("Response")} objects.`
      );
    }
    if (nextCalled) {
      if (typeof value !== "undefined") {
        if (value instanceof Response === false) {
          throw new AstroError(AstroErrorData.MiddlewareNotAResponse);
        }
        return value;
      } else {
        if (responseFunctionPromise) {
          return responseFunctionPromise;
        } else {
          throw new AstroError(AstroErrorData.MiddlewareNotAResponse);
        }
      }
    } else if (typeof value === "undefined") {
      throw new AstroError(AstroErrorData.MiddlewareNoDataOrNextCalled);
    } else if (value instanceof Response === false) {
      throw new AstroError(AstroErrorData.MiddlewareNotAResponse);
    } else {
      return value;
    }
  });
}
function isEndpointOutput(endpointResult) {
  return !(endpointResult instanceof Response) && typeof endpointResult === "object" && typeof endpointResult.body === "string";
}

const clientAddressSymbol$2 = Symbol.for("astro.clientAddress");
const clientLocalsSymbol$2 = Symbol.for("astro.locals");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
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
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol$2 in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol$2);
    }
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$2);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(AstroErrorData.LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$2, val);
      }
    }
  });
  return context;
}
async function callEndpoint(mod, env, ctx, onRequest) {
  var _a;
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
      env.logging,
      onRequest,
      context,
      async () => {
        return await renderEndpoint(mod, context, env.ssr);
      }
    );
  } else {
    response = await renderEndpoint(mod, context, env.ssr);
  }
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  if (env.ssr && !((_a = ctx.route) == null ? void 0 : _a.prerender)) {
    if (response.hasOwnProperty("headers")) {
      warn(
        env.logging,
        "ssr",
        "Setting headers is not supported when returning an object. Please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
    if (response.encoding) {
      warn(
        env.logging,
        "ssr",
        "`encoding` is ignored in SSR. To return a charset other than UTF-8, please return an instance of Response. See https://docs.astro.build/en/core-concepts/endpoints/#server-endpoints-api-routes for more information."
      );
    }
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}

const clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
const responseSentSymbol$1 = Symbol.for("astro.responseSent");
function getFunctionExpression(slot) {
  var _a;
  if (!slot)
    return;
  if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  #result;
  #slots;
  #loggingOpts;
  constructor(result, slots, logging) {
    this.#result = result;
    this.#slots = slots;
    this.#loggingOpts = logging;
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!this.#slots)
      return false;
    return Boolean(this.#slots[name]);
  }
  async render(name, args = []) {
    if (!this.#slots || !this.has(name))
      return;
    const result = this.#result;
    if (!Array.isArray(args)) {
      warn(
        this.#loggingOpts,
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = this.#slots[name];
      const component = typeof slotValue === "function" ? await slotValue(result) : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = async () => typeof expression === "function" ? expression(...args) : expression;
        return await renderSlotToString(result, slot).then((res) => {
          return res != null ? String(res) : res;
        });
      }
      if (typeof component === "function") {
        return await renderJSX(result, component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlotToString(result, this.#slots[name]);
    const outHTML = chunkToString(result, content);
    return outHTML;
  }
}
let renderMarkdown = null;
function createResult(args) {
  const { markdown, params, request, resolve, locals } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = args.cookies;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    componentMetadata: args.componentMetadata ?? /* @__PURE__ */ new Map(),
    renderers: args.renderers,
    clientDirectives: args.clientDirectives,
    compressHTML: args.compressHTML,
    pathname: args.pathname,
    cookies,
    /** This function returns the `Astro` faux-global */
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        // @ts-expect-error
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$1 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$1);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        locals,
        request,
        url,
        redirect(path, status) {
          if (request[responseSentSymbol$1]) {
            throw new AstroError({
              ...AstroErrorData.ResponseSentError
            });
          }
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "__renderMarkdown", {
        // Ensure this API is not exposed to users
        enumerable: false,
        writable: false,
        // TODO: Remove this hole "Deno" logic once our plugin gets Deno support
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    response,
    _metadata: {
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set(),
      headInTree: false,
      extraHead: [],
      propagators: /* @__PURE__ */ new Map()
    }
  };
  return result;
}

async function renderPage({ mod, renderContext, env, cookies }) {
  if (routeIsRedirect(renderContext.route)) {
    return new Response(null, {
      status: redirectRouteStatus(renderContext.route, renderContext.request.method),
      headers: {
        location: redirectRouteGenerate(renderContext.route, renderContext.params)
      }
    });
  }
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: renderContext.links,
    styles: renderContext.styles,
    logging: env.logging,
    markdown: env.markdown,
    params: renderContext.params,
    pathname: renderContext.pathname,
    componentMetadata: renderContext.componentMetadata,
    resolve: env.resolve,
    renderers: env.renderers,
    clientDirectives: env.clientDirectives,
    compressHTML: env.compressHTML,
    request: renderContext.request,
    site: env.site,
    scripts: renderContext.scripts,
    ssr: env.ssr,
    status: renderContext.status ?? 200,
    cookies,
    locals: renderContext.locals ?? {}
  });
  if (typeof mod.components === "object") {
    Object.assign(renderContext.props, { components: mod.components });
  }
  let response = await renderPage$1(
    result,
    Component,
    renderContext.props,
    null,
    env.streaming,
    renderContext.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}
async function tryRenderRoute(routeType, renderContext, env, mod, onRequest) {
  const apiContext = createAPIContext({
    request: renderContext.request,
    params: renderContext.params,
    props: renderContext.props,
    site: env.site,
    adapterName: env.adapterName
  });
  switch (routeType) {
    case "page":
    case "redirect": {
      if (onRequest) {
        return await callMiddleware(
          env.logging,
          onRequest,
          apiContext,
          () => {
            return renderPage({
              mod,
              renderContext,
              env,
              cookies: apiContext.cookies
            });
          }
        );
      } else {
        return await renderPage({
          mod,
          renderContext,
          env,
          cookies: apiContext.cookies
        });
      }
    }
    case "endpoint": {
      const result = await callEndpoint(
        mod,
        env,
        renderContext,
        onRequest
      );
      return result;
    }
    default:
      throw new Error(`Couldn't find route of type [${routeType}]`);
  }
}
function isResponse(result, routeType) {
  return result instanceof Response && (routeType === "page" || routeType === "redirect");
}

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
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
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
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
    acc[key] = value == null ? void 0 : value.toString();
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
        ...AstroErrorData.PageNumberParamNotFound,
        message: AstroErrorData.PageNumberParamNotFound.message(paramName)
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
  isValidate,
  logging,
  ssr
}) {
  const cached = routeCache.get(route);
  if (cached == null ? void 0 : cached.staticPaths)
    return cached.staticPaths;
  validateDynamicRouteModule(mod, { ssr, route });
  if (ssr && !route.prerender) {
    const entry = Object.assign([], { keyed: /* @__PURE__ */ new Map() });
    routeCache.set(route, { ...cached, staticPaths: entry });
    return entry;
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
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
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  /** Clear the cache. */
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    var _a;
    if (this.mode === "production" && ((_a = this.cache[route.component]) == null ? void 0 : _a.staticPaths)) {
      warn(
        this.logging,
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
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}

async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  if (!route || route.pathname) {
    return [{}, {}];
  }
  const params = getRouteParams(route, pathname) ?? {};
  validatePrerenderEndpointCollision(route, mod, params);
  const staticPaths = await callGetStaticPaths({
    mod,
    route,
    routeCache,
    isValidate: true,
    logging,
    ssr
  });
  const matchedStaticPath = findPathItemByKey(staticPaths, params, route);
  if (!matchedStaticPath && (ssr ? route.prerender : true)) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(pathname),
      hint: AstroErrorData.NoMatchingStaticPathFound.hint([route.component])
    });
  }
  const props = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
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
        ...AstroErrorData.PrerenderDynamicEndpointPathCollide,
        message: AstroErrorData.PrerenderDynamicEndpointPathCollide.message(route.route),
        hint: AstroErrorData.PrerenderDynamicEndpointPathCollide.hint(route.component),
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
    logging: options.env.logging,
    ssr: options.env.ssr
  });
  const context = {
    ...options,
    pathname,
    params,
    props
  };
  Object.defineProperty(context, "locals", {
    enumerable: true,
    get() {
      return Reflect.get(request, clientLocalsSymbol$1);
    },
    set(val) {
      if (typeof val !== "object") {
        throw new AstroError(AstroErrorData.LocalsNotAnObject);
      } else {
        Reflect.set(request, clientLocalsSymbol$1, val);
      }
    }
  });
  return context;
}

function createEnvironment(options) {
  return options;
}

function createAssetLink(href, base, assetsPrefix) {
  if (assetsPrefix) {
    return joinPaths(assetsPrefix, slash(href));
  } else if (base) {
    return prependForwardSlash(joinPaths(base, slash(href)));
  } else {
    return href;
  }
}
function createStylesheetElement(stylesheet, base, assetsPrefix) {
  if (stylesheet.type === "inline") {
    return {
      props: {
        type: "text/css"
      },
      children: stylesheet.content
    };
  } else {
    return {
      props: {
        rel: "stylesheet",
        href: createAssetLink(stylesheet.src, base, assetsPrefix)
      },
      children: ""
    };
  }
}
function createStylesheetElementSet(stylesheets, base, assetsPrefix) {
  return new Set(stylesheets.map((s) => createStylesheetElement(s, base, assetsPrefix)));
}
function createModuleScriptElement(script, base, assetsPrefix) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base, assetsPrefix);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, base, assetsPrefix) {
  return {
    props: {
      type: "module",
      src: createAssetLink(src, base, assetsPrefix)
    },
    children: ""
  };
}

function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(decodeURI(pathname)));
}

const clientLocalsSymbol = Symbol.for("astro.locals");
const responseSentSymbol = Symbol.for("astro.responseSent");
class App {
  /**
   * The current environment of the application
   */
  #env;
  #manifest;
  #manifestData;
  #routeDataToRouteInfo;
  #encoder = new TextEncoder();
  #logging = {
    dest: consoleLogDestination,
    level: "info"
  };
  #baseWithoutTrailingSlash;
  constructor(manifest, streaming = true) {
    this.#manifest = manifest;
    this.#manifestData = {
      routes: manifest.routes.map((route) => route.routeData)
    };
    this.#routeDataToRouteInfo = new Map(manifest.routes.map((route) => [route.routeData, route]));
    this.#baseWithoutTrailingSlash = removeTrailingForwardSlash(this.#manifest.base);
    this.#env = this.#createEnvironment(streaming);
  }
  set setManifest(newManifest) {
    this.#manifest = newManifest;
  }
  /**
   * Creates an environment by reading the stored manifest
   *
   * @param streaming
   * @private
   */
  #createEnvironment(streaming = false) {
    return createEnvironment({
      adapterName: this.#manifest.adapterName,
      logging: this.#logging,
      markdown: this.#manifest.markdown,
      mode: "production",
      compressHTML: this.#manifest.compressHTML,
      renderers: this.#manifest.renderers,
      clientDirectives: this.#manifest.clientDirectives,
      resolve: async (specifier) => {
        if (!(specifier in this.#manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = this.#manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return createAssetLink(bundlePath, this.#manifest.base, this.#manifest.assetsPrefix);
          }
        }
      },
      routeCache: new RouteCache(this.#logging),
      site: this.#manifest.site,
      ssr: true,
      streaming
    });
  }
  set setManifestData(newManifestData) {
    this.#manifestData = newManifestData;
  }
  removeBase(pathname) {
    if (pathname.startsWith(this.#manifest.base)) {
      return pathname.slice(this.#baseWithoutTrailingSlash.length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (this.#manifest.assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = prependForwardSlash(this.removeBase(url.pathname));
    let routeData = matchRoute(pathname, this.#manifestData);
    if (routeData) {
      if (routeData.prerender)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      const notFoundRouteData = matchRoute("/404", this.#manifestData);
      if (notFoundRouteData == null ? void 0 : notFoundRouteData.prerender)
        return void 0;
      return notFoundRouteData;
    } else {
      return void 0;
    }
  }
  async render(request, routeData, locals) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    Reflect.set(request, clientLocalsSymbol, locals ?? {});
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = await this.#getModuleForRoute(routeData);
    const pageModule = await mod.page();
    const url = new URL(request.url);
    const renderContext = await this.#createRenderContext(
      url,
      request,
      routeData,
      mod,
      defaultStatus
    );
    let response;
    try {
      response = await tryRenderRoute(
        routeData.type,
        renderContext,
        this.#env,
        pageModule,
        mod.onRequest
      );
    } catch (err) {
      error(this.#logging, "ssr", err.stack || err.message || String(err));
      response = new Response(null, {
        status: 500,
        statusText: "Internal server error"
      });
    }
    if (isResponse(response, routeData.type)) {
      if (response.status === 500 || response.status === 404) {
        const errorRouteData = matchRoute("/" + response.status, this.#manifestData);
        if (errorRouteData && errorRouteData.route !== routeData.route) {
          mod = await this.#getModuleForRoute(errorRouteData);
          try {
            const newRenderContext = await this.#createRenderContext(
              url,
              request,
              routeData,
              mod,
              response.status
            );
            const page = await mod.page();
            const errorResponse = await tryRenderRoute(
              routeData.type,
              newRenderContext,
              this.#env,
              page
            );
            return errorResponse;
          } catch {
          }
        }
      }
      Reflect.set(response, responseSentSymbol, true);
      return response;
    } else {
      if (response.type === "response") {
        if (response.response.headers.get("X-Astro-Response") === "Not-Found") {
          const fourOhFourRequest = new Request(new URL("/404", request.url));
          const fourOhFourRouteData = this.match(fourOhFourRequest);
          if (fourOhFourRouteData) {
            return this.render(fourOhFourRequest, fourOhFourRouteData);
          }
        }
        return response.response;
      } else {
        const body = response.body;
        const headers = new Headers();
        const mimeType = mime.getType(url.pathname);
        if (mimeType) {
          headers.set("Content-Type", `${mimeType};charset=utf-8`);
        } else {
          headers.set("Content-Type", "text/plain;charset=utf-8");
        }
        const bytes = this.#encoder.encode(body);
        headers.set("Content-Length", bytes.byteLength.toString());
        const newResponse = new Response(bytes, {
          status: 200,
          headers
        });
        attachToResponse(newResponse, response.cookies);
        return newResponse;
      }
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
  /**
   * Creates the render context of the current route
   */
  async #createRenderContext(url, request, routeData, page, status = 200) {
    if (routeData.type === "endpoint") {
      const pathname = "/" + this.removeBase(url.pathname);
      const mod = await page.page();
      const handler = mod;
      return await createRenderContext({
        request,
        pathname,
        route: routeData,
        status,
        env: this.#env,
        mod: handler
      });
    } else {
      const pathname = prependForwardSlash(this.removeBase(url.pathname));
      const info = this.#routeDataToRouteInfo.get(routeData);
      const links = /* @__PURE__ */ new Set();
      const styles = createStylesheetElementSet(info.styles);
      let scripts = /* @__PURE__ */ new Set();
      for (const script of info.scripts) {
        if ("stage" in script) {
          if (script.stage === "head-inline") {
            scripts.add({
              props: {},
              children: script.children
            });
          }
        } else {
          scripts.add(createModuleScriptElement(script));
        }
      }
      const mod = await page.page();
      return await createRenderContext({
        request,
        pathname,
        componentMetadata: this.#manifest.componentMetadata,
        scripts,
        styles,
        links,
        route: routeData,
        status,
        mod,
        env: this.#env
      });
    }
  }
  async #getModuleForRoute(route) {
    if (route.type === "redirect") {
      return RedirectSinglePageBuiltModule;
    } else {
      if (this.#manifest.pageMap) {
        const importComponentInstance = this.#manifest.pageMap.get(route.component);
        if (!importComponentInstance) {
          throw new Error(
            `Unexpectedly unable to find a component instance for route ${route.route}`
          );
        }
        const pageModule = await importComponentInstance();
        return pageModule;
      } else if (this.#manifest.pageModule) {
        const importComponentInstance = this.#manifest.pageModule;
        return importComponentInstance;
      } else {
        throw new Error(
          "Astro couldn't find the correct page to render, probably because it wasn't correctly mapped for SSR usage. This is an internal error, please file an issue."
        );
      }
    }
  }
}

const clientAddressSymbol = Symbol.for("astro.clientAddress");
function createRequestFromNodeRequest(req, body) {
  var _a;
  const protocol = req.socket instanceof TLSSocket || req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
  const hostname = req.headers.host || req.headers[":authority"];
  const url = `${protocol}://${hostname}${req.url}`;
  const rawHeaders = req.headers;
  const entries = Object.entries(rawHeaders);
  const method = req.method || "GET";
  const request = new Request(url, {
    method,
    headers: new Headers(entries),
    body: ["HEAD", "GET"].includes(method) ? null : body
  });
  if ((_a = req.socket) == null ? void 0 : _a.remoteAddress) {
    Reflect.set(request, clientAddressSymbol, req.socket.remoteAddress);
  }
  return request;
}
class NodeApp extends App {
  match(req, opts = {}) {
    return super.match(req instanceof Request ? req : createRequestFromNodeRequest(req), opts);
  }
  render(req, routeData, locals) {
    if (typeof req.body === "string" && req.body.length > 0) {
      return super.render(
        req instanceof Request ? req : createRequestFromNodeRequest(req, Buffer.from(req.body)),
        routeData,
        locals
      );
    }
    if (typeof req.body === "object" && req.body !== null && Object.keys(req.body).length > 0) {
      return super.render(
        req instanceof Request ? req : createRequestFromNodeRequest(req, Buffer.from(JSON.stringify(req.body))),
        routeData,
        locals
      );
    }
    if ("on" in req) {
      let body = Buffer.from([]);
      let reqBodyComplete = new Promise((resolve, reject) => {
        req.on("data", (d) => {
          body = Buffer.concat([body, d]);
        });
        req.on("end", () => {
          resolve(body);
        });
        req.on("error", (err) => {
          reject(err);
        });
      });
      return reqBodyComplete.then(() => {
        return super.render(
          req instanceof Request ? req : createRequestFromNodeRequest(req, body),
          routeData,
          locals
        );
      });
    }
    return super.render(
      req instanceof Request ? req : createRequestFromNodeRequest(req),
      routeData,
      locals
    );
  }
}

const page = () => Promise.resolve().then(() => imageEndpoint);

const imageEndpoint___js = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  onRequest,
  page,
  renderers
}, Symbol.toStringTag, { value: 'Module' }));

const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg"
];

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const baseService = {
  validateOptions(options) {
    if (!options.src || typeof options.src !== "string" && typeof options.src !== "object") {
      throw new AstroError({
        ...AstroErrorData.ExpectedImage,
        message: AstroErrorData.ExpectedImage.message(JSON.stringify(options.src))
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/")) {
        throw new AstroError({
          ...AstroErrorData.LocalImageUsedWrongly,
          message: AstroErrorData.LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...AstroErrorData.MissingImageDimension,
          message: AstroErrorData.MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...AstroErrorData.UnsupportedImageFormat,
          message: AstroErrorData.UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
    }
    if (!options.format) {
      options.format = "webp";
    }
    return options;
  },
  getHTMLAttributes(options) {
    let targetWidth = options.width;
    let targetHeight = options.height;
    if (isESMImportedImage(options.src)) {
      const aspectRatio = options.src.width / options.src.height;
      if (targetHeight && !targetWidth) {
        targetWidth = Math.round(targetHeight * aspectRatio);
      } else if (targetWidth && !targetHeight) {
        targetHeight = Math.round(targetWidth / aspectRatio);
      } else if (!targetWidth && !targetHeight) {
        targetWidth = options.src.width;
        targetHeight = options.src.height;
      }
    }
    const { src, width, height, format, quality, ...attributes } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getURL(options) {
    if (!isESMImportedImage(options.src)) {
      return options.src;
    }
    const searchParams = new URLSearchParams();
    searchParams.append("href", options.src.src);
    options.width && searchParams.append("w", options.width.toString());
    options.height && searchParams.append("h", options.height.toString());
    options.quality && searchParams.append("q", options.quality.toString());
    options.format && searchParams.append("f", options.format);
    return joinPaths("/", "/_image?") + searchParams;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q")
    };
    return transform;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object";
}
async function getConfiguredImageService() {
  var _a;
  if (!((_a = globalThis == null ? void 0 : globalThis.astroAsset) == null ? void 0 : _a.imageService)) {
    const { default: service } = await Promise.resolve().then(() => sharp$1).catch((e) => {
      const error = new AstroError(AstroErrorData.InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset)
      globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, serviceConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...AstroErrorData.ExpectedImageOptions,
      message: AstroErrorData.ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  const service = await getConfiguredImageService();
  const validatedOptions = service.validateOptions ? await service.validateOptions(options, serviceConfig) : options;
  let imageURL = await service.getURL(validatedOptions, serviceConfig);
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage) {
    imageURL = globalThis.astroAsset.addStaticImage(validatedOptions);
  }
  return {
    rawOptions: options,
    options: validatedOptions,
    src: imageURL,
    attributes: service.getHTMLAttributes !== void 0 ? service.getHTMLAttributes(validatedOptions, serviceConfig) : {}
  };
}

const fnv1a52 = (str) => {
  const len = str.length;
  let i = 0, t0 = 0, v0 = 8997, t1 = 0, v1 = 33826, t2 = 0, v2 = 40164, t3 = 0, v3 = 52210;
  while (i < len) {
    v0 ^= str.charCodeAt(i++);
    t0 = v0 * 435;
    t1 = v1 * 435;
    t2 = v2 * 435;
    t3 = v3 * 435;
    t2 += v0 << 8;
    t3 += v1 << 8;
    t1 += t0 >>> 16;
    v0 = t0 & 65535;
    t2 += t1 >>> 16;
    v1 = t1 & 65535;
    v3 = t3 + (t2 >>> 16) & 65535;
    v2 = t2 & 65535;
  }
  return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const etag = (payload, weak = false) => {
  const prefix = weak ? 'W/"' : '"';
  return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
};

const $$Astro = createAstro("https://corentings.dev");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(AstroErrorData.ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(image.attributes)}>`;
}, "/home/yume/Documents/3.Dev/corentings.github.io/node_modules/astro/components/Image.astro", void 0);

const imageServiceConfig = {};
					const getImage = async (options) => await getImage$1(options, imageServiceConfig);

async function loadRemoteImage(src) {
  try {
    const res = await fetch(src);
    if (!res.ok) {
      return void 0;
    }
    return Buffer.from(await res.arrayBuffer());
  } catch (err) {
    return void 0;
  }
}
const get = async ({ request }) => {
  try {
    const imageService = await getConfiguredImageService();
    if (!isLocalService(imageService)) {
      throw new Error("Configured image service is not a local service");
    }
    const url = new URL(request.url);
    const transform = await imageService.parseURL(url, imageServiceConfig);
    if (!(transform == null ? void 0 : transform.src)) {
      throw new Error("Incorrect transform returned by `parseURL`");
    }
    let inputBuffer = void 0;
    const sourceUrl = isRemotePath(transform.src) ? new URL(transform.src) : new URL(transform.src, url.origin);
    inputBuffer = await loadRemoteImage(sourceUrl);
    if (!inputBuffer) {
      return new Response("Not Found", { status: 404 });
    }
    const { data, format } = await imageService.transform(
      inputBuffer,
      transform,
      imageServiceConfig
    );
    return new Response(data, {
      status: 200,
      headers: {
        "Content-Type": mime$1.getType(format) ?? `image/${format}`,
        "Cache-Control": "public, max-age=31536000",
        ETag: etag(data.toString()),
        Date: (/* @__PURE__ */ new Date()).toUTCString()
      }
    });
  } catch (err) {
    return new Response(`Server Error: ${err}`, { status: 500 });
  }
};

const imageEndpoint = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

let sharp;
const qualityTable = {
  low: 25,
  mid: 50,
  high: 80,
  max: 100
};
async function loadSharp() {
  let sharpImport;
  try {
    sharpImport = (await import('sharp')).default;
  } catch (e) {
    throw new Error("Could not find Sharp. Please install Sharp manually into your project.");
  }
  return sharpImport;
}
const sharpService = {
  validateOptions: baseService.validateOptions,
  getURL: baseService.getURL,
  parseURL: baseService.parseURL,
  getHTMLAttributes: baseService.getHTMLAttributes,
  async transform(inputBuffer, transformOptions) {
    if (!sharp)
      sharp = await loadSharp();
    const transform = transformOptions;
    if (transform.format === "svg")
      return { data: inputBuffer, format: "svg" };
    let result = sharp(inputBuffer, { failOnError: false, pages: -1 });
    result.rotate();
    if (transform.height && !transform.width) {
      result.resize({ height: transform.height });
    } else if (transform.width) {
      result.resize({ width: transform.width });
    }
    if (transform.format) {
      let quality = void 0;
      if (transform.quality) {
        const parsedQuality = parseQuality(transform.quality);
        if (typeof parsedQuality === "number") {
          quality = parsedQuality;
        } else {
          quality = transform.quality in qualityTable ? qualityTable[transform.quality] : void 0;
        }
      }
      result.toFormat(transform.format, { quality });
    }
    const { data, info } = await result.toBuffer({ resolveWithObject: true });
    return {
      data,
      format: info.format
    };
  }
};
var sharp_default = sharpService;

const sharp$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: sharp_default
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, Fragment as F, NodeApp as N, __astro_tag_component__ as _, createComponent as a, addAttribute as b, createAstro as c, renderComponent as d, renderSlot as e, renderHead as f, createVNode as g, deserializeManifest as h, imageEndpoint___js as i, maybeRenderHead as m, onRequest as o, renderTemplate as r, renderers, spreadAttributes as s, unescapeHTML as u };
