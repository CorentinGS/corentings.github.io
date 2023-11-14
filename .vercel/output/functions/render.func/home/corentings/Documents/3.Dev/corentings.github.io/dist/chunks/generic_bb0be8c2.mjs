export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_3e1f82bd.mjs').then(n => n.g);

export { page };
