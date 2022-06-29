const collagemodel = require("../models/collegeModel")
const {isUri}=require("valid-url")


const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value !== 'string') return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true

}
let linkCheck=/(https?:\/\/.*\.(?:jpg|jpeg|png|gif))/i

// ===============================[createCollage]=========================================
const createCollage  = async function (req, res) {
    try{
    const data=req.body
    const {name,fullName,logoLink}=data
    
    if(!isvalid(name))return res.status(400).send({status:false, msg:"name is required"})
    if(!isvalid(fullName)) return res.status(400).send({status:false, msg:"fullName is required"})
    if(!isvalid(logoLink)) return res.status(400).send({status:false, msg:"logoLink is required"})
    if(!isUri(logoLink)) return res.status(400).send({status:false, msg:"logoLink invalid"})
    

    if(!(linkCheck.test(logoLink))) return res.status(400).send({status:false, msg:"logoLink invalid"})

    //name unique test
    const dataCheck=await collagemodel.findOne({name:name})
    if(dataCheck)return res.status(400).send({status:false, msg:"name is already exist"})

    const savedate=await collagemodel.create(data)
     return res.status(201).send({status:false, msg:" college successfully created",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }
// ===============================  [getCollageDetail]   ======================================
   const getCollageDetail  = async function (req, res) {
    try{
    const data = req.query
    const savedate = await collagemodel.find(data)
     return res.status(200).send({status:false, msg:" college successfully created",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports = {createCollage,getCollageDetail}