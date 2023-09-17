import React from 'react'
import './ThankYouPage.css'
import Card from './Card'
import ThankYouImg from "../images/illustration-thank-you.svg"

const ThankYouPage = ({rating}) => {
  return (
    <Card>
      <div className='img_container'>
        <img src={ThankYouImg} alt='thankyou image'></img>
      </div>
      <div className='selected'>
        <p> You selected {rating} out of 5  </p>
      </div>
      <h2 className='title'>Thank you!</h2>
      <p className='text'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </Card>
  )
}

export default ThankYouPage
