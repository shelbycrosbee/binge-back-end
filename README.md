# How to build MySQL Database

1. run command: ```mysql -u root -p```
2. run: ```create database *name*;``` inside of your mysql command line 
3. exit out of MySQL with ```\q```
4. edit your .env file to reflect name of database
5. update your DB connection to mysql from sqllite
6. run ```adonis migration:run```
7. run ```adonis serve --dev```

## Marks instruction on how to build an API

1. Create Route, ```Route.resource('users', 'UserController')```
2. Create Controller ``` adonis make:controller User --type http``` add logic to Controller
3. Create Model ```adonis make:model User```
4. Create Seed ```adonis make:seed User```
5. Repeat steps for location

