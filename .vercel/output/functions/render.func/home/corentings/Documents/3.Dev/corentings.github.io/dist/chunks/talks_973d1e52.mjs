export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/talks_53ebcf59.mjs').then(n => n.t);

export { page };
