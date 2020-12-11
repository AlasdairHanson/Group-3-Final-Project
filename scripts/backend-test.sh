#! /bin/bash

cd /var/lib/jenkins

. ./databasecredentials.sh

echo ${testvm_ip}

ssh ubuntu@${testvm_ip} <<EOF
cd ~
. ./databasecredentials.sh

if [ ! -d ~/Group-3-Final-Project ]; then
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
else 
   rm -rf Group-3-Final-Project
   git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Dev
fi

cd ~/Group-3-Final-Project/Spring-HelpQueue

which mvn

pwd

which java

java -version

mvn clean package

pwd
EOF
                    
