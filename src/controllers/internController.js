

const internmodel = require("../models/internModel")


const createintern  = async function (req, res) {
    try{
    const data=req.body
    const savedate=await internmodel.create(data)
     return res.status(201).send({status:false, msg:" intern successfully created",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports.createintern = createintern




