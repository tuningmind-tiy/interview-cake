import React, { Component } from 'react'

class Stocks extends Component {

  get_max_profit() {
    const yesterday = [10, 7, 5, 8, 11, 9]
    const max = Math.max(...yesterday)
    const min = Math.min(...yesterday)
    const sell = Number(9) + yesterday.indexOf(max)
    const buy = Number(9) + yesterday.indexOf(min)
    return ('The best profit yesterday was purchase of ' 
            + '$' + min 
            + ' at '
            + buy%12 + ':30'
            + ' and sale of '
            + '$' + max 
            + ' at '
            + sell%12 + ':30')
  }

  render() {
    return (
      <section>
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
        <p id='answer' className='code'>{this.get_max_profit()}</p>
      </section>
    )
  }
}

export default Stocks
