import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <section className="newsletter-wrapper">
      <div className="col-l">
        <img src='/Images/newspic.jpg' alt="" width={'100%'} height={'100%'} />
      </div>
      <div className="col-r gap">
        <h2>Get Your Update News</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora ut placeat libero nemo cumque temporibus aperi </p>

        <form action="">
          <div className="form-group">
            <input type="text" placeholder='Enter email' />
            <button className='cta'>Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Newsletter