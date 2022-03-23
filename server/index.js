const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");


const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const loaisanRouter = require('./routes/loaisan')


dotenv.config();

const connectDB = async () => {
    try {
      await mongoose.connect(   
        process.env.MONGO_URL,
        async (err) => {
          if (err) throw err;
          console.log("MongooseDB connected!");
        }
      );
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };
  connectDB();

  //middleware
  app.use(express.json());


  app.use('/api/auth',authRouter)
  app.use('/api/posts',postRouter)
  app.use('/api/loaiSan',loaisanRouter)

app.listen(8800,() =>{
    console.log("Backend server is running!")
})