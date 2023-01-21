const { flights } = require("../models");
const { mainroot } = require("../models");
const { aircrafts } = require("../models");
const { agencies } = require("../models");
const { city } = require("../models");

const getFlight = async (req, res) => {
  try {
    let flight = await flights.findAll({});
    res.json(flight);
  } catch (err) {
    res.status(402).json(err);
  }
};

const addFlight = async (req, res) => {
  try {
    let flight = await flights.create(req.body);
    res.json(flight);
  } catch (err) {
    res.status(402).json(err);
  }
};

const addBulkFlight = async (req, res) => {
  try {
    let data = await flights.bulkCreate(req.body, { validate: true });
    res.json(data);
  } catch (err) {
    res.status(402).json(err);
  }
};

const getFlightbyCIty = async (req, res) => {
  
  const { fromCity, toCity, date,returnDate } = req.query;

  try {

    const data = await mainroot.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "fromCityId", "toCityId", "cityId"],
      },
      include: [
        {
          model: flights,
          where: { date: date },
          attributes: { exclude: ["createdAt", "updatedAt"]},
          include:[
            {
              model:aircrafts, 
              include:[{model:agencies, attributes: { exclude: ["createdAt", "updatedAt"]} }],
              attributes: { exclude: ["createdAt", "updatedAt"]}
            }
          ],
        },
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
      where: { fromCityId: fromCity, toCityId: toCity },
    });

    if(returnDate!='undefined'){
        const returnData = await mainroot.findAll({
          attributes: {
            exclude: ["createdAt", "updatedAt", "fromCityId", "toCityId", "cityId"],
          },
          include: [
            {
              model: flights,
              where: { date: returnDate },
              attributes: { exclude: ["createdAt", "updatedAt"]},
              include:[
                {
                  model:aircrafts, 
                  include:[{model:agencies, attributes: { exclude: ["createdAt", "updatedAt"]} }],
                  attributes: { exclude: ["createdAt", "updatedAt"]}
                }
              ],
            },
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
          where: { fromCityId: toCity, toCityId: fromCity },
        });

        res.json({data,returnData})
        return
  }

    res.json({data,returnData:[]});

  } catch (err) {
    res.status(402).json(err);
  }
};

module.exports = { addFlight, getFlight, addBulkFlight, getFlightbyCIty };
