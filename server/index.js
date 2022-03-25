const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')

const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const sanRouter = require('./routes/san')

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
  app.use(cors())

  app.use('/api/auth',authRouter)
  app.use('/api/posts',postRouter)
  app.use('/api/sans',sanRouter)

app.listen(8800,() =>{
    console.log("Backend server is running!")
})