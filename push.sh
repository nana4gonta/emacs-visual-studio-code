#!/bin/bash

git config --global user.email "kzkarino@rhodonit.com"
git config --global user.name "KzKarino"

CI_BUILD_DATE=`date +"%Y/%m/%d %T"`
CI_REMOTE_REPOSITORY="git@github.com:${CIRCLE_PROJECT_USERNAME}/${CIRCLE_PROJECT_REPONAME}.git"

git add --all :/
git commit -m "[auto] make build(${CI_BUILD_DATE})"
git push ${CI_REMOTE_REPOSITORY} master