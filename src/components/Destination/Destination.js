import styled from 'styled-components'
import backgroundDesktop from '../../assets/destination/background-destination-desktop.jpg'
import backgroundTablet from '../../assets/destination/background-destination-tablet.jpg'
import backgroundMobile from '../../assets/destination/background-destination-mobile.jpg'
import { HFiveWithNum, NavText, SubHeadingOne } from '../shared/Typography'

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
    padding-left: 3.5px;
    padding-bottom: 118px;
    min-width: 1000px;
    max-width: calc(100% - 163px * 2);
    margin: 0 auto;

    @media screen and (max-width: 1070px) {
        min-width: 0;
        max-width: 100%;
        margin: 0;
        padding-top: 136px;
        padding-left: 0;
        padding-bottom: 62px;
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

    @media screen and (max-width: 620px) {
        margin-left: 0px;
    }

    span {
        margin-right: 28px;

        @media screen and (max-width: 1070px) {
            margin-right: 19px;
        }

        @media screen and (max-width: 620px) {
            margin-right: 18px;
        }
    }
`

export const InfoRow = styled.div`
    margin-top: 64px;
    padding-left: 63.5px;
    display: flex;
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
    }
`

export const Planet = styled.div`
    width: 445px;
    height: 445px;

    img {
        width: 100%;
    }

    @media screen and (max-width: 1070px) {
        width: 300px;
        height: 300px;
        margin-bottom: 53px;
    }

    @media screen and (max-width: 620px) {
        margin-bottom: 26px;
    }
`

export const Info = styled.div`
    max-width: 445px;

    @media screen and (max-width: 1070px) {
        text-align: center;
    }
`

export const InfoMenu = styled.ul`
    list-style: none;
    display: flex;

    @media screen and (max-width: 1070px) {
        justify-content: center;
    }
`

export const InfoItem = styled.li`
    ${NavText};
    color: #d0d6f9;
    cursor: pointer;
    margin-right: 36px;
    &:last-of-type {
        margin-right: 0;
    }

    @media screen and (max-width: 1070px) {
        font-size: 16px;
        letter-spacing: 2.7px;
    }

    @media screen and (max-width: 620px) {
        font-size: 14px;
        letter-spacing: 2.36px;
        margin-right: 26.5px;
    }
`

export const Title = styled.h2`
    margin-top: 52px;
    margin-bottom: 14px;

    @media screen and (max-width: 620px) {
        margin-top: 32px;
        margin-bottom: 8px;
    }

    @media screen and (max-width: 620px) {
        margin-top: 20px;
        margin-bottom: 1px;
    }
`

export const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: #383b4b;
    margin-top: 54px;
    margin-bottom: 28px;

    @media screen and (max-width: 1070px) {
        margin-top: 49px;
    }

    @media screen and (max-width: 620px) {
        margin-top: 32px;
        margin-bottom: 32px;
    }
`

export const DistanceRow = styled.div`
    display: flex;
    column-gap: 79px;

    @media screen and (max-width: 1070px) {
        justify-content: center;
    }

    @media screen and (max-width: 620px) {
        flex-direction: column;

        div:first-child {
            margin-bottom: 32px;
        }
    }
`

export const DistanceText = styled(SubHeadingOne)`
    margin-top: 12px;
`
