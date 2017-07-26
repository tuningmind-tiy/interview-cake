import React, { Component } from 'react'
import './App.css'
import Home from './components/Home'
import Stocks from './components/Stocks'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      active: 'Stocks', 
      screens: {
        Home: <Home />, 
        Stocks: <Stocks />
      }, 
      height: 'inherit'
    }
    this.clickhandler = this.clickhandler.bind(this)
    this.showActiveScreen = this.showActiveScreen.bind(this)
  }

  clickhandler(e) {
    this.setState({
      active: e.target.value,
    })
  }
  
  componentDidMount() {
      this.setState({
        height: document.getElementById('mysection').clientHeight
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.height !== document.getElementById('mysection').clientHeight) {
      this.setState({
        height: document.getElementById('mysection').clientHeight
      })
    }
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
          <aside style={{height:this.state.height}}>
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
