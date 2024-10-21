import mongoose from "mongoose";


export const connection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"MERN_AUCTION_PLATFORM"
    }).then(()=>{
        console.log('Connected to the database.');
        
    }).catch(err=>{
        console.log(`some error occured while connecting to database: ${err}`);
        
    });
};