import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const DuvidasSection = styled.section`
  text-align: center;
  width: 100%;
  margin: auto;
  margin-bottom: 10rem;
  .content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  }

  .content.show {
    height: auto;
    max-height: 99rem;
    transition: all 0.5s cubic-bezier(1, 0, 1, 0);
  }

  ${media.lessThan('huge')`
    width: 50%;
  `}
  ${media.lessThan('large')`
    width: auto;
    margin-left: 2rem;
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: 1rem;
    display: inline-flex;
    width: 100%;
    border-bottom: 1px solid ${theme.colors.primary};
    cursor: pointer;
    span {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.huge};
      position: relative;
      margin-left: 0;
      width: 4rem;
      ${media.lessThan('medium')`
        width: 0;
      `}
    }
  `}
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    width: 80%;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin-left: 0;
    ${media.lessThan('medium')`
      width: auto;
      padding-right: 2rem;
      margin-left: 4rem;
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    font-size: 6rem;
    line-height: 6rem;
    margin-top: 0;
    margin-bottom: 3rem;
    ${media.lessThan('large')`
      width: 90%;
      line-height: 3rem;
      font-size: ${theme.font.sizes.huge};
    `}
  `}
`

export const Description = styled.h2`
  ${({ theme }) => css`
    width: 70%;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    margin-top: 2rem;
    margin-left: 0;
    ${media.lessThan('large')`
      margin-left: 0;
      width: 95%;
    `}
  `}
`
