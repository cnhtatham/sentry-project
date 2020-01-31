import React from "react"
import axios from "axios"
import "./Activity.css"


class ActivityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities : [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get_activities')
      .then(res => {
        this.setState({activities : res.data.activities})
      })
  }

  render() {
    return (
      <div className="main-container activity-container">
        <ul className="activity-list">
          {this.state.activities.map((activity, i) => (
            <Activity activity={activity} key={i} />
          ))}
        </ul>
      </div>
    )
  }

}

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project : {
        created : ( t ) => { return <span className="activity-description">created new project {t}</span>}
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

export default ActivityContainer
