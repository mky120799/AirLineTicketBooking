const axios = require('axios');
const { BookingRepository } = require('../repository/index');
const { ServiceError } = require('../utils/error');

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightId = data.flightId;
            const getFlightRequest = `${FLIGHT_SERVICE_PATH}/api/flights/${flightId}`;
            const flight = await axios.get(getFlightRequest);
            console.log(flight.data);
            let priceOfTheFlight = flight.data.price;
            if(data.noOfSeats > flightData.totalSeats){
                throw new ServiceError('No of seats should be less than total seats');
            } 
            return flight.data;
        } catch (error) {
            throw new Error('Error while creating booking');
        }
    }
}

module.exports = BookingService;