import React from "react"


class CreateProjectContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { options: [
        {
          name:"python",

        }
      ]
    }
  }
  render() {
    return <div className="create-project-container"></div>
  }
}


class ProjectOption extends React.Component {

  render() {
    return <div className="new-project-option"></div>
  }
}

export default CreateProjectContainer
