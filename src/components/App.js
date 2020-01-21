import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import Sidebar from "./Sidebar/Sidebar.js"
import Project from "./Project/Project.js"

// Your data should ideally live within the state of the highest component that is an ancestor of all the components that need the data from state
// In this case (d) it should be within a state in the Main Container component because no other components are using the data.
// However, I don't know which other components need it so I put it at the highest level.

// Also side note I find it a personal preference to have my components descending in the file as this highlights importance
// Even better all the other components declared within this file should be refactored into their own files
class App extends React.Component {
  // "state = " is just a newer way of declaring the state as opposed to creating a constructor
  state = {
    d: [
      {
        name: "amp-api",
        created: "2/1/2020",
        type: "python",
        bookmarked: false
      },
      {
        name: "jones",
        created: "2/1/2020",
        type: "javascript",
        bookmarked: false
      },
      {
        name: "silverback",
        created: "2/1/2020",
        type: "python",
        bookmarked: true
      },
      {
        name: "site-monitor",
        created: "2/1/2020",
        type: "javascript",
        bookmarked: false
      }
    ],
    x: [
      {
        activity: {
          target: "project",
          targetId: "amp-api",
          action: "created"
        },
        datetime: new Date("January 10, 2019"),
        user: "root"
      },
      {
        activity: {
          target: "project",
          targetId: "jones",
          action: "created"
        },
        user: "root",
        datetime: new Date("February 28, 2019")
      },
      {
        activity: {
          target: "project",
          targetId: "silverback",
          action: "created"
        },
        datetime: new Date("January 9, 2019"),
        user: "root"
      },
      {
        activity: {
          target: "project",
          targetId: "site-monitor",
          action: "created"
        },
        datetime: new Date("January 30, 2019"),
        user: "root"
      }
    ]
  }

  render() {
    const { d } = this.state /* always deconstruct the state object */

    return (
      <Switch>
      <div className="app">
        <Sidebar />
        <div className="main-content-wrapper">
        <Route path="/">

          <SubHeader text="Century" />
          <MainContainer d={d} />
          {/* d is now passed as a prop to Main Container so that it isnt accessing a global variable */}

        </Route>
          </div>
      </div>
      </Switch>
    )
  }
}

// *** MAIN CONTAINER *** //
// Same rule applies to the main container regarding state

// class MainContainer extends React.Component {
//   render() {
//     return <div id='main-container'>
//       {d.map( (project, i) => (
//         <Project project={project} key={i}/>
//       ))}

//     </div>
//   }
// }

const MainContainer = ({ d }) => (
  <div id="main-container">
    {d.map((project, i) => (
      <Project project={project} key={i} />
    ))}
  </div>
)

// *** SUB HEADER *** //
// There is no need for this to be a class component because it does not require its own state
// Rule of thumb: always use functional components when you do not use a state
// I've left your class component beneath for comparison

// class SubHeader extends React.Component {
//   render () {
//     return (
//       <div id='sub-header'>
//         <h1> {this.props.text} </h1>
//       </div>
//     )
//   }
// }

const SubHeader = ({ text }) => (
  // text is deconstructed ^ so that you can just use it like a variable later
  <div id="sub-header">
    <h1> {text} </h1>
  </div>
)

export default App

// Data should live within the state of a component
// This is because that is where it would be if you had fetched it from a database etc
// let d = [
//   {
//     name: "amp-api",
//     created: "2/1/2020",
//     type: "python",
//     bookmarked: false
//   },
//   {
//     name: "jones",
//     created: "2/1/2020",
//     type: "javascript",
//     bookmarked: false
//   },
//   {
//     name: "silverback",
//     created: "2/1/2020",
//     type: "python",
//     bookmarked: true
//   },
//   {
//     name: "site-monitor",
//     created: "2/1/2020",
//     type: "javascript",
//     bookmarked: false
//   }
// ]

// let x = [
//   {
//     activity: {
//       target: "project",
//       targetId: "amp-api",
//       action: "created"
//     },
//     datetime: new Date("January 10, 2019"),
//     user: "root"
//   },
//   {
//     activity: {
//       target: "project",
//       targetId: "jones",
//       action: "created"
//     },
//     user: "root",
//     datetime: new Date("February 28, 2019")
//   },
//   {
//     activity: {
//       target: "project",
//       targetId: "silverback",
//       action: "created"
//     },
//     datetime: new Date("January 9, 2019"),
//     user: "root"
//   },
//   {
//     activity: {
//       target: "project",
//       targetId: "site-monitor",
//       action: "created"
//     },
//     datetime: new Date("January 30, 2019"),
//     user: "root"
//   }
// ]
