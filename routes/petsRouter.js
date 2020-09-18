const express = require("express");
const router = express.Router();
// const requiresAuth = require("../AUTH/authenticate");
const petsController = require("../controllers/petsController");
// products
router.post("/new", petsController.createOnePet);
router.get("/", petsController.getAllPets);
router.get("/:id", petsController.getOnePet);
router.put("/:id", petsController.updateOnePet);
router.patch("/:id", petsController.likeOnePet);
router.delete("/:id", petsController.deleteOnePet);
module.exports = router;
