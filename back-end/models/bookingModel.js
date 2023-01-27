module.exports = (sequelize, DataTypes)=>{
    const booking = sequelize.define('booking',{
        total_price:{type:DataTypes.INTEGER, allowNull:false},
        total_passengers:{type:DataTypes.INTEGER, allowNull:false},
        total_adult:{type:DataTypes.INTEGER, allowNull:false},
        total_child:{type:DataTypes.INTEGER, allowNull:false}
    })

    booking.associate=function(model){
        booking.belongsTo(model.flights)
        booking.hasMany(model.seat)
        booking.hasMany(model.passenger)
    }
    return booking
}