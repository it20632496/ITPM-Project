import React, { useState, useEffect } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";
import { editVehicle, getVehicle } from "../../controllers/vehicle.js";
import swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditVehicle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({});

  useEffect(() => {
    getVehicle(id)
      .then((data) => {
        setItem(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the vehicle. please try again",
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
    editVehicle(id, item)
      .then((res) => {
        swal.fire(
          "Successfully edited",
          "Vehicle successfully edited",
          "success"
        );
        navigate("/vehicles");
      })
      .catch((err) => {
        swal.fire(
          "Error occurred",
          "Error occurred while we trying to edit the vehicle. please try again",
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
          <h1>Add Vehicle</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">Vehicle</li>
              <li class="breadcrumb-item active">Add Vehicle</li>
            </ol>
          </nav>
        </div>
        <section class="section">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Fill this form to add a vehicle</h5>
                  <form
                    class="row g-3 needs-validation"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleEditItem();
                    }}
                  >
                    <div class="col-12">
                      <label for="number" class="form-label">
                        Vehicle Number
                      </label>
                      <input
                        type="text"
                        className={`form-control`}
                        id="number"
                        onChange={handleChange}
                        placeholder="Vehicle Number"
                        required
                        name="number"
                        value={item?.number}
                      />
                    </div>
                    <div class="col-12">
                      <label for="type" class="form-label">
                        Vehicle Type
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        name="type"
                        onChange={handleChange}
                        value={item?.type}
                      >
                        <option value="Car">Car</option>
                        <option value="Van">Van</option>
                        <option value="Lorry">
                          Lorry
                        </option>
                        <option value="Three wheel">
                          Three wheel
                        </option>
                      </select>

                      <div class="valid-feedback">Looks good!</div>
                    </div>
                    <div class="col-12">
                      <label for="numOfSeats" class="form-label">
                        Number of seats
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="numOfSeats"
                        placeholder="Number of seats"
                        required
                        name="numOfSeats"
                        onChange={handleChange}
                        value={item?.numOfSeats}
                      />
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="pricePerKM" class="form-label">
                        Price per KM
                      </label>
                      <div class="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Price per KM"
                          aria-label="Unit price"
                          aria-describedby="basic-addon2"
                          id="pricePerKM"
                          name="pricePerKM"
                          onChange={handleChange}
                          required
                          value={item?.pricePerKM}
                        />
                        <span class="input-group-text" id="basic-addon2">
                          .00 LKR
                        </span>
                      </div>
                    </div>
                    <div class="col-12">
                      <label for="driver" class="form-label">
                      Driver
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="driver"
                        placeholder="Driver"
                        required
                        name="driver"
                        onChange={handleChange}
                        value={item?.driver}
                      />
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

export default EditVehicle;
