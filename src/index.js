const bodyParser = require('body-parser');
const express = require('express'); // Fixed the typo
const app = express();
const {DB_SYNC,PORT} = require('./config/serverConfig'); // Fixed the import path
console.log(DB_SYNC);
const apiRoutes = require('./routes/index');
const db = require('./models/index'); // Fixed the typo


const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); // Added missing middleware configuration
    app.use('/api', apiRoutes); 
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        if(DB_SYNC){
            db.sequelize.sync({alter:true});
        }
     //   console.log(`flight service path: ${FLIGHT_SERVICE_PATH}`);
    });
}

setupAndStartServer();
