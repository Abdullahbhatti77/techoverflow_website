import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Footer from '../../components/Footer'

export default function Career() {
    return (
        <>
            <div style={{ backgroundColor: '#1B1B1B' }}>
                <div className='container' style={{ padding: '100px' }}>
                    <Section1 />
                </div>
            </div>
            <div style={{ backgroundColor: '#1B1B1B' }}>
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
