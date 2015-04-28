#!/bin/bash

service ssh start > /dev/null || exit 1

echo "Press ENTER to start hacking..."
trap '' 2  # mock SIGINT on CTRL+C
read
trap 2  # enable SIGINT

cat /.box/greeting 2> /dev/null
while true; do
    su box
done
