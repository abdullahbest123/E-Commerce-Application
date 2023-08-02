import React from 'react'
import Form from './Form'
import ReviewsList from './ReviewsList'
import './css/formReviews.css'

export const ReviewsSection = () => {
  return (
<div className='mainContainer'>

<ReviewsList/>
<Form/>
</div>
  )
}
