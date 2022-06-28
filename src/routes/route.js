const express = require('express');
const router = express.Router();
const {createCollage}=require("../controllers/collegeController")
const {createIntern}=require("../controllers/internController")



router.post("/functionup/colleges",createCollage)

// router.post("/functionup/colleges",createIntern)
// router.post("/functionup/colleges",createIntern)



module.exports = router;