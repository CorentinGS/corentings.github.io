export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./prerender_bc4782de.mjs').then(n => n.o);

export { page };
