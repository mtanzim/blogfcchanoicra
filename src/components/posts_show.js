import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost, fetchComments } from "../actions";
import CommentsShow from './comments_show';

class PostsShow extends Component {
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
        <div className='btn-group'>
          <Link className="btn btn-primary" to="/">Back To Index</Link>
          <Link className="btn btn-success" to={{
                                                  pathname:`edit/${post._id}/${post.user}`,
                                                  state:{content:post.content,
                                                          title:post.title}}}>Edit Post</Link>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}>
            Delete Post
          </button>
        </div>
        <h3 style={{marginTop:20}}>{post.title}</h3>
        <p>{post.user}</p>
        <div className='postContent'>{post.content}</div>
        <CommentsShow post_id={post._id} />
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost,  fetchComments })(PostsShow);
