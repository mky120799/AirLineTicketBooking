const {statusCodes} = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message="something went wrong",
        explanation="Service layer error", 
        statusCode = statusCodes.INTERNAL_SERVER_ERROR){
        super();
        this.name ="SeriviceError";
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
        }
    }

    module.exports = ServiceError;