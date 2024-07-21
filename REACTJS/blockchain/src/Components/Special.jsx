import React from 'react'
import styled from 'styled-components'
import { tag, filter, special } from "../assets/Images"

const Special = () => {

    const specialData = [{
        id: 1,
        title: 'Live price update',
        description: "With price auto refresh you're always upto date",
        image: tag,
    },
    {
        id: 2,
        title: 'Live Filter update',
        description: "With Filter auto refresh you're always upto date",
        image: filter,
    },
    ]
    return (
        <SpecialWrapper>
            <div className="heading">
                <h3>Create Portfolic CryptoCurrency Portfolio Today</h3>
                <span>Things That make best place from trading.</span>
            </div>

            <div className="row grid-2">
                <div className="col-l">
                    <img src={special} alt="img" />
                </div>
                <div className="col-r gap">
                    <h3>Secure way to buy and sell cryptocurrency</h3>
                    <p>Lorem iQuia, odit soluta denventore voluptatibus, atque asperiores beatae fugiat eos nesciunt vitae eius optio deserunt id?</p>
                    {specialData.map((item) => (
                        <div className='card flex-row' key={item.id}>
                            <div className="card-img">
                                <img src={item.image} alt="price" />
                            </div>
                            <div className="card-body">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SpecialWrapper>
    )
}

const SpecialWrapper = styled.section`
.col-l{
   img{
    max-height:350px;
   }
}
.col-r{
    .card{
        .card-img{
        width:40px;
        }
    }
}`

export default Special