import React, { Component } from 'react'
import './App.css'
import Stocks from './components/Stocks'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
    }
    this.clickhandler = this.clickhandler.bind(this)
  }

  clickhandler() {
    //when you click on a button, the handler
    //returns the component whose button you
    //clicked
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Interview Cake</h1>
        </header>
        <main>
          <aside>
            <button id="001" onClick={this.clickhandler}>stocks 001</button>
          </aside>
          <Stocks />
        </main>
        <footer>
          <p>putting one foot<span>er</span> in front of another</p>
        </footer>
      </div>
    );
  }
}

export default App
