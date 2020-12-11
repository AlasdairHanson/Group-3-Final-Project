 #! /bin/bash
cd /home/jenkins/.jenkins/workspace/project3/Group-3-Final-Project/DevOps/kubernetes
sudo kubectl apply -f ~/secrets.yaml
sudo kubectl create namespace group3
sudo kubectl delete pods --all pods --namespace=group3
sudo kubectl apply -f nginx.yaml 
sudo kubectl apply -f nginx-conf.yaml
sudo kubectl apply -f frontend.yaml
sudo kubectl apply -f backend.yaml
sudo kubectl apply -f nginx-lb.yaml
kubectl describe service nginx-lb.yaml --namespace=group3
echo "Done"