module.exports = (sequelize, DataTypes)=>{
    const booking = sequelize.define('booking',{
        
    })
    booking.associate=function(model){
        booking.belongsTo(model.flights)
        booking.hasMany(model.seat)
        booking.hasMany(model.passenger)
    }
    return booking
}