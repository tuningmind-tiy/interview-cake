import React, { Component } from 'react'

class Products extends Component {
  // The product of all the integers except the integer at each index can be broken down into:
  // the product of all the integers before each index
  // the product of all the integers after each index.
  // To start, let's just get the product of all the integers before each index.

  getProductsOfAllIntsExceptAtIndex(array) {
    const productsArray = []
    for (let i=0; i<array.length; i++) {
      let accumulator = 1
      let before = 1
      let after = 1
      for (let j=0; j<array.length; j++) {
        console.log("array.slice(0, j): ", array.slice(0, j)) 
        if (j < i) { before = array.slice(0, j).forEach((v) => { return before *= v })}
        console.log("before: ", before)
        if (j === i) { accumulator *= 1 } 
        else { array[i] === 0 ? accumulator : accumulator *= array[j] }
      }
      productsArray.push(accumulator)
    }
    return productsArray 
  }
  usingNestedForLoops_getProductsOfAllIntsExceptAtIndex(array) {
    const productsArray = []
    for (let i=0; i<array.length; i++) {
      let accumulator = 1
      for (let j=0; j<array.length; j++) {
        if (i === j) { accumulator *= 1 } 
        else { array[i] === 0 ? accumulator : accumulator *= array[j] }
      }
      productsArray.push(accumulator)
    }
    return productsArray 
  }

  usingforEachandReduce_getProductsOfAllIntsExceptAtIndex(array) {
    const productsArray = []
    array.forEach((throwaway, i) => {
      const reduced = array.reduce((accumulator, c, j) => {
        if (i === j) { return accumulator * 1 } 
        else { return c === 0 ? accumulator : accumulator * c }
      }, 1)
      productsArray.push(reduced)
    })
    return productsArray 
  }

  prettyPrint(answer) {
    return '[' + answer.map((v) => { return v }) + ']'
  }

  render() {
    const array1 = [1, 7, 3, 4]
    const product1 = this.getProductsOfAllIntsExceptAtIndex(array1)
    const answer1 = this.prettyPrint(product1)
    const array2 = [1, 2, 6, 5, 9]
    const product2 = this.getProductsOfAllIntsExceptAtIndex(array2)
    const answer2 = this.prettyPrint(product2)

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
            For example, [1, 2, 6, 5, 9] should return [540, 270, 90, 108, 60].
          </p>
        </div>

        <h2>Answer</h2>
        <div id='answer' className='code'>{answer1}</div>
        <div id='answer' className='code'>{answer2}</div>
        
      </section>
    )
  }
}

export default Products
