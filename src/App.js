import React, { Component } from 'react'
import './App.css'
import Stocks from 'Stocks-001'

class App extends Component {

  clickHandler(e) {
    //when you click on a button, the handler
    //returns the component whose button you
    //clicked
    console.log(e.target.value)
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Interview Cake</h1>
        </header>
        <main>
          <aside>
            <button id="001" value="stocks" onClick={this.clickHandler}>stocks 001</button>
          </aside>
          <{}/>
        </main>
        <footer>
          <p>getting better putting one foot<span>er</span> in front of another</p>
        </footer>
      </div>
    );
  }
}

export default App
