import styled from 'styled-components'
import backgroundDesktop from '../../assets/technology/background-technology-desktop.jpg'
import backgroundTablet from '../../assets/technology/background-technology-tablet.jpg'
import backgroundMobile from '../../assets/technology/background-technology-mobile.jpg'
import { HFiveWithNum } from '../shared/Typography'

export const Container = styled.div`
    min-height: 100vh;
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 1070px) {
        background-image: url(${backgroundTablet});
    }

    @media screen and (max-width: 620px) {
        background-image: url(${backgroundMobile});
    }
`

export const Wrapper = styled.div`
    padding-top: 212px;
    padding-bottom: 101px;
    min-width: 1000px;
    max-width: calc(100% - 166.5px);
    margin-left: auto;

    @media screen and (max-width: 1070px) {
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding-top: 136px;
        padding-left: 0;
        padding-bottom: 97px;
    }

    @media screen and (max-width: 620px) {
        padding: 88px 0 81px;
        text-align: center;
    }
`

export const HeadingFive = styled(HFiveWithNum)`
    @media screen and (max-width: 1070px) {
        margin-left: 38.5px;
    }

    @media screen and (max-width: 620px) {
        margin-left: 0;
    }
`

export const InfoRow = styled.div`
    margin-top: 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1070px) {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 60px;
        padding-left: 0;
    }

    @media screen and (max-width: 620px) {
        margin-top: 32px;
    }
`

export const InfoWrap = styled.div`
    display: flex;
    column-gap: 80px;

    @media screen and (max-width: 1070px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ButtonsWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1070px) {
        flex-direction: row;
    }
`

export const NumBtn = styled.button`
    width: 80px;
    height: 80px;
    font-family: Bellefair, serif;
    font-size: 32px;
    color: #fff;
    border-radius: 50%;
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        border-color: #fff;
    }

    &.active {
        background-color: #fff;
        color: #0b0d17;
    }

    @media screen and (max-width: 1070px) {
        font-size: 24px;
        width: 60px;
        height: 60px;
        margin: 0 8px;
    }

    @media screen and (max-width: 620px) {
        font-size: 16px;
        width: 40px;
        height: 40px;
    }
`

export const Info = styled.div`
    @media screen and (max-width: 1070px) {
        text-align: center;
    }
`

export const SmallText = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin-bottom: 11px;

    @media screen and (max-width: 1070px) {
        margin-top: 44px;
        margin-bottom: 16px;
    }

    @media screen and (max-width: 620px) {
        font-size: 14px;
        letter-spacing: 2.36px;
        margin-top: 26px;
        margin-bottom: 9px;
    }
`

export const Desc = styled.p`
    max-width: 444px;
    margin-top: 17px;

    @media screen and (max-width: 1070px) {
        max-width: 458px;
        margin-top: 16px;
    }

    @media screen and (max-width: 620px) {
        max-width: 100%;
        margin-left: 24px;
        margin-right: 24px;
    }
`

export const ImageWrap = styled.div`
    width: 515px;
    height: 527px;

    img {
        width: 100%;
    }

    @media screen and (max-width: 1070px) {
        width: 100%;
        height: auto;
        margin-bottom: 56px;
    }

    @media screen and (max-width: 620px) {
        margin-bottom: 34px;
    }
`
