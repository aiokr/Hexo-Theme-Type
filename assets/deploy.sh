cd ./public
git init
git config --global push.default matching
git config --global user.email "${GitHubEMail}"
git config --global user.name "aiokr"
git add --all .
git commit -m "Auto Builder of ${GitHubUser}'s dev"
git push --force "https://${GitHubKEY}@github.com/${GitHubUser}/type-live-Pages.git" master