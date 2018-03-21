import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { editPost, fetchPost } from "../actions";

import "../App.css"

class PostsEdit extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    //var modInput = {...field.input, value:field.content}
    //console.log(modInput);

    return (
      <div className={className}>
        <label>{field.label}</label>
        <p>{field.content}</p>
        {field.label ==="Content"?


          ( <div>
              
              <textarea className="form-control" id="postContent" type="text" {...field.input} />
            </div>
          ) :


          (<input className="form-control" type="text" {...field.input} />)}
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.editPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    //const { authorid, id } = this.props.match.params;
    //const { content, title } = this.props.location.state;
    //const {  } = this.props.match.params;
    //this.props.fetchPost(id);
    //console.log(this.props)
    //console.log(id);
    //console.log(authorid);
    //console.log(content);
    //console.log(this.props);

    return (
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

        {/*<Field
          disabled='true'
          label="Author"
          name="user_id"
          value={this.props.authorID}
          component={this.renderField}
        />*/}
        <div className='btn-group'>
          <button type="submit" className="btn btn-primary">Post</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </div>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Title must not be empty!";
  }
  if (!values.content) {
    errors.content = "Content must not be empty!";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

function mapStateToProps({ posts }, ownProps) {
  return { initialValues:posts[ownProps.match.params.id] }
}


let ConnectedForm = reduxForm({
  validate,
  form: "PostsEditForm",
  enableReinitialize: true
})(PostsEdit)

export default connect(mapStateToProps, { editPost, fetchPost })(ConnectedForm);
