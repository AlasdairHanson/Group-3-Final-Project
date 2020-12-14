 #! /bin/bash
 
cd /var/lib/jenkins

. ./databasecredentials.sh

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

cd ~/Group-3-Final-Project/

docker exec frontend bash -c "sudo npm install"

docker exec frontend bash -c "sudo npm test -- --watchAll=false"

EOF
