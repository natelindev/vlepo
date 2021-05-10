if [[ $(git describe --tags --exact-match --always) == *github-deployment* ]]; then
    exit 1
else
    exit 0
fi
