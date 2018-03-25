import React, { Component } from 'react';
import LoginMenu from './LoginMenu';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import SignupForm from "./UserSignupReduxForm"
import LoginForm from "./UserLoginReduxForm"

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
class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passwordVer: '',
      errMsg: '',
      isRedirect: false,
      isSocial: false,
      needMenu: true,
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


/*   completeLogin = () => {
    this.props.loginUser({ email: this.state.username, password: this.state.password }, this.state.isLogin)
      .then(() => this.setState({ isRedirect: true }))
      .catch((err) => {
        console.log(err);
      });
    this.setState({ password: '' });
  } */

/*   handleLogIn = (event) => {
    event.preventDefault();

    if (this.state.isLogin) {
      this.completeLogin();
    } else {
      if (this.state.password !== this.state.passwordVer) {
        this.setState({ errMsg: "Passwords don't match!" });
      } else {
        this.setState({ errMsg: "" });
        console.log('Signing up!!!');
        this.completeLogin();
      }
    }
  } */


  handleChangePass = (event) => {
    this.setState({ password: event.target.value });
  }
  handleChangePassVer = (event) => {
    this.setState({ passwordVer: event.target.value });
  }
  handleChangeUser = (event) => {
    this.setState({ username: event.target.value });
  }
  renderClassicForm = () => {
    return (
      <div className="container">
        {this.state.needMenu && (<LoginMenu toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />)}
        <form className="mt-4" onSubmit={this.handleLogIn}>
          <div className="form-group">
            <label htmlFor="email">Username</label>
            <input required value={this.state.username} onChange={this.handleChangeUser} type="text" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter username"></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input required value={this.state.password} onChange={this.handleChangePass} type="password" className="form-control" name="password" id="password" placeholder="Password"></input>
            {!this.state.isLogin &&
              (<div>
                <label className="mt-2" htmlFor="passwordVer">Verify Password</label>
                <input required value={this.state.passwordVer} onChange={this.handleChangePassVer} type="password" className="form-control" name="passwordVer" id="passwordVer" placeholder="Verify Password"></input>
              </div>)}
          </div>
          {!this.state.isLogin ?
            (<button type="submit" className="btn btn-primary">Sign Up!</button>) :
            (<div>
              <button type="submit" className="btn btn-success">Log In!</button><br />
              {!this.state.needMenu && (<small>New Accounts will be signed up automatically.</small>)}
            </div>)
          }
        </form>
      </div>

    );

  }

  
  submitSignup = values => {
    console.log(values)
  }

  submitLogin = values => {
    console.log(values)
  }
  render() {
    return (
        <div className='container'>
          {/*this.renderClassicForm()*/}
          {this.state.needMenu && (<LoginMenu toggleLogin={this.toggleLogin} toggleSignup={this.toggleSignup} />)}
          {!this.state.isLogin ?
            (<SignupForm onSubmit={this.submitSignup} />):
            (<LoginForm onSubmit={this.submitLogin} />)
          }
        </div>
      )
  }

}

//const UserLogin = connect(mapStateToProps, mapDispatchToProps)(UserLoginBase);

export default UserLogin;