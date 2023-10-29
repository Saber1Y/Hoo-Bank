import React from 'react'
import style from '../style';
import { stats } from '../constants';


const Stats = () => (
    <>
     <section className={`${style.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((item) => (
            <div key={item.id} className=''>
              <h3>{item.value}</h3>
              <p>{item.title}</p>
            </div>
        ))}
     </section>
    </>
  )

export default Stats