# react-challenge-191026

## Development
You must have docker and docker-compose installed on your machine.

### Follow these steps to init projet :
```shell
$ cd server
$ npm install
$ cd ../client
$ npm install
$ cd ..
$ docker-compose build
$ docker-compose up
```

#### Client is running on http://localhost:3000 and server on http://localhost:9000

### To populate with projet data go to : http://localhost:9000/api/v1/data/import
### Check if data are uploaded by visiting : http://localhost:9000/api/v1/users
