// import express
const { Router } = require("express");
// import controllers/products
const controllers = require("../controllers/products");

// enstantiating router
const router = Router();

// defining our routes
// table of contents for routes.
// CRUD

router.get("/posts", controllers.getProducts);
router.get("/posts/:id", controllers.getProduct);
router.post("/posts", controllers.createProduct);
router.put("/posts/:id", controllers.updateProduct);
router.delete("/posts/:id", controllers.deleteProduct);

module.exports = router;
