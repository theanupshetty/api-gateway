import { useState } from "react";
import { resetPassword } from "../../api/services/usersService";
import { useParams } from "react-router-dom";
import Loader from "../../utils/loader";

const ResetPassword = () => {
    const {email, token } = useParams();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match!");
            setIsLoading(false);
            return;
        }
        try {
            const userData = { email, token, newPassword, confirmPassword };
            const result = await resetPassword(userData);
            if (result.succeeded) {
                setMessage("Password reset successful!");
            } else {
                setMessage("Password reset failed. Please try again.");
            }
        } catch (error) {
            console.log(error);
            setMessage("An error occurred. Please try again.");
        } finally {
            setIsLoading(false); // Ensure loading state stops after request
        }
    };

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header">
                        <h2 className="text-center">Reset Password</h2>
                    </div>
                    <div className="card-body login-card-body">
                        <form onSubmit={handleResetPassword}>
                            {/* New Password Field */}
                            <div className="input-group mb-3">
                                <div className="form-floating">
                                    <input
                                        id="newPassword"
                                        type="password"
                                        required
                                        className="form-control"
                                        value={newPassword}
                                        placeholder="New Password"
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                    <label htmlFor="newPassword">New Password</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-lock"></span>
                                </div>
                            </div>

                            {/* Confirm Password Field */}
                            <div className="input-group mb-3">
                                <div className="form-floating">
                                    <input
                                        id="confirmPassword"
                                        type="password"
                                        required
                                        className="form-control"
                                        value={confirmPassword}
                                        placeholder="Confirm Password"
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-lock"></span>
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

export default ResetPassword;
