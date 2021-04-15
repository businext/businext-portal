import React from 'react';
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
	return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Header />} />
          <Route
            path="/insights"
            exact
            component={() => <Header title="Search Insights" />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
