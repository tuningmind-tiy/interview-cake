import React, { Component } from 'react'

class Stocks extends Component {

  get_max_profit(yesterday) {
    let minPrice = yesterday[0]
    let maxProfit = 0
    let phrase = ''
    for (let i=0; i<yesterday.length; i++) {
      let currentPrice = yesterday[i]
      minPrice = Math.min(minPrice, currentPrice)
      let potentialProfit = currentPrice - minPrice
      maxProfit = Math.max(maxProfit, potentialProfit)
      console.log("yesterday[i]: ", i, yesterday[i])
      phrase = ('The best profit yesterday was purchase of ' 
          + '$' + yesterday[yesterday.indexOf(minPrice)] 
          + ' at '
          + ((Number(9) + yesterday.indexOf(minPrice)%12) + ':30'
          + ' and sale of '
          + '$' + yesterday[yesterday.indexOf(minPrice + maxProfit)] 
          + ' at '
          + ((Number(9) + yesterday.indexOf(minPrice + maxProfit))%12) + ':30'
          + ' for a spread of $' + maxProfit)
      )
    }
    return phrase 
  }

  old_get_max_profit(yesterday) {
    if (yesterday.length < 2) { return 'You need at least two prices' }
    let maxSpread = 0
    let boughtAtLow
    let soldAtHigh
    for (let i=0; i<yesterday.length; i++) {
      let bought = yesterday[i]
      for (let j=1; j<yesterday.length; j++) {
        let sold = yesterday[j]
        let diff = sold - bought
        if (diff > maxSpread) {
          maxSpread = diff
          boughtAtLow = i
          soldAtHigh = j
        }
      }
    }
    //const mapthing = yesterday.map((p, i) => { return(i) }) 
    const sellTime = Number(9) + (soldAtHigh)
    const buyTime = Number(9) + (boughtAtLow)
    return ('The best profit yesterday was purchase of ' 
            + '$' + yesterday[boughtAtLow] 
            + ' at '
            + (buyTime%12) + ':30'
            + ' and sale of '
            + '$' + yesterday[soldAtHigh] 
            + ' at '
            + (sellTime%12) + ':30'
            + ' for a spread of $' + maxSpread)
  }

  render() {
    const yesterday = [10, 7, 5, 8, 11, 9]
    return (
      <section id='mysection'>
        <h2>Question</h2>
        <div id='question'>
          <p>Suppose we could access yesterday's stock prices as a list, where:</p>
          <ul>
            <li>
              The indices are the time in minutes past 
              trade opening time, which was 9:30am local time.
            </li>
            <li>
              The values are the price in dollars of Apple stock 
              at that time.
            </li>
          </ul>
          <p>
            So if the stock cost $500 at 10:30am, 
            stock_prices_yesterday[60] = 500.
          </p>
          <p>
            Write an efficient function that takes 
            stock_prices_yesterday = [10, 7, 5, 8, 11, 9] and 
            returns the best profit I could have made from 1 
            purchase and 1 sale of 1 Apple stock yesterday.
          </p>
        </div>

        <h2>Answer</h2>
        <div id='answer' className='code'>{this.get_max_profit(yesterday)}</div>
        
      </section>
    )
  }
}

export default Stocks
