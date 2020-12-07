#!/bin/bash

#Creating secret credentials file for both rds's users
#Ensure to run command export db_username="your db username"
#Ensure to run command export testdb_endpoint="your testdb username"
#Ensure to run command export passwd="yourpasswd"


cd ~
rm -rf credentials
if [ ! -d credentials/ ]; then
  mkdir credentials
  cd credentials
  touch rds_passwd
  touch rds_username
  echo ${username} >> rds_username
  echo ${passwd} >> rds_passwd
  cd ~
fi

#Start terraform

cd ~/Group-3-Final-Project/terraform
terraform init
terraform plan
terraform apply -auto-approve

#Export output ip addresses into variables to help mask secrets and prevent them from being pushed to git hub

export jenkinsvm_ip="$(terraform output pulic_ip)"
export testvm_ip="$(terraform output testvm)"

#Export output endpoints addresses into variables to help mask secrets and prevent them from being pushed to git hub

export testdb_endpoint="$(terraform output rds_endpoint_test)"
export db_endpoint="$(terraform output rds_endpoint_crud)"

cd ~/database
mysql -h ${db_endpoint}.coaea37d1emt.eu-west-1.rds.amazonaws.com -P 3306 -u ${db_username} -p${passwd} < Create.sql
mysql -h ${testdb_endpoint}.coaea37d1emt.eu-west-1.rds.amazonaws.com -P 3306 -u ${testdb_username} -p${passwd} < Create_test.sql


#Sleep 10 seconds to ensure these vm are fully up

sleep 10

#Make key directory if it does not already exist. This will store keys and allow ansible to exchanges these keys between vms to allow ssh to and from both jenkins vm and testvm.

cd ~
rm -rf keys
if [ ! -d keys/ ]; then
  mkdir keys
  cd keys
  mkdir testvm
  mkdir jenkins
  cd ~
fi
 
#Generate testvm ssh public keys if it does not already exist.

ssh ubuntu@${testvm_ip} <<EOF

if [ ! -f ~/.ssh/id_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
else
  echo "Public key already exist"
fi

EOF

#Secure copy public key to the keys directory.

scp ubuntu@${testvm_ip}:~/.ssh/id_rsa.pub ~/keys/testvm
      
#Generate jenkins ssh public keys if it does not already exist.

ssh ubuntu@${jenkinsvm_ip} <<EOF
if [ ! -f ~/.ssh/d_rsa.pub ]; then
  ssh-keygen -b 2048 -t rsa -f ~/.ssh/id_rsa -q -N ""
else
  echo "Public key already exist"
fi

EOF

#Secure copy public key to the keys directory.

scp ubuntu@${jenkinsvm_ip}:~/.ssh/id_rsa.pub ~/keys/jenkins
    
#Start anible playbook which installs all the neccessary softwares, add sudo doers and pass public keys into each vm to allow ssh'ing.

cd ~/Group-3-Final-Project/ansible

ansible-playbook -i inventory playbook.yaml


    
#sleep 5

ssh -tt -i ~/.ssh/id_rsa ubuntu@${jenkinsvm_ip}
