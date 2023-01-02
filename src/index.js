const express = require('express');
const bodyparser = require('body-parser')
const {PORT} = require('./config/serverconfig');
const CityRepository = require('./repository/city-repository');
const setupAndStartServer = async() => 
{

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT, ()=>{
        console.log(`Server Started at Port ${PORT}`);
        const repo = new CityRepository();
        repo.createCity({name : "Delhi"});
        })

}

setupAndStartServer();

