#!/bin/bash

# Usage:
# cd publish
# # To only build the package
# # Package is placed in: ./package/nativescript-stripe-M.m.p.tgz.
# ./pack.sh
# # To build and publish the package
# ./publish.sh

SOURCE_DIR=../src;
TO_SOURCE_DIR=src;
PACK_DIR=package;
ROOT_DIR=..;
PUBLISH=--publish

install(){
    npm i
}

pack() {

    echo 'Clearing /src and /package...'
    node_modules/.bin/rimraf "$TO_SOURCE_DIR"
    node_modules/.bin/rimraf "$PACK_DIR"

    # copy src
    echo 'Copying src...'
    node_modules/.bin/ncp "$SOURCE_DIR" "$TO_SOURCE_DIR"

    # copy README & LICENSE to src
    echo 'Copying README, CHANGELOG and LICENSE to /src...'
    node_modules/.bin/ncp "$ROOT_DIR"/LICENSE "$TO_SOURCE_DIR"/LICENSE
    node_modules/.bin/ncp "$ROOT_DIR"/README.md "$TO_SOURCE_DIR"/README.md
    node_modules/.bin/ncp "$ROOT_DIR"/CHANGELOG.md "$TO_SOURCE_DIR"/CHANGELOG.md

    # compile package and copy files required by npm
    echo 'Building /src...'
    cd "$TO_SOURCE_DIR"
    node_modules/.bin/ngc -skipLibCheck --project tsconfig.json

    # remove unwanted files
    echo 'Removing unwanted files from /src...'
    node_modules/.bin/rimraf hooks typings references.d.ts .DS_Store **/.DS_Store

    cd ..

    echo 'Creating package...'
    # create package dir
    mkdir "$PACK_DIR"

    # create the package
    cd "$PACK_DIR"
    npm pack ../"$TO_SOURCE_DIR"

    # delete source directory used to create the package
    cd ..
    node_modules/.bin/rimraf "$TO_SOURCE_DIR"
}

install && pack
