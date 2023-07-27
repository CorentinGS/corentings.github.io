export { o as onRequest, renderers } from '../renderers.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'mime/lite.js';
import 'html-escaper';

const page = () => import('./prerender.3b4238fd.mjs').then(n => n.j);

export { page };
