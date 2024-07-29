import Link from 'next/link'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="row-1 grid-4-footer">
        <div className="col">
          <Link href='/' className='logo'>Dreamy</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet exercitationem nam aliquid ratione aut, voluptas hic repellendus aliquam adipisci reiciendis ullam repudiandae accusamus a error, maiores vitae dolor asperiores!</p>
        </div>
        <div className="col">
         <h4>Home</h4>
         <Link href='/appraise'>Appraise</Link>
         <Link href='/buy'>Buy</Link>
         <Link href='/sell'>Sell</Link>
         <Link href='/how it works'>How it works</Link>
        </div>

        <div className="col">
        <h4>Company</h4>
         <Link href='/appraise'>About us</Link>
         <Link href='/Review'>Review</Link>
         <Link href='/faqs'>FAQS</Link>
         <Link href='/how it works'>How it works</Link>
        </div>

        <div className="col">
        <h4>Contact</h4>
         <Link href='/'>+9983973902</Link>
         <Link href='/'>kevin@gmail.com</Link>
         <Link href='/'>conteac@gmail.com</Link>
         <Link href='/how it works'>Term @condition Apply</Link>
        </div>
      </div>

      <div className="row-2">
        <div className="col">
          <p>Copyright Claim2024 @ all right reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer