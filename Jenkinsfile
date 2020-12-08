pipeline {
  agent any
  stages {
      stage('get repo') {
        steps {
            sh 'chmod a+x ./scripts/get-repo.sh'
            sh './scripts/get-repo.sh'
        }
      }
       stage('test project') {
        steps {
            sh 'chmod a+x ./scripts/test-project.sh'
            sh './scripts/test-project.sh'
        }
      }
   }
}
