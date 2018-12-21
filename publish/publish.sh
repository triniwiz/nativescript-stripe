#!/bin/bash

# Usage:
# cd publish
# # To only build the package
# # Package is placed in: ./package/nativescript-stripe-M.m.p.tgz.
# ./pack.sh
# # To build and publish the package
# ./publish.sh

PACK_DIR=package;

publish() {
    cd $PACK_DIR
    echo 'Publishing to npm...'
    npm publish *.tgz
    cd ..
}

./pack.sh && publish