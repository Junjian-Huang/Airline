import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";

import { Header } from "./stories/Header/Header";
import { Footer } from "./stories/Footer/Footer";
//import {SubmitForm} from "./stories/SubmitForm/SubmitForm"
//import FeedPage from "./FeedPage";
import { useQuery } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";

function App() {
  const { loading, error, data } = useQuery<Self>(SELF);

  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route
          path="/home"
          
        />
        <Route path="/submit">
          
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;