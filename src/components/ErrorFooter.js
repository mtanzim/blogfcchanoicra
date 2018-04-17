import React, { Component } from 'react';
import { connect } from "react-redux";

const ErrorFooter = (props) => {
  return (
    props.auth.err && (<div className='fixed-bottom'>
      <div class="alert alert-danger" role="alert">
        {props.auth.err}
      </div>
    </div>)
  )
}

function mapStateToProps(state) {
  return { auth: state.auth };
}


export default connect(mapStateToProps, null)(ErrorFooter);