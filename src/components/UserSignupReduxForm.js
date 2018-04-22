import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { renderAuthFormField } from "./UserLoginReduxForm";

let SignupForm = (props) => {
  const { handleSubmit } = props;
  //console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <Field name="email" label="Email" component={renderAuthFormField} type="email" />
        <Field name="password" label="Password" component={renderAuthFormField} type="password" />
        <Field name="verPassword" label="Verify Password" component={renderAuthFormField} type="password" />
        <Field name="username" label="Username" component={renderAuthFormField} type="text" />
        <button className="btn" type="submit">Sign Up</button>
      </div>
    </form>
  )
}

const validate = values => {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  //console.log(values)
  const errors = {};
  if (!values.username) {
    errors.username = "Username must not be empty!";
  }
  if (!values.email) {
    errors.email = "E-mail must not be empty!";
  }
  if (!values.password) {
    errors.password = "Password must not be empty!";
  }
  if (!values.verPassword) {
    errors.verPassword = "Password verification must not be empty!";
  }
  if (values.password!==values.verPassword){
    errors.verPassword = "Passwords must match!";
  }
  return errors;
}

SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm);


export default connect(null, null)(SignupForm);