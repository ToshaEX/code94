module.exports = (app) => {
  const products = require("../controllers/products.controller");

  var router = require("express").Router();

  router.post("/", products.create);
  router.get("/", products.getAll);
  router.get("/:id", products.getProduct);
  router.delete("/:id", products.remove);

  //   // Retrieve all published Tutorials
  //   router.get("/published", products.findAllPublished);

  //   // Retrieve a single Tutorial with id
  //   router.get("/:id", products.findOne);

  //   // Update a Tutorial with id
  //   router.put("/:id", products.update);

  //   // Delete a Tutorial with id
  //   router.delete("/:id", products.delete);

  //   // Create a new Tutorial
  //   router.delete("/", products.deleteAll);

  app.use("/api/products", router);
};
