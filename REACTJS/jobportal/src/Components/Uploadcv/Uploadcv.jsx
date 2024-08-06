import React from 'react'
import './Uploadcv.css'
const Uploadcv = () => {
  return (
    <section className="uploadcv-wrapper grid-2">
      <div className="col-l">
        <img src={'/Images/cv.png'} height={500} width={'100%'} alt="cv" />
      </div>
      <div className="col-r gap">
        <h2>Get Matched the most valuable Job Just Drop Your Cv Here</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, natus quibusdam autem sed voluptatem assumenda, hic dignissimos, dolorem earum maiores quisquam tempore delectus. Necessitatibus, omnis? Sit culpa ipsam mollitia consequatur.</p>
        <div className="uploadcv-btn">
          <button className='cta'>Upload Cv</button>
        </div>
      </div>
    </section>
  )
}

export default Uploadcv