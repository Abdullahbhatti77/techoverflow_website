import React from 'react';
import css from '../css/hero.module.css';

function HeroSection() {
  return (
    <section className={css.hero}>
      <div className={css.hero_content}>
        <h1 style={{color: 'white'}}>Your Product Development Studio</h1>
        <button type="button" class="btn btn-info">Lets Talk</button>
      </div>
      <div className={css.hero_image}>
        <img src="./images/Group3.svg" alt="Our Hero" />
      </div>
    </section>
  );
}

export default HeroSection;
