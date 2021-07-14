import React from 'react'
import {FooterContainer,FooterWrapper,FooterLinks,FooterLinksWrap,FooterLinkItems,LinkTitle,FooterLink,TitleImgWrap,LinkTitleImg,SocialLinkswrap,SocialIcon,FooterBlock,LinkTitleRow,FooterLink1, FooterText} from './FooterStyles'
import Logo from '../../assets/OG_Brands_Web_180x 1logo yellow.png'
import {FaFacebookF,FaInstagram,FaTwitter,FaEnvelope} from 'react-icons/fa'
import {Button} from '../../components/UI Button/ButtonStyles'
import * as Scroll from 'react-scroll';

const Footer = () => {

    var scroll    = Scroll.animateScroll;

    const handleScroll = () => {
        scroll.scrollTo(-800);
    }

    return (
        <>
         <FooterContainer id='footer'>
             <FooterWrapper>
                 <FooterLinks>
                     <FooterLinksWrap>
                         <FooterLinkItems>  
                             <TitleImgWrap to='/' onClick={handleScroll}>
                                <LinkTitleImg src={Logo} alt=''></LinkTitleImg>
                             </TitleImgWrap>
                             <SocialLinkswrap>
                                 <SocialIcon href='https://www.facebook.com/og.grabba.5' target='_blank'><FaFacebookF color='#fff'/></SocialIcon>
                                 <SocialIcon href='https://www.instagram.com/oggrabba/' target='_blank'><FaInstagram color='#fff'/></SocialIcon>
                                 <SocialIcon href='https://twitter.com/OgGrabba' target='_blank'><FaTwitter color='#fff'/></SocialIcon>
                             </SocialLinkswrap>
                         </FooterLinkItems>
                         <FooterBlock>
                            <FooterLinkItems>
                                <LinkTitle>Support</LinkTitle>
                                <FooterLink to='/contact-us'>Contact Us</FooterLink>
                                <FooterLink>FAQ</FooterLink>
                                <FooterLink to='store-locator'>Locate A Dealer</FooterLink>
                                <FooterLink>About Us</FooterLink>
                                <FooterLink>Email Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <LinkTitle>OG Brands</LinkTitle>
                                <FooterLink>Products</FooterLink>
                                <FooterLink to='/store-locator'>Show Locator</FooterLink>
                            </FooterLinkItems>
                         </FooterBlock>
                         <FooterLinkItems marginR={'100px'}>
                             <LinkTitleRow>
                                <FaEnvelope/>
                                <FooterLink1>Stay up to date with our products</FooterLink1>
                             </LinkTitleRow>
                             <Button to='/store-locator' primary width={'180px'}>STORE LOCATOR</Button>
                             <FooterText href='https://anaartech.com/' target='_blank'>Powered by <b>Anaar Tech</b></FooterText>
                         </FooterLinkItems>
                     </FooterLinksWrap>
                 </FooterLinks>
             </FooterWrapper>
         </FooterContainer>   
        </>
    )
}

export default Footer
