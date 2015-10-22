export PGPASSWORD="box"
alias psql="psql -h localhost"

echo "------------------------------------------"
sudo service postgresql start
echo "Type $(tput bold)psql$(tput sgr0) to start the PostgreSQL shell"
echo "------------------------------------------"
