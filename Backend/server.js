// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const cors = require('cors'); 

const contactRoutes = require("./routes/contactRoute");


dotenv.config();
connectDB();

const app = express();

// Enable CORS for all routes
app.use(cors({ origin: "https://pratyaksh-seven.vercel.app/", credentials: true }));

app.use(express.json());


app.use("/api/contact", contactRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
});