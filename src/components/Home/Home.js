import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundDesktop from '../../assets/home/background-home-desktop.jpg'
import backgroundTablet from '../../assets/home/background-home-tablet.jpg'
import backgroundMobile from '../../assets/home/background-home-mobile.jpg'

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
    padding: 270px 165px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1070px) {
        flex-direction: column;
        align-items: center;
        padding: 202px 0 0;
    }

    @media screen and (max-width: 620px) {
        padding: 112px 24px 0;
    }
`

export const LeftCol = styled.div`
    max-width: 450px;

    @media screen and (max-width: 1070px) {
        text-align: center;
    }
`

export const HFive = styled.h5`
    color: #d0d6f9;
`

export const Title = styled.h1`
    margin-top: 24px;
    margin-bottom: 24px;

    @media screen and (max-width: 620px) {
        margin-top: 16px;
        margin-bottom: 16px;
    }
`

export const Circle = styled(Link)`
    width: 274px;
    height: 274px;
    border-radius: 50%;
    font-family: Bellefair, serif;
    font-size: 32px;
    letter-spacing: 2px;
    background-color: #fff;
    color: #0b0d17;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 100;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 50%;
        opacity: 1;
        transition: 0.3s;
    }

    &:hover {
        &::before {
            width: 450px;
            height: 450px;
            opacity: 0.1;

            @media screen and (max-width: 1070px) {
                width: 400px;
                height: 400px;
            }

            @media screen and (max-width: 620px) {
                width: 250px;
                height: 250px;
            }
        }
    }

    @media screen and (max-width: 1070px) {
        margin-top: 156px;
        margin-bottom: 90px;
    }

    @media screen and (max-width: 620px) {
        width: 150px;
        height: 150px;
        font-size: 20px;
        letter-spacing: 1.25px;
        margin-top: 81px;
        margin-bottom: 48px;
    }
`
