import React from "react"
import axios from "axios"
import "./Activity.css"

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "project" : {
        "created" : ( t ) => { return <span className="activity-description">created new project {t}</span>}
      }
    }

  }

  user() {
    return <span className="activity-user-name">{this.props.activity.user} </span>
  }


  render() {
    return (
      <li className="activity-list-item">
        <div className="activity-wrapper">
          <div className="activity-summary">
            {this.user()}
            {this.state[this.props.activity.activity.target][this.props.activity.activity.action](this.props.activity.activity.targetId)}
          </div>
          <div className="activity-meta">

          </div>
        </div>
      </li>
    )
  }
}

export default Activity
