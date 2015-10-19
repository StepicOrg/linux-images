#!/bin/bash
# This script was copied from PostgreSQL Docker image.
# Original sources: https://github.com/docker-library/postgres/blob/ed23320582f4ec5b0e5e35c99d98966dacbc6ed8/9.4/docker-entrypoint.sh
sudo service postgresql start
export POSTGRES_PASSWORD="box"
export POSTGRES_USER="box"

sudo -u postgres psql -c "CREATE USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}' SUPERUSER;"
export PGPASSWORD="${POSTGRES_PASSWORD}"
createdb -h localhost -U $POSTGRES_USER $POSTGRES_USER
