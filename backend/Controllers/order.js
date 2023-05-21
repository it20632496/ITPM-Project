import { Order } from "../models/order.js";

export const addOrder = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const productId = req.body.productId;
  const productName = req.body.productName;
  const productType = req.body.productType;
  const productPrice = req.body.productPrice;
  const companyId = req.body.companyId;
  const companyName = req.body.companyName;
  const quantity = req.body.quantity;
  const contactNumber = req.body.contactNumber;
  const address = req.body.address;
  const date = new Date().toISOString();

  let newOrder = new Order({
    productId,
    productName,
    productType,
    productPrice,
    companyId,
    companyName,
    quantity,
    contactNumber,
    address,
    date
  });

  newOrder = await newOrder
    .save()
    .then(() => {
      res.send(newOrder);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllOrders = async (req, res) => {
  Order.find()
    .then((order) => {
      res.send(order);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNumOfOrders = async (req, res) => {
    Order.find()
    .then((order) => {
      let response = { num: order.length };
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  await Order.findByIdAndDelete(id)
    .then((order) => {
      res.status(200).send({ status: "Item deleted", deleteditem: order });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editOrder = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const { quantity, contactNumber, address } = req.body;

  let oldItem = await Order.findById(id);
  const productId = oldItem.productId;
  const productName = oldItem.productName;
  const productType = oldItem.productType;
  const companyId = oldItem.companyId;
  const companyName = oldItem.companyName;
  const productPrice = oldItem.productPrice;
  const date = oldItem.date;

  const updateItem = {
    productId,
    productName,
    productType,
    companyId,
    companyId,
    companyName,
    productPrice,
    date,
    quantity,
    contactNumber,
    address
  };
  const update = await Order.findByIdAndUpdate(id, updateItem)
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
