import React, { useState, useEffect } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";
import { editProduct, getProduct } from "../../controllers/product.js";
import swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    getProduct(id)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the products. please try again",
            "error"
          )
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            window.location.reload();
          });
        return;
      });
  }, [id]);

  const handleChange = (e) => {
    setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  const handleEditItem = () => {
    editProduct(id, item)
      .then((res) => {
        swal.fire(
          "Successfully edited",
          "Product successfully edited",
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
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Edit Product</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Products</li>
                <li class="breadcrumb-item active">Edit Product</li>
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
                      <div class="my-4">
                        {item?.images?.map((image, index) => (
                          <div
                            key={image}
                            class="row d-flex justify-content-between align-items-center"
                          >
                            <div class="col-3">
                              <img
                                src={image}
                                class={"img-thumbnail"}
                                alt={image.name}
                                style={{ height: "70px" }}
                              />
                            </div>
                            <p class="col-7">{`image ${index}.png`}</p>
                            <div
                              class="col-2"
                              // onClick={() => handleRemoveImage(image)}
                            >
                              <i class="bi bi-trash"></i>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Update following form to edit the product
                    </h5>
                    <form
                      class="row g-3 needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEditItem();
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
                          value={item?.specificName}
                        />
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
                          value={item?.genericName}
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
                          value={item?.category}
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
                            value={item?.price}
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
                          value={item?.quantity}
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
                          value={item?.description}
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

export default EditProduct;
