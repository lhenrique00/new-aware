import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    background-color: red;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    display: flex;
    width: 100%;
    height: 10vh;
    font-size: 24px;
    color: black;
    height: 100%;
    width: 300px;
  `}
`
export const Teste = styled.div`
  height: 20vh;
`

export const Carousel = styled.div`
  display: flex;
`
