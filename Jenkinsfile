pipeline {
  agent any
  environment{
    SECRET_KEY=credentials('SECRET_KEY')
    DATABASE_URI=credentials('DATABASE_URI')
    TEST_DATABASE_URI=credentials('TEST_DATABASE_URI')
  }
  stages {
    stage('get repo'){
      steps {
        sh 'chmod #scriptpath'
        sh 'execute #scriptpath'
      }
    }
  }



}
