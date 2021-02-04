import React from "react";
import "./styles/App.scss";
import Home from "./components/pages/Home";
import Navigationbar from "./components/elements/Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./components/Posts/AddPost";
import Post from "./components/Posts/Post";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/elements/Loader";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigationbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addPost" component={AddPost} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/updatePost/:id" component={AddPost} />
          </Switch>
        </div>
      </Router>
      <Loader />
    </Provider>
  );
}

export default App;
