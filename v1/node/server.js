var express = require("express");
var app = express();

var upload = require('express-fileupload');
app.use(upload());

var cors = require("cors");
app.use(cors());

var mongoose = require("mongoose");

app.get("/", (req, res) => {
    res.send("homepage");
});


// connect to mongo

mongoose.connect('mongodb://localhost:27017/capsule-labs-test', { useNewUrlParser: true ,useUnifiedTopology: true })
.then(() =>{
    console.log("connected");
})
.catch(err => {
    console.log(err);
})


var userSchema = new mongoose.Schema({
    name:String,
    job:String
})

var projectSchema = new mongoose.Schema({
        report:JSON
})




var model = new mongoose.model("project", projectSchema);

var insertNewRow = async (report) => {
    try{
        var tobeInserted = new model({
            report:report
        });        
        var result = await tobeInserted.save();
        console.log(result);


    }
    catch(err){
        throw err;
    }
}


app.post("/test", (req, res) => {

    console.log(req.body);

    // var userSchema = new mongoose.Schema({
    //     name:String,
    //     job:String
    // })
    
    // var model = new mongoose.model("Userdetail", userSchema);
    
    // var userEntry = new model( {
    //     name:req.body.name,
    //     job:req.body.job
    // });
    
    // userEntry.save(err => {
    //     if (err) console.log(err);
    // });

    insertNewRow(req.body.report);
    res.send("saved!");






});




//db actions













app.listen(8000);



