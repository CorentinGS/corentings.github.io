export { renderers } from '../renderers.mjs';

const page = () => import('./pages/__u16-eNBN.mjs').then(n => n._);

export { page };
