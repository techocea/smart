const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

const connectDB = require("./config/connectDB");

const contactFormRoute = require("./routes/contactFormRoute");

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: ["https://negombosmartachievers.lk","https://achievers-client.vercel.app"],
    credentials: true,
  })
);

//Database Connection
connectDB();

//Routing
app.use("/api/contact", contactFormRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to the Negombo Smart Achievers Server!");
});
