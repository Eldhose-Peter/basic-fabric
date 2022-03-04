# basic-fabric
A Hyperledger fabric application created using Javascript with basic implementations.

## Getting started with the Fabric samples

To use the application, you need to download the Fabric Docker images and the Fabric CLI tools. First, make sure that you have installed all of the [Fabric prerequisites](https://hyperledger-fabric.readthedocs.io/en/latest/prereqs.html).

## Test network

The [Fabric test network](test-network) in the samples repository provides a Docker Compose based test network with two
Organization peers and an ordering service node. You can use it on your local machine to run the application.

## Start the Hyperledger Fabric Network 

1. cd application
2. ./startFabric.sh 


- with this you will start docker-compose.yml up -d .
- With this you will create the channel genesis block, 
- add the peer0 to the channel created and 
- instantiate tfbc chaincode.

*** In this usecase CA's are already generated. 

## Setup Application

1. cd application/javascript
2. npm install
4. node enrollAdmin.js
5. node registerUser.js

## Run Node APIs  
1. node invoke.js
2. node query.js

## Stop the network
1. cd application
2. ./networkDown.sh
