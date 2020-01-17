import React from "react"
import { FaPython, FaRegStar, FaStar } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"

let projectIcons = {
  python: <FaPython />,
  javascript: <DiJavascript />
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

export default Project
