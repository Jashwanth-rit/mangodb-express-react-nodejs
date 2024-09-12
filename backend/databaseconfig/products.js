const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    id:String,
    userid:String,
    price:String,
    name:String,
    brand:String,
    category:String,
   
    

});
module.exports = mongoose.model("products",productSchema);
