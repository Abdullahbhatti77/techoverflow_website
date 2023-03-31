import React from 'react'
import css from '../css/Contact.module.css'
import myBackgroundImage from '/images/contact.png'

export default function Contact() {
    return (
        <div className={css.container}>
            
            <div
                className={css.background_image}
                style={{ backgroundImage: `url(${myBackgroundImage})` }}
            >
                <div className={css.content}>
                    <h1>Welcome to my website</h1>
                    <button type="button" class="btn btn-info">Lets Talk</button>
                </div>
            </div>
        </div>
)
}
