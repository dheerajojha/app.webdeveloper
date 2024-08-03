import Link from 'next/link'
import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="row-1">
        <div className="col">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas assumenda eaque aliquid, iste autem fuga expedita repudiandae, ab dignissimos fugiat! Exercitationem, libero unde eos quod reiciendis ex fugit! Voluptas.</p>
        </div>
        <div className="col">
          <h3>Company</h3>
          <Link href=''>Blog</Link>
          <Link href=''>Company</Link>
          <Link href=''>Price</Link>
        </div>
        <div className="col">
          <h3>Resource</h3>
          <Link href=''>Documentation</Link>
          <Link href=''>Press</Link>
          <Link href=''>Paper Work</Link>
        </div>
        <div className="col">
          <h3>Legal</h3>
          <Link href=''>Term of services</Link>
          <Link href=''>Privacy Policy</Link>
          <Link href=''>Cookies</Link>
        </div>
      </div>

      <div className="row-2 flex-between">
        <div className="col">
          <p>@copyrightclaim @2024-25</p>
        </div>
        <div className="col">
          <Link href=''>Term & condition</Link>
          <Link href=''>Policy</Link>
          <Link href=''>Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer