import React, { Component } from 'react'
import { EventEmitter } from 'events'
import './App.css'
import Home from './components/Home'
import Stocks from './components/Stocks'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      active: 'Home', 
      screens: {
        Home: <Home />, 
        Stocks: <Stocks />
      }
    }
    this.clickhandler = this.clickhandler.bind(this)
    this.showActiveScreen = this.showActiveScreen.bind(this)
  }

  clickhandler(e) {
    this.setState({active: e.target.value})
  }

  showActiveScreen() {
    return this.state.screens[this.state.active]
  }

  render() {
    const ActiveScreen = this.showActiveScreen()

    return (
      <div className='App'>
        <header>
          <h1>Interview Cake</h1>
        </header>
        <main>
          <aside>
            <button value='Home' onClick={this.clickhandler}>Home</button>
            <button value='Stocks' onClick={this.clickhandler}>stocks 001</button>
          </aside>
        { ActiveScreen }
        </main>
        <footer>
          <p>putting one foot<span>er</span> in front of another</p>
        </footer>
      </div>
    );
  }
}

export default App
