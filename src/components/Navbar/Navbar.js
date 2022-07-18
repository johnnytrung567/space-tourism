import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { EffectBottom } from '../shared/EffectBottom'

export const Nav = styled.nav`
    position: fixed;
    left: 0;
    width: 100%;
    height: 96px;
    margin-top: 40px;
    margin-left: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled(Link)`
    width: 48px;
    height: 48px;
    cursor: pointer;

    img {
        width: 100%;
    }
`

export const Line = styled.span`
    height: 1px;
    z-index: 2;
    background-color: rgba(255, 255, 255, 0.25);
    flex-grow: 1;
    margin-left: 64px;
`

export const Menu = styled.div`
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    display: flex;
    margin-left: -30px;
    align-self: stretch;
    align-items: center;
    padding-left: 123px;
    padding-right: 195px;
    gap: 48px;
`

export const NavItem = styled(NavLink)`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    position: relative;

    ${EffectBottom}
`

export const Num = styled.span`
    margin-right: 11px;
    font-weight: bold;
`
