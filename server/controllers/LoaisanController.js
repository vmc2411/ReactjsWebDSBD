import Loaisan from "../models/LoaisanModel";

const getLoaiSan = async (req,res) => {
    try {
        const loaisan = await Loaisan.find();
        res.json(loaisan);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
 const getLoaiSanByID = async (req,res) => {
    try {
        const loaisan = await Loaisan.findById(req.params.id);
        res.json(loaisan);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

 const saveLoaisan = async (req,res) => {
    const loaisan = new Loaisan(req.body);
    try {
        const insertedloaisan = await loaisan.save();
        res.sattus(201).json(insertedloaisan);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}