import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts, clearErr } from "../actions";
// import {clearAuthErr} from "../actions/auth";
import { convertDate } from "../actions/_convertDate"

// import { loadAuth } from '../actions/_loadAuth'


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    // this.props.clearErr();
    
  }
  componentDidMount(){
    // this.props.clearErr();
  }


  renderPosts() {
    return _.map(this.props.posts, post => {
        return post && (
          <Link key={post._id} id={post._id} className="eachPostBar" to={`/posts/${post._id}`}>
            <li className="list-group-item" key={post._id} id={post._id}>

              <h6>{post.title + ' - ' + post.username}</h6>
              <sub className='float-right'>{convertDate(post.updatedAt)}</sub>

            </li>
          </Link>
        ) /*: (<p className='ml-2 mt-2'>Loading...</p>)*/;
      
    });
  }

  render() {
    return (
      <div>
        {this.props.auth.authenticated ?
          (<div className="text-xs-right">
            <Link className="btn" to="/posts/new">
              New Post
          </Link>
          </div>) :
          (<p>Please <Link className='btn' to='/login'>log in </Link> to add posts!</p>)
        }
        <h3 style={{ 'marginTop': '12px' }}>List of Articles</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts, auth: state.auth };
}

export default connect(mapStateToProps, { fetchPosts, clearErr })(PostsIndex);
