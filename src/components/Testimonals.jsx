import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'


const Testimonals = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className=''/>

          <div className='w-full flex justify-between items-center 
           flex-col relative z-[1] sm:mb-16 mb-6'>
              <h1 className={styles.heading2}>What people are<br className='sm:block hidden' /> saying about us</h1>
              <div className="w-full mt-6 md:mt-0">
                <p className={`${styles.paragraph} max-w-[450px] `}>Everything you need to accept card payments and grow your
                   business anywhere on the planet.</p>
              </div>
          </div>
        <div className='flex flex-wrap justify-center
         w-full feedback-container relative z-[1]'>
            {feedback.map((feedback, index) => (
              <FeedbackCard key={feedback.id} {...feedback} className="w-[42px] h-[27px] object-contain" />
            ))}
        </div>
    </section>
  )
}

export default Testimonals
