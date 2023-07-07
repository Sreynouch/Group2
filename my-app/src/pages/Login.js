import React from 'react';
import { Link } from 'react-router-dom';
class Login extends React.Component{
    render(){
        return(
            <main className="mb-10 mt-5">
                <div className="container px-5 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <h2>Register</h2>
                                <div className="my-5">
                                    <form>
                                        <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example1">Email address</label>
                                            <input type="email" name="form2Example1" className="form-control" />                                       
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example2">Password</label>
                                            <input type="password" name="form2Example2" className="form-control" />                                            
                                        </div>

                                        <div className="row mb-4">

                                            <div className="col">
                                            <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>

                                        <Link to="/login/loginsuccess" replace><button type="button" className="btn btn-primary btn-block mb-4">Log In</button></Link>

                                        <div className="text-center">
                                            <p>Not a member? <a href="#!">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Login;