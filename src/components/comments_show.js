import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments, deleteComments } from "../actions";

class CommentsShow extends Component {
  componentWillMount() {
    this.props.fetchComments(this.props.post_id);
  }
  
  
  onDeleteClick = (id) => {
    //const { id } = this.props.match.params;
    return () => {
      this.props.deleteComments(id, () => {
        this.props.history.push("/");
      });
    }
  }

  render() {
    const { comments } = this.props;

    if (!comments.length) {
      return <div></div>;
    }

    return (
      <div>
          {
            comments.map(comment => (
              <div key={comment._id}>
                <div className="card" style={{'margin':'3%'}}> 
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
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments, deleteComments })(CommentsShow);
