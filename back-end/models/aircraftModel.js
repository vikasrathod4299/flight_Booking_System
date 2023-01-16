module.exports = (sequelize, DataTypes)=>{

    const aircrafts = sequelize.define('aircrafts',{
        aircraft_name:DataTypes.STRING,
        aircraft_number:{type: DataTypes.STRING, allowNull:false, unique:true},
        check_in_wight: {type: DataTypes.INTEGER, defaultValue:15}, 
        cabin_wight: {type: DataTypes.INTEGER, defaultValue:7},
        inFlight:{type: DataTypes.BOOLEAN, defaultValue:false}
    })

    aircrafts.associate=function(model){
        aircrafts.belongsTo(model.agencies)
        aircrafts.hasMany(model.flights)
    }    

    return aircrafts
}