const express = require('express');
const bodyparser = require('body-parser')
const {PORT} = require('./config/serverconfig');

const CityRepository = require('./repository/city-repository');

const Apiroutes = require('./routes/index');
const setupAndStartServer = async() => 
{

    const app = express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',Apiroutes);
    app.listen(PORT, ()=>{
        console.log(`Server Started at Port ${PORT}`);
        })

}

setupAndStartServer();

