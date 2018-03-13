import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost, fetchComments, addComments } from "../actions";
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

  onAddCommentClick = () => {
    const { id } = this.props.match.params;
    this.props.addComments(id);
  }

  render() {
    
    const { post } = this.props;
    //console.log(post);

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div className='container'>
        <div className='btn-group'>
          <Link className="btn btn-primary" to="/">Back To Index</Link>
          <button
            className="btn btn-danger"
            onClick={this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
        </div>
        <h3 style={{marginTop:20}}>{post.title}</h3>
        <p>{post.user}</p>
        <p>{post.content}</p>
        <div className="card"> 
          <div className="card-header">
            <h5>Comments</h5>
            <div className='btn-group'>
              <button onClick={this.onAddCommentClick} className="btn btn-primary">New Comment</button>
            </div>
          </div>
          <div className='card-body'>
           <CommentsShow post_id={post._id} />
          </div>
        </div> 
      </div>
    );
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost, addComments })(PostsShow);
