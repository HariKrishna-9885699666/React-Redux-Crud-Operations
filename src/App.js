import React from "react";
import "./styles/App.scss";
import Home from "./components/pages/Home";
import Navigationbar from "./components/elements/Navigationbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./components/Posts/AddPost";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/elements/Loader";
import { ToastProvider } from "react-toast-notifications";
import AboutApp from "./components/AboutApp/AboutApp";

function App() {
  return (
    <ToastProvider>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navigationbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/addPost" component={AddPost} />
              <Route exact path="/updatePost/:id" component={AddPost} />
            </Switch>
          </div>
        </Router>
        <Loader />
        <AboutApp />
      </Provider>
    </ToastProvider>
  );
}

export default App;
