const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
require('dotenv').config();

const saltRounds = 10;

const users = [];

const updatedUsers = users.map((user) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(user.password, salt);
  
    user.password = hashedPassword;
    return user;
  })
    // 0. ESTABLISH CONNECTION TO MONGO
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => {
      console.log('CONNECTED TO DATABASE');
      
      // 1. DROP THE EXISTING DATABASE
      const dropDbPr = connection.connection.dropDatabase();
      return dropDbPr; 
    })
    .then(() => {
      console.log('DATABASE DROPPED');
      
      // 2. CREATE DOCUMENTS FROM THE ARRAY OF BOOKS
      const pr = User.create(updatedUsers);
      return pr; //forward the pending promise to the next @then()@
    })
    .then(createdUsers => {
        console.log(`Created ${createdUsers.length} users`);
        
        //3, CLOSE THE DB CONNECTION
        const pr = mongoose.connection.close();
        return pr;
    })
     .then(() => console.log("CONNECTION!"))
     .catch(err => console.error("Error connecting to mongo", err));