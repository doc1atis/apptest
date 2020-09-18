const express = require("express");
const router = express.Router();
const requiresAuth = require("../AUTH/authenticate");
const productsController = require("../controllers/productsController");
// products
router.post("/new", productsController.createProduct);
router.get("/", productsController.getAllProducts);
router.get("/:id", productsController.getOneProduct);
router.put("/:id", requiresAuth, productsController.updateOneProduct);
router.delete("/:id", requiresAuth, productsController.deleteOneProduct);
module.exports = router;
