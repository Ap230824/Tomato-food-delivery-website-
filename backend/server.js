import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";







// app config
const app = express();
const port = 4000;


// middleware 

app.use(express.json());
app.use(cors({origin: true, credentials: true}));

// db connection
connectDB();

// api endpoints
app.use("/api/food" , foodRouter);
app.use("/images" , express.static('uploads'))
app.use("/api/user" , userRouter)

app.use("/api/cart" , cartRouter)
app.use("/api/order" , orderRouter)

// Enable cors at the server side. 
// const cors = require('cors')
const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors(corsOption));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/" , (req,res) =>{
        res.send("API Working");
});

app.listen(port ,() =>{
    console.log(`Server started on http://localhost:${port}`);
})

//mongodb+srv://aakashpodar234:ap23082004@cluster0.jzshbmu.mongodb.net/?
