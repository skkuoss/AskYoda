export GIT_COMMITTER_EMAIL=${GIT_EMAIL}
export GIT_COMMITTER_NAME=${GIT_NAME}
git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* || exit
git fetch --all || exit
git checkout release || exit
git rebase develop || exit
git push https://${GITHUB_TOKEN}@github.com/skkuoss/AskYoda.git
