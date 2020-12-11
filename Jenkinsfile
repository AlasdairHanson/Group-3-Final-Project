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
            stage('Clone repo'){
                steps{
                    sh 'chmod a+x ./scripts/jenkins-get-repo.sh'
                    sh './scripts/jenkins-get-repo.sh'
                }
	    }
	 stages{
            stage('Test backend'){
                steps{
                    sh 'chmod a+x ./scripts/backend-test.sh'
                    sh './scripts/backend-test.sh'
                }
            }
            stage('Test frontend'){
                steps{
                    sh 'chmod a+x ./scripts/frontend-test.sh'
                    sh './scripts/frontend-test.sh'
                }
            }

            stage('Docker Build'){
                steps{
                    sh 'chmod a+x ./scripts/docker-build.sh'
                    sh './scripts/docker-build.sh'
                }
            }
	    
	    
	    stage('Deploy kubernetes cluster'){
	    	steps{
                    sh 'chmod a+x ./scripts/kube.sh'
                    sh './scripts/kube.sh'
		}

             }
	}    
}

