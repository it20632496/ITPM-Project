import React, { useState, useEffect } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";
import { editSeller, getSeller } from "../../controllers/seller.js";
import swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditSeller = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});

  useEffect(() => {
    getSeller(id)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the seller. please try again",
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
    editSeller(id, item)
      .then((res) => {
        swal.fire(
          "Successfully edited",
          "Seller successfully edited",
          "success"
        );
        navigate("/sellers");
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
            <h1>Sellers</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Sellers</li>
                <li class="breadcrumb-item active">Edit seller</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Update following form to edit the seller
                    </h5>
                    <form
                      class="row g-3 needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleEditItem();
                      }}
                    >
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className={`form-control`}
                          id="name"
                          onChange={handleChange}
                          placeholder="Name"
                          required
                          name="name"
                          value={item?.name}
                        />
                      </div>
                      <div class="col-12">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Email"
                          required
                          name="email"
                          onChange={handleChange}
                          value={item?.email}
                        />
                        <div class="valid-feedback">Looks good!</div>
                      </div>
                      <div class="col-12">
                        <label for="type" class="form-label">
                          Type
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          name="type"
                          onChange={(e) => handleChange(e)}
                          value={item?.type}
                        >
                          <option value="Bakery">Bakery</option>
                          <option value="Beverage">Beverage</option>
                          <option value="Nonfood & Pharmacy">
                            Nonfood & Pharmacy
                          </option>
                        </select>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="address" class="form-label">
                          Address
                        </label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Address"
                            aria-label="Unit price"
                            aria-describedby="basic-addon2"
                            id="address"
                            name="address"
                            onChange={handleChange}
                            required
                            value={item?.address}
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <label
                          for="companyRepresentativeName"
                          class="form-label"
                        >
                          Company Representative Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyRepresentativeName"
                          placeholder="Company Representative Name"
                          required
                          name="companyRepresentativeName"
                          onChange={handleChange}
                          value={item?.companyRepresentativeName}
                        />
                      </div>
                      <div class="col-12">
                        <label
                          for="companyRepresentativeDesignation"
                          class="form-label"
                        >
                          Company Representative Designation
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyRepresentativeDesignation"
                          placeholder="Company Representative Designation"
                          required
                          name="companyRepresentativeDesignation"
                          onChange={handleChange}
                          value={item?.companyRepresentativeDesignation}
                        />
                      </div>
                      <div class="col-12">
                        <label
                          for="companyRepresentativeEmail"
                          class="form-label"
                        >
                          Company Representative Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyRepresentativeEmail"
                          placeholder="Company Representative Email"
                          required
                          name="companyRepresentativeEmail"
                          onChange={handleChange}
                          value={item?.companyRepresentativeEmail}
                        />
                      </div>
                      <div class="col-12">
                        <label
                          for="companyRepresentativeMobile"
                          class="form-label"
                        >
                          Company Representative Mobile
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="companyRepresentativeMobile"
                          placeholder="Company Representative Mobile"
                          required
                          name="companyRepresentativeMobile"
                          onChange={handleChange}
                          value={item?.companyRepresentativeMobile}
                        />
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
      </Layout>{" "}
    </>
  );
};

export default EditSeller;
