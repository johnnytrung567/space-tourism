import { css } from 'styled-components'

export const EffectRight = css`
    &::after {
        content: '';
        position: absolute;
        width: 4px;
        height: 31px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        opacity: 0;
    }

    &.active {
        &::after {
            opacity: 1;
        }
    }
`
