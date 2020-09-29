import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: ""
  };

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin appId="1784448971713713">
          autoLoad={true}
          fields="name,email,picture" onClick={this.componentClicked}
          cssClass="btnFacebook" callback={this.responseFacebook}>
        </FacebookLogin>
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
