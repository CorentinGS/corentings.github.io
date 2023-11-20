export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/talks_878fdfcd.mjs').then(n => n.j);

export { page };
