import React from 'react'
import { FooterStyle } from './Footer.styles'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <>
    <FooterStyle >
        <div className="copyright">@copyright {date}</div>
    </FooterStyle>
    </>
  )
}

export default Footer