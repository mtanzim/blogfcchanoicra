import React, { Component } from 'react';
import { connect } from "react-redux";
import CommentEdit from './comment_edit'

class EachComment extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditingComment: false };
  }
  onEditCommentClick = () => {
    this.setState({
      isEditingComment: !this.state.isEditingComment
    })
  }

  render() {
    return (
      <div>
        <div className="" style={{ 'margin': '1px' }}>
          <h5 className="">
            {this.props.comment.authorName}
          </h5>
          <div className="card-body clearfix" style={{ 'padding': '1px' }}>
            {!this.state.isEditingComment ?
              (
                <div className="postContent">
                  <p>{this.props.comment.content}</p>
                </div>
              ) :
              (<CommentEdit commentID={this.props.comment._id} initContent={this.props.comment.content} toggleEdit={this.onEditCommentClick} />)
            }
            {this.props.auth.authenticated && this.props.comment.authorID.toString() === this.props.auth.user._id.toString() &&
              (<div className='btn-group float-right'>
                <button type="button" onClick={this.props.onDeleteClick(this.props.comment._id)} className='btn'>Delete</button>
                <button type="button" onClick={this.onEditCommentClick} className="btn">Edit</button>
              </div>)
            }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, null)(EachComment);
// 
// export default EachComment;