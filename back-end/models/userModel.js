
module.exports = (sequelize,DataTypes )=>{

    const user = sequelize.define('user',{
        first_name:DataTypes.STRING,
        last_name:DataTypes.STRING,
        email:{type:DataTypes.STRING, allowNull:false, unique:true},
        mobile:{type:DataTypes.STRING, allowNull:false, unique:true}
    })

    user.associate=function(model){
        user.hasMany(model.booking)
    }

    return user
}