import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import { TiArrowSortedDown } from "react-icons/ti"
import Sidebar from "./Sidebar/Sidebar.js"
import ProjectContainer from "./Project/Project.js"
import Activity from "./Activity/Activity.js"

// Your data should ideally live within the state of the highest component that is an ancestor of all the components that need the data from state
// In this case (d) it should be within a state in the Main Container component because no other components are using the data.
// However, I don't know which other components need it so I put it at the highest level.

// Also side note I find it a personal preference to have my components descending in the file as this highlights importance
// Even better all the other components declared within this file should be refactored into their own files
class App extends React.Component {
  // "state = " is just a newer way of declaring the state as opposed to creating a constructor
  state = {
    x: [
      {
        activity: {
          target: "project",
          targetId: "amp-api",
          action: "created"
        },
        datetime: new Date("January 10, 2019"),
        user: "charlie"
      },
      {
        activity: {
          target: "project",
          targetId: "jones",
          action: "created"
        },
        user: "glenn",
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
 /* always deconstruct the state object */
    const { x } = this.state
    return (
      <div className="app">

        <Sidebar />
        <SubNavbar />
        <div className="main-content-wrapper">
          <Switch>

            <Route path='/activities'>
              <SubHeader text="Activities" />
              <ActivityContainer x={x}/>
            </Route>

            <Route path='/projects'>
              <SubHeader text="Projects" />
              <ProjectContainer />
            </Route>

            <Route path="/">"
              <SubHeader text="Century" />
            </Route>

          </Switch>
        </div>
      </div>
    )
  }
}


// class ProjectContainer extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {projects : []}
//   }
//
//   componentDidMount() {
//     axios.get('http://localhost:5000/get_projects')
//       .then(res => {
//         this.setState({projects : res.data.projects})
//       })
//   }
//
//
//   render() {
//     return (
//       <div className="main-container project-container">
//         {console.log(this.state.projects)}
//         {this.state.projects.map((project, i) => (
//           <Project project={project} key={i} />
//         ))}
//       </div>
//     )
//   }
// }

// const ProjectContainer = ({ d }) => (
//   <div className="main-container project-container">
//     {d.map((project, i) => (
//       <Project project={project} key={i} />
//     ))}
//   </div>
// )

const ActivityContainer = ({ x }) => (
  <div className="main-container activity-container">
    <ul className="activity-list">
      {x.map((activity, i) => (
        <Activity activity={activity} key={i} />
      ))}
    </ul>
  </div>
)

const SubHeader = ({ text }) => (
  // text is deconstructed ^ so that you can just use it like a variable later
  <div className="sub-header">
    <h1> {text} </h1>
  </div>
)

const SubNavbar = () => (
  <div className="sub-navbar">
    <div className="add-new-dropdown-wrapper">
    <button className="add-new-button">
      <span><strong>Add new... </strong></span>
      <span><TiArrowSortedDown/></span>
    </button>
    <div className="add-new-dropdown">
      <p className="dropdown-item">Project</p>
      <p className="dropdown-item">User</p>
    </div>
    </div>
  </div>
)

export default App
