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

