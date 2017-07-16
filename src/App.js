import React, { Component } from 'react'
import { EventEmitter } from 'events'
import './App.css'
import Home from './components/Home'
import Stocks from './components/Stocks'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      active: '', 
      screens: {
        Home: 'Home', 
        Stocks: 'Stocks'
      }
    }
    this.clickhandler = this.clickhandler.bind(this)
  }

  clickhandler(e) {
    this.setActivePage(e.target.value)
  }

  setActivePage(page) {
    this.setState({active: page})
  }

  componentWillMount() {
    this.setState({active: 'Home'})
  }
  render() {
    const ActiveScreen = this.state.screens[this.state.active]

    return (
      <div className='App'>
        <header>
          <h1>Interview Cake</h1>
        </header>
        <main>
          <aside>
            <button value='Stocks' onClick={this.clickhandler}>stocks 001</button>
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
