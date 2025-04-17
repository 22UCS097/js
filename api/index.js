import express from 'express'
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import userRoutes from "./routes/userRoute.js"
const app=express();
import User from './models/user.js';


app.use(cors());
app.use(express.json());

// mongoose.connect('mongodb+srv://ravi:ravi@ravi.zsmvgfd.mongodb.net/?retryWrites=true&w=majority&appName=ravi')
// .then(()=>{
    //     console.log("connected to mongoDB");
    // })
    // .catch((error)=>{
        //     console.log(error);
        // })
        
        mongoose.connect('mongoURL')
        .then(async () => {
            await User.create([
                { name: 'John Doe', email: 'john@example.com', age: 30 },
                { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
            ]);
            console.log('Dummy users added');
        });
app.use('/api/users', userRoutes);
app.post('/api/user',(req, res) => {
     console.log(req.body);
      res.json("fine it is");
  });

app.listen(3000,()=>{
    console.log("server started at 3000");
})