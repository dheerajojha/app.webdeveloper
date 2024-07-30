import React from 'react'
import './Exploremore.css'
import Image from 'next/image'
const Exploremore = () => {
  return (
    <section className="exploremore-wrapper grid-2">
        <div className="col-l gap">
            <article className='gap'>
                <h2>How We do</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsum, tenetur officia explicabo error aut nam? A, ipsum libero optio ipsa ratione accusantium repellendus, deserunt aperiam consequuntur adipisci provident molestias.<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate praesentium ab magnam quasi reiciendis eligendi nostrum cumque, inventore obcaecati repellendus commodi necessitatibus maiores excepturi incidunt qui corrupti exercitationem placeat!<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati architecto, sit libero mollitia minus quam non iste nulla accusamus consectetur veniam quasi in quas odio eveniet perspiciatis, optio tempore.</p>
            </article>
            <div className="explore-btn">
                <button className='cta'>Explore more</button>
            </div>
        </div>
        <div className="col-r">
            <Image src='/Images/explorepic.jpg' width={200} height={500}/>
        </div>
    </section>
  )
}

export default Exploremore