import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: normal;
    }

    body {
        font-family: Barlow, sans-serif;
        color: #d0d6f9;
        font-size: 18px;
    }

    h1, h2, h3, h4 {
        font-family: Bellefair, serif;
        color: #fff;
        text-transform: uppercase;
    }

    h1 {
        font-size: 150px;
        
        @media screen and (max-width: 1070px) {
            line-height: 150px;
        }

        @media screen and (max-width: 620px) {
            font-size: 80px;
            line-height: 100px;
        }
    }

    h2 {
        font-size: 100px;

        @media screen and (max-width: 1070px) {
            font-size: 80px;
        }

        @media screen and (max-width: 620px) {
            font-size: 56px;
        }
    }

    h3 {
        font-size: 56px;

        @media screen and (max-width: 1070px) {
            font-size: 40px;
        }

        @media screen and (max-width: 620px) {
            font-size: 24px;
        }
    }

    h4 {
        font-size: 32px;
        opacity: 0.5;

        @media screen and (max-width: 1070px) {
            font-size: 24px;
        }

        @media screen and (max-width: 620px) {
            font-size: 16px;
        }
    }

    h5 {
        color: #fff;
        font-family: 'Barlow Condensed', sans-serif;
        font-size: 28px;
        letter-spacing: 4.75px;
        text-transform: uppercase;

        @media screen and (max-width: 1070px) {
            font-size: 20px;
            letter-spacing: 3.38px;
        }

        @media screen and (max-width: 620px) {
            font-size: 16px;
            letter-spacing: 2.7px;
        }
    }

    p {
        font-size: 18px;
        line-height: 32px;

        @media screen and (max-width: 1070px) {
            font-size: 16px;
            line-height: 28px;
        }

        @media screen and (max-width: 620px) {
            font-size: 15px;
            line-height: 25px;
        }
    }

    /* React slick */
    .slick-dots {
        text-align: left;
        bottom: 45px;

        li {
            &:hover {
                opacity: 0.5;
            }

            button::before {
                font-size: 15px;
                color: #fff;
                opacity: 0.175;

                @media screen and (max-width: 1070px) {
                    font-size: 10px;
                }
            }

            &.slick-active {
                button::before {
                    opacity: 1;
                    color: #fff;
                }
            }
        }

        @media screen and (max-width: 1070px) {
            text-align: center;
            bottom: 572px;
        }

        @media screen and (max-width: 620px) {
            top: 275px;
        }
    }
`
