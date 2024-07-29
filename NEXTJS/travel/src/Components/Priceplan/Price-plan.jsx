'use client'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Price-plan.css'
const Priceplan = () => {
    const pricePlan = [{
        id: 1,
        title: 'Life Plan Extended',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 2000,
        featured: ['50 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
        duration:'annual'

    },
    {
        id: 2,
        title: 'Basic Plan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 3000,
        featured: ['53 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
        duration:'monthly'

    },
    {
        id: 3,
        title: 'Plus Plan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 4000,
        featured: ['55 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
       duration:'monthly'

    },
    {
        id: 4,
        title: 'Life Plan Pro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 2000,
        featured: ['50 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
        duration:'annual'

    },
    {
        id: 5,
        title: 'Basic Plan',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 3000,
        featured: ['53 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
        duration:'monthly'

    },
    {
        id: 6,
        title: 'Plus Plan Extreme',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.',
        price: 4000,
        featured: ['55 lsiting', 'customer with legend', 'one Year Validity', '24/7 full support'],
       duration:'annual'

    },
    ]
    const [togglePlan, setTogglePlan] = useState(1)
    return (
        <section className="price-plan-wrapper">
            <div className="heading">
                <h2>Our Plan For Your Strategies</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit provident autem maxim.</p>
                <div className="grid-2">
                    <button className='cta' onClick={()=>setTogglePlan(1)}>Annual</button>
                    <button className='cta-white' onClick={()=>setTogglePlan(2)}>Monthly</button>
                </div>
            </div>

            <div className="card-container grid-3">
                {togglePlan == 1 ?

                    <>
                        {pricePlan.filter((f)=>(
                        f.duration == 'annual'
                        )).map((item) => (
                            <div className="card gap">
                                <div className="card-body gap">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <h2>${item.price}</h2>
                                    <button>Select plan</button>
                                </div>
                                <div className="card-footer">
                                    {item.featured.map((val) => (

                                        <div className="flex-row-s">
                                            <span><FaStar /></span>
                                            <p>{val}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                    : 
                    <>
                    {pricePlan.filter((f)=>(
                    f.duration == 'monthly'
                    )).map((item) => (
                        <div className="card gap">
                            <div className="card-body gap">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <h2>${item.price}</h2>
                                <button>Select plan</button>
                            </div>
                            <div className="card-footer">
                                {item.featured.map((val) => (

                                    <div className="flex-row-s">
                                        <span><FaStar /></span>
                                        <p>{val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </>
                    
                    }
            </div>

        </section>
    )
}

export default Priceplan