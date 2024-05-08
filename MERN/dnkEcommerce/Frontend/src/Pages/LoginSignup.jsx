import React, { useState } from 'react'
import styled from "styled-components";
import {FaEye,FaEyeSlash } from "react-icons/fa"
const LoginSignup = () => {
  const[togglePassword,setTogglePassword]=useState(false);

  return (
    <LoginSignupWrapper>
      <form action="">
        <h3>Sign Up</h3>
        <div className="form-group">
          <label htmlFor="">UserName</label>
          <input type="text" placeholder='UserName' required aria-required />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email' required aria-required />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
         <div className='password-container'>
         <input type={togglePassword ? 'text':'password'} placeholder='Password' required aria-required />
         <span onClick={()=>setTogglePassword(!togglePassword)}>{togglePassword ?<FaEye/>:<FaEyeSlash />}</span>
         </div>
        
        </div>

        <div className="form-group">
          <button className='cta'>Continue</button>
        </div>

        <div className="extra-info">
        <p>Already have any Account? <span>Login Here</span></p>
        </div>
      </form>
    </LoginSignupWrapper>
  )
}

const LoginSignupWrapper = styled.div`
display:grid;
place-content:center;
height:110vh;
width:100%;
background-color:var(--bgColor);
form{
  border:1px solid var(--grayColor);
  width:415px;
  height:450px;
  padding:2rem;
  background-color:var(--whiteColor);
  h3{
    margin-bottom:1rem;
  }
  .form-group{
    display:flex;
    flex-direction:column;
    gap:.5rem;
    margin-bottom:1rem;
    input{
      width:100%;
    }
   .password-container{
    position:relative;
    border:1px solid var(--grayColor);
    span{
   position:absolute;
   right:18px;
   top:15px;
    }
   }
  }
  .extra-info{
    p{
      font-size:14px;
    }
    span{
      color:red;
      font-weight:600;
    }
  }
}
`

export default LoginSignup