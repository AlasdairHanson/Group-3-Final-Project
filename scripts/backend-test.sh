#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cp ~/.env ~/Group-3-Final-Project/.env

cd ~/Group-3-Final-Project/Spring-HelpQueue

which docker-compose

docker-compose up -d --build

docker exec backend bash -c "mvn clean package" | grep 'BUILD SUCCESS'

EOF
                    
