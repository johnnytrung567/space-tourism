import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { NavText } from '../shared/Typography'
import iconBars from '../../assets/shared/icon-hamburger.svg'

export const Nav = styled.nav`
    position: absolute;
    left: 0;
    width: 100%;
    height: 96px;
    margin-top: 40px;
    padding-left: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1070px) {
        margin-top: 0;
        padding-left: 39px;
    }

    @media screen and (max-width: 620px) {
        height: 88px;
        padding-left: 24px;
        padding-right: 24px;
    }
`

export const Logo = styled(Link)`
    width: 48px;
    height: 48px;
    cursor: pointer;

    img {
        width: 100%;
    }

    @media screen and (max-width: 620px) {
        width: 40px;
        height: 40px;
    }
`

export const Line = styled.span`
    height: 1px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.25);
    flex-grow: 1;
    margin-left: 64px;

    @media screen and (max-width: 1070px) {
        display: none;
    }
`

export const Menu = styled.div`
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    display: flex;
    margin-left: -30px;
    align-self: stretch;
    align-items: center;
    padding-left: 123px;
    padding-right: 165px;
    gap: 48px;

    @media screen and (max-width: 1070px) {
        margin-left: 0;
        gap: 37px;
        padding-left: 48px;
        padding-right: 48px;
    }

    @media screen and (max-width: 620px) {
        display: none;
    }
`

export const NavItem = styled(NavLink)`
    ${NavText}
`

export const Num = styled.span`
    margin-right: 11px;
    font-weight: bold;

    @media screen and (max-width: 1070px) {
        display: none;
    }
`

export const Bars = styled.div`
    width: 24px;
    height: 21px;
    background-image: url(${iconBars});
    cursor: pointer;
    display: none;

    @media screen and (max-width: 620px) {
        display: block;
    }
`
