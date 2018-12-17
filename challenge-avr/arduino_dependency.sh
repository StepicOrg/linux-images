#!/bin/bash

ard_ide_v="1.8.8"

# Base makefile
git clone https://github.com/sudar/Arduino-Makefile /root/Arduino-Makefile
chmod 775 -R /root/Arduino-Makefile
# Download and unpack Arduino IDE
wget --no-verbose https://downloads.arduino.cc/arduino-${ard_ide_v}-linux64.tar.xz -P /root
tar xf /root/arduino-${ard_ide_v}-linux64.tar.xz --directory /root
mv /root/arduino-${ard_ide_v} /root/arduino-ide
chmod 775 -R /root/arduino-ide
rm -rf /root/arduino-${ard_ide_v}-linux64.tar.xz
