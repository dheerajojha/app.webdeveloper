import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { FaPhone, FaMailBulk, FaLocationArrow, FaLinkedin } from "react-icons/fa"
const Contact = () => {
    return (
        <ContactWrapper>
            <div className="col-l">
                <div className='left-heading gap'>
                    <span>Contact us</span>
                    <h2>Lets Talk For Your Next Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, quam sed doae distinctio.</p>
                </div>

                <div className="info">
                    <Link to='/'>
                        <span><FaPhone /></span>
                        <span>+9390-382023</span>
                    </Link>
                    <Link to='/'>
                        <span><FaMailBulk /></span>
                        <span>app.webdeveloper795@gmail.com</span>
                    </Link>
                    <Link to='/'>
                        <span><FaLinkedin/></span>
                        <span>app.webdeveloper</span>
                    </Link>
                    <Link to='/'>
                        <span><FaPhone /></span>
                        <span>247-sector 7 Dublin iceland New Max</span>
                    </Link>
                </div>
            </div>
            <div className="col-r">
                <form action="" className='gap'>
                  <div className="grid-2">
                  <div className="form-group">
                        <label htmlFor="">Your name</label>
                        <input type="text" placeholder='Enter email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Enter email' />
                    </div>
                  </div>

                  <div className="grid-2">
                  <div className="form-group">
                        <label htmlFor="">Phone*</label>
                        <input type="text" placeholder='Enter email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Intrest*</label>
                        <input type="text" placeholder='Enter Intrest' />
                    </div>
                  </div>

                  <div className="grid-2">
                  <div className="form-group">
                        <label htmlFor="">Budget</label>
                        <input type="text" placeholder='Enter email' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Select Country</label>
                        <select name="" id="">
                            <option value="">India</option>
                            <option value="">Us</option>
                            <option value="">kenya</option>
                        </select>
                    </div>
                  </div>
                  <div className="form-group">
                        <label htmlFor="">Email</label>
                        <textarea name="" id="" rows={8} placeholder='Message'></textarea>
                    </div>
                    <button className='cta-green'>Submit</button>
                </form>
            </div>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.section`
display:grid;
grid-template-columns:39.5% 59.5%;
gap:1rem;
.col-l{  
.left-heading{
    margin-bottom:2rem;
}
        a{
            display:block;
            margin-bottom:2rem;
            span{
             
        &:nth-child(1){          
            background-color:var(--primary);
            padding:.8rem;         
            border-radius:50%; 
            margin-right:.5rem; 

        }
    }
        }      
}

.col-r{
    form{
        .form-group{
         
            label{
                display:block;
                margin-bottom:.3rem;
            }
            input,select,textarea{
                width:100%;
            }
        }
    }
}
@media screen and (max-width:768px) {
    grid-template-columns:1fr;
}

`

export default Contact