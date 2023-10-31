import React from 'react'
import { quotes } from '../assets'


const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 
      rounded-[20px] max-w-[270px] mr-0 my-5 feedback-card md:mr-10 sm:mr-5'>
       <img src={quotes} alt="quote" />
       <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10 '>{content}</p>
    </div>
  )
}

export default FeedbackCard