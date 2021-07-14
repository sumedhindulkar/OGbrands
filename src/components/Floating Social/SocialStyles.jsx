import styled from 'styled-components'

export const ToggleContainer = styled.div`
    height: 80px;
    background: #000000;
    opacity: 0.5;
    box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.25);
    width: 50px;
    right: 0;
    z-index: 20;
    position: fixed;
    margin-top: 350px;
    border-top-left-radius: 110px;
    border-bottom-left-radius: 110px;


    @media screen and (max-width: 480px) {
        height: 60px;
        width: 35px;
        margin-top: 320px;
        border-top-left-radius: 120px;
        border-bottom-left-radius: 120px;
    }
`

export const ToggleWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const FloatingContainer = styled.div`
    height: 250px;
    background: #000000;
    box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.25);
    width: 85px;
    right: 0;
    z-index: 20;
    position: fixed;
    margin-top: 280px;



    @media screen and (max-width: 480px) {
        height: 160px;
        width: 60px;
    }
`

export const FloatingWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 24px;
    
`


export const SocialIcon = styled.a`
    cursor: pointer;
    text-decoration: none;


    &:hover{
        transform: scale(2,2);
        transition: 0.2s all ease-in-out;
    }
`

export const Img = styled.img`
    @media screen and (max-width: 480px) {
        height: 20px;
        width: 20px;
    }
`