require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_SYNC: process.env.DB_SYNC === 'true', // Convert the string to a boolean
    FLIGHT_SERVICE_PATH: process.env.FLIGHT_SERVICE_PATH,
};  