import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight'

import MediaMatch from '@/components/MediaMatch'
import * as S from './styles'
import { ServicePageQuery } from '@/graphql/generated/graphql'
import { QUERY_SERVICE_PAGE } from '@/graphql/queries/pages'
import { useQuery } from '@apollo/client'

export type MenuProps = {
  color?: 'white' | 'primary'
}

const Menu = ({ color = 'primary' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [ToggleOpen, setToggleOpen] = useState(false)
  const router = useRouter() // Hook para acessar a rota atual
  const toggling = () => setToggleOpen(!ToggleOpen)

  const { data } = useQuery<ServicePageQuery>(QUERY_SERVICE_PAGE)

  // Verifica se a rota atual é diferente de "/"
  const isNotSpecificRoutes = !['/', '/sobre', '/contato'].includes(
    router.pathname
  )

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
            src={
              isNotSpecificRoutes ? '/images/logo.png' : '/images/logobew.png'
            } // Condicional para trocar a imagem
            alt="Logo Aware Soluções"
            width={130}
            height={80}
          />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="large">
        <S.MenuGroup>
          <Link href="/" passHref>
            <S.MenuLink isNotSpecificRoutes={isNotSpecificRoutes} color={color}>
              Home
            </S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink isNotSpecificRoutes={isNotSpecificRoutes} color={color}>
              Sobre
            </S.MenuLink>
          </Link>
          <S.DropDownLi isNotSpecificRoutes={isNotSpecificRoutes}>
            <S.MenuLink isNotSpecificRoutes={isNotSpecificRoutes} color={color}>
              Serviços
            </S.MenuLink>
            <S.DropDownContent isNotSpecificRoutes={isNotSpecificRoutes}>
              {data?.servicePages.map((i) => (
                <>
                  <Link href={`/${i?.slug}`} passHref>
                    <S.MenuSubLink
                      isNotSpecificRoutes={isNotSpecificRoutes}
                      color={color}
                    >
                      {i?.pageTitle}
                    </S.MenuSubLink>
                  </Link>
                </>
              ))}
            </S.DropDownContent>
          </S.DropDownLi>
          <Link href="/contato" passHref>
            <S.MenuLink isNotSpecificRoutes={isNotSpecificRoutes} color={color}>
              Contato
            </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.LogoWrapper>
          <Link href="/" passHref>
            <Image
              src="/images/logobew.png"
              alt="Logo Lenz e Ribeiro Advocacia"
              onClick={() => setIsOpen(false)}
              width={130}
              height={80}
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
