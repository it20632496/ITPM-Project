import { Transport } from "../models/transport.js";

export const addTransport = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const orderId = req.body.orderId;
  const companyId = req.body.companyId;
  const companyName = req.body.companyName;
  const companyType = req.body.companyType;
  const address = req.body.address;
  const installationDate = req.body.installationDate;
  const assignDriverName = req.body.assignDriverName;
  const assignDriverNumber = req.body.assignDriverNumber;

  let newTransport = new Transport({
    orderId,
    companyId,
    companyName,
    companyType,
    address,
    installationDate,
    assignDriverName,
    assignDriverNumber,
  });

  newTransport = await newTransport
    .save()
    .then(() => {
      res.send(newTransport);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllTransports = async (req, res) => {
  Transport.find()
    .then((order) => {
      res.send(order);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNumOfTransports = async (req, res) => {
    Trasnport.find()
    .then((order) => {
      let response = { num: order.length };
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTransport = async (req, res) => {
  const id = req.params.id;
  await Transport.findByIdAndDelete(id)
    .then((transport) => {
      res.status(200).send({ status: "Item deleted", deleteditem: transport });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editTransport = async (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  const { address, installationDate, assignDriverName, assignDriverNumber} = req.body;

  let oldItem = await Transport.findById(id);
  const orderId = oldItem.orderId;
  const companyId = oldItem.companyId;
  const companyName = oldItem.companyName;
  const companyType = oldItem.companyType;

  const updateItem = {
    orderId,
    companyId,
    companyName,
    companyType,
    address,
    installationDate,
    assignDriverName,
    assignDriverNumber,
  };
  const update = await Transport.findByIdAndUpdate(id, updateItem)
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
