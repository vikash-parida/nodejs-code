module.exports=(sequelize, DataType)=>{
    return Profile = sequelize.define("profile",{
        job:{
            type:DataType.STRING,
            allowNull:false
        }
    })
    // Profile.associate = (models)=>{
    //     Profile.belongsTo(models.users,{            
    //             foreignKey:'user_id',
    //             as:"profile"
    //     })        
    //}
    
}