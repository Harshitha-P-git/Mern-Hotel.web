const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema({
    "customer_name":{type:String},
    "room_no":{type:Number},
    "phone_no":{type:Number}
},
{
    collection:"cunstomers"
})


module.exports = mongoose.model("customerSchema",customerSchema);
