import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Lance from './components/Lance';
import Counter from "./components/Counter"

class App extends Component {
  constructor() {
    super();
    this.state = {
      age: 19
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
        <div id='something' className='div'>
          <p>
            {this.state.age > 18 ? 'Im a big kid now!' : "i don't wanna grow up :("}
          </p>
        </div>
        <Lance hobbies="Weightlifting" age={this.state.age} />
        <hr />
        <hr />
        <Counter />
      </div>
    );
    }
}


export default App;
