import { useState } from "react";
import { login } from "../../api/services/usersService";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/loader";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false); // Changed to boolean
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const userData = { email, password };
            const userResult = await login(userData);
            console.log(userResult);
            if (userResult.result.result.succeeded) {
                console.log("Login successful");
                navigate("/");
            } else {
                setMessage("Login failed. Please check your credentials.");
            }
        } catch (error) {
            console.error(error);
            setMessage("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header">
                        <h1 className="mb-0 text-center"> <b>Login</b></h1>
                    </div>
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={handleLogin}>
                            {/* Email Input */}
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="loginEmail"
                                        type="email"
                                        required
                                        className="form-control"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-envelope"></span>
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="input-group mb-1">
                                <div className="form-floating">
                                    <input
                                        id="loginPassword"
                                        required
                                        type="password"
                                        value={password}
                                        className="form-control"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-lock-fill"></span>
                                </div>
                            </div>

                            {/* Remember Me Checkbox and Submit Button */}
                            <div className="row mb-3">
                                <div className="col-8 d-inline-flex align-items-center">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={rememberMe}
                                            id="flexCheckDefault"
                                            onChange={(e) => setRememberMe(e.target.checked)} // Correctly set the value
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="d-grid gap-2">
                                    <Loader isLoading={isLoading}>
                                            Login
                                        </Loader>
                                    </div>
                                </div>
                            </div>
                        </form>

                        {/* Message Display */}
                        {message && <p className="text-danger">{message}</p>}

                        {/* Social Auth Links */}
                        <div className="social-auth-links text-center mb-3 d-grid gap-2">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-primary">
                                <i className="bi bi-facebook me-2"></i> Sign in with Facebook
                            </a>
                            <a href="#" className="btn btn-danger">
                                <i className="bi bi-google me-2"></i> Sign in with Google
                            </a>
                        </div>

                        {/* Links for Forgot Password and Register */}
                        <p className="mb-1">
                            <a href="/forgot-password">Forgot password?</a>
                        </p>
                        <p className="mb-0">
                            <a href="/register" className="text-center">Register a new account</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
