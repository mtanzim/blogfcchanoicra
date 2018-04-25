import React, { Component } from 'react';
import LoginMenu from './LoginMenu';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//components
import SignupForm from "./UserSignupReduxForm"
import LoginForm from "./UserLoginReduxForm"
import ErrorFooter from "./ErrorFooter";


//actions
import { signupUser, loginUser, clearAuthErr } from "../actions/auth"
clearAuthErr

const NEED_MENU = true;

class UserLoginBase extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isLogin: true//toggles between signup and login
    }
  }

  componentDidMount() {
    //clear authorization errors
    this.props.clearAuthErr();
  }

  toggleLogin = () => {
    this.props.clearAuthErr();
    this.setState({
      isLogin: true
    });
  }
  toggleSignup = () => {
    this.props.clearAuthErr();
    this.setState({
      isLogin: false
    });
  }


  completeLogin = () => {
    this.props.loginUser({ email: this.state.username, password: this.state.password }, this.state.isLogin)
      .then(() => this.setState({ isRedirect: true }))
      .catch((err) => {
        console.log(err);
      });
    this.setState({ password: '' });
  }


  submitSignup = values => {
    console.log(values);
    this.props.signupUser(values)

  }

  submitLogin = values => {
    console.log(values);
    this.props.loginUser(values)

  }
  render() {
    if (this.props.auth.authenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div>
        <div className='container'>
          {/*this.renderClassicForm()*/}
          {NEED_MENU && (<LoginMenu toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />)}
          {!this.state.isLogin ?
            (<SignupForm onSubmit={this.submitSignup} />) :
            (<LoginForm onSubmit={this.submitLogin} />)
          }
        </div>
        <ErrorFooter />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

const UserLogin = connect(mapStateToProps, { signupUser, loginUser, clearAuthErr })(UserLoginBase);

export default UserLogin;