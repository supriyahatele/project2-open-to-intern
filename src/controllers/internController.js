const internModel = require("../models/internModel")


const isvalid=function(value){
  if(typeof value==='undefined' || value===null) return false
  if(typeof value!='string')return false
  if(typeof value === 'string' && value.trim().length===0) return false
  return true
}




  

  module.exports.loginUser = loginUser