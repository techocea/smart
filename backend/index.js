const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 4000;

const connectDB = require("./config/connectDB");

const contactFormRoute = require("./routes/contactFormRoute");

dotenv.config();

app.use(express.json());
app.use(cors());

//Database Connection
connectDB();

// Demo to check schema is working

// async function createForm() {
//   try {
//     const form = new contactForm({
//         name: "ocean",
//         contact: "0777711335",
//         email: "ocean@gmail.com",
//         qualification: "O/L",
//         path: "Engineering",
//         destination: "USA",
//         funds: "need loan",
//     });
//     const result = await form.save();
//     console.log('Form submitted:', result);
//   } catch (error) {
//     console.error('Error submitting form:', error);
//   }
// }
// createForm();

//Routing
app.use("/api/contact", contactFormRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Welcome to the Negombo Smart Achievers Server!");
});
