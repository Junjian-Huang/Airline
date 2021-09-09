import React from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";

import { AirHeader } from "./stories/AirlineHeader/AirHeader";
import { Footer } from "./stories/Footer/Footer";
import {SubmitForm} from "./stories/SubmitForm/SubmitForm"

import {AddAirlineForm} from "./stories/AddAirlineForm/AddAirlineForm"

import FeedPage from "./FeedPage";
import { useQuery,ApolloProvider } from "@apollo/client";
import { SELF } from "./api/queries";
import { Self } from "./api/__generated__/Self";

import graphQLClient from "./GraphQLClient";

function App() {
  const { loading, error, data } = useQuery<Self>(SELF);

  return (
    <div className="App">
      <ApolloProvider client={graphQLClient}>
        <AirHeader user={data?.self} />
            <Switch>
                <Route exact path="/">
                  <Redirect to="/home" />
                </Route>
                <Route
                  path="/home"
                  render={() => <FeedPage pageTitle="Airline System Projects 2021" />}
                />
                <Route path="/addAirline">
                  <AddAirlineForm />
                </Route>
                <Route path="/submit">
                  <SubmitForm />
                </Route>
            </Switch>
        <Footer />
      </ApolloProvider>
    </div>
  );
}

export default App;