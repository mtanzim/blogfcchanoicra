import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchComments, deleteComments, addComments, clearComments } from "../actions";

class CommentsShow extends Component {
  constructor(props){
    super(props);
    this.state={commentLocal:''};
  }
  
  
  componentWillMount() {
    this.props.fetchComments(this.props.post_id);
  }
  componentWillUnmount() {
    this.props.clearComments();
  }
  onAddCommentClick = () => {
    if(this.state.commentLocal){
      this.props.addComments(this.props.post_id, this.state.commentLocal);
      this.setState({
   	  	commentLocal:''
  	  });
    }
    
    
  }
  onDeleteClick = (id) => {
    //const { id } = this.props.match.params;
    return () => {
      this.props.deleteComments(id, () => {
        this.props.fetchComments(this.props.post_id);
      });
    }
  }
  
  onCommentChange = (event) => {
  	this.setState({
   		commentLocal:event.target.value
  	});
  }

  render() {
    const { comments } = this.props;
    //console.log(comments);
    //console.log(this.state.commentLocal);
    
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
              <form action='#' className='mt-4 clearfix'>
                <div className="form-row">
                  <div className="form-group col">
                    <input required onChange={this.onCommentChange} value={this.state.commentLocal} type="text" className="form-control" placeholder="Post New Comment"></input>
                    <button type="button" onClick={this.onAddCommentClick} className="btn btn-success mt-2 float-right">Post</button>
                  </div>
                </div>
              </form>
            </div>
          
          {(comments.length > 0)  && (
            <div className='card-body'>
            {comments.map(comment => (
              <div key={comment._id}>
                <div className="" style={{'margin':'1px'}}> 
                  <h5 className="">
                    {comment.authorID}
                  </h5>
                  <div className="card-body clearfix" style={{'padding':'1px'}}>
                    <p className="">{comment.content}</p>
                    <button onClick={this.onDeleteClick(comment._id)} className='btn btn-danger float-right'>Delete</button>
                  </div>
                </div>
              </div>
            ))}
            </div>)}
      </div>
    </div>)
  }
}


function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps, { fetchComments, deleteComments, addComments, clearComments })(CommentsShow);
