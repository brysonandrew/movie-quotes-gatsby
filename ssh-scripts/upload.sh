#!/usr/bin/env bash
echo "starting upload..."
echo -e "\xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5 \xf0\x9f\x94\xa5"
npm run build
sshpass -p 'darko88' rsync -r -v --progress -e ssh public/. kozm@46.101.97.14:/srv/www/liontongue.com --delete --exclude=".[!.]*"
