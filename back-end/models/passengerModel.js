module.exports = (sequelize, DataTypes)=>{
    const passenger = sequelize.define('passenger',{
        first_name:{type: DataTypes.STRING, allowNull:false},
        last_name:{type: DataTypes.STRING, allowNull:false},
        gender:{type: DataTypes.STRING, allowNull:false},
        p_type:{type: DataTypes.STRING, allowNull:false}
    })
    passenger.associate=function(model){
        passenger.belongsTo(model.booking)
        passenger.hasMany(model.seat)
    }
    return passenger
}