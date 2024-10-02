const mongoose = require("mongoose");
const initData = require ("../init/data.js");
 const Listing = require("../models/listing.js");

 async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    
}
 main()
 .then((res)=>
{
    console.log("DATABASE CONNECTED SUCCESSFULY");
}).catch((err)=>{
    console.log(err);
});

const initDB = async() =>{
   await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
   console.log("DATA WAS SAVED");

};

initDB();