#!/bin/bash

set -e

cd ..
git fetch origin master
git reset --hard origin/master
rm -rf build

yarn
yarn build &> /dev/null # noisy

rm -rf /var/www/html/gdq/*
mv build/* /var/www/html/gdq/.
