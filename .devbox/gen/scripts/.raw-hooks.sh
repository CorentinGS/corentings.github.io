test -z $DEVBOX_COREPACK_ENABLED || corepack enable --install-directory "/workspaces/corentings.github.io/.devbox/virtenv/nodejs/corepack-bin/"
test -z $DEVBOX_COREPACK_ENABLED || export PATH="/workspaces/corentings.github.io/.devbox/virtenv/nodejs/corepack-bin/:$PATH"
yarn install
yarn add sharp --ignore-engines