
module.exports = (sequelize,DataTypes)=>{
    const seat = sequelize.define('seat',{
        seat_status:{type:DataTypes.BOOLEAN, defaultValue:false}
    })
    seat.associate=function(model){
        seat.belongsTo(model.booking)
        seat.belongsTo(model.flights)
    }

    return seat
}