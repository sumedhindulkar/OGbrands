import styled from 'styled-components'

export const ShopContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #F4F4F4; 
    


    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 768px;
    }
`

export const CardWrapper = styled.div`
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`

export const ProductCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 440px;
    max-width: 300px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }
`

export const CardImg = styled.img`
    height: 300px;
    margin-bottom: 10px;    
`

export const CardH4 = styled.h2`
    font-size: 1rem;
    color: black;
    margin-bottom: 15px;
`

export const CardP= styled.p`
    font-size: 1rem;
    text-align: center;
`

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-height: 100px;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 100px;
`

export const HeadingSpan1 = styled.h1`
    font-size: 36px;
    color: black;


    @media screen and (max-width: 480px) {
        font-size: 30px;
    }
`

export const HeadingSpan2 = styled.span`
    width: 100px;
    height: 60px;
    background: #000000;
    display: inline-block;
    text-align: center;
    font-size: 36px;
    padding-top: 10px;
    color: #FCD838;
    margin-left: 5px;
`

