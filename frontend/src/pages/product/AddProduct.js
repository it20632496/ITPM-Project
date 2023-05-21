import React, { useState } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";
import { addProduct } from "../../controllers/product.js";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { storage } from "../../utils/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [images, setImages] = useState([]);
  const [imgLinks, setImgLinks] = useState([]);
  const [percent, setPercent] = useState(0);

  const handleChange = (e) => {
    setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  const handleAddItem = () => {
    const promises = [];
    // images.map((image) => handleUpload(image));
    images.map((image) => {
      const storageRef = ref(storage, `/images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      // const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setPercent(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImgLinks((prevState) => [...prevState, url]);
          });
        }
      );
    });
    Promise.all(promises)
      .then(() => {
        swal.fire(
          "Images uploaded",
          "Product images successfully uploaded",
          "success"
        );
        addProduct({ ...item, images: imgLinks })
          .then((res) => {
            swal.fire(
              "Successfully added",
              "Product successfully added",
              "success"
            );
            navigate("/products");
          })
          .catch((err) => {
            swal.fire(
              "Error occurred",
              "Error occurred while we trying to add the product. please try again",
              "error"
            );
            return;
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Add Product</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Products</li>
                <li class="breadcrumb-item active">Add Product</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Drag and drop or Click to select to add images
                    </h5>
                    <div class="my-5 mx-3">
                      <DragAndDropZone images={images} setImages={setImages} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Fill this form to add a product</h5>
                    <form
                      class="row g-3 needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddItem();
                      }}
                    >
                      <div class="col-12">
                        <label for="specificName" class="form-label">
                          Product specific name
                        </label>
                        <input
                          type="text"
                          className={`form-control`}
                          id="specificName"
                          onChange={handleChange}
                          placeholder="Name"
                          required
                          name="specificName"
                        />
                        {/* <input
                          type="text"
                          className={`form-control ${
                            true ? "is-valid" : "is-invalid"
                          }`}
                          id="specificName"
                          onChange={handleChange}
                          placeholder="Name"
                          required
                          name="specificName"
                        /> */}
                        {/* <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div> */}
                      </div>
                      <div class="col-12">
                        <label for="genericName" class="form-label">
                          Product generic name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="genericName"
                          placeholder="Generic Name"
                          required
                          name="genericName"
                          onChange={handleChange}
                        />
                        <div class="valid-feedback">Looks good!</div>
                      </div>
                      <div class="col-12">
                        <label for="category" class="form-label">
                          Category
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="category"
                          onChange={handleChange}
                        >
                          <option value="Bakery">Bakery</option>
                          <option value="Beverage">Beverage</option>
                          <option value="Nonfood & Pharmacy">
                            Nonfood & Pharmacy
                          </option>
                          <option value="Produce & Floral">
                            Produce & Floral
                          </option>
                          <option value="Prepared Foods">Prepared Foods</option>
                          <option value="Household items">
                            Household items
                          </option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="price" class="form-label">
                          Unit price
                        </label>
                        <div class="input-group mb-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Unit price"
                            aria-label="Unit price"
                            aria-describedby="basic-addon2"
                            id="price"
                            name="price"
                            onChange={handleChange}
                            required
                          />
                          <span class="input-group-text" id="basic-addon2">
                            .00 LKR
                          </span>
                        </div>
                        <div class="blockquote-footer mt-1 mb-0 text-danger">
                          10% of the unit price from an item goes to NiceAdmin
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="quantity" class="form-label">
                          Quantity
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="quantity"
                          placeholder="Quantity"
                          required
                          name="quantity"
                          onChange={handleChange}
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="description" class="form-label">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="description"
                          style={{ height: "100px" }}
                          placeholder="More details (optional)"
                          name="description"
                          onChange={handleChange}
                        ></textarea>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary mx-4">
                          Submit
                        </button>
                        {/* <button type="reset" class="btn btn-secondary">
                          Reset
                        </button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AddProduct;
