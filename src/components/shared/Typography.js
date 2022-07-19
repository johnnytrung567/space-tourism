import styled, { css } from 'styled-components'
import { EffectBottom } from './EffectBottom'

export const NavText = css`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    letter-spacing: 2.7px;
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    position: relative;
    ${EffectBottom}

    @media screen and (max-width: 1070px) {
        font-size: 14px;
        letter-spacing: 2.36px;
    }
`

export const HFiveWithNum = styled.h5`
    span {
        font-weight: bold;
        opacity: 0.25;
        margin-right: 24px;

        @media screen and (max-width: 1070px) {
            margin-right: 16px;
        }
    }
`

export const SubHeadingOne = styled.p`
    font-family: Bellefair, serif;
    font-size: 28px;
    color: #fff;
    text-transform: uppercase;
`

export const SubHeadingTwo = styled.p`
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    letter-spacing: 2.35px;
    text-transform: uppercase;
`
