export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_d4a072cb.mjs').then(n => n.g);

export { page };
