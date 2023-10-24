import { Divider } from "antd";
import React, { Component } from "react";
import FormProfile from "./FormProfile";
import { connect } from "react-redux";
import { getProfileUser } from "../../redux/actions/actionProfile";

class Profile extends Component {
  componentDidMount = () => {
    const username = localStorage.getItem("username");

    console.log(username);
    this.props.getProfileUser(username);
  };
  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <>
        <Divider>Thông tin cá nhân</Divider>
        <FormProfile></FormProfile>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile,
  account: state.AccountReducer.account,
});

const mapDispatchToProps = {
  getProfileUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
