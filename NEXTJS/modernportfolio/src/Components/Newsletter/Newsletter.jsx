import React from 'react'
import './Newsletter.css'
import { FaArrowRight } from 'react-icons/fa'

const Newsletter = () => {
    return (
        <section className="newsletter-wrapper flex-between">
            <div className="col">
                <h2>Lets <span>Connect</span> There</h2>
            </div>
            <div className="col">
                <button className='cta'>
                    <span><FaArrowRight /></span>
                    <small>Hide me now</small>
                </button></div>
        </section>
    )
}

export default Newsletter