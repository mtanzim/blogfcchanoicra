import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost, fetchComments } from "../actions";
import CommentsShow from './comments_show';

import { loadAuth } from '../actions/_loadAuth'

class PostsShow extends Component {


  componentWillMount() {
    this.props.loadAuth()
  }
  componentDidMount() {

    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push("/");
    });
  }



  render() {
    
    const { post } = this.props;
    //console.log(this.props.post);

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className='container'>
        <div >
          <Link className="btn btn-primary" to="/">Back To Index</Link>
          {this.props.auth.authenticated && this.props.post.user.toString() === this.props.auth.user._id.toString() &&
            (<div className='float-right btn-group'>
            <Link className="btn btn-success" to={{
                                                  pathname:`edit/${post._id}/${post.user}`,
                                                  state:{content:post.content,
                                                          title:post.title}}}>Edit Post</Link>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}>
            Delete Post
          </button>
          </div>)}
        </div>
        <h3 style={{marginTop:20}}>{post.title}</h3>
        <p>{post.username}</p>
        <div className='postContent'>{post.content}</div>
        <CommentsShow post_id={post._id} />
      </div>
    );
  }
}

function mapStateToProps({ posts, auth }, ownProps) {
  return { post: posts[ownProps.match.params.id], auth:auth };
}

export default connect(mapStateToProps, { fetchPost, deletePost,  fetchComments, loadAuth })(PostsShow);
