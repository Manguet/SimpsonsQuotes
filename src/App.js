import React from 'react';
import './App.css';
import axios from 'axios';
import DisplaySimpson from "./components/DisplaySimpson";

const sampleSimpson = {
  character: 'Homer Simpsons',
  quote: 'Donuuuuuuuuts',
  image: 'https://anniversaire-celebrite.com/upload/250x333/homer-simpson-250.jpg',
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: sampleSimpson
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.data)
        .then(res => {
          console.log(res);
          this.setState({
            simpson: res[0]
          });
        });
  }

  render() {
    return (
        <div className="App">
          <DisplaySimpson simpson={this.state.simpson} />
          <button type="button" onClick={this.getSimpson}>Get Simpson</button>
        </div>
    );
  }
}

export default App;