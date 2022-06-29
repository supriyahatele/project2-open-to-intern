const express = require('express');
const router = express.Router();
const { createCollage, getCollageDetail }=require("../controllers/collegeController")
const {createintern}=require("../controllers/internController")
const collagemodel = require("../models/collegeModel")
const internModel = require("../models/internModel")




router.post("/functionup/colleges",createCollage)

router.post("/functionup/interns",createintern)

router.get("/functionup/collegeDetails", getCollageDetail)



module.exports = router;