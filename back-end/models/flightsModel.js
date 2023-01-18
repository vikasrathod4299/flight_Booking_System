
module.exports = (sequelize, DataTypes)=>{
    const flights = sequelize.define('flights',{  
        depTime:DataTypes.STRING,
        arrTime:DataTypes.STRING,
        date:DataTypes.STRING,
    })
    flights.associate=function(model){
      flights.belongsTo(model.mainroot)
      flights.belongsTo(model.aircrafts)
      flights.hasMany(model.booking)
      flights.hasMany(model.seat)
    }
    return flights
}