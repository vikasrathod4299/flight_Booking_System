const { request } = require("express");
const httpStatus = require("http-status");
const {
  booking,
  passenger,
  seat,
  flights,
  mainroot,
  city,
} = require("../models");

const getBookingsbyId = async (req, res) => {
  const { id } = req.params;

  try {
    const bookings = await booking.findAll({
      include: [
        {
          model: flights,
          include: [
            {
              model: mainroot,
              include: [
                {
                  model: city,
                  as: "fromCity",
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
                {
                  model: city,
                  as: "toCity",
                  attributes: { exclude: ["createdAt", "updatedAt"] },
                },
              ],
            },
          ],
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
      ],
      attributes: {
        exclude: ["total_adult", "total_child", "total_passengers"],
      },
      where: { userId: id },
    });
    res.json(bookings);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};


const createBooking = async (req, res) => {
  try {
    const { id: userId } = req.params;
    const bookingData = await booking.create({
      ...req.body.bookingData,
      userId,
    });
    if (bookingData.dataValues.id) {
      req.body.passengers = req.body.passengers.map((passenger) => {
        return { ...passenger, bookingId: bookingData.dataValues.id };
      });

      const passengerData = await passenger.bulkCreate(req.body.passengers, {
        validate: true,
      });

      if (passengerData.length > 0) {
        req.body.seats = req.body.seats.map((seat, index) => {
          return {
            ...seat,
            bookingId: bookingData.dataValues.id,
            passengerId: passengerData[index].id,
          };
        });

        const seatData = await seat.bulkCreate(req.body.seats, {
          validate: true,
        });

        if (seatData.length > 0) {
          res.json({ bookingData, passengerData, seatData });
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};



const deleteBookingByd = async(req,res)=>{
  const {bookingId} = req.params;
  console.log('hello');
  try{
        await passenger.destroy({where:{bookingId:bookingId}})
        await seat.destroy({where:{bookingId:bookingId}})
        await booking.destroy({where:{id:bookingId}})
        res.status(200).json("Booking is canceled!")
    }
    catch(err){
      console.log(err);
      res.status(500).json(err)
  }
}

module.exports = { createBooking, getBookingsbyId, deleteBookingByd };
