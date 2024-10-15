
import { useState } from "react";
import { forgotPassword } from "../../api/services/usersService";

const ForgotPassword = () => {
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

    const handleForgotPassword = async (e) => {
        try{
            e.preventDefault();
            const userData = { email}
            const result =  await forgotPassword(userData);
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
                            {/* <h1 className="mb-0"> <b>Vanilla</b></h1> */}
                        </a>
                    </div>
                    <div className="card-body login-card-body">
                        
                        <form onSubmit={handleForgotPassword}>
                            <div className="input-group mb-3">
                                <div className="form-floating">
                                    <input id="loginEmail" type="email"  required
                                    className="form-control" value={email} placeholder="" onChange={(e)=>{setEmail(e.target.value)}} />
                                    <label htmlFor="loginEmail">Email</label>
                                </div>
                                <div className="input-group-text">
                                    <span className="bi bi-envelope"></span>
                                </div>
                            </div>
                           
                            <div className="row">
                  
                                <div className="col-6">
                                    <div className="d-grid gap-2">
                                        <button type="submit" className="btn btn-primary">Reset Password</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                
                    </div>
                </div>
            </div>
        </body>
    );
};

export default ForgotPassword;
