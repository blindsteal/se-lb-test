#!/bin/bash

sudo rm -f /var/lib/mongodb/mongod.lock
export LC_ALL=C
sudo /etc/init.d/mongodb start