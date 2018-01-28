# virtual-workstation
> A web based workstation for daily use which is built on top of react and node.js


### Development Environment

| Name  | Version |
| ------------- | ------------- |
| Node.js | v9.2.1 |
| NPM   | v5.6.0 |
| MongoDB | v3.6.0 |

### Pre-Config 
```sh
    # update homebrew
    > brew update

    # install node.js using homebrew
    > sudo brew install node

    # install MongoDB using homebrew
    > sudo brew install mongodb

    # create data directory and make sure you set the permission properly
    > mkdir -p /data/db

    # create database 'vm_db'
    > mongo         # enter mongodb shell
    > show dbs      # display dbs
    > use vm_db     # define db, will be saved when virtual-workstation server started

```
### Start
```sh
    # start mongodb
    > sudo mongod

    # build react        
    npm run react-build

    # start server in dev mode
    npm run server-devstart
```

### Implementation
- [x] Express.js Setup
- [x] React Setup
- [x] User Credentials (Register/Login/Logout)
- [x] Mongoose Object Modeling

### Folder Structure


### TODO List
* Online Mindset Map
* Personal Gallery
* Note Pad
* Online Chat (Text)
* Online Chat (Video)  
* Personal Timeline
* Spend auditing (Report Generating)
* Games
* Rainy Day