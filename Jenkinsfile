pipeline{
        agent any
	
        stages{
            stage('Clone repo'){
                steps{
                    sh 'chmod a+x ./scripts/jenkins-get-repo.sh'
                    sh './scripts/jenkins-get-repo.sh'
                }
	    }
	
            stage('Test backend'){
                steps{
                    sh 'chmod a+x ./scripts/backend-test.sh'
                    sh './scripts/backend-test.sh'
                }
            }
		
            stage('Run backend on test vm'){
                steps{
                    sh 'chmod a+x ./scripts/run-backend.sh'
                    sh './scripts/run-backend.sh'
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

