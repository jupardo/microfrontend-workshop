#!/bin/bash

# NGINX
service nginx start &

# NEXT.JS
yarn start

exit $?