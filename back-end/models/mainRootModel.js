module.exports = (sequelize,DataTypes)=>{
    
    const mainRoot= sequelize.define('mainroot',{
        
    })
    
    mainRoot.associate=function(model){
        mainRoot.belongsTo(model.city,{
            as:'fromCity',
            foreignKey: 'fromCityId',
          });
            mainRoot.belongsTo(model.city,{
            as:'toCity',
            foreignKey: 'toCityId',
            });
        mainRoot.hasMany(model.flights)
    }

    return mainRoot
}