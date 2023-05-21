import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import swal from "sweetalert2";
import { loginUser } from "../controllers/user";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === "") {
      swal.fire("Fill all fields", "Please enter the email", "warning");
      return;
    } else if (pass === "") {
      swal.fire("Fill all fields", "Please enter a password", "warning");
      return;
    } else {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass)
        .catch((err) => {
          swal.fire(
            "Error occurred",
            "Error occurred while we trying to authenticate you. please try again",
            "error"
          );
          return;
        })
        .then(() => {
          loginUser(email)
            .then((res) => {
              swal.fire(
                "Successfully Logged in",
                "User successfully logged",
                "success"
              );
              navigate("/productDashboard");
            })
            .catch((err) => {
              swal.fire(
                "Error occurred",
                "Error occurred while we trying to log you. please try again",
                "error"
              );
              return;
            });
        });
    }
  };

  return (
    <body>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
            <div class="d-flex justify-content-center py-4">
              <a
                href="index.html"
                class="logo d-flex align-items-center w-auto"
              >
                <img src="assets/img/logo.png" alt="" />
                <span class="d-none d-lg-block">NiceAdmin</span>
              </a>
            </div>

            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">
                    Login to Your Account
                  </h5>
                  <p class="text-center small">
                    Enter your username & password to login
                  </p>
                </div>

                <form
                  class="row g-3 needs-validation"
                  noValidate
                  onSubmit={(e) => handleLogin(e)}
                >
                  <div class="col-12">
                    <label for="yourUsername" class="form-label">
                      Username
                    </label>
                    <div class="input-group has-validation">
                      <input
                        type="email"
                        name="username"
                        class="form-control"
                        id="yourUsername"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div class="invalid-feedback">
                        Please enter your email.
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      id="yourPassword"
                      required
                      onChange={(e) => setPass(e.target.value)}
                    />
                    <div class="invalid-feedback">
                      Please enter your password!
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="remember"
                        value="true"
                        id="rememberMe"
                      />
                      <label class="form-check-label" for="rememberMe">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100" type="submit">
                      Login
                    </button>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">
                      Don't have account?{" "}
                      <a href="pages-register.html">Create an account</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Login;
