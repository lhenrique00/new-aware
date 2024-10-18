import React, { useState } from 'react'
import * as S from './styles'

export type AccordionProps = {
  id: string
  title: string
  description: string
  number: string
}

export type AccordionItemProps = {
  items: AccordionProps[]
}

const AccordionService = ({ items }: AccordionItemProps) => {
  const [selected, setSelected] = useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }
  return (
    <S.DuvidasSection>
      {items.map((item, i: number) => (
        <>
          <S.Wrapper onClick={() => toggle(i)}>
            <S.TitleWrapper>
              <span onClick={() => toggle(i)}>
                {selected === i ? '-' : '+'}
              </span>
              <S.Column>
                <S.Title onClick={() => toggle(i)}>
                  {item.number}. {item.title}
                </S.Title>
              </S.Column>
            </S.TitleWrapper>
            <div className={selected === i ? 'content show' : 'content'}>
              <S.Description>{item.description}</S.Description>
            </div>
          </S.Wrapper>
        </>
      ))}
    </S.DuvidasSection>
  )
}

export default AccordionService
