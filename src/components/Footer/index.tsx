import { useState } from 'react'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Footer>
      © {new Date().getFullYear()} Copyright: awaresolucoes.com
    </S.Footer>
  )
}

export default Footer
