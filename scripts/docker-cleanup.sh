 #! /bin/bash

cd ~/Group-3-Final-Project/frontend/fp-group3-ticket

sudo docker stop $(docker ps -aq)
sudo docker rm $(docker ps -aq)
sudo docker rmi -f $(docker images -a -q)
sudo docker system prune

cd ~/Group-3-Final-Project/Spring-HelpQueue

sudo docker stop $(docker ps -aq)
sudo docker rm $(docker ps -aq)
sudo docker rmi -f $(docker images -a -q)
sudo docker system prune

echo "Docker cleanup complete"