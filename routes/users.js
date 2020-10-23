// import express
const { Router } = require("express");
// import controllers/products
const controllers = require("../controllers/products");

// enstantiating router
const router = Router();

// defining our routes
// table of contents for routes.
// CRUD

router.get("/users", controllers.getProducts);
router.get("/users/:id", controllers.getProduct);
router.post("/users", controllers.createProduct);
router.put("/users/:id", controllers.updateProduct);
router.delete("/users/:id", controllers.deleteProduct);

module.exports = router;
