#! /bin/bash

pwd

cd /home/jenkins/.jenkins/workspace/testing/Spring-HelpQueue

echo ${USERNAME}

echo ${PASSWD}

pwd

which mvn

mvn test
