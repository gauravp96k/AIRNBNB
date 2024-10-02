const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("../AIRNBNB/models/listing.js");

// Set the port
const port = 8000;

// Set EJS as the view engine and set the views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.urlencoded({extended:true}));

// Connect to MongoDB
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
    .then(() => {
        console.log("DATABASE CONNECTED SUCCESSFULLY");
    })
    .catch((err) => {
        console.log(err);
    });

// Start the server
app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}`);
});

// Test route
app.get("/", (req, res) => {
    res.send("JAY BHAADRMAARUTI");
});

// Route to render listings
app.get("/list", async (req, res) => {
    try {
        const allListing = await Listing.find({});
        // Render 'listings/index.ejs' file, no need to provide the full path
        res.render("listings/index", { allListing });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching listings");
    }
});

  //new route
app.get("/listing/new",(req,res)=>{
 res.render("listings/new.ejs");
})
 



        //show route
app.get("/listing/:id",async(req,res)=>{
    let {id} = req.params;
   const listing= await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})


//create route
app.post("/listing/create",(req,res)=>{
    let listings = req.body.listing;
    console.log(listings);



 })


