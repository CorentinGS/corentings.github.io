export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/talks_dd3a65b4.mjs').then(n => n.j);

export { page };
