#!/bin/bash
 
NPMVER="$(npm ls | grep  -o ^[A-Za-z].*@[[:digit:]][[:digit:]]*[[:digit:]]*\.[[:digit:]][[:digit:]]*[[:digit:]]*\.[[:digit:]][[:digit:]]*[[:digit:]]* | grep -o @.*\..*\..*$ | grep -o [[:digit:]].*)"
GITVER="$(git describe | grep -o [[:digit:]][[:digit:]]*[[:digit:]]*\.[[:digit:]][[:digit:]]*[[:digit:]]*\.[[:digit:]][[:digit:]]*[[:digit:]]*\.- | grep -o [[:digit:]].*\.[[:digit:]].*\.[[:digit:]]*- | sed "s/.$//g")"
echo "${GITVER}"="${NPMVER}"
