const db = require("../models");
const Products = db.products;

async function create(req, res, next) {
  // Validate request
  const { sku, quantity, productName, images, productDescription } = req.body;
  if (!sku || !quantity || !productName || !productDescription) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Tutorial
  const products = new Products({
    sku,
    quantity,
    productName,
    images,
    productDescription,
  });

  // Save Tutorial in the database
  products
    .save(products)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
}

async function getAll(req, res, next) {
  Products.find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
}

async function getProduct(req, res, next) {
  const { id } = req.param;
  Products.findOne({ id })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products.",
      });
    });
}

async function remove(req, res, next) {
  const { id } = req.params;

  Products.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found product with id " + id });
      else {
        Products.deleteOne({ _id: id })
          .then(() => res.send(data))
          .catch(() =>
            res.status(404).send({ message: "Product deletion failed" })
          );
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving product with id=" + id });
    });
}

module.exports = {
  create,
  getAll,
  getProduct,
  remove,
};
