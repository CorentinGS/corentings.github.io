export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/talks_56913bae.mjs').then(n => n.j);

export { page };
