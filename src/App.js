import "./App.css";
import React from "react";
import Header from "./Header";
import { Switch, Route } from "react-router";

function App() {
  const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
  return (
    <div className="App">
      <Header />
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </React.Suspense>
    </div>
  );
}

export default App;
