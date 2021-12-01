#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploying'

# if you are deploying to https://vcgtz.github.io/vcgtz.github.io
git remote add origin git@github.com:vcgtz/vcgtz.github.io.git
git branch -M main
git push -uf origin main
# git push -f git@github.com:vcgtz/vcgtz.github.io.git master:gh-pages

cd -
