import React from 'react'
import HeroSection from '../../components/HeroSection'
import Work from './Work'
import Services from './Services_Home'
import Partners from './Partners'
import Ito from './Ito'
import Outcome from './Outcome'
import News from './News'
import Footer from './Footer'


export default function Home() {

  return (
    <>
      <div style={{backgroundColor: '#1B1B1B'}}>
        <div className='container'>
            <HeroSection />
        </div>
      </div>
      <div style={{backgroundColor: '#0D0D0D'}}>
        <div className='container' style={{padding: '100px'}}>
            <Services />
        </div>
      </div>
      <div style={{backgroundColor: '#1B1B1B'}}>
        <div className='container' style={{padding: '100px'}}>
            <Partners />
        </div>
      </div>
      <div style={{backgroundColor: '#0D0D0D'}}>
        <div className='container' style={{padding: '100px'}}>
            <Work />
        </div>
      </div>
      <div style={{backgroundColor: '#1B1B1B'}}>
        <div className='container' style={{padding: '100px'}}>
            <Ito />
        </div>
      </div>
      <div style={{backgroundColor: '#0D0D0D'}}>
        <div className='container' style={{padding: '100px'}}>
            <Outcome />
        </div>
      </div>
      <div style={{backgroundColor: '#1B1B1B'}}>
        <div className='container'>
            <News />
        </div>
      </div>
      <div style={{backgroundColor: '#1B1B1B'}}>
        <div className='container'>
            <Footer />
        </div>
      </div>
    </>
  )
}
