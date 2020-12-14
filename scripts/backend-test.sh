#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/Spring-HelpQueue

ls

export testdb_username=${testdb_username}
export db_username=${db_username}
export testdb_endpoint=${testdb_endpoint}
export db_endpoint=${db_endpoint}
export password=${password}

echo ${testdb_username}
echo ${db_username}
echo ${testdb_endpoint}
echo ${db_endpoint}
echo ${password}
sudo docker build --build-arg testdb_endpoint="$testdb_endpoint" -t backend:latest /home/ubuntu/Group-3-Final-Project/Spring-HelpQueue/

docker exec backend bash -c "mvn clean package" | grep 'BUILD SUCCESS'

EOF
                    
