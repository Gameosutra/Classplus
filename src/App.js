import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Classes from './components/Classes/Classes';
import Sidenav from './components/SideNav/Sidenav';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classes: [],
      sidebarOpen: false,
      itemDetails: {}
    }
  }

  componentDidMount() {
    this.fetchResults();
  }

  
  fetchResults = () => {
    axios({
      method: 'GET',
      url: 'https://student-management-api-1u3cd4j7s.now.sh/students'
    }).then(response => {
      var finalList = response.data.reduce((classes, sections) => {
        var app = classes[sections.class] = classes[sections.class] || {};
        var type = app[sections.section] = app[sections.section] || [];
        type.push(sections);
        return classes;
      }, {});
      this.setState({
        classes: finalList
      })
    })
      .catch(error => {
        console.log('error ==>', error); // TODO: remove this
      })
  }

  sideNavHandler = (item,isOpen) => {
    this.setState({
      itemDetails: item,
      sidebarOpen: isOpen})
  }

  render() {
    return (
      <div className="App">
        <Classes classes={this.state.classes} itemDetails = {this.state.itemDetails} handleNav={this.sideNavHandler} />
        {this.state.sidebarOpen ? 
          <Sidenav itemDetails = {this.state.itemDetails} handleNav={this.sideNavHandler} />
          : null}
      </div>
    );
  }
}

export default App;
