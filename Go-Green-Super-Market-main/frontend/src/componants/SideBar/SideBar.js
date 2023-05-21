import React from "react";

const SideBar = () => {
  return (
    <div>
      {/* <!-- ======= Sidebar ======= --> */}
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link collapsed" href="/productDashboard">
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>
          {/* <!-- End Dashboard Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="/addProduct">
              <i class="bi bi-bag-plus"></i>
              <span>Add product</span>
            </a>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="/products">
              <i class="bi bi-archive"></i>
              <span>Products</span>
            </a>
          </li>
          {/* <!-- End F.A.Q Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="/productReport">
              <i class="bi bi-list-check"></i>
              <span>Reports</span>
            </a>
          </li>
          {/* <!-- End Contact Page Nav --> */}

          <li class="nav-item">
            <a class="nav-link collapsed" href="pages-login.html">
              <i class="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </a>
          </li>
          {/* <!-- End Login Page Nav --> */}

          {/* <!-- End Blank Page Nav --> */}
        </ul>
      </aside>
      {/* <!-- End Sidebar--> */}
    </div>
  );
};

export default SideBar;
