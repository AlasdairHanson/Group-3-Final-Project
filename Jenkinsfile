pipeline{
        agent any
        environment {
		DATABASE_URI=credentials('DATABASE_URI')
		MYSQL_ROOT_PASSWORD=credentials('MYSQL_ROOT_PASSWORD')
		TEST_DATABASE_URI=credentials('TEST_DATABASE_URI')
                DOCKER_USERNAME=credentials('DOCKER_USERNAME')
		DOCKER_PASSWORD=credentials('DOCKER_PASSWORD')
		
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
                    export MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
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
		    cd ~
		    sudo kubectl apply -f secrets.yaml
		    kubectl delete pods --all -n x
		    cd ~/Group-3-Final-Project
		    kubectl delete pods --all -n x
		    sudo kubectl apply -f nginx.yaml 
		    sudo kubectl apply -f configmap.yaml
		    sudo kubectl apply -f frontend.yaml
		    sudo kubectl apply -f backend.yaml
		    sudo kubectl apply -f nginxservice.yaml
		    kubectl describe service nginxservice.yaml -n x
                    echo "Done"
                    '''

                }
	   }    
      }
}
