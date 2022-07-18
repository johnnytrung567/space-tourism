import { css } from 'styled-components'

export const EffectBottom = css`
    &::after {
        content: '';
        position: absolute;
        height: 3px;
        left: 0;
        right: 0;
        top: ${({ span }) => (span ? `calc(100% + ${span})` : '100%')};
        background-color: #fff;
        opacity: 0;
        transition: 0.3s;
    }

    &:hover {
        &::after {
            opacity: 0.5;
        }
    }

    &.active {
        &::after {
            opacity: 1;
        }
    }
`
