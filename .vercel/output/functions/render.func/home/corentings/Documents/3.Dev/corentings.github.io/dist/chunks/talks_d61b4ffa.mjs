export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/talks_416e31fd.mjs').then(n => n.t);

export { page };
