const Plant = require("../models/plant")

const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()

    return res.status(201).json({
      plant,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllPlants = async (req, res) => {
  try {
    const plants = await Plant.find()
    return res.status(200).json({ plants })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getPlantById = async (req, res) => {
  try {
    const { id } = req.params
    const plants = await Plant.findById(id)
    if (plants) return res.status(200).json({ plants })
    else return res.status(404).send("plant not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatePlant = (req, res) => {
  try {
    const { id } = req.params
    Plant.findByIdAndUpdate(id, req.body, { new: true }, (err, plant) => {
      if (err !== null) {
        console.log(err, "error")
        res.status(404).send(message)
      } else {
        console.log(plant)
        res.json(plant)
      }
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deletePlant = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Plant.findByIdAndDelete(id)
    if (deleted) return res.status(200).send("plant deleted")
    throw new Error("Plant not found")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
}
