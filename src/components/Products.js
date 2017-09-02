import React, { Component } from 'react'

class Products extends Component {

  constructor() {
    super()
    this.helper = this.helper.bind(this)
  }

  helper(i, j, array, before) {
    if (j < i) { 
      let firsthalf = array.slice(0, j)
      console.log("slice: ", firsthalf)
      firsthalf.forEach((v, j) => { 
        console.log("before: ", before)
        if (i === j) { return before *= 1 } 
        else { return array[i] === 0 ? before : before *= array[j] }
        //return array[i] === 0 ? before : before *= v } )
      })
    }
  }

  getProductsOfAllIntsExceptAtIndex(array) {
    let productsArray = []
    let before = 1
    for (let i=0; i<array.length; i++) {
      for (let j=0; j<array.length; j++) {
        this.helper(i, j, array, before)
      }
    }
    return productsArray 
  }

  usingNestedForLoops_getProductsOfAllIntsExceptAtIndex(array) {
    const productsArray = []
    for (let i=0; i<array.length; i++) {
      let accumulator = 1
      for (let j=0; j<array.length; j++) {
        if (i === j) { accumulator *= 1 } 
        else { (array[i] === 0) ? accumulator : (accumulator *= array[j]) }
        console.log("accumulator: ", accumulator)
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
    const array3 = [3, 1, 2, 5, 6, 4]
    const product3 = this.getProductsOfAllIntsExceptAtIndex(array3)
    const answer3 = this.prettyPrint(product3)

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
          <p>
            [1, 2, 6, 5, 9] should return [540, 270, 90, 108, 60].
          </p>
          <p>
            [3, 1, 2, 5, 6, 4] should return [1, 3, 3, 6, 30, 180] for the array of the products of all the integers before each index
          </p>
        </div>

        <h2>Answer</h2>
        <div id='answer' className='code'>{answer1}</div>
        <div id='answer' className='code'>{answer2}</div>
        <div id='answer' className='code'>{answer3}</div>
        
      </section>
    )
  }
}

export default Products
