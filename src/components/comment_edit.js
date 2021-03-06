import React, { Component } from 'react';
import { editComment } from "../actions";
import { connect } from "react-redux";

class CommentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { editComment: this.props.initContent };
  }
  onEditCommentChange = (event) => {
    this.setState({
      editComment: event.target.value
    });
  }
  onSaveEditClick = () => {

    if (this.state.editComment) {
      this.props.editComment(this.props.commentID, this.state.editComment);
      this.setState({
        editComment: ''
      });
      this.props.toggleEdit();
    }

  }
  render() {
    return (
      <div>
        <textarea required
          onChange={this.onEditCommentChange}
          value={this.state.editComment}
          type="text"
          className="form-control commentText"
          placeholder={this.props.initContent}>
        </textarea>
        <button type="button" onClick={this.onSaveEditClick} className='btn mt-2'>Save</button>
      </div>
    )
  }
}
export default connect(null, { editComment })(CommentEdit);