import { Product } from "../models/product.js";

export const addProduct = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const name = req.body.name;
  const category = req.body.category;
  const type = req.body.type;
  const price = req.body.price;
  let image = "";
  if (req.file !== undefined) {
    image = req.file.path;
  }
  const availability = "yes";
  const description = req.body.description;
  const stock = req.body.stock;

  let newProduct = new Product({
    name,
    category,
    type,
    price,
    image,
    availability,
    description,
    stock,
  });

  newProduct = await newProduct
    .save()
    .then(() => {
      res.send(newProduct);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllProducts = async (req, res) => {
  Product.find()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNumOfProducts = async (req, res) => {
  Product.find()
    .then((product) => {
      let response = { num: product.length };
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProductsOfAType = async (req, res) => {
  const type = req.params.type;
  Product.find({ type: type })
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  await Product.findByIdAndDelete(id)
    .then((product) => {
      res.status(200).send({ status: "Item deleted", deletedProduct: product });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editProduct = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const { price, availability, description, stock } = req.body;

  let oldItem = await Food.findById(id);
  const name = oldItem.name;
  const category = oldItem.category;
  const type = oldItem.type;
  const image = oldItem.image;

  const updateItem = {
    name,
    category,
    type,
    price,
    image,
    availability,
    description,
    stock
  };
  const update = await Product.findByIdAndUpdate(id, updateItem)
    .then(async () => {
      res.status(200).send({ status: "Item updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
  console.log(update);
};
