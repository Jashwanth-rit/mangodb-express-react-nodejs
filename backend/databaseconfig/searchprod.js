const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    id:String,
    userid:String,
    price:String,
    name:String,
    brand:String,
    category:String,
    

});
module.exports = mongoose.model("searchproduct",searchSchema);
