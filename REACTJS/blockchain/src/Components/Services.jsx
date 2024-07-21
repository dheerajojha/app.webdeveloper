import React from 'react'
import { styled } from 'styled-components'
import { tag, filter, services } from "../assets/Images"

const Services = () => {
  const serviceData = [{
    id: 1,
    title: 'Best Tutorials',
    description: "With price auto refresh you're always upto date",
    image: tag,
  },
  {
    id: 2,
    title: 'Crypto exchange tips',
    description: "With Filter auto refresh you're always upto date",
    image: filter,
  },
  {
    id: 3,
    title: 'Ultra Secure',
    description: "With Filter auto refresh you're always upto date",
    image: filter,
  },
  ]
  return (
    <ServicesWrapper>
      <div className="row grid-2">
        <div className="col-l gap">
          <h3>Trusted By the People Around the globe</h3>
          <p>Lorem ipsum dolor, inesciunt. Rem maiores eaque similique tempora. Velit rerum illo qui laborum facilis iste eligendeniti!</p>

          {serviceData.map((item) => (
            <div className="card flex-row" key={item.id}>
              <div className="card-img">
                <img src={item.image} alt="" />
              </div>
              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-r">
          <img src={services} alt="" />
        </div>
      </div>
    </ServicesWrapper>
  )
}

const ServicesWrapper = styled.section`
.col-l{
  .card-img{
    width:4cqh;
  }
}
.col-r{
img{
  max-height:350px;
}
}
`

export default Services