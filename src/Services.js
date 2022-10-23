import React, { Component } from 'react';

class Services extends Component {

  constructor(props) {
    super(props)
    this.state = {
      springAppHealth: "unknown"
    }
  }

  componentDidMount() {
    this.getSpringAppHealth()
  }

  render() {
    return <p>spring-app : {this.state.springAppHealth}</p>;
  }

  getSpringAppHealth() {
    const url = "http://localhost:8080/health"
    fetch(url)
      .then(response => {
        console.log(response)
        this.setState({
          springAppHealth: response.status
        })
      })
  }
}


export default Services;
