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
sudo docker build --build-arg testdb_endpoint="$testdb_endpoint" --build-arg db_username="$db_username" --build-arg testdb_username="$testdb_username" --build-arg db_endpoint="$db_endpoint" --build-arg password="$password" -t backend:latest /home/ubuntu/Group-3-Final-Project/Spring-HelpQueue/

sudo docker run -d -p 8081:8081 --name backend backend:latest -e testdb_endpoint="${testdb_endpoint}" -e db_username="${db_username}" -e testdb_username="${testdb_username}" -e db_endpoint="${db_endpoint}" -e password="${password}"

EOF
                    
