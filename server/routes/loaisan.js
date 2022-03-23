const router = require("express").Router();

const Loaisan = require("../models/Loaisan");

//create
router.post("/", async (req,res)=>{
    const newLoaisan = new Loaisan(req.body);
    try {
        const savedLoaisan = await newLoaisan.save();
        res.status(200).json(savedLoaisan);
      } catch (err) {
        res.status(500).json(err);
      }
})

//update
router.put("/:id", async (req, res) => {
    try {
      const updatedLoaisan = await Loaisan.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedLoaisan);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //delete
  router.delete("/:id", async (req, res) => {
    try {
      await Loaisan.findByIdAndDelete(req.params.id);
      res.status(200).json("Loại sân đã được xóa!");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get loaisan
  router.get("/find/:id", async (req, res) => {
    try {
      const loaisan = await Loaisan.findById(req.params.id);
      res.status(200).json(loaisan);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //get all loaisan
  router.get("/", async (req, res) => {
    try {
      const loaisan = await Loaisan.find();
      res.status(200).json(loaisan);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router; 