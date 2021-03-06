import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions";

// import "../App.css"

class PostsNew extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        {field.label === "Content" ?
          (<textarea className="form-control" id="postContent" type="text" {...field.input} />) :
          (<input className="form-control" type="text" {...field.input} />)}
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // console.log(this.props.auth)
    let modValues = { ...values, user: this.props.auth.user._id, username: this.props.auth.user.username }
    // console.log(modValues);
    new Promise( (resolve, reject) => {
      this.props.createPost(modValues)
      .then( (res) =>{
        if (res.payload.data === undefined) {
          reject('Create not complete!')
        }
        resolve('Done!');
      })
    })
    .then(() => this.props.history.push("/") )
    .catch( err => console.log(err));
  }

  render() {

    const { handleSubmit } = this.props;

    return (this.props.auth.authenticated && (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Article Title"
          component={this.renderField}
        />


        <Field
          label="Content"
          name="content"
          component={this.renderField}
        />

        <div className='btn-group'>
          <button type="submit" className="btn">Post</button>
          <Link to="/" className="btn">Cancel</Link>
        </div>
      </form>
    ));
  }
}

function validate(values) {
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Title must not be empty!";
  }
  if (!values.content) {
    errors.content = "Content must not be empty!";
  }
  return errors;
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(mapStateToProps, { createPost })(PostsNew));
