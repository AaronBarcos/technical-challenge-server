const router = require("express").Router();
const fs = require("fs");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", async (req, res, next) => {
  try {
    fs.readFile("./data/phones.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json(JSON.parse(data));
    });
  } catch (error) {
    next(error);
  }
});

router.get("/phones/:id", async (req, res, next) => {
  console.log(req.params.id)
  try {
    fs.readFile("./data/phones.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const phones = JSON.parse(data);
      const phone = phones.find(phone => phone.id === parseInt(req.params.id));
      res.json(phone);
      console.log(phone)
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
