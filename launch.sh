#!/bin/bash

(cd certs/ && ./generate-certificate.sh)

if [ ! -f public/index.html ]; then
  envsubst < config.js > src/client/config.js
  ./node_modules/.bin/gulp webpack
fi

http-server public/ -p 8080 -d false -g true -c-1 -S -C certs/server.crt -K certs/server.key
