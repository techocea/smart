const contactForm = require("../models/contactForm");

exports.submitContactForm = async (req, res) => {
  const { name, contact, email, qualification, path, destination, funds } =
    req.body;
  try {
    const contactFormData = new contactForm({
      name,
      contact,
      email,
      qualification,
      path,
      destination,
      funds,
    });
    await contactFormData.save();
    res.status(201).json({ message: "Form submitted successfull" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server Error" });
  }
};
