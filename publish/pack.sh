#!/bin/bash

#--------------------------------------------------------------------#
# Notice: check package.json

run(){
    npm i
}

finish() {
    echo -e "\e[44;1;37mPlugin packed successfully\e[0m"
}


run && finish
#--------------------------------------------------------------------#
