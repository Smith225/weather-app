const City = require("../schema/city");
const express = require("express");
const router = express.Router();

router.get("/getcity", async function (req, res) {
  
  const cities = await City.find().select("-_id -__v");
  // console.log(cities);
  res.json(cities);

})

module.exports = router;