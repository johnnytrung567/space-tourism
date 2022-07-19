import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 212px;
    /* padding-left: 166.5px;
    padding-right: ${({ pr }) => (pr ? pr : '0px')}; */
    padding-bottom: ${({ pb }) => (pb ? pb : '0px')};
    min-width: 1010px;
    max-width: calc(100vw - 166.5px * 2);
    margin: 0 auto;
`
