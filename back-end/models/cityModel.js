module.exports = (sequelize, DataTypes)=>{
    
    const city = sequelize.define('city',{
        name:{type: DataTypes.STRING, allowNull:false, unique: true},
        longitude: DataTypes.INTEGER,
        latitude: DataTypes.INTEGER,
        country:DataTypes.STRING,
    })

    city.associate=function (model){
        city.hasMany(model.airport)
        city.hasMany(model.mainroot)
    }
    
    return city
}

