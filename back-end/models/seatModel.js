
module.exports = (sequelize,DataTypes)=>{
    const seat = sequelize.define('seat',{
        seat_number:{type:DataTypes.INTEGER, allowNull:false},
        seat_class:{type:DataTypes.STRING, allowNull:false }
    })
        seat.associate=function(model){
        seat.belongsTo(model.booking)
        seat.belongsTo(model.flights)
        seat.belongsTo(model.passenger)
    }

    return seat
}