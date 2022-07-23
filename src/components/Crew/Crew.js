import styled from 'styled-components'
import backgroundDesktop from '../../assets/crew/background-crew-desktop.jpg'
import backgroundTablet from '../../assets/crew/background-crew-tablet.jpg'
import backgroundMobile from '../../assets/crew/background-crew-mobile.jpg'
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
    padding-left: 75.5px;
    min-width: 1000px;
    max-width: calc(100% - 90px * 2);
    margin: 0 auto;

    @media screen and (max-width: 1070px) {
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding-top: 136px;
        padding-left: 0;
    }

    @media screen and (max-width: 620px) {
        padding: 88px 24px 58px;
        text-align: center;
    }
`

export const HeadingFive = styled(HFiveWithNum)`
    @media screen and (max-width: 1070px) {
        margin-left: 38.5px;
    }
`

export const InfoRow = styled.div`
    display: flex !important;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1070px) {
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        padding-left: 0;
    }

    @media screen and (max-width: 620px) {
        margin-top: 32px;
        flex-direction: column-reverse;
    }
`

export const Info = styled.div`
    align-self: center;

    @media screen and (max-width: 1070px) {
        text-align: center;
        margin-bottom: 90px;
    }

    @media screen and (max-width: 620px) {
        margin-bottom: 0;
        margin-top: 74px;
    }
`

export const Name = styled.h3`
    margin-top: 15px;
    margin-bottom: 27px;

    @media screen and (max-width: 1070px) {
        margin-top: 8px;
        margin-bottom: 16px;
    }
`

export const Bio = styled.p`
    max-width: 444px;

    @media screen and (max-width: 1070px) {
        max-width: 592px;
    }
`

export const CrewWrap = styled.div`
    height: 640px;

    img {
        height: 100%;
        width: auto;
    }

    @media screen and (max-width: 1070px) {
        height: 532px;
    }

    @media screen and (max-width: 620px) {
        height: 223px;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 1px;
            background-color: #383b4b;
        }
    }
`
