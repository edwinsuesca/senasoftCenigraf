import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import cors = require("cors");
import helmet = require('helmet');
import router from "./routes/index";


const PORT = process.env.PORT || 3000;
createConnection().then(async () => {

    // create express app
    const app = express();
    
    //app.use(express.urlencoded())
    
    // Middlewares
    app.use(cors());
    app.use(helmet());
    app.use(express.json());

    //Routes
    app.use('/', router);
    

    //start server

    app.listen(PORT,()=> console.log(`Server running on PORT ${PORT}`));
}).catch(error => console.log(error));
