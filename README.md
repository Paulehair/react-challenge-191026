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

#### To populate with projet data go to : http://localhost:9000/api/v1/data/import
#### Check if data are uploaded by visiting : http://localhost:9000/api/v1/users

### API routes
<strong>GET</strong> http://localhost:9000/api/v1/users/
Returns all users
Login required

<strong>POST</strong> http://localhost:9000/api/v1/users/add-user
Create new user
Login and specific role required
Request body must contain at least : 
  - <strong>firstName</strong>, 
  - <strong>lastName</strong>,
  - <strong>email</strong>,
  - <strong>password</strong>
 
<strong>GET</strong> http://localhost:9000/api/v1/users/:id
Returns a specific user
Login required

<strong>PATCH</strong> http://localhost:9000/api/v1/users/:id
Update a specific user
Login and specific role required if trying to update an user not logged in

<strong>DELETE</strong> http://localhost:9000/api/v1/users/:id
Delete a specific user
Login and specific role required

<strong>POST</strong> http://localhost:9000/api/v1/users/login
Returns a connection token
Request body must contain :
  - <strong>email</strong>,
  - <strong>password</strong>
  
<strong>GET</strong> http://localhost:9000/api/v1/skills
Returns all skills
Login required

<strong>GET</strong> http://localhost:9000/api/v1/skills
Returns all skills
Login required

<strong>PATCH</strong> http://localhost:9000/api/v1/skills/:id
Update a specific skill
Login and specific role required

<strong>DELETE</strong> http://localhost:9000/api/v1/skills/:id
Delete a specific skill
Login and specific role required
