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

cd ~/Group-3-Final-Project/DevOps/terraform
terraform fmt
terraform init
terraform plan
terraform apply -auto-approve

#Export output ip addresses into variables to help mask secrets and prevent them from being pushed to git hub

export jenkinsvm_ip="$(terraform output jenkinsvm_ip)"
export testvm_ip="$(terraform output testvm_ip)"


#Export output endpoints addresses into variables to help mask secrets and prevent them from being pushed to git hub

export testdb_endpoint="$(terraform output rds_endpoint_test)"
#export db_endpoint="$(terraform output rds_endpoint_crud)"

#Passing in database schema

cd ~/Group-3-Final-Project/DevOps/database
#mysql -h ${db_endpoint}-P 3306 -u ${db_username} -p${passwd} < Create.sql
mysql -h ${testdb_endpoint} -P 3306 -u ${testdb_username} -p${passwd} < Create_test.sql


#Sleep 10 seconds to ensure these vm are fully up

sleep 1

#Make key directory if it does not already exist. This will store keys that I secure copy from any vm and use them for shh'ing into any vm.

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

#Passing all vm keys into master's autherized_keys file and sharing that file with the other vms to allow ssh'ing from anywhere.

cd ~
cat ~/keys/jenkins/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/keys/testvm/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
scp ~/.ssh/authorized_keys ubuntu@${jenkinsvm_ip}:~/
scp ~/.ssh/authorized_keys ubuntu@${testvm_ip}:~/

ssh ubuntu@${testvm_ip} <<EOF
cd ~
cat ~/authorized_keys >> ~/.ssh/authorized_keys
rm -rf authorized_keys

EOF

ssh ubuntu@${jenkinsvm_ip} <<EOF
cd ~
cat ~/authorized_keys >> ~/.ssh/authorized_keys
rm -rf authorized_keys

EOF

#Passing in the hosts into the known hosts

cd ~

sudo -- sh -c -e "echo '${​​​​​testvm_ip}​​​​​ testvm_ip' >> /etc/hosts";

sudo -- sh -c -e "echo '${​​​​​jenkinsvm_ip}​​​​​ jenkinsvm_ip' >> /etc/hosts";


#Start anible playbook which installs all the neccessary softwares, add sudo doers and pass public keys into each vm to allow ssh'ing.

cd ~/Group-3-Final-Project/ansible

ansible-playbook -i inventory playbook.yaml


    
sleep 1
