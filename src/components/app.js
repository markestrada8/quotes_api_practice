import React, { Component } from 'react';
import axios from 'axios';
import Quote from "./quote"

export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      quote: {},
    };
  }

  getQuote() {
    axios.get("https://quotes.rest/qod")
      // .then(response => 
      //    response
      // )
      .then(response => {
        console.log(response.data.contents.quotes[0])
        this.setState({
          quote: response.data.contents.quotes[0]
        })
      })
  }


  componentDidMount() {
    this.getQuote();
  }

  render() {
    return (
      <div className="app">
        <Quote {...this.state.quote} />
      </div>
    );
  }
}
