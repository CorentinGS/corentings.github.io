import { renderers } from '../../renderers.mjs';
import { onRequest } from '../../_empty-middleware.mjs';
import { c as createExports, a as adapter } from '../../chunks/entrypoint.33152fed.mjs';
import { manifest } from '../../manifest.9966f89a.mjs';
import '../../chunks/astro.b767b37f.mjs';
import 'clsx';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import '../../chunks/pages/image-endpoint.js.1be73898.mjs';
import 'mime/lite.js';
import 'node:fs';
import 'node:http';
import 'node:tls';
import 'node:crypto';
import 'node:stream/web';
import 'undici';
import 'fast-glob';
import 'node:path';
import 'node:url';
import 'node:fs/promises';
import 'set-cookie-parser';
import 'string-width';
import 'mime';
import 'path-to-regexp';

const page = () => import('../../chunks/prerender.5bd6f274.mjs').then(n => n.g);

const pageModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	onRequest,
	page,
	renderers
}, Symbol.toStringTag, { value: 'Module' }));

const _manifest = Object.assign(manifest, {
	pageModule,
	renderers,
});
const _args = undefined;

const _exports = createExports(_manifest);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageModule };
