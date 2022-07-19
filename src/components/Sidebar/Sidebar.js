import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { EffectRight } from '../shared/EffectRight'
import closeIcon from '../../assets/shared/icon-close.svg'

export const Wrapper = styled.aside`
    position: fixed;
    z-index: 200;
    top: 0;
    bottom: 0;
    width: 254px;
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(81.55px);
    transition: 0.3s;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
`

export const CloseIcon = styled.div`
    width: 19.1px;
    height: 19.1px;
    position: absolute;
    top: 33.95px;
    right: 26.45px;
    background-image: url(${closeIcon});
    cursor: pointer;
`

export const SideMenu = styled.div`
    padding-top: 118px;
    padding-left: 32px;
    display: flex;
    flex-direction: column;
`

export const SideItem = styled(NavLink)`
    width: 100%;
    margin-bottom: 32px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    position: relative;

    ${EffectRight};
`

export const Num = styled.span`
    font-weight: bold;
    font-family: inherit;
    margin-right: 11px;
`
