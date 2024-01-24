const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    Seller : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    propertyType : {
        type : String,
        enum : ["Flat", "Bunglow", "Villa", "Farmhouse", "Land"],
        trim : true,
        required : true,
    },
    bhk : {
        type : Number,
    },
    size : {
        type : Number,
        required : true,
    },
    bathrooms : {
        type : Number,
    },
    price : {
        type : Number,
        required : true,
    },
    pricePer : {
        type: String, 
        enum : ["day", "week", "month", "year"],
        required : true,
    },
    thumbnail : {
        type : String,
        required : true,
    },
    photos : {
        type: Array,
    }, 
    description : {
        type : String,
        required : true,
    },
    city : {
        type : String,
        required : true,
    },
    state : {
        type : String,
        required : true,
    },
    pincode : {
        type : Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now(),
    }
})

module.exports = mongoose.model("Property", propertySchema);