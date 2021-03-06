const express = require('express');
const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
const cors = require('cors') ;
const app = express();
const bodyParser = require('body-parser');


const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')
const loaitintucRouter = require('./routes/loaitintuc')
const tintucRouter = require('./routes/tintuc')
const loaisanRouter = require('./routes/loaisan')
const sanRouter = require('./routes/san')
const khunggioRouter = require('./routes/khunggio')
const hoadonRouter = require('./routes/hoadon')
const phieudatsanRouter = require('./routes/phieudatsan')
const chitietphieudatsanRouter = require('./routes/chitietphieudatsan')


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

  const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

  //middleware
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(bodyParser.json());

  app.use('/api/auth',authRouter)
  app.use('/api/posts',postRouter)
  app.use('/api/loaitintuc', loaitintucRouter )
  app.use('/api/tintuc', tintucRouter)
  app.use('/api/loaiSan',loaisanRouter)
  app.use('/api/sans',sanRouter)
  app.use('/api/khungGio',khunggioRouter)
  app.use('/api/hoadon',hoadonRouter)
  app.use('/api/phieudatsan',phieudatsanRouter)
  app.use('/api/chitietphieudatsan',chitietphieudatsanRouter)



app.listen(8800,() =>{
    console.log("Backend server is running!")
})