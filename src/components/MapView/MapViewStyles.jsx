import styled from 'styled-components'

export const MapViewContainer = styled.div`
    display: flex;
    height: 800px;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 100px;
    padding-bottom: 50px;
    background: #F5F5F5;

    @media screen and (max-width: 768px) {
        padding: 20px 0 0 0 ;
        background: #fff;
    }

`

export const MapViewWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;  
    justify-content: space-between;


    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const MapWrapper = styled.div`
    display: flex;
    width: 60%;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 50%;
    }

`
export const SearchBoxWrapper = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    @media screen and (max-width: 768px) {
        width: 100%;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;
    }
`

export const SearchBox = styled.div`
    background: #fff;
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    justify-content: flex-start;
    scrollbar-color: grey;
    padding-left: 60px;
    padding-top: 24px;


    @media screen and (max-width: 768px) {
        overflow-y: hidden;
        overflow-x: hidden;
        padding-left: 20px;
        width: 100%;
        padding-top: 10px;
    }
`

export const SearchBarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 8px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`

export const YellowStrip = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 60px;
    margin-bottom: 24px;
    background: #FCD804;
    font-size: 20px;
    line-height: 29px;
    letter-spacing: 0.885962px;
    color: #000000;
`

