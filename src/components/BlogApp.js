import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "../reducers";
import PostsIndex from "./posts_index";
import PostsNew from "./posts_new";
import PostsEdit from "./posts_edit";
import PostsShow from "./posts_show";
import Jumbotron from "./Jumbotron";
import UserLogin from "./UserLogin"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class BlogApp extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div>
            <Jumbotron />
            <Switch>
              <Route path="/posts/new" component={PostsNew} />
              <Route path="/posts/edit/:id/:authorid" component={PostsEdit} />
              <Route path="/posts/:id" component={PostsShow} />
              <Route path="/" component={UserLogin} />
              <Route path="/login" component={UserLogin} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default BlogApp;