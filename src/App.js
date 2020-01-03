import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar.js'
import Project from 'components/Project/Project.js'
import { FaPython, FaRegStar, FaStar } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'



let projectIcons = {
  'python' : <FaPython />,
  'javascript' : <DiJavascript />
}

let d = [
  {
  'name' : 'amp-api',
  'created' : '2/1/2020',
  'type' : 'python',
  'bookmarked' : false
},
{
'name' : 'jones',
'created' : '2/1/2020',
'type' : 'javascript',
'bookmarked' : false
},
{
'name' : 'silverback',
'created' : '2/1/2020',
'type' : 'python',
'bookmarked' : true
},
{
  'name' : 'site-monitor',
  'created' : '2/1/2020',
  'type' : 'javascript',
  'bookmarked' : false
},
]


class SubHeader extends React.Component {
  render () {
    return (
      <div id='sub-header'>
        <h1> {this.props.text} </h1>
      </div>
    )
  }
}

class MainContainer extends React.Component {
  render() {
    return <div id='main-container'>
      {d.map( (project, i) => (
        <Project project={project} key={i}/>
      ))}

    </div>
  }
}


class App extends React.Component {
  render () {
  return (
    <div className="app">
      <Sidebar />
      <SubHeader text='Test Title'/>
      <MainContainer />
    </div>
  );
}
}

export default App;
