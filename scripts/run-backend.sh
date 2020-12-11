#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/Spring-HelpQueue/target

ls

java -jar Spring-HelpQueue-0.0.1-SNAPSHOT.war

curl localhost:8081/getTicket

EOF
