#!/bin/bash

# Start the SSH service
/sbin/my_init --skip-startup-files &> /dev/null &

# Display the bold prompt
bold=$(tput bold)
normal=$(tput sgr0)
echo "${bold}Press ENTER to start hacking...${normal}"

# Wait for ENTER
trap '' 2  # mock SIGINT on CTRL+C
read
trap 2  # enable SIGINT

# Print the greeting
cat /.box/greeting 2> /dev/null

while true; do
    su box
done
