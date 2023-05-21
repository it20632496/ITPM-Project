import React, { useState, useEffect } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";
import { getSeller } from "../../controllers/seller.js";
import swal from "sweetalert2";
import { useNavigate, useParams, Link } from "react-router-dom";

const ViewSeller = () => {
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
              <div class="col-md-2"></div>
              <div class="col-md-8">
                <table class="table table-sm my-2 ">
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{item.email}</td>
                    </tr>
                    <tr>
                      <th>Type</th>
                      <td>{item.type}</td>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <td>{item.address}</td>
                    </tr>
                    <tr>
                      <th>Company Representative Name</th>
                      <td>{item.companyRepresentativeName}</td>
                    </tr>
                    <tr>
                      <th>Company Representative Designation</th>
                      <td>{item?.companyRepresentativeDesignation}</td>
                    </tr>
                    <tr>
                      <th>Company Representative Email</th>
                      <td>{item.companyRepresentativeEmail}</td>
                    </tr>
                    <tr>
                      <th>Company Representative Mobile</th>
                      <td>{item?.companyRepresentativeMobile}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link to={"/sellers"} class="top-bar-link">
                <button
                  class="btn btn-pill btn-success btn-sm"
                  style={{ marginLeft: -600, width: 60 }}
                >
                  Back
                </button>
              </Link>
            </div>
          </section>
        </div>
      </Layout>{" "}
    </>
  );
};

export default ViewSeller;
