import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Classes from './components/Classes/Classes';
import Sidenav from './components/SideNav/Sidenav';
import Loader from './assets/loader.gif';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      classes: [],
      sidebarOpen: false,
      itemDetails: {},
      loader: false
    }
  }

  componentDidMount() {
    this.fetchResults();
  }

  
  fetchResults = () => {
    this.setState({ loader: true });
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
        classes: finalList,
        loader: false
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
      {this.state.loader ? <img src={Loader} alt="loader" className="loader"></img> : null}
        <Classes classes={this.state.classes} itemDetails = {this.state.itemDetails} handleNav={this.sideNavHandler} />
        {this.state.sidebarOpen ? 
          <Sidenav itemDetails = {this.state.itemDetails} handleNav={this.sideNavHandler} />
          : null}
      </div>
    );
  }
}

export default App;
