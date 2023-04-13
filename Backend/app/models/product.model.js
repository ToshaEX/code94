module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      sku: String,
      quantity: String,
      productName: String,
      images: String,
      productDescription: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Products = mongoose.model("Product", schema);
  return Products;
};
