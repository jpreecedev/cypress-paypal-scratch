import React, { Fragment } from 'react'

const App = () => {
  return (
    <Fragment>
      <h1>Cypress Breakout iFrame Issue</h1>
      <p>Thanks for choosing to shop with us, click the button below to go to Paypal</p>
      <form action="https://www.developerhandbook.com/breakout.html" method="post">
        <button type="submit">Pay now</button>
      </form>
    </Fragment>
  )
}

export default App
