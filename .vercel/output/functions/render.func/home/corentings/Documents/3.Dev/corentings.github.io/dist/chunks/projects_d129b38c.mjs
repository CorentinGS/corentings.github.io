export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_d8be11f4.mjs').then(n => n.q);

export { page };
