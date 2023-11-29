import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo.png'
function FooterComponent() {
  return (
    <footer className='App-Footer'>

      <div className="Footer-col1 Footer-Col">
        <img src={Logo} alt="FooterLogo" className='FooterLogo' />
        <h1 ><p className='HeadingText'>Ms Store</p> </h1>
      </div>

      <div className="Footer-col2 Footer-Col">
    

        <Link className='footerLinks' to={'/'}>HOME</Link>
        <Link className='footerLinks' to='products/mobile'>Mobile</Link>
        <Link className='footerLinks' to='products/laptop'>Laptop</Link>
        <Link className='footerLinks' to='products/camera'>Camera</Link>
        <Link className='footerLinks' to='products/headphon'>Headphone</Link>
      </div>

      <div className="Footer-col3 Footer-Col">
        <i className="fa-brands fa-facebook FooterSIcon"></i>
        <i className="fa-brands fa-instagram FooterSIcon"></i>
        <i className="fa-brands fa-github FooterSIcon"></i>
        <i className="fa-brands fa-stack-overflow FooterSIcon"></i>
        <i className="fa-brands fa-twitter FooterSIcon"></i>
        <i className="fa-brands fa-youtube FooterSIcon"></i>

      </div>

    </footer>
  )
}

export default FooterComponent
