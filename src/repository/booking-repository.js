const {StatusCodes} = require('http-status-codes');
const {Booking} = require('../models/index');
const { AppError,ValidationError } = require('../utils/error/index');

class BookingRepostory{
    async create(data) {
        try{

        }catch(error){
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError('RepositoryError',
                 'Cannot create booking'
                ,'There was an error while creating the booking   please try later'
                , StatusCodes.INTERNAL_SERVER_ERROR); 
        }
    }

}

module.exports = BookingRepostory;