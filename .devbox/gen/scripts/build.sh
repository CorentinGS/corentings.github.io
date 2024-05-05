set -e

if [ -z "$__DEVBOX_INIT_HOOK_e046f6e2029445ecefa5746d624e3f46e3f61a74f3b63b406c38f9937a5f2d32" ]; then
    . /workspaces/corentings.github.io/.devbox/gen/scripts/.hooks.sh
fi

yarn build
