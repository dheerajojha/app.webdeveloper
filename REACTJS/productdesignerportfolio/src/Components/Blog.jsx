import React, { useState } from 'react'
import styled from 'styled-components'
import { blogpic1, blogpic2, blogpic3 } from '../assets/Images'
import {Link} from "react-router-dom"
const Blog = () => {
    const [blog, setBlog] = useState([{
        id: 1,
        title: 'This is bloge relatted to my portfolio and other etc',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatem et quis aspernatur possimus laboriosam fugiat, nihil a eligendi voluptas ad nisi commodi omnis culpa inventore enim laborum sunt accusantium?',
        image: blogpic1,
    },
    {
        id: 2,
        title: 'This is bloge relatted to my portfolio and other etc',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatem et quis aspernatur possimus laboriosam fugiat, nihil a eligendi voluptas ad nisi commodi omnis culpa inventore enim laborum sunt accusantium?',
        image: blogpic2,
    },
    {
        id: 3,
        title: 'This is bloge relatted to my portfolio and other etc',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, voluptatem et quis aspernatur possimus laboriosam fugiat, nihil a eligendi voluptas ad nisi commodi omnis culpa inventore enim laborum sunt accusantium?',
        image: blogpic3,
    },
    ])
    return (
        <BlogWrapper>
            <div className="left-heading flex-between">
                <div>
                    <span>Blogs</span>
                    <h2>Blog here</h2>
                </div>
                <button className='cta-green'>View More</button>
            </div>

            <div className="card-container">
                {blog.map((item) => (
                    <div className="card gap" key={item.id}>
                        <div className="card-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="card-body gap">
                            <h3>{item.title}</h3>
                            <p>{item.description.slice(0,100)}</p>
                            <Link to='/'>Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </BlogWrapper>
    )
}

const BlogWrapper = styled.section`
.card-container{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
    gap:1rem;
    margin-top:4rem;
    .card{
        background-color:var(--cardBg);
        border-radius:5px;
        padding:1rem;
        a{
            color:var(--primary);
            font-weight:600;
        }
    }

}

@media screen and (max-width:768px) {
    .left-heading{
        display:flex;
        justify-content:center;
        text-align:center;
        button{
            display:none;
        }
    }
}
`

export default Blog