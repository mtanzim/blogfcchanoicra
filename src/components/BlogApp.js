import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import thunk from 'redux-thunk';
import { connect } from "react-redux";

// import {_loadAuth} from '../actions/_loadAuth'
import { loadAuth } from '../actions/_loadAuth'

import reducers from "../reducers";
import PostsIndex from "./posts_index";
import PostsNew from "./posts_new";
import PostsEdit from "./posts_edit";
import PostsShow from "./posts_show";
import Jumbotron from "./Jumbotron";

import UserLogin from "./UserLogin"

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

// const persistentAuth = _loadAuth

const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const store = createStoreWithMiddleware(reducers)

class BlogApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <BlogAppBase />
      </Provider>
    );
  }
}

//do this to maintain auth state during refresh and keep authReducer synced to the server
const BlogAppBase = connect(null, { loadAuth })(class BlogAppBase extends Component {
  componentWillMount() {
    this.props.loadAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Jumbotron />
          <Switch>
            <Route path="/posts/new" component={PostsNew} />
            <Route path="/posts/edit/:id/:authorid" component={PostsEdit} />
            <Route path="/posts/:id" component={PostsShow} />
            <Route path="/login" component={UserLogin} />
            <Route path="/" component={PostsIndex} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
})


export default BlogApp;