import React from 'react';
import { FaPython, FaRegStar, FaStar } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'

const projectIcons = {
  'python' : <FaPython />,
  'javascript' : <DiJavascript />
}


function projectIcon(projectType) {
  return (
  <a style={{marginLeft: 2.5 + '%'}}>
  {projectIcons[projectType]}
  </a>
)
}

class Project extends React.Component {
  constructor(props) {
  super(props);
  this.toggleBookmark = this.toggleBookmark.bind(this);
}

  toggleBookmark() {
    this.props.project.bookmarked = !this.props.project.bookmarked
  }


  render() {

    return (
    <div className='project-wrapper'>
    <div id={this.props.project.name} className='project'>
      <div className='project-header'>
      {projectIcon(this.props.project.type)}
      <div className='project-name' id={this.props.project.name + '-project-title'} >
      <p style={{margin: 0 + 'px'}}><strong>{this.props.project.name}</strong></p>
      </div>
      <a>
      {this.props.project.bookmarked ? <FaStar /> : <FaRegStar />}
      </a>
      </div>
      <p>Created: {this.props.project.created}</p>
    </div>
      </div>
    )
  }
}

export default Project
