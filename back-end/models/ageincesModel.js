
module.exports = (sequelize,DataTypes)=>{

    let ageinces = sequelize.define('agencies',{
        agency_name: {type: DataTypes.STRING, allowNull:false, unique:true},
        logo:{type: DataTypes.STRING, allowNull:false},
        discount:{type: DataTypes.INTEGER, allowNull:false}
    })


    ageinces.associate=function(model){
        ageinces.hasMany(model.aircrafts)
    }

    return ageinces
}