import React from 'react';
import { GiBrutalHelm, GiShuriken } from 'react-icons/gi'
import './Sidebar.css';


class SidebarItem extends React.Component {

  constructor(props) {
    super(props);
    this.toggleActive = this.toggleActive.bind(this);
    this.state = {
      'active' : false
    }
  }

  toggleActive() {
    var options = document.getElementsByClassName('sidebar-item')
    console.log(options)
    Array.prototype.forEach.call(options, el => {el.classList.remove('sidebar-item-active') } )
  }


  render() {
    return (
      <div
      className={'sidebar-item'}
      id={this.props.menuItem.toLowerCase() + '-menu-item'}
      onClick={this.toggleActive}
      >
      <span className='sidebar-item-icon'>{this.props.icon}</span><span className='sidebar-item-text'>{this.props.menuItem}</span>
      </div>
    )
  }
}


class Sidebar extends React.Component {
  render() {
    return (
      <div className='sidebar'>
      <SidebarItem menuItem='Projects' icon=<GiBrutalHelm /> />
      <SidebarItem menuItem='Activity' icon=<GiShuriken /> />
      </div>
    )
  }
}

export default Sidebar
