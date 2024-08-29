const express = require("express");
const { submitContactForm } = require("../controllers/contactFormController");

const router = express.Router();

router.post("/", submitContactForm);

module.exports = router;