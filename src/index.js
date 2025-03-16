const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig'); // Corrected the import path
const express = require('express'); // Fixed the typo
const app = express();
require('dotenv').config();
const apiRoutes = require('./routes/index');
const db = require('./models/index'); // Fixed the typo


const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // Added missing middleware configuration
    app.use('/api', apiRoutes); 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    });
}

setupAndStartServer();
