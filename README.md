# Node.js-REST-API-App-Task-Management-

1. Integrate with the Github using github workflow
   .github/workflow/cicd
   

2. create docker script to build the image and run in the contain
    Docker command:

    docker build -t taskmanagment .
    docker run -dp 3000:3000 taskmanagment

3. create Jenkin Integration with Github
   create a screate token in github
   Go to setting and select developer setting
   personal Token>Token>generate token>copy the token>

   Go to the jenkin pipeline and in CICIpipele>configuration
   Pipeline>pipeline script from SCM
   SCM: Git
   Repositorues URL: paste project repo URL
   Credentials: add>jenkins
   Jenkins cred:
     Global cred
     Kind: sceret text
     Scope: Global
     secret: paste copy token
     Id: random as per your choice
4. Build Steps: for local system
   Execute Shell
   docker build -t taskmanagment .
   docker run -dp 3000:3000 taskmanagment

5.save
     
   
