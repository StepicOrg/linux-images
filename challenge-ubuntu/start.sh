#!/bin/bash

# Start the SSH service and exit on error
service ssh start > /dev/null || exit 1

# Display the bold prompt
bold=$(tput bold)
normal=$(tput sgr0)
echo -n "${bold}Press ENTER to start hacking...${normal}"

# Wait for ENTER
trap '' 2  # mock SIGINT on CTRL+C
read
trap 2  # enable SIGINT

# Print the greeting
cat /.box/greeting 2> /dev/null

while true; do
    su box
done
