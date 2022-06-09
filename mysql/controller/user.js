const models = require('../models');

exports.getUsers = async (req, res) =>{
    const users = await models.users.findAll({
        attributes:['name','contact']

    });

    res.status(200).json({users});
}

 exports.addUsers = async(req, res)=>{
    const {name,contact} = req.body;
  try{ const user = await models.users.create({
        name: name,
        contact: contact
    })
    res.json({user})
} catch(error){
   console.log(error.message)
   return res.json({error: error});
}
}

exports.updateuser = async (req, res) => {
    const {name,contact} = req.body;
    const {id} = req.params
    try {
        const userExist = await models.users.findOne({
        // attributes:['name','contact'],
        where:{id} 
        })
        if (!userExist) {
           return res.status(404).json({message:"no user found"})
        }

        const user = await models.users.update({
            name:name,
            contact:contact
        },{where:{id}}
        )
        console.log(user.length)
        res.json({result:"update success"})
    } catch (error) {
        console.log(error);
        return res.json({result:"err"})
    }

}

exports.getById = async  (req, res)=>{
    try{
        const id = req.params.id
    const user = await models.users.findOne({
        attributes:['name','contact'],
        // include:[{
        //     model:models.profile,
        //     as:profile,
        //     attributes:['job']
        // }],
        where:{id}
    })
    res.status(201).json({user});
}catch(err){
    console.log(err);
}
}

exports.deleteusers = async  (req, res)=>{
    try{
        const id = req.params.id
    const user = await models.users.destroy({
        where:{id}
    })
    res.status(200).json('delete suss');
}catch(err){
    console.log(err);
}
}

