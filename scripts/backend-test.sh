#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/Spring-HelpQueue

which docker-compose

sudo -E testdb_username=${testdb_username} docker-compose up -d

docker exec backend bash -c "mvn clean package" | grep 'BUILD SUCCESS'


EOF
                    
