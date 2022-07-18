import styled from 'styled-components'
import { Link } from 'react-router-dom'
import backgroundDesktop from '../../assets/home/background-home-desktop.jpg'

export const Wrapper = styled.div`
    min-height: 100vh;
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const Inner = styled.div`
    padding: 300px 165px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`

export const LeftCol = styled.div`
    width: 450px;
`

export const Title = styled.h1`
    margin-top: 24px;
    margin-bottom: 24px;
`

export const Circle = styled(Link)`
    width: 274px;
    height: 274px;
    border-radius: 50%;
    font-family: Bellefair, serif;
    font-size: 32px;
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
        }
    }
`
