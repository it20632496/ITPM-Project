import React, { useEffect, useState } from "react";
import swal from "sweetalert2";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../controllers/user";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (name === "") {
      swal.fire("Fill all fields", "Please enter a name", "warning");
      return;
    } else if (email === "") {
      swal.fire("Fill all fields", "Please enter the email", "warning");
      return;
    } else if (type === "") {
      swal.fire("Fill all fields", "Please select a user type", "warning");
      return;
    } else if (pass === "") {
      swal.fire("Fill all fields", "Please enter a password", "warning");
      return;
    } else if (pass.length < 6) {
      swal.fire(
        "Passowrd verification failed",
        "Password should contain more than 6 characters",
        "warning"
      );
      return;
    } else if (repeatPass === "") {
      swal.fire(
        "Fill all fields",
        "Please repeat the password entered in the password field",
        "warning"
      );
      return;
    } else if (repeatPass !== pass) {
      swal.fire(
        "Passwords mismatch",
        "Please repeat the password entered in the password field correctly",
        "warning"
      );
      return;
    } else {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      )
        .catch((err) => {
          swal.fire(
            "Error occurred",
            "Error occurred while we trying to authenticate you. please try again",
            "error"
          );
          return;
        })
        .then(() => {
          const newUser = {
            name,
            email,
            type,
          };
          addUser(newUser)
            .then((res) => {
              swal.fire(
                "Successfully registered",
                "User successfully registered",
                "success"
              );
              navigate("/productDashboard");
            })
            .catch((err) => {
              swal.fire(
                "Error occurred",
                "Error occurred while we trying to save your details. please try again",
                "error"
              );
              return;
            });
        });
    }

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
                      Create an Account
                    </h5>
                    <p class="text-center small">
                      Enter your personal details to create account
                    </p>
                  </div>

                  <form
                    class="row g-3 needs-validation"
                    noValidate
                    onSubmit={(e) => handleRegister(e)}
                  >
                    <div class="col-12">
                      <label for="name" class="form-label">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div class="invalid-feedback">
                        Please, enter your name!
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="email" class="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div class="invalid-feedback">
                        Please enter a valid Email adddress!
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="type" class="form-label">
                        Type
                      </label>
                      <div class="input-group has-validation">
                        <select
                          name="type"
                          class="form-select"
                          aria-label="Default select example"
                          id="type"
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option selected disabled>
                            Select a user type
                          </option>
                          <option value="customer">Customer</option>
                          <option value="buyer">Buyer</option>
                        </select>
                        <div class="invalid-feedback">
                          Please choose a user type.
                        </div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="pass" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="pass"
                        class="form-control"
                        id="pass"
                        required
                        onChange={(e) => setPass(e.target.value)}
                      />
                      <div class="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="repeatPass" class="form-label">
                        Repeat Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        class="form-control"
                        id="yourPassword"
                        required
                        onChange={(e) => setRepeatPass(e.target.value)}
                      />
                      <div class="invalid-feedback">
                        Please repeat the above password!
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          name="terms"
                          type="checkbox"
                          value=""
                          id="acceptTerms"
                          required
                        />
                        <label class="form-check-label" for="acceptTerms">
                          I agree and accept the{" "}
                          <a href="#">terms and conditions</a>
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">
                        Create Account
                      </button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">
                        Already have an account?{" "}
                        <a href="pages-login.html">Log in</a>
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
};

export default Signin;
