#!/bin/bash

/sbin/my_init --skip-startup-files &>/dev/null &
echo "Initializing PostgreSQL..."
/.box/init-postgresql.sh
echo "...done. Type psql to start the PostgreSQL shell"

echo "Press ENTER to start hacking..."
trap '' 2  # mock SIGINT on CTRL+C
read
trap 2  # enable SIGINT

cat /.box/greeting
while true; do
    su box
done
