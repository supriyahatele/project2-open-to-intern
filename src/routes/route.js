const express = require('express');
const router = express.Router();
const { createCollage, getCollageDetail }=require("../controllers/collegeController")
const {createintern}=require("../controllers/internController")



router.post("/functionup/colleges",createCollage)

router.post("/functionup/interns",createintern)

router.get("/functionup/collegeDetails", getCollageDetail)



module.exports = router;