import React from 'react'
import style from '../style';
import { stats } from '../constants';


const Stats = () => (
    <>
     <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((item) => (
            <div key={item.id} className={`flex-1 flex justify-start flex-row items-center m-3` }>
              <h3 className='font-poppins font-semi-bold xs:text-[40px] 
              text-[30px] xs:leading-[53px] text-white leading-[43px]'>{item.value}</h3>
              <p className='font-poppins font-normal xs:text-[20px] 
              text-[15px] xs:leading-[26px] text-gradient uppercase leading-[21px] ml-3'>{item.title}</p>
            </div>
        ))}
     </section>
    </>
  )

export default Stats