import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
    return (
        <div className="newsletter-wrapper">
            <div className="heading">
                <h2>Sign in for early Access</h2>
            </div>
            <form action="">
                <div className="form-group">
                    <input type="text" placeholder='Enter email' />
                    <button className='cta'>Get Started</button>
                </div>
            </form>
        </div>
    )
}

export default Newsletter