import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: auto;
  padding-top: 15rem;
  padding-left: 5rem;
  margin: auto;
  ${media.lessThan('small')`
    padding-top: 10rem;
    padding-left: 2rem;
  `}
`
