import React, { Component } from 'react'

class Products extends Component {

  thefunction() {
    return "I am an answer"
  }
  render() {
    return(
      <section id='mysection'>
        <h2>Question</h2>
        <div id='question'>
          I am a question
        </div>

        <h2>Answer</h2>
        <div id='answer' className='code'>{this.thefunction}</div>
      </section>
    )
  }
}

export default Products
