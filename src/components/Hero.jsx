import React from 'react'
import style from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'


const Hero = () => (
    <>
     <section id='home' 
       className={`flex md:flex-row flex-col ${style.paddingY}`}>
        <div className={`flex-1 ${style.flexStart}
         flex-col xl:px-0 sm:px-16 px-6`}>

      <div className="flex flex-row items-center py-[6px] 
          px-4 bg-discount-gradient rounded-[10px] mb-2">
              <img src={discount} alt="discount" className='w-[32px] h-[32px]'/>
            <p className={`${style.paragraph} ml-2`}>
          <span className='text-white'>20$</span>
             DISCOUNT FOR {''}
          <span className='text-white'>1 MONTH</span>
             ACCOUNT 
            </p>
        </div>

          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold
             ss:text-[73px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The Next <br className='sm:block hiddens'/> {' '}
              <span className='text-gradient'>Generation </span>
               Payment Round
            </h1>

            <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted />
            </div>

          </div>
        </div>
      </section>
    </>
    )

export default Hero
