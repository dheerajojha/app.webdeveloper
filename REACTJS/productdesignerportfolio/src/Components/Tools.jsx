import React from 'react'
import styled from 'styled-components'
import { ps, sketch, storybook, ae, figma, invision } from "../assets/Images"
const Tools = () => {
  const toolData = [{
    id: 1,
    title: 'Figma',
    image: figma,
    percentage: 60,

  },
  {
    id: 2,
    title: 'Sketch',
    image: sketch,
    percentage: 60,

  },
  {
    id: 3,
    title: 'Photoshop',
    image: ps,
    percentage: 30,

  },
  {
    id: 4,
    title: 'After Effect',
    image: ae,
    percentage: 80,

  },
  {
    id: 5,
    title: 'Story book',
    image: storybook,
    percentage: 60,

  },
  {
    id: 6,
    title: 'InVision',
    image: invision,
    percentage: 60,

  },


  ]
  return (
    <ToolsWrapper>
      <div className="heading">
        <span>My Favorite Tools</span>
        <h2>Exploring The Tool</h2>
      </div>

      <div className="card-container">
        {toolData.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-header gap">
              <div className="card-img">
                <img src={item.image} alt="" />
              </div>
              <h3>{item.percentage}%</h3>
            </div>

            <div className="card-body">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </ToolsWrapper>
  )
}

const ToolsWrapper = styled.section`
.card-container{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
  gap:1rem;
  justify-content:center;
  .card{
    display:grid;
    justify-content:center;
    text-align:center;
    gap:1rem;
    .card-header{
    background-color:var(--cardBg);
    border-radius:40px;
    padding:1rem;
    .card-img{
      max-height:60px;
      max-width:60px;
      img{
        aspect-ratio:1/1;
      }
     
    }
  }
  }

}
`

export default Tools