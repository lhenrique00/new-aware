import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 95vh;
    padding-top: 15rem;
    padding-left: 10rem;
    margin: auto;
  `}
`
