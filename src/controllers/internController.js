const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value!='string')return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true
}
// const isvalidMobile=function(value){
//   if(typeof value==='undefined' || value===null) return false
//   if(typeof value != Number) return false
//   if(typeof value == Number && value.trim().length===0)return false
// }
const createintern  = async function (req, res) {
    try{
      const data=req.body
      const {name,email,mobile, collegeName}=data
      if(!isvalid(name)){
        return res.status(400).send({status:false, msg:"Name is missing"})
      }

      if(!isvalid(email)){
        return res.status(400).send({status:false,msg:"Email is missing"})
      }
      if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
        return res.status(400).send({status: false,message: "invalid emailId"});
      }

       if(!mobile){
        return res.status(400).send({status:false,msg:"Mobile number is missing"})
      }
      if(!(/^(\+\d{1,3}[- ]?)?\d{10}$/).test(mobile)){
        return res.status(400).send({status:false,msg:"invalid mobile number"})
      }

      if (!isvalid(collegeName)) {
        return res.status(400).send({ status: false, msg: "College Name is missing" })
      }

      const isAlreadyUsed= await internModel.findOne({$or:[{email},{mobile}]});
      if(isAlreadyUsed){
        if(isAlreadyUsed.email==email){
          return res.status(400).send({status:false,msg:`${email} Email already registered`})
        }else{
        return res.status(400).send({status:false,msg:`${mobile} mobile number already registered`})
      }}

    const collegeData = await collegeModel.findOne({name: collegeName})
    if (!collegeData) return res.status(404).send({ status: false, msg: "College Not found" })

    data.collegeId= collegeData._id
    
    const savedate=await internModel.create(data)
     return res.status(201).send({status:false, msg:" intern successfully created",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports={createintern}




