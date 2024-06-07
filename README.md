# Welcome to Prajapati Automobiles's Backend Service

# Project Setup
- First of all clone the project from repo to your local machine
- Run the `npm i install` command in the root directory of the project
- Create a `.env` file in root folder and copy and paste enviornment variable from `.env.example`
- Run `npm i sequelize-cli` `npm i sequelize` `npm i mysql2` these command
- Execute the `npx sequelize init` command into root directory of the folder
- Move `Models` `seeders` `migrations` and `config` inside src folder
- Change the `src/config/config.json` according to below

``` 
"development": {
    "username": <YOUT_USER_NAME>,
    "password": <YOUR_PASSWORD>,
    "database": <YOUR_DATA_BASE_NAME>,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```

- After performing the above execute `npx sequelize db:create`
- crosscheck the databse has created or not



# Creation of models
- run npx sequelize model:generate --name <MODEL_NAME> --attributes     <ATTRIBUTE_NAME:TYPE>

- Exa npx sequelize model:generate --name City --attributes name:String

- result New model was created at <ROOT> New model was created at <ROOT>

- Till now it's not synched with our database

- To make in synch with database run npx sequelize db:migrate

- create city repository in src/repository/city-repository.js to interact with models and write logic to CRUD and all (repository layer is responsible for DB interaction)

- For running MySql Server mysql -h localhost -P 3306 -u root -p

- or mysql -u root -p
