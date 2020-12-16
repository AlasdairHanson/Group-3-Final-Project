 #! /bin/bash
 
cd /var/lib/jenkins/secrets

. ./aws_configure.sh

cd /var/lib/jenkins

sudo chown -R jenkins .kube
sudo chgrp -R jenkins .kube

. ./databasecredentials.sh

echo ${testvm_ip}
echo ${db_username}
echo ${db_endpoint}
echo ${testdb_endpoint}
echo ${password}
echo ${testdb_username}

cd /var/lib/jenkins/workspace/project3/Group-3-Final-Project/DevOps/kubernetes

sudo kubectl apply -f secrets.yaml
sudo kubectl create namespace group3
sudo kubectl delete pods --all pods --namespace=group3
sudo kubectl apply -f secrets.yaml
sudo kubectl apply -f frontend.yaml
sudo kubectl apply -f backend.yaml
sudo kubectl apply -f nginx.yaml 
sudo kubectl apply -f nginx-conf.yaml
sudo kubectl apply -f nginx-lb.yaml
sudo kubectl describe service nginx-lb
echo "Done"
