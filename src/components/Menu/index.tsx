import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight'

import MediaMatch from '@/components/MediaMatch'
import * as S from './styles'

export type MenuProps = {
  color?: 'white' | 'primary'
}

const Menu = ({ color = 'primary' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ToggleOpen, setToggleOpen] = useState(false)
  const toggling = () => setToggleOpen(!ToggleOpen)

  return (
    <S.Wrapper color={color}>
      <MediaMatch lessThan="large">
        {color == 'white' ? (
          <>
            <S.IconWrapper>
              <S.IconMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span style={{ background: 'white' }}></span>
                <span style={{ background: 'white' }}></span>
              </S.IconMenu>
            </S.IconWrapper>
          </>
        ) : (
          <>
            <S.IconWrapper>
              <S.IconMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
              </S.IconMenu>
            </S.IconWrapper>
          </>
        )}
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Image
            src="/images/logobew.png"
            alt="Logo Aware Soluções"
            width={130}
            height={80}
          />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuGroup>
          <Link href="/" passHref>
            <S.MenuLink color={color}>Home</S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink color={color}>Sobre</S.MenuLink>
          </Link>
          <Link href="/servicos" passHref>
            <S.MenuLink color={color}>Serviços</S.MenuLink>
          </Link>
          <Link href="/contato" passHref>
            <S.MenuLink color={color}>Contato</S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.LogoWrapper>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo Lenz e Ribeiro Advocacia"
              onClick={() => setIsOpen(false)}
              width={150}
              height={50}
            />
          </Link>
        </S.LogoWrapper>
        <S.MenuNav>
          <S.Column>
            <Link href="/home" passHref>
              <S.Title onClick={() => setIsOpen(false)}>Home</S.Title>
            </Link>
          </S.Column>
          <S.Column>
            <Link href="/sobre" passHref>
              <S.Title onClick={() => setIsOpen(false)}>Sobre</S.Title>
            </Link>
          </S.Column>
          <S.Column>
            <Link href="/servicos" passHref>
              <S.Title onClick={() => setIsOpen(false)}>Serviços</S.Title>
            </Link>
          </S.Column>
          <S.Column>
            <Link href="/contato" passHref>
              <S.Title onClick={() => setIsOpen(false)}>Contato</S.Title>
            </Link>
          </S.Column>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
