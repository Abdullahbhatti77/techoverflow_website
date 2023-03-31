import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from '../commonPages/Footer'


export default function ServicesGroup() {
  return (
    <>
      <div style={{ backgroundColor: '#1B1B1B' }}>
        <div className='container'>
          <Section1 />
        </div>
      </div>
      <div style={{ backgroundColor: '#0D0D0D' }}>
        <div className='container' style={{ padding: '100px' }}>
          <Section2 />
        </div>
      </div>
      <div style={{ backgroundColor: '#1B1B1B' }}>
        <div className='container'>
          <Footer />
        </div>
      </div>
    </>
  )
}
