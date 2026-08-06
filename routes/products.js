const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const productController = require("../controllers/productController");

router.get("/", auth , productController.getProducts);
router.post("/", productController.addProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
