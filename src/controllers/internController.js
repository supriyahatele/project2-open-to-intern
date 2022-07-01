const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const {numberCheck} = require("./collegeController")


const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value!='string') return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true
}

let emailCheck=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/

const createintern  = async function (req, res) {
    try{
      const data=req.body
      if (Object.keys(data).length == 0) return res.status(400).send({ status: false, msg: "Fill all the intern requirement" })
      const {name,email,mobile, collegeName}=data
      if(numberCheck(name) || numberCheck(email) || numberCheck(collegeName)){
        return res.status(400).send({status:false, msg:"Name, email, collegeName should not be number"})
      }
      if(!isvalid(name)){
        return res.status(400).send({status:false, msg:"Name is required"})
      }

      if(!isvalid(email)){
        return res.status(400).send({status:false,msg:"Email is required"})
      }
      if (!emailCheck.test(email)) {
        return res.status(400).send({status: false,message: "invalid emailId"});
      }

       if(!mobile){
        return res.status(400).send({status:false,msg:"Mobile number is required"})
      }
      if(!(/^[6-9]\d{9}$/gi).test(mobile)){
        return res.status(400).send({status:false,msg:`${mobile} is invalid mobile number`})
      }

      if (!isvalid(collegeName)) {
        return res.status(400).send({ status: false, msg: "College Name is required" })
      }

      const isAlreadyUsed= await internModel.findOne({$or:[{email},{mobile}]});
      if(isAlreadyUsed){
        if(isAlreadyUsed.email==email){
          return res.status(400).send({status:false,msg:`${email} Email already registered `})
        }else{
        return res.status(400).send({status:false,msg:`${mobile} mobile number already registered`})
      }}

    const collegeData = await collegeModel.findOne({name: collegeName})
    if (!collegeData) return res.status(404).send({ status: false, msg: `${collegeName} College Not found` })

    data.collegeId= collegeData._id
    
    const savedate=await internModel.create(data)
     return res.status(201).send({status:true,data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports={createintern}




