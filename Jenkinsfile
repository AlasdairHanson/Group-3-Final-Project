pipeline{
        agent any
        environment {
		DATABASE_URI=credentials('DATABASE_URI')
		TEST_DATABASE_URI=credentials('TEST_DATABASE_URI')
                DOCKER_USERNAME=credentials('DOCKER_USERNAME')
		DOCKER_PASSWORD=credentials('DOCKER_PASSWORD')
		testvm_ip=credentials('testvm_ip')
		
        }
	
        stages{
            stage('Jenkin Test'){
                steps{
                    sh '''
		    echo "Hello From Group3"
                    '''
                    
                }
	    }
	   
            stage('Docker Build'){
                steps{
                    sh '''
                    cd ~/Group-3-Final-Project
		    sudo systemctl disable nginx
		    export DATABASE_URI=${DATABASE_URI}
		    export TEST_DATABASE_URI=${TEST_DATABASE_URI}
		    sudo docker-compose up -d --build
		    sudo curl localhost:80
                    '''
                }
            }
	    stage('Test'){
                steps{
                    sh '''
                    ssh ubuntu@${testvm_ip} <<EOF

                    code here

                    EOF
                    echo "Done"
                    '''

                }
            }
	    stage('Docker Push'){
                steps{
                    sh '''
		    sudo docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}
		    sudo docker push ${DOCKER_USERNAME}/frontend
		    sudo docker push ${DOCKER_USERNAME}/backend
		    sudo docker push ${DOCKER_USERNAME}/nginx
                    '''

                }
            }    
	    steps{
                    sh '''
                    cd ~/Group-3-Final-Project
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
                    '''

                }
	   }    
      }
}
