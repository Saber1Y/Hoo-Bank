import React from 'react';
import style from './style';
import { NavBar, Hero, Stats, Business, Billing, Carddeal, Testimonals, Clients, CTA, Footer } from './components/imports';
const App = () => {
  return (
<div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    
    <div className={`bg-primary ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <Carddeal />
        <Testimonals />
        <Clients />
        <CTA />
        <Footer />
      </div>

    </div>
    
</div>
  )
}

export default App

