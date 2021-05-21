import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./views/Home"
import Add from "./views/Add"
import Edit from "./views/Edit"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import React from "react"

class App extends React.Component {
  crud = {
    get: {},
    post: {},
    put: {},
    delete: {}
  }

  render() {
    return (
      <Router>
        <Route render={routeProps => <NavBar {...routeProps} />} />
        <Switch>
          <Route render={routeProps => <Home crud={this.crud} {...routeProps} />} exact path="/" />
          <Route render={routeProps => <Add crud={this.crud} {...routeProps} />} exact path="/add" />
          <Route render={routeProps => <Edit crud={this.crud} {...routeProps} />} exact path="/edit" />
        </Switch>
        <Route render={routeProps => <Footer {...routeProps} />} />
      </Router>
    )
  }
}

export default App
