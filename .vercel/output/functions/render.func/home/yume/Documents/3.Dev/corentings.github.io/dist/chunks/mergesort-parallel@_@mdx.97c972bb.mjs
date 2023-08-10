export { o as onRequest, renderers } from '../renderers.mjs';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'mime/lite.js';
import 'html-escaper';

const page = () => import('./prerender.476b7605.mjs').then(n => n.m);

export { page };
