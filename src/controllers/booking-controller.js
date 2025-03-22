const { response } = require('express');
const {BookingService} = require('../services/index');
const { StatusCodes } = require('http-status-codes');

const bookingService = new BookingService();

const create = async (req, res) => {    
    try{
        const booking = await bookingService.createBooking(req.body);
        console.log("from booking controller",booking);
        res.status(201).json(StatusCodes.OK).json({
            message: 'Booking created successfully',
            data: booking,
            err:{}
        });
    }catch(error){
        console.log("from booking controller error",error);
        return res.status(error.statusCode).json({
            message: error.message,
            data:{},
            err: error.explanation,
            data: {}  
        })
    }
}

module.exports = {
    create
}