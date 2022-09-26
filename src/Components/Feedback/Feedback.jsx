import React from 'react'
import ReviewCard from '../ReviewCard/ReviewCard'
import img1 from '../../Assets/stu1.jpg'
import img2 from '../../Assets/stu2.jpg'
import img3 from '../../Assets/stu3.jpg'
import './Feedback.css'

function Feedback() {
  return (
    <div className='feedback-container'>
        <div className='feedback-heading-container'>
            <h1>Reviews</h1>
        </div>
        <div className='feedback-card-container'>
            <ReviewCard name="AMAN GUPTA" image={img1} content="LazyBee helped me in fulfiling my instant need and requirements in daily life, delivery is always on time"/>
            <ReviewCard name="SAKSHI SINGH" image={img2} content="The best part about LazyBee is that they give option to order items from your local shops and vendors in any categorie"/>
            <ReviewCard name="RAHUL KUMAR" image={img3} content="LazyBee provides various options in multiple categories and there user experince is best"/>
        </div>
    </div>
  )
}

export default Feedback