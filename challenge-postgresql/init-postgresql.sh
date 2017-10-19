#!/bin/bash

POSTGRES_USER=box
POSTGRES_PASSWORD=box

service postgresql start

sudo -u postgres psql -c "CREATE USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}' SUPERUSER;"
export PGPASSWORD="${POSTGRES_PASSWORD}"
createdb -h localhost -U $POSTGRES_USER $POSTGRES_USER

service postgresql stop
