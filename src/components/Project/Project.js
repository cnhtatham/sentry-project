import React from "react"
import { FaPython, FaRegStar, FaStar } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import "./Project.css"
import axios from 'axios'

let projectIcons = {
  python: <FaPython />,
  javascript: <DiJavascript />
  }


class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {projects : []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get_projects')
      .then(res => {
        this.setState({projects : res.data.projects})
      })
  }


  render() {
    return (
      <div className="main-container project-container">
        {this.state.projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    )
  }
}


class Project extends React.Component {
  toggleBookmark() {
    this.props.project.bookmarked = !this.props.project.bookmarked
  }

  projectIcon() {
    return projectIcons[this.props.project.type]
  }

  bookmarkItem() {
    return this.props.project.bookmarked ? (
      <FaStar className="bookmark-icon" />
    ) : (
      <FaRegStar className="bookmark-icon" />
    )
  }

  projectName() {
    return (
      <div
        className="project-name"
        id={this.props.project.name + "-project-title"}
      >
        <strong>{this.props.project.name}</strong>
      </div>
    )
  }

  render() {
    return (
      <div className="project-wrapper">
        <div id={this.props.project.name} className="project">
          <div className="project-header">
            {this.projectIcon()}
            {this.projectName()}
            {this.bookmarkItem()}
          </div>
          <p>Created: {this.props.project.created}</p>
        </div>
      </div>
    )
  }
}

export default ProjectContainer
