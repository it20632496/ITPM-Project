import "./assests/css/bootstrap/css/bootstrap.min.css";
import "./css/bootstrap-icons/bootstrap-icons.css";
import "./App.css";
import "./assests/css/style.css";

import Layout from "./componants/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./pages/Test";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

// Product
import AddProduct from "./pages/product/AddProduct";
import Products from "./pages/product/Products";
import ProductDashboard from "./pages/product/ProductDashboard";
import ProductReport from "./pages/product/ProductReport";
import EditProduct from "./pages/product/EditProduct";

//Seller
import AddSeller from "./pages/seller/AddSeller";
import Sellers from "./pages/seller/Sellers";
import EditSeller from "./pages/seller/EditSeller";
import ViewSeller from "./pages/seller/ViewSeller";

import AddVehicle from "./pages/vehicle/AddVehicle";
import Vehicles from "./pages/vehicle/Vehicles";
import EditVehicle from "./pages/vehicle/EditVehicle";

function App() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route exact path="/t" element={<Test />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signin />} />

        {/* Product */}
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/productDashboard" element={<ProductDashboard />} />
        <Route exact path="/productReport" element={<ProductReport />} />
        <Route exact path="/editProduct/:id" element={<EditProduct />} />

        {/* Seller */}
        <Route exact path="/addSeller" element={<AddSeller />} />
        <Route exact path="/sellers" element={<Sellers />} />
        <Route exact path="/editSeller/:id" element={<EditSeller />} />
        <Route exact path="/viewSeller/:id" element={<ViewSeller />} />

        <Route exact path="/addVehicle" element={<AddVehicle />} />
        <Route exact path="/vehicles" element={<Vehicles />} />
        <Route exact path="/editVehicle/:id" element={<EditVehicle />} />


      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default App;
