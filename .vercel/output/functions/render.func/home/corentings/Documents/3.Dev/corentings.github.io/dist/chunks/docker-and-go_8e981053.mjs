export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_7b77f58f.mjs').then(n => n.b);

export { page };
