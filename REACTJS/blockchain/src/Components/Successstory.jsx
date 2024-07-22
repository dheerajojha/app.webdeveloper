import React from 'react'
import { styled } from "styled-components"
const Successstory = () => {
    const successData = [{
        id: 1,
        title: 'Year Experience',
        num: 20,
    },
    {
        id: 2,
        title: 'Success Rate',
        num: 24,
    },
    {
        id: 3,
        title: 'Award Winning',
        num: 30,
    }
    ]
    return (
        <SuccessstoryWrapper>
            <div className="row grid-2">
                <div className="col-l gap">
                    <div className="card">
                        <div className="card-body flex-row">
                            <p>Top up amount</p>
                            <h3>1500</h3>
                            <span>USD$</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body flex-row">
                            <p>Top up amount</p>
                            <h3>2000</h3>
                            <span>USD$</span>
                        </div>
                    </div>
                    <div className="card">
                            <div className="card-body flex-row">
                                <p>Top up amount</p>
                                <h3>4000</h3>
                                <span>USD$</span>
                            </div>
                        </div>
                </div>
                <div className="col-r gap">
                    <h2>Our Success Story With Blockchain</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, numquam nulla a vel nemo quidem et aliquam. Ad quia nulla laudantium. Animi sint libero, consequatur veritatis quas impedit hic ea.</p>
                    <div className="list-container flex-between">
                        {successData.map((item) => (
                            <div className="list" key={item.id}>
                                <h4>{item.title}</h4>
                                <p>{item.num}</p>
                            </div>
                        ))}
                    </div>
                    <div className="progress-container">
                        <div className="progress">
                            <div className="progress-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </SuccessstoryWrapper>
    )
}

const SuccessstoryWrapper = styled.section`
background-color:var(--blackColor);
color:var(--whiteColor);
padding:3rem;
border-radius:10px;

.col-l{ 
    .card{
        background-color:var(--whiteColor);
        border-radius:5px;
        padding:1rem;
        h3{
            color:purple;
        }
        p{
            color:var(--blackColor);
        }
        span{
            background-color:lightgreen;
            padding:.2rem;
            border-radius:4px;
        }
       
    }
    
}
.col-r{
    p{
        color:#ccc;
    }
   .progress-container{
    width:100%;
    height:10px;
    background-color:var(--grayColor);
    border-radius:10px;
    .progress{
    background-color:purple;
    height:100%;
    width:70%;
    position:relative;
    .progress-dot{
        width:20px;
        height:20px;
        background-color:rgba(255,255,255,0.25);
        border-radius:50%;
        position:absolute;
        left:90%;
        bottom:-4px;
        box-sizing: 0 8px 10px 32px rgba(255,255,255,0.25);
    }
    }
   }
}
    
`

export default Successstory