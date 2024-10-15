import { useState } from "react";
import { forgotPassword } from "../../api/services/usersService";
import Loader from "../../utils/loader";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const userData = { email }; // Prepare data to send
            const result = await forgotPassword(userData); // Call forgotPassword API
            console.log(result);

            // Handle response
            if (result.succeeded) {
                setMessage("Password reset email sent! Please check your inbox.");
            } else {
                setMessage("Failed to send reset email. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred. Please try again later.");
        }
        finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h2>Forgot Password</h2>
                    </div>
                    <div className="card-body login-card-body">
                        <form onSubmit={handleForgotPassword}>
                            {/* Email Input Field */}
                            <div className="input-group mb-3">
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

                            {/* Submit Button */}
                            <div className="row">
                                <div className="col-12">
                                    <div className="d-grid gap-2">
                                        <Loader isLoading={isLoading}>
                                            Submit
                                        </Loader>
                                    </div>
                                </div>
                            </div>
                            {message && <p className="mt-3 text-danger">{message}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
