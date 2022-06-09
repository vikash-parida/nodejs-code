module.exports=(sequelize, DataType)=>{
    const User = sequelize.define("users",{
        name:{
            type:DataType.STRING,
            allowNull:false,
            unique:true
        },
        contact:{
            type:DataType.STRING,
            allowNull:false
        }
    });
    // User.associate = (models)=>{
    //     User.hasOne(models.profile)        
    // }
    return User;
}
