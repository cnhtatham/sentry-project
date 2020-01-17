import React from 'react';
import './App.css';
import Sidebar from './Sidebar/Sidebar.js'
import Project from './Project/Project.js'


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



let x = [
  {
    'activity' : {
      'target' : 'project',
      'targetId' : 'amp-api',
      'action' : 'created'
    },
    'datetime' : new Date('January 10, 2019'),
    'user' : 'root',
  },
  {
    'activity' : {
      'target' : 'project',
      'targetId' : 'jones',
      'action' : 'created'
    },
    'user' : 'root',
    'datetime' : new Date('February 28, 2019'),
  },
  {
    'activity' : {
      'target' : 'project',
      'targetId' : 'silverback',
      'action' : 'created'
    },
    'datetime' : new Date('January 9, 2019'),
    'user' : 'root',
  },
  {
    'activity' : {
      'target' : 'project',
      'targetId' : 'site-monitor',
      'action' : 'created'
    },
    'datetime' : new Date('January 30, 2019'),
    'user' : 'root',
  }
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
      <div className="main-content-wrapper">
      <SubHeader text='Century'/>
      <MainContainer />
      </div>
    </div>
  );
}
}

export default App;
