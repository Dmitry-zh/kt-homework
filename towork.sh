

git init
git add -A
git commit -m 'test'
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push https://github.com/Dmitry-zh/auth.git master:working
