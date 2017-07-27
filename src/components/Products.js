import React, { Component } from 'react'

class Products extends Component {

  getProductsOfAllIntsExceptAtIndex(array) {
    let productsArray = []
    for (let i=0; i<array.length; i++) {
      let except = i
      let reduced = array.reduce((accumulator, c, j) => {
        console.log("accumulator: ", accumulator)
        console.log("i: ", i, "j: ", j, "c: ", c)
        if (except !== j) {
          return accumulator * c
        }
      }, 1)
      productsArray.push(reduced)
    }
    return productsArray 
  }

  render() {
    let array = [1, 7, 3, 4]
    return(
      <section id='mysection'>
        <h2>Question</h2>
        <div id='question'>
          <p>
            Write a function, <span className='code'>getProductsOfAllIntsExceptAtIndex()</span>, that takes an array of integers
            and returns an array of the product of every integer
            except the integer at that index.
          </p>
          <p>
            Do not use division in your solution.
          </p>
          <p>
            For example, [1, 7, 3, 4] should return [84, 12, 28, 21].
          </p>
        </div>

        <h2>Answer</h2>
        <div id='answer' className='code'>{this.getProductsOfAllIntsExceptAtIndex(array)}</div>
        
      </section>
    )
  }
}

export default Products
