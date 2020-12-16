pipeline{
        agent any
	
        stages{
            stage('Clone repo'){
                steps{
                    sh 'chmod a+x ./scripts/jenkins-get-repo.sh'
                    sh './scripts/jenkins-get-repo.sh'
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

