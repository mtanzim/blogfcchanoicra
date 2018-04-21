import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../actions";


// import { loadAuth } from '../actions/_loadAuth'


class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  // componentWillMount() {
  //   this.props.loadAuth()
  // }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post._id}>
          <Link to={`/posts/${post._id}`}>
            {post.title + ' - ' + post.username}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
       <div>
        {this.props.auth.authenticated ? 
        (<div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            New Post
          </Link>
        </div>) :
        (<p>Please <Link to='/login'>login </Link> to add posts!</p>)
        }
        <h3 style={{'marginTop':'12px'}}>List of Articles</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts, auth:state.auth };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
