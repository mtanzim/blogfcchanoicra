import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from "react-redux";

let LoginForm = (props) => {
  const {handleSubmit} = props;
  //console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <Field name="username" label="Username" label="Username" component={renderAuthFormField} type="text" />
        <Field name="password" label="Password" component={renderAuthFormField}  type="password" />
        <Field name="email" label="Email" component={renderAuthFormField} type="email" />
        <button className="btn btn-success" type="submit">Log In</button>
      </div>
    </form>
  )
}

export const renderAuthFormField = (field) => {
  //console.log(field);
  const { meta: { touched, error } } = field;
  const className = `form-group ${touched && error ? "has-danger" : ""}`;
  return (
    <div className={className}>
      <label>{field.label}</label>
      <input placeholder={field.label} className="form-control" type={field.type} {...field.input} />
      <div className="text-help">
        {touched ? error:""}
      </div>
    </div>
  );
}

const validate = values => {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  console.log(values)
  const errors = {};
  if (!values.username) {
    errors.username = "Username must not be empty!";
  }
  if (!values.password) {
    errors.password = "Password must not be empty!";
  }
  return errors;
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm);


export default connect(null, null)(LoginForm);