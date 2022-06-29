const express = require('express');
const router = express.Router();
const {createCollage}=require("../controllers/collegeController")
const {createintern}=require("../controllers/internController")



router.post("/functionup/colleges",createCollage)

router.post("/functionup/interns",createintern)
// router.post("/functionup/colleges",createIntern)



module.exports = router;