import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        minLength:[3,"username must contain atleast 3 charecters"],
        maxLength:[40,"username can not exceed 40 charecters"]
    },
    password:{
        type:String,
        selected:false,
        minLength:[8,"password must contain atleast 8 charecters"],
        maxLength:[32,"password can not exceed 32 charecters"]
    },
    email:String,
    address:String,
    phone:{
        type:String,
        minLength:[11,"Phone number must contain exact 11 digits"],
        maxLength:[11,"Phone number must contain exact 11 digits"]
    },
    profileImage:{
        public_id:{
            type: String,
            require:true,
        },
        url:{
            type: String,
            require:true,
        },
    },
    paymentMethods:{
        banktransfer:{
            bankAccountNumber: String,
            bankAccountName: String,
            bankName:String,
            IFSC:String,
        },
        paypal:{
            paypalEmail:String,
        },
        upi:{
            upi_id:String,
        },

    },
    role:{
        type:String,
        enum:["Auctioneer","Bidder","Super Admin"]
    },
    unpaidCommission:{
        type:Number,
        default:0,
    },
    auctionsWon:{
        type:Number,
        default:0,
    },
    moneySpent:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
});