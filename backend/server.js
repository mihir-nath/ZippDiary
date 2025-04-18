const express =require("express");
const dotenv =require('dotenv');
const connectDB =require("./config/db");
const userRoutes =require("./routes/userRoutes");
const noteRoutes =require("./routes/noteRoutes");
const cors = require ("cors");

const app= express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/users',userRoutes);
app.use('/api/notes',noteRoutes);


const PORT = process.env.PORT || 5000 ;

app.listen(PORT,console.log(`serverr started on PORT ${PORT}`));
