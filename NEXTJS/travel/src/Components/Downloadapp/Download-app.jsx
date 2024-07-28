import Image from 'next/image'
import React from 'react'
import './Download-app.css'
const Downloadapp = () => {
    return (
        <section className="download-app-wrapper grid-2">
            <div className="col-l">
                <div className="da-image">
                    <Image src='/Images/da-pic2.png' width={200} height={200}/>
                </div>
            </div>
            <div className="col-r">
                <article className='gap'>
                    <h2>Free Download App For Android And Iphone</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ducimus similique corporis odit, earum fugiat numquam facere velit cumque nam, repellendus suscipit, soluta vel ratione nihil quisquam alias dolore qui?</p>
                    <div className="flex-row-s">
                        <Image src='/Images/gp.png' width={100} height={100}/>
                        <Image src='/Images/as.png' width={100} height={100}/>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Downloadapp