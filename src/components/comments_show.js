import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments, deleteComments, addComments, clearComments } from "../actions";

class CommentsShow extends Component {
  
  
  
  componentWillMount() {
    this.props.fetchComments(this.props.post_id);
  }
  componentWillUnmount() {
    this.props.clearComments();
  }
  onAddCommentClick = () => {
    this.props.addComments(this.props.post_id);
  }
  onDeleteClick = (id) => {
    //const { id } = this.props.match.params;
    return () => {
      this.props.deleteComments(id, () => {
        this.props.fetchComments(this.props.post_id);
      });
    }
  }

  render() {
    const { comments } = this.props;
    console.log(comments);
    
    /*
    if (!comments.length) {
      return <div></div>;
    }
    */

    return (
      <div>
        <div className="card">
          <div className="card-header">
              <h5>Comments</h5>
              <div className='btn-group'>
                <button onClick={this.onAddCommentClick} className="btn btn-primary">New Comment</button>
              </div>
            </div>
          <div className='card-body'>
          {(comments.length > 0)  && (
            comments.map(comment => (
              <div key={comment._id}>
                <div className="card" style={{'margin':'1%'}}> 
                  <div className="card-header">
                    {comment.authorID}
                  </div>
                  <div className="card-body clearfix" style={{'padding':'1%'}}>
                    <p className="">{comment.content}</p>
                    <button onClick={this.onDeleteClick(comment._id)} className='btn btn-danger float-right'>Delete Comment</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments, deleteComments, addComments, clearComments })(CommentsShow);
