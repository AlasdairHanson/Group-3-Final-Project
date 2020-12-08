#! /bin/bash

pwd

cd /home/jenkins/.jenkins/workspace/testing/Spring-HelpQueue

echo ${USERNAME}

echo ${PASSWD}

echo ${DATABASE_URI}

pwd

which mvn

mvn clean package | grep 'BUILD SUCCESS'

cd /home/jenkins/.jenkins/workspace/testing/Spring-HelpQueue/target

export jarName=$(ls | grep .jar$)
