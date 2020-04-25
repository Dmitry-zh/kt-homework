
#git init
#git add -A
#git commit -m 'deploy'

# build
npm run build

# target build.js is in different path on development and production of GitHub Pages
# A better way should be using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
cp index.pages.html dist/index.html

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/Dmitry-zh/auth.git master:gh-pages
cd -