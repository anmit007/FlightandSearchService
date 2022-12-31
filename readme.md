# Welcome to FLights Service

## project Setup
 
 - clone the project on your local
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variables 
    - `PORT = 3000`

-Inside the `src/config` folder create a new file `config.json` and then add the following snippet

```
{
  "development": {
    "username": "YOUR_DB_LOGIN_NAME",
    "password": "Your_DB_PASSWORD",
    "database": "FLight_and_search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

```

- Once you have added your DB config as listed above go to the src folder and execute `npx sequelize db:create` on your terminal
 