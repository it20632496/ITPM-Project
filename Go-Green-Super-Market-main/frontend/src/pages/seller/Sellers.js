import React, { useEffect, useState } from "react";
import Layout from "../../componants/Layout/Layout";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { getAllSellers, deleteSeller } from "../../controllers/seller";

const Sellers = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllSellers()
      .then((data) => {
        setProductList(data);
        setFilteredList(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the sellers. please try again",
            "error"
          )
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            window.location.reload();
          });
        return;
      });
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.value === "All") {
      setFilteredList(productList);
    } else {
      setFilteredList(
        productList.filter((product) => product?.type === e.target.value)
      );
    }
  };

  const handleSortChange = (e) => {
    setFilteredList(
      filteredList.sort((a, b) => a.specificName - b.specificName)
    );
  };

  const handleSearch = () => {
    setFilteredList(
      productList.filter(
        (product) =>
          product.name.includes(searchTerm) ||
          product.email.includes(searchTerm) ||
          product.address.includes(searchTerm)
      )
    );
  };

  const handleDeleteSeller = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.value === true) {
          deleteSeller(id).then((res) => {
            if (res) {
              swal
                .fire({
                  title: "Success!",
                  text: "Seller has been deleted",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                })
                .then(() => {
                  window.location.reload();
                });
            } else {
              swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
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
                <li class="breadcrumb-item active">sellers</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body py-2 px-4">
                    <div class="row d-flex justify-content-between align-items-center">
                      <div class="search-bar col-6">
                        <div class="input-group my-3 search-form d-flex align-items-center">
                          <input
                            type="text"
                            class="form-control search"
                            placeholder="Search by Name, Email & Address"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleSearch}
                          >
                            <i class="bi bi-search"></i>
                            <span class="mx-2">Search</span>
                          </button>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="row d-flex justify-content-end">
                          <div class="col-5">
                            <div class="row d-flex align-items-center">
                              Type:
                              <div class="col">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  name="type"
                                  onChange={(e) => {
                                    handleCategoryChange(e);
                                  }}
                                >
                                  <option value="All">All</option>
                                  <option value="Bakery">Bakery</option>
                                  <option value="Beverage">Beverage</option>
                                  <option value="Nonfood & Pharmacy">
                                    Nonfood & Pharmacy
                                  </option>
                                  <option value="Produce & Floral">
                                    Produce & Floral
                                  </option>
                                  <option value="Prepared Foods">
                                    Prepared Foods
                                  </option>
                                  <option value="Household items">
                                    Household items
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="row d-flex align-items-center">
                              Sort by:
                              <div class="col">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  name="sort"
                                  onChange={(e) => {}}
                                >
                                  <option value="name">Name</option>
                                  <option value="price">Price</option>
                                  <option value="quantity">Quantity</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <table id="example" class="table table-striped my">
                      <thead>
                        <tr>
                          <th>Company name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Representative name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredList.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{value.name}</td>
                              <td>{value.email}</td>
                              <td>{value.address}</td>
                              <td>{value.companyRepresentativeName}</td>
                              <td class="table-action">
                                <Link
                                  to={"/viewSeller/" + value._id}
                                  class="top-bar-link"
                                >
                                  <button
                                    class="btn btn-pill btn-success btn-sm"
                                    style={{ marginLeft: 10, width: 60 }}
                                  >
                                    View
                                  </button>
                                </Link>
                                <Link
                                  to={"/editSeller/" + value._id}
                                  class="top-bar-link"
                                >
                                  <button
                                    class="btn btn-pill btn-warning btn-sm"
                                    style={{ marginLeft: 10, width: 60 }}
                                  >
                                    Edit
                                  </button>
                                </Link>

                                <button
                                  class="btn btn-pill btn-danger btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                  onClick={() => {
                                    handleDeleteSeller(value._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        {filteredList.length === 0 && (
                          <p>No items to display</p>
                        )}
                      </tbody>
                    </table>
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

export default Sellers;
