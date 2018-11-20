#!/bin/bash

PACK_DIR=package;

publish() {
    cd $PACK_DIR
    echo 'Publishing to npm...'
    npm publish *.tgz
    cd ..
}

./pack.sh && publish