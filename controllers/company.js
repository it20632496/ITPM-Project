import { Company } from "../models/company.js";

export const addCompany = async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  // const name = req.body.name;
  // const email = req.body.email;
  // const type = req.body.type;
  // const address = req.body.address;
  // const companyRepresentativeName = req.body.companyRepresentativeName;
  // const companyRepresentativeDesignation =
  //   req.body.companyRepresentativeDesignation;
  // const companyRepresentativeEmail = req.body.companyRepresentativeEmail;
  // const companyRepresentativeMobile = req.body.companyRepresentativeMobile;
  // const comments = req.body.comments;
  // const joinedDate = new Date().toISOString();

  let newCompany = new Company({
    ...req.body,
    joinedDate: new Date().toISOString(),
    type: "seller",
  });

  newCompany = await newCompany
    .save()
    .then(() => {
      res.send(newCompany);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllCompanies = async (req, res) => {
  Company.find()
    .then((company) => {
      res.send(company);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getNumOfCompanies = async (req, res) => {
  Company.find()
    .then((company) => {
      let response = { num: company.length };
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCompaniesOfAType = async (req, res) => {
  const type = req.params.type;
  Company.find({ type: type })
    .then((company) => {
      res.send(company);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCompany = async (req, res) => {
  const id = req.params.id;
  await Company.findByIdAndDelete(id)
    .then((company) => {
      res.status(200).send({ status: "Item deleted", deleteditem: company });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editCompany = async (req, res) => {
  const id = req.params.id;
  // const {
  //   type,
  //   email,
  //   address,
  //   companyRepresentativeName,
  //   companyRepresentativeDesignation,
  //   companyRepresentativeEmail,
  //   companyRepresentativeMobile,
  //   comments,
  // } = req.body;

  const updatedItem = req.body;

  // let oldItem = await Food.findById(id);
  // const name = oldItem.name;
  // const joinedDate = oldItem.joinedDate;

  // const updateItem = {
  //   name,
  //   type,
  //   email,
  //   address,
  //   companyRepresentativeName,
  //   companyRepresentativeDesignation,
  //   companyRepresentativeEmail,
  //   companyRepresentativeMobile,
  //   comments,
  //   joinedDate,
  // };
  const update = await Company.findByIdAndUpdate(id, updatedItem)
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

export const getCompany = async (req, res) => {
  const id = req.params.id;
  const company = await Company.findById(id)
    .then((company) => {
      res.status(200).send(company);
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const findSellerByEmail = async (req, res) => {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  const email = req.params.email;
  Company.findOne({ email: email })
    .then((user) => {
      if (user) res.status(200).send(user);
      else res.status(500).json({ error: "use not found" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
