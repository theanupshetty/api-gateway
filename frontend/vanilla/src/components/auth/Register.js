import React, { useState } from "react";
import { createUser } from "../../api/services/usersService";


const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passowrd, setPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        const userData = { firstName, lastName, email, passowrd }
        try {
          const result =  await createUser(userData);
          console.log(result);
        }
        catch (e) {
            throw e;
        }
    }
    return (
        <body className="register-page bg-body-secondary">
            <div className="register-box">
                {/* /.register-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header">
                        <a
                            href="../index2.html"
                            className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover"
                        >
                            <h1 className="mb-0">
                                {" "}
                                <b>VANILLA</b>
                            </h1>
                        </a>
                    </div>
                    <div className="card-body register-card-body">
                        <p className="register-box-msg">Register a new membership</p>
                        <form onSubmit={handleRegister}>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="registerFirstName"
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <label htmlFor="registerFirstName">First Name</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-person"></span>
                                </div>
                            </div>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="registerLastName"
                                        type="text"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <label htmlFor="registerLastName">Last Name</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-person"></span>
                                </div>
                            </div>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="registerEmail"
                                        type="email"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="registerEmail">Email</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-envelope"></span>
                                </div>
                            </div>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="registerPassword"
                                        type="password"
                                        className="form-control"
                                        placeholder=""
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="registerPassword">Password</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-lock-fill"></span>
                                </div>
                            </div>
                            {/* Row */}
                            <div className="row">
                                <div className="col-8 d-inline-flex align-items-center">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* end::Row */}
                        </form>
                        <div className="social-auth-links text-center mb-3 d-grid gap-2">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-primary">
                                <i className="bi bi-facebook me-2"></i> Sign in using Facebook
                            </a>
                            <a href="#" className="btn btn-danger">
                                <i className="bi bi-google me-2"></i> Sign in using Google+
                            </a>
                        </div>
                        {/* /.social-auth-links */}
                        <p className="mb-0">
                            <a href="login.html" className="link-primary text-center">
                                I already have a membership
                            </a>
                        </p>
                    </div>
                    {/* /.register-card-body */}
                </div>
            </div>
        </body>
    );
};

export default Register;
