import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className="newsletter-wrapper">
        <div className="heading">
            <h2>Subscribe to Newsletter</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolores corrupti quia molestiae facilis dolorem vero, dolore eos suscipit saepe vitae ex praesentium molestias.</p>
        </div>

        <form action="">
            <div className="form-group">
                <input type="text" placeholder='Enter email' />
                <button>Susbcribe</button>
            </div>
        </form>
    </div>
  )
}

export default Newsletter