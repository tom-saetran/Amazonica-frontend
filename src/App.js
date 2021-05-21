import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./views/Home"
import Add from "./views/Add"
import Edit from "./views/Edit"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"
import React from "react"

class App extends React.Component {
  state = {
    endpoint: "http://localhost:3001/"
  }
  crud = {
    products: {
      get: async id => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          results = await fetch(this.state.endpoint + "products/" + id)
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      getAll: async () => {
        let results
        try {
          results = await fetch(this.state.endpoint + "products/")
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      getReviews: async id => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          results = await fetch(this.state.endpoint + "products/" + id + "/reviews")
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      post: async data => {
        let results
        try {
          if (typeof data !== "object") throw new Error("data must be an object")
          results = await fetch(this.state.endpoint + "products/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          if (results.status !== 201) return false
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      postImage: async (id, data) => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          if (data === "" || data === undefined || data === null) throw new Error("data must be present")
          results = await fetch(this.state.endpoint + "products/" + id + "/upload", {
            method: "POST",
            body: data
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          if (results.status !== 201) return false
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      put: async (id, data) => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          if (typeof data !== "object") throw new Error("data must be an object")
          results = await fetch(this.state.endpoint + "products/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      delete: async id => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          results = await fetch(this.state.endpoint + "products/" + id, {
            method: "DELETE"
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      }
    },

    reviews: {
      get: async id => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          results = await fetch(this.state.endpoint + "reviews/" + id)
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      getAll: async () => {
        let results
        try {
          results = await fetch(this.state.endpoint + "reviews/")
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      post: async data => {
        let results
        try {
          if (typeof data !== "object") throw new Error("data must be an object")
          results = await fetch(this.state.endpoint + "reviews/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          if (results.status !== 201) return false
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      put: async (id, data) => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          if (typeof data !== "object") throw new Error("data must be an object")
          results = await fetch(this.state.endpoint + "reviews/" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      },

      delete: async id => {
        let results
        try {
          if (id === "" || id === undefined || id === null) throw new Error("id must be present")
          results = await fetch(this.state.endpoint + "reviews/" + id, {
            method: "DELETE"
          })
          if (!results.ok) throw new Error("got data in return but the ok flag is not true! response: " + results)
          results = await results.json()
        } catch (error) {
          console.error(error)
          return null
        }
        return await results
      }
    }
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
