import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
// import News from '../homePage/News'
import Footer from '../../components/Footer'

export default function Services() {
    return (
        <>
            <div style={{ backgroundColor: '#1B1B1B' }}>
                <div className='container' style={{ padding: '100px' }}>
                    <Section1 />
                </div>
            </div>
            <div style={{ backgroundColor: '#0D0D0D' }}>
                <div className='container' style={{ padding: '100px' }}>
                    <Section2 />
                </div>
            </div>
            <div style={{ backgroundColor: '#1B1B1B' }}>
                <div className='container' style={{ padding: '100px' }}>
                    <Section3 />
                </div>
            </div>
            <div style={{ backgroundColor: '#0D0D0D' }}>
                <div className='container' style={{ padding: '100px' }}>
                    <Section4 />
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
