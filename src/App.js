import { Router, Route, Switch } from "react-router-dom"
import Home from "./views/Home"
import Add from "./views/Add"
import Edit from "./views/Edit"
import Navbar from "./views/Home"
import Footer from "./views/Home"

function App() {
    return (
        <Router>
            <Route render={routeProps => <Navbar {...routeProps} />} />
            <Switch>
                <Route render={routeProps => <Home {...routeProps} />} exact path="/" />
                <Route render={routeProps => <Add {...routeProps} />} exact path="/add" />
                <Route render={routeProps => <Edit {...routeProps} />} exact path="/edit" />
            </Switch>
            <Route render={routeProps => <Footer {...routeProps} />} />
        </Router>
    )
}

export default App
