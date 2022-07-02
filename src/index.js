const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());

let url="mongodb+srv://supriyahatele:vE25ShJqu2IFbCtY@cluster0.qldb2.mongodb.net/group18Database"
mongoose.connect(url, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route)

app.all('*', function (req, res) {
    throw new Error("Bad Request");
})

app.use(function (e, req, res, next) {
    if (e.message == "Bad Request") return res.status(400).send({ error: e.message });

})

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



