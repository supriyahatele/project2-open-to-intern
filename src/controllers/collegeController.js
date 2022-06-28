const collagemodel = require("../models/collegeModel")





// ===============================[createCollage]=========================================
const createCollage  = async function (req, res) {
    try{
    const data=req.body
   



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


module.exports.createCollage = createCollage
module.exports.getCollageDetail= getCollageDetail