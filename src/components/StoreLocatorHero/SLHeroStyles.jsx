import styled from 'styled-components'

export const SLHeroContainer = styled.div`
    height: 800px;
`

export const SLHeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;


    /* @media screen and (max-width: 768px) {
        flex-direction: column;
    } */
`

export const SLHeroCol = styled.div`
    display:  flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const HeadingBlock = styled.div`
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;


    /* @media screen and (max-width: 768px) {
        flex-direction: row;
    } */
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 440px;
    height: 150px;
`

export const Line1 = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Heading = styled.h1`
    font-size: 96px;
    line-height: 35px;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        font-size: 62px;
    }
`

export const Line2 = styled.h1`
    font-size: 96px;
    line-height: 35px;

    @media screen and (max-width: 768px) {
        font-size: 62px;
    }
`

export const DescBlock = styled.div`
    height: 50%;
    padding-top: 80px;
    padding-left: 100px;
    padding-right: 100px;
    background: #070707;


    @media screen and (max-width: 768px) {
        padding: 50px;
        height: 350px;   
    }
`

export const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
` 

export const Desc = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.154545px;
    padding-bottom: 20px;
`

export const SLHeroImgWrapper = styled.div`
    display: flex;
    width: 50%;
    background: yellow;


    @media screen and (max-width: 768px) {
        display: block;
        width: 100%;
        height: 500px;
    }

`

export const Img = styled.img`
    height: 800px;
    width: 100%;  
    
    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

