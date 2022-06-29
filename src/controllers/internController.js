const internModel = require("../models/internModel")


const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value!='string')return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true
}
const isvalidMobile=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value != Number) return false
  if(typeof value == Number && value.trim().length===0)return false
}
const createintern  = async function (req, res) {
    try{
      const data=req.body
      const {name,email,mobile}=data
      if(!isvalid(name)){
        return res.status(400).send({status:false, msg:"Name is missing"})
      }

      if(!isvalid(email)){
        return res.status(400).send({status:false,msg:"Email is missing"})
      }
      if(!(/^\w+([\.-]?\w+)*@\w([\.-]?\w+)*(\.\W{2,3})+$/.test(email))){
        return res.status(400).send({
            status : false,
            msg : "Email-Id is invalid"
        })
       }

       if(!isvalidMobile(mobile)){
        return res.status(400).send({status:false,msg:"Mobile number is missing"})
      }
      if(!mobile.match(/^(\+\d{1,3}[- ]?)?\d{10}$/)){
        return res.status(400).send({status:false,msg:"invalid mobile number"})
      }

      const isAlreadyUsed= await internModel.findOne({$or:[{email},{mobile}]});
      if(isAlreadyUsed){
        if(isAlreadyUsed.email==email){
          return res.status(400).send({status:false,msg:"Email already exist"})
        }else{
        return res.status(400).send({status:false,msg:`${email} email address already registered`})
      }}

    const savedate=await internModel.create(data)
     return res.status(201).send({status:false, msg:" intern successfully created",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports={createintern}




