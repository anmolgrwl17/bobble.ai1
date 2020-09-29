import React from "react";
import Facebook from "./components/facebook";
import GoogleLogin from "react-google-login";

import "./styles.css";

export default function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="App">
      <div className="form-wrap">
        <form>
          <h6 className="sign">Sign Up</h6>
          <div className="social">
            <div className="google">
              <GoogleLogin
                clientId="842333827993-scpapmgvdljmjepp0jjlsqd64d190o8a.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
                className="btnGoogle"
              >
                <i
                  className="fa fa-google-plus"
                  style={{ marginLeft: "5px" }}
                />
                <span>&nbsp;&nbsp;Sign In with Google</span>
              </GoogleLogin>
            </div>
            <div className="fb">
              <Facebook />
            </div>
          </div>
          <div class="line"></div>
          <div className="line1">or</div>
          <div className="line"></div>
          <h1>Create Your Account</h1>
          <input type="text" placeholder=" First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}
