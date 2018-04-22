import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { fetchComments, deleteComments, addComments, clearComments } from "../actions";
import EachComment from './EachComment'

class CommentsShow extends Component {
  constructor(props){
    super(props);
    this.state={commentLocal:'',
                editComment:''
    };
  }
  
  
  
  componentWillMount() {
    this.props.fetchComments(this.props.post_id);
  }
  componentWillUnmount() {
    this.props.clearComments();
  }
  onAddCommentClick = () => {
    if(this.state.commentLocal){

      console.log(this.props.auth);
      this.props.addComments(this.props.post_id, this.state.commentLocal, this.props.auth.user._id, this.props.auth.user.username);
      this.setState({
   	  	commentLocal:''
  	  });
    }
  }
  
  onDeleteClick = (id) => {
    //const { id } = this.props.match.params;
    return () => {
      this.props.deleteComments(id, () => {
        //this.props.fetchComments(this.props.post_id);
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
    // if (!this.props.auth.authenticated) {
    //   return (
    //     <div>
    //       <p>Please <Link to='/login'>login </Link> to comment!</p>
    //     </div>
    //   )
    // }
    return (
      <div>
        <div className="card mt-5">
          <div className="card-header">
              <h5>Comments</h5>
              { this.props.auth.authenticated ? 
              (<form action='#' className='mt-4 clearfix'>
                <div className="form-row">
                  <div className="form-group col">
                  <textarea required onChange={this.onCommentChange} value={this.state.commentLocal} type="text" className="form-control commentText" placeholder="Post New Comment"></textarea>
                      <button type="button" onClick={this.onAddCommentClick} className="btn mt-2 ">Post</button>
                  </div>
                </div>
              </form>) :
              
              (<p>Please <Link className='btn' to='/login'>login </Link> to comment!</p>)
              }
            </div>
          {(comments.length > 0)  && (
            <div className='card-body'>
            {comments.map(comment => (
              <EachComment key={comment._id} id={comment._id} comment={comment} onDeleteClick={this.onDeleteClick} onSaveEditClick={this.onSaveEditClick}/>
            ))}
            </div>)}
      </div>
    </div>)
  }
}


function mapStateToProps(state) {
  return { comments: state.comments, auth:state.auth };
}

export default connect(mapStateToProps, { fetchComments, deleteComments, addComments, clearComments })(CommentsShow);
