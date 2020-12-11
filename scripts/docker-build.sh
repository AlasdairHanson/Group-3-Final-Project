#! /bin/bash

sudo systemctl disable nginx

cd /var/lib/jenkins

. ./databasecredentials.sh

ssh ubuntu@${testvm_ip} <<EOF

cd ~
. ./databasecredentials.sh

echo 'Building backend docker image'
cd ~/Group-3-Final-Project/Spring-HelpQueue
docker build -t ${DOCKER_USERNAME}/backend .

echo 'Building frontend docker image'
cd ~/Group-3-Final-Project/frontend/fp-group3-ticket
docker build -t ${DOCKER_USERNAME}/frontend .


docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
docker push ${DOCKER_USERNAME}/frontend
docker push ${DOCKER_USERNAME}/backend
EOF
