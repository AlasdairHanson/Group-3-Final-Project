#! /bin/bash

rm -rf home/jenkins/.jenkins/workspace/mvnTesting/

rm -rf /home/jenkins/.jenkins/workspace/mvnTesting@tmp/

git clone https://github.com/AlasdairHanson/Group-3-Final-Project.git -b Testing
