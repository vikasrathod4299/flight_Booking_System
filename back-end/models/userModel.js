
module.exports = (sequelize,DataTypes )=>{

    const user = sequelize.define('user',{
        first_name:{type:DataTypes.STRING, defaultValue:'New User'},
        last_name:{type:DataTypes.STRING, defaultValue:'New User'},
        email:{type:DataTypes.STRING, allowNull:false},
        mobile:{type:DataTypes.STRING, allowNull:false, unique:true},
        isAdmin:{type:DataTypes.STRING, allowNull:false, defaultValue:false}
    })

    user.associate=function(model){
        user.hasMany(model.booking)
    }

    return user
}