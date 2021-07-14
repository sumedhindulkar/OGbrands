import React,{useState} from 'react'
import { FloatingContainer,FloatingWrapper,Img,SocialIcon,ToggleContainer,ToggleWrapper} from './SocialStyles'
import {FaFacebookF,FaTwitter,FaChevronLeft} from 'react-icons/fa'
import Instagram from '../../assets/instagram-64 1.png'

const Social = () => {

    const [toggle,setToggle] = useState(true)

    return (
        <>
            {/* { toggle ?
               <ToggleContainer  onClick={() => setToggle(!toggle)}>
                    <ToggleWrapper>
                        <FaChevronLeft color="#fff" size='40px' />
                    </ToggleWrapper>
                </ToggleContainer> : */}
                <FloatingContainer>
                    <FloatingWrapper>
                    <SocialIcon href='https://www.facebook.com/og.grabba.5' target='_blank'><FaFacebookF size={window.screen.width<=480 ? '20px' : '35px'} color='#fff'/></SocialIcon>
                    <SocialIcon href='https://www.instagram.com/oggrabba/' target='_blank'><Img src={Instagram} alt='instagram' /></SocialIcon>
                    <SocialIcon href='https://twitter.com/OgGrabba' target='_blank'><FaTwitter size={window.screen.width<=480 ? '20px' : '35px'} color='#fff'/></SocialIcon>
                    </FloatingWrapper>
                </FloatingContainer>
            {/* } */}
            
        </>
    )
}

export default Social
