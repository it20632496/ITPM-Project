import React, { useState, useEffect } from "react";
import Layout from "../../componants/Layout/Layout";
// import Navbar from '../../components/F_M_Navbar';
// import swal from 'sweetalert';
// import Select from 'react-select'
// import $ from 'jquery';
// import moment from 'moment';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'
// import { Sugar } from 'react-preloaders2';

// import logo from '../../img/logo/fullLogo.png';

//css
// import '../../css/modern.css';
// import './F_M_Report.css';

//js
// import '../../js/app.js';

export default function ProductReport() {
  return (
    <React.Fragment>
      <Layout>
        <div class="wrapper">
          {/* <Navbar /> */}
          <div class="main">
            <main class="content">
              <div class="container-fluid">
                <div class="pagetitle">
                  <h1>Product Report</h1>
                  <nav>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">Products</li>
                      <li class="breadcrumb-item active">Product Report</li>
                    </ol>
                  </nav>
                </div>
                <br />

                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body mt-3 mb-2" style={{ margin: "0px" }}>
                      <div class="row mb-2 px-4">
                        <h5 class="fw-semibold">
                          Select the start date and end date to generate the
                          report
                        </h5>
                      </div>

                      <div class="row  align-items-center px-4 mb-2">
                        <div class="mb-3 col-md-5">
                          <label for="inputEmail4">Start Date</label>
                          <input
                            type="date"
                            class="form-control"
                            name="appointment"
                            data-date-format="DD MMMM YYYY"
                            value="2023.05.18"
                          />
                        </div>
                        <div class="mb-3 col-md-5">
                          <label for="inputEmail4">End Date</label>
                          <input
                            type="date"
                            class="form-control"
                            name="appointment"
                            data-date-format="DD MMMM YYYY"
                            value="2023.05.20"
                          />
                        </div>
                        <div class="col-md-2 ">
                          <button
                            type="submit"
                            class="btn  btn-primary "
                            id="addCustomer"
                            style={{
                              backgroundColor: "#081E3D",
                              borderColor: "#081E3D",
                              color: "#fff",
                              marginLeft: 50,
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <button class="btn  btn-primary" style={{ marginBottom: 25 }}>
                    Download PDF
                  </button>
                </div>

                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <table id="example" class="table table-striped my">
                        <thead>
                          <tr>
                            <th class="text-center">Order Id</th>
                            <th class="text-center">Reservation Id</th>
                            <th class="text-center">NIC</th>
                            <th class="text-center">Date</th>
                            <th class="text-center">Time</th>
                            <th class="text-center">Item Count</th>
                            <th class="text-center">Total Amount</th>
                          </tr>
                        </thead>

                        <tbody>
                          return{" "}
                          <tr id="OrderId">
                            <td class="text-center">12345</td>
                            <td class="text-center">7875567</td>
                            <td class="text-center">2000684657V</td>
                            <td class="text-center">2023.05.24</td>
                            <td class="text-center">5.00 a.m</td>
                            <td class="text-center">12</td>
                            <td class="text-center">Rs. 400.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p></p>
              </div>
            </main>
          </div>
        </div>
      </Layout>
      {/* <Sugar customLoading={loading} background="blur"/> */}
    </React.Fragment>
  );
}
