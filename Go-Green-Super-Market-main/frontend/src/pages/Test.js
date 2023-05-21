import React from "react";

const Test = () => {
  return (
    <div>
      <div class="pagetitle">
        <h1>Products</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">Products</li>
            <li class="breadcrumb-item active">Products</li>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test;
