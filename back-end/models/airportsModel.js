module.exports = (sequelize,DataTypes)=>{
    
    airport = sequelize.define('airport',{
        airport_name:{type: DataTypes.STRING, allowNull:false},
    })
    
    airport.associate=function(model){
        airport.belongsTo(model.city)
    }
    return airport
}