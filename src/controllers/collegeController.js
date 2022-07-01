const collagemodel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const numberCheck=function(value){
  if(typeof value === 'number') return true
}
const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value !== 'string') return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true

}

let linkCheck=/(https?:\/\/.*\.(?:jpg|jpeg|png|gif))/i
let nameCheck = /^[a-zA-Z]+$/
let fullNameCheck =/^(?:([A-Za-z]+\-+[A-Za-z])|([A-Za-z])|([A-Za-z]+\ +[A-Za-z])|([([A-Za-z]+\, +[A-Za-z]))+$/

// ===============================[create-Collage]=========================================

const createCollage  = async function (req, res) {
    try{
    const data=req.body
    const {name,fullName,logoLink}=data
    // let name= name.toLowerCase()
 
    if(numberCheck(name) || numberCheck(fullName) || numberCheck(logoLink)){
      return res.status(400).send({status:false, msg:"Name, Fullname, LogoLink should not be number"})
    }
    
    if(!isvalid(name))return res.status(400).send({status:false, msg:"name is required"})
    if(!nameCheck.test(name))return res.status(400).send({status:false, msg:"don't use spaces, number and special character in name"})

    if(!isvalid(fullName)) return res.status(400).send({status:false, msg:"fullName is required"})
    if(!fullNameCheck.test(fullName))return res.status(400).send({status:false, msg:"dont use special chars in fullname"})

    if(!isvalid(logoLink)) return res.status(400).send({status:false, msg:"logoLink is required"})
    if(!linkCheck.test(logoLink)) return res.status(400).send({status:false, msg:"logoLink invalid"})
        // it will story name with lowercase in db
      const dataCheck = await collagemodel.findOne({ name: name.toLowerCase()})
     if(dataCheck)return res.status(400).send({status:false, msg:"name is already exist"})

     const savedate=await collagemodel.create(data)
     return res.status(201).send({status:true, msg:" college  created successfully",data:savedate })

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }

// ===============================  [get-Collage-Detail]   ======================================

   const getCollageDetail  = async function (req, res) {
    try{

     const collegeName = req.query.collegeName     //getting data from query
    // should not be empty
    if (!isvalid(collegeName)) return res.status(400).send({ status: false, msg: " please Enter college Name"})
      const savedata = await collagemodel.findOne({ name: collegeName.toLowerCase() })
    if(!savedata) return res.status(404).send({status:false, msg:`${collegeName} College Not found`})
      const { name, fullName, logoLink } = savedata

    let intern = []
    // searching all interns in the respected clg with the clg id of intern
    const internData = await internModel.find({collegeId: savedata._id})
    
    
    if(internData.length == 0)  {
      intern= "no interns"
    }
    // taking intern one by one and  pushing only( _id, name, email, mobile) of  all interns into intern array
    else{
    internData.forEach(x => {
      let {_id, name, email, mobile} = x
      intern.push({ _id, name, email, mobile })
    })
    }
    // created new object and storing all clg and intern details in it.
    let newObj = {name: name, fullName: fullName, logoLink: logoLink, interns: intern}
     

    return res.status(200).send({ status: true, data:  newObj})
    

   }catch(err){
     return res.status(500).send({status:false, error:err.message})
   }
   }


module.exports = {createCollage,getCollageDetail,numberCheck}