import React from 'react'
import css from '../../css/hero.module.css';

export default function Section1() {
  return (
    <>
      <section className={css.hero}>
        <div className={css.hero_content}>
          <h1 style={{ color: 'white' }}>Design</h1>
          <p style={{color: '#A19F95'}}>Powerful, intuitive UI and UX promotes adoption, engagement, and loyalty.</p>
          
          <button type="button" class="btn btn-info">More Services</button>
          
        </div>
        <div className={css.hero_image}>
          <img src="./images/group4.svg" alt="Our Hero" />
        </div>
      </section>
    </>
  )
}
