import React from 'react'
import './Stat.css'
const Stat = () => {
    const statData = [{
        id: 1,
        title: 'Products',
        num: '24,203'
    },
    {
        id: 2,
        title: 'Followers',
        num: '60199'
    },
    {
        id: 3,
        title: 'Montly Sales',
        num: '20,9022'
    },
    {
        id: 4,
        title: 'Happy Customers',
        num: '95%'
    },
    ]
    return (
        <section className="stat-wrapper">
            <div className="card-container grid-4">
                {statData.map((item) => (
                    <div className="card gap" key={item.id}>
                        <h3>{item.num}</h3>
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stat