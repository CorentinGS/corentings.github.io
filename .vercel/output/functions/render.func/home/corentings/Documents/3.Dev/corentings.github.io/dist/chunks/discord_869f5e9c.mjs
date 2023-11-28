export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_b20e1e06.mjs').then(n => n.f);

export { page };
