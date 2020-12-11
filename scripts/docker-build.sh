#! /bin/bash

sudo systemctl disable nginx

cd /var/lib/jenkins

. ./databasecredentials.sh

ssh ubuntu@${testvm_ip} <<EOF

cd ~
. ./databasecredentials.sh

echo 'Building backend docker image'
cd ~/Group-3-Final-Project/Spring-HelpQueue
sudo docker build -t ${DOCKER_USERNAME}/backend .

echo 'Building frontend docker image'
cd ~/Group-3-Final-Project/frontend/fp-group3-ticket
sudo docker build -t ${DOCKER_USERNAME}/frontend .


sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
sudo docker push ${DOCKER_USERNAME}/frontend
sudo docker push ${DOCKER_USERNAME}/backend
EOF
