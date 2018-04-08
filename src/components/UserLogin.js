import React, { Component } from 'react';
import LoginMenu from './LoginMenu';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//components
import SignupForm from "./UserSignupReduxForm"
import LoginForm from "./UserLoginReduxForm"

//actions
import {signupUser,loginUser } from "../actions/auth"

//import { loginAndGetNotes } from '../actions/auth';

/* const mapStateToProps = (state) => {
  return {
    curUser: state.authReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo, isLogin) => {
      return dispatch(loginAndGetNotes(userInfo, isLogin))
    }
  }
};
 */

const NEED_MENU=true;

class UserLoginBase extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      isLogin: true//toggles between signup and login
    }
  }

  toggleLogin = () => {
    this.setState({
      isLogin: true
    });
  }
  toggleSignup = () => {
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
      .then( () => {
        console.log(this.props.auth);
        if (this.props.auth.authenticated) {
          this.setState({ isRedirect: true });
        } else {
          alert(this.props.auth.err);
        }

      
      });
  }
  render() {
    if (this.state.isRedirect) {
      return <Redirect to='/' />;
    }
    return (
        <div className='container'>
          {/*this.renderClassicForm()*/}
          {NEED_MENU && (<LoginMenu toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />)}
          {!this.state.isLogin ?
            (<SignupForm onSubmit={this.submitSignup} />):
            (<LoginForm onSubmit={this.submitLogin} />)
          }
        </div>
      )
  }

}

function mapStateToProps(state) {
  return { auth: state.auth };
}

const UserLogin = connect(mapStateToProps, {signupUser,loginUser})(UserLoginBase);

export default UserLogin;