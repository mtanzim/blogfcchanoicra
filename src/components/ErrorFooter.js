import React, { Component } from 'react';
import { connect } from "react-redux";

const ErrorFooter = (props) => {
  console.log(props.err);
  return (
    props.err.length > 0  && (<div className='fixed-bottom'>
      <div className="alert alert-danger" role="alert">
        {props.err[props.err.length-1]}
      </div>
    </div>)
  )
}

function mapStateToProps(state) {
  return { err: state.err };
}


export default connect(mapStateToProps, null)(ErrorFooter);