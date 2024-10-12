
import { useState } from "react";
import { login } from "../../api/services/usersService";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [rememberMe, setRememberMe] = useState("");
const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        try{
            e.preventDefault();
            const userData = { email, password}
            const result =  await login(userData);
            console.log(result);
            if(result.succeeded)
            {
                console.log("success");
            }
        }
        catch(e)
        {
            console.log(e);
        }
    }
    return (
        <body class="login-page bg-body-secondary">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header">
                        <a href="" className="link-dark text-center link-offset-2 link-opacity-100 link-opacity-50-hover">
                            <h1 className="mb-0"> <b>Vanilla</b></h1>
                        </a>
                    </div>
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={handleLogin}>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input id="loginEmail" type="email" 
                                    className="form-control" value={email} placeholder="" onChange={(e)=>{setEmail(e.target.value)}} />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-envelope"></span>
                                </div>
                            </div>
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input id="loginPassword" type="password" value={password} className="form-control" placeholder="" onChange={(e)=> {setPassword(e.target.value)}} />
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-lock-fill"></span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8 d-inline-flex align-items-center">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>{setRememberMe(e.target.value)}} />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">Sign In</button>
                                    </div>
                                </div>
                            </div>
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
                        <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                        </p>
                        <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                        </p>
                    </div>
                </div>
            </div>
        </body>
    );
};

export default Login;
