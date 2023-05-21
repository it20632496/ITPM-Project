import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../componants/Layout/Layout";
// import Navbar from "../../componants/NavBar";
// import "../../assests/css/modern.css";
// import "../../js/app.js";
// import './F_M_Dashboard.css';

// import { Line , PolarArea, Bar} from 'react-chartjs-2';
// import Chart from 'chart.js/auto';
// import {CategoryScale} from 'chart.js';
// import pattern from 'patternomaly';
// import { Sugar } from 'react-preloaders2';
// import swal from 'sweetalert';

import orderFood from "../../assests/images/fmOrderFood.png";
import ordersImage from "../../assests/images/fmOrders.png";
import moneyImage from "../../assests/images/fmMoney.png";
import foodsImage from "../../assests/images/fmFoods.png";
import dietImage from "../../assests/images/fmDiet.png";
import beverageImage from "../../assests/images/fmBeverages.png";
import desertImage from "../../assests/images/fmCake.png";
import boxImage from "../../assests/images/fmBox.png";
import fastFoodImage from "../../assests/images/fmFastfood.png";

export default function ProductDashboard() {
  return (
    <React.Fragment>
      <Layout>
        <div class="wrapper">
          {/* <Navbar /> */}
          <div class="main">
            <main class="content">
              <div class="container-fluid">
                <div class="pagetitle">
                  <h1>Product Dashboard</h1>
                  <nav>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">Products</li>
                      <li class="breadcrumb-item active">Product Dashboard</li>
                    </ol>
                  </nav>
                </div>
                <br />

                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body mt-3" style={{ margin: "0px" }}>
                      <div class="row">
                        <div class="col-md-7 px-5">
                          <div class="row fs-2">
                            <h3 class="mb-2">Hello Thisara!</h3>
                          </div>
                          <div class="row fs-6">
                            <h5 class="mb-0">Food & Beverage Manager</h5>
                          </div>
                          <div class="row">
                            <p class="mb-2">Login Time: 06:56pm </p>
                          </div>
                          <div class="row">
                            <a href="/">
                              <p class="mb-2">Logout</p>
                            </a>
                          </div>
                        </div>
                        <div class="col-md-5">
                          <div class="row m-3 h-75">
                            <a>
                              <div
                                class="container-12 mx-6 d-flex justify-content-center align-items-center h-100 rounded"
                                style={{
                                  width: "250px",
                                  height: "250px",
                                  backgroundColor: "#2E4765",
                                }}
                                id="makeOrder"
                              >
                                <div class="col-3">
                                  <img
                                    src={orderFood}
                                    class="img-fluid mx-3"
                                  ></img>
                                </div>
                                <div class="col-6 mx-3 d-flex justify-content-center align-items-center fw-semibold fs-4 px-3 text-white">
                                  <p>Make an Order</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row d-flex justify-content-between">
                  <div class="col-md-6 col-lg-4 ">
                    <div
                      class="card"
                      style={{
                        width: "370px",
                        height: "180px",
                        backgroundColor: "#518B6C",
                      }}
                    >
                      <div class="card-body" style={{ margin: "0px" }}>
                        <div class="row">
                          <div class="col-6 mt-0 px-4 text-white">
                            <h5 class="card-title text-white">Total Orders</h5>
                            <h1
                              class="display-5 mt-1 mb-1 text-white fw-bold"
                              style={{ fontSize: "40px" }}
                            >
                              00
                            </h1>
                            <h5 class="text-white fs-5">May</h5>
                          </div>

                          <div class="col-5 mx-2">
                            <img src={ordersImage} class="img-fluid mx-3"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 ">
                    <div
                      class="card"
                      style={{
                        width: "370px",
                        height: "180px",
                        backgroundColor: "#C49C2C",
                      }}
                    >
                      <div class="card-body" style={{ margin: "0px" }}>
                        <div class="row">
                          <div class="col-6 mt-0 px-4 text-white">
                            <h5 class="card-title text-white">Total Revenue</h5>
                            <h1
                              class="display-5 mt-1 mb-1 text-white fw-bold"
                              style={{ fontSize: "40px" }}
                            >
                              OK
                            </h1>
                            <h5 class="text-white fs-5">May</h5>
                          </div>

                          <div class="col-5 mx-2">
                            <img src={moneyImage} class="img-fluid mx-3"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 ">
                    <div
                      class="card"
                      style={{
                        width: "370px",
                        height: "180px",
                        backgroundColor: "#D86F33",
                      }}
                    >
                      <div class="card-body" style={{ margin: "0px" }}>
                        <div class="row">
                          <div class="col-6 mt-0 px-4 text-white">
                            <h5 class="card-title text-white">Total Items</h5>
                            <h1
                              class="display-5 mt-1 mb-1 text-white fw-bold"
                              style={{ fontSize: "40px" }}
                            >
                              14
                            </h1>
                            <h5 class="text-white fs-5">May</h5>
                          </div>

                          <div class="col-5 mx-2">
                            <img src={foodsImage} class="img-fluid mx-3"></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row d-flex justify-content-between mt-4">
                  <div class="col-md-6 col-lg-7 ">
                    <div class="card">
                      <div class="card-body" style={{ margin: "0px" }}>
                        {/* <Bar
                            datasetIdKey='id'
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', "Sept", "Oct", "Nov", "Dec"],
                                datasets: [{
                                    label: 'Annual Order Summary',
                                    backgroundColor: [
                                        'rgb(255, 99, 132)',
                                        'rgb(75, 192, 192)',
                                        'rgb(255, 205, 86)',
                                        'rgb(201, 203, 207)',
                                        'rgb(54, 162, 235)',
                                        'rgb( 80, 175, 52 )',
                                        'rgb( 153, 97, 217 )',
                                        'rgb(  189, 81, 153 )',
                                        'rgb(  159, 183, 63 )'
                                    ]
                                  }]
                            }}
                            /> */}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 mx-4 ">
                    <div class="card">
                      <div class="card-body" style={{ margin: "0px" }}>
                        <div class="row mx-0 d-flex justify-content-between align-items-center mb-4">
                          <div class="col-8">
                            <p class="mb-0 fw-semibold">Food & Beverages</p>
                          </div>
                          <div class="col-auto">
                            <button
                              type="button"
                              class="btn text-white fw-semibold"
                              style={{ backgroundColor: "#2E4765" }}
                            >
                              See All
                            </button>
                          </div>
                        </div>

                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                          <div class="col-3">
                            <img
                              src={dietImage}
                              class="img-fluid"
                              style={{ height: "50px" }}
                            ></img>
                          </div>
                          <div class="col-6 d-flex justify-content-start px-0">
                            <p class="mb-0 fw-semibold">Foods</p>
                          </div>
                          <div class="col-auto px-4">
                            <img
                              src={boxImage}
                              class="img-fluid"
                              style={{ height: "30px" }}
                            ></img>
                          </div>
                        </div>

                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                          <div class="col-3">
                            <img
                              src={beverageImage}
                              class="img-fluid"
                              style={{ height: "50px" }}
                            ></img>
                          </div>
                          <div class="col-6 d-flex justify-content-start px-0">
                            <p class="mb-0 fw-semibold">Beverages</p>
                          </div>
                          <div class="col-auto px-4">
                            <img
                              src={boxImage}
                              class="img-fluid"
                              style={{ height: "30px" }}
                            ></img>
                          </div>
                        </div>

                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                          <div class="col-3">
                            <img
                              src={desertImage}
                              class="img-fluid"
                              style={{ height: "50px" }}
                            ></img>
                          </div>
                          <div class="col-6 d-flex justify-content-start px-0">
                            <p class="mb-0 fw-semibold">Desserts</p>
                          </div>
                          <div class="col-auto px-4">
                            <img
                              src={boxImage}
                              class="img-fluid"
                              style={{ height: "30px" }}
                            ></img>
                          </div>
                        </div>

                        <div class="row mx-0 d-flex justify-content-between align-items-center my-3">
                          <div class="col-3">
                            <img
                              src={fastFoodImage}
                              class="img-fluid"
                              style={{ height: "50px" }}
                            ></img>
                          </div>
                          <div class="col-6 d-flex justify-content-start px-0">
                            <p class="mb-0 fw-semibold">Fast Food</p>
                          </div>
                          <div class="col-auto px-4">
                            <img
                              src={boxImage}
                              class="img-fluid"
                              style={{ height: "30px" }}
                            ></img>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Layout>
      {/* <Sugar background="blur"/> */}
    </React.Fragment>
  );
}
