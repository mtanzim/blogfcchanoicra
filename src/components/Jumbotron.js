import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../actions/auth"
import '../style/style.css'

const Jumbotron = ({ auth, logoutUser }) => {
  // let logoutUserHandler = ()=>{
  //   logoutUser();
  // }
  return (
    <div>
      <div className="jumbotron">
        <Link to="/"><h1>Welcome to the Hanoi FCC Blog!</h1></Link>
        {!auth.authenticated ? (
          <Link to="/login" className="btn">Log in!</Link>
        ) : (
            <div>
              <h2>{auth.user.username}
                <Link to="/">
                  <button onClick={logoutUser} className="ml-2 btn">Log Out!</button>
                </Link>
              </h2>
            </div>
          )}

      </div>

    </div>
  )
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps, { logoutUser })(Jumbotron);