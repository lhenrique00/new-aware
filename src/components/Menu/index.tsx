import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

import MediaMatch from '@/components/MediaMatch'
import * as S from './styles'
import { ServicePageQuery } from '@/graphql/generated/graphql'
import { QUERY_SERVICE_PAGE } from '@/graphql/queries/pages'
import { useQuery } from '@apollo/client'
import { KeyboardArrowRight } from '@styled-icons/material-outlined/KeyboardArrowRight'
import Social from '@/components/Social'

export type MenuProps = {
  color?: 'white' | 'primary'
}

const Menu = ({ color = 'primary' }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter() // Hook para acessar a rota atual
  const [ToggleOpen, setToggleOpen] = useState(false)

  const toggling = () => setToggleOpen(!ToggleOpen)

  const { data } = useQuery<ServicePageQuery>(QUERY_SERVICE_PAGE)

  // Verifica se a rota atual é diferente de "/"
  const isnotspecificroutes = !['/', '/sobre', '/contato'].includes(
    router.pathname
  )

  return (
    <S.Wrapper color={color}>
      <MediaMatch lessThan="large">
        {color == 'white' ? (
          <>
            <S.IconWrapper>
              <S.IconMenu
                isnotspecificroutes={isnotspecificroutes}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span></span>
                <span></span>
              </S.IconMenu>
            </S.IconWrapper>
          </>
        ) : (
          <>
            <S.IconWrapper>
              <S.IconMenu
                isnotspecificroutes={isnotspecificroutes}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
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
              isnotspecificroutes ? '/images/logo.png' : '/images/logobew.png'
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
            <S.MenuLink isnotspecificroutes={isnotspecificroutes} color={color}>
              Home
            </S.MenuLink>
          </Link>
          <Link href="/sobre" passHref>
            <S.MenuLink isnotspecificroutes={isnotspecificroutes} color={color}>
              Sobre
            </S.MenuLink>
          </Link>
          <S.DropDownLi isnotspecificroutes={isnotspecificroutes}>
            <S.MenuLink isnotspecificroutes={isnotspecificroutes} color={color}>
              Serviços
            </S.MenuLink>
            <S.DropDownContent isnotspecificroutes={isnotspecificroutes}>
              {data?.servicePages.map((i) => (
                <Link href={`/${i?.slug}`} key={i?.slug} passHref>
                  <S.MenuSubLink
                    isnotspecificroutes={isnotspecificroutes}
                    color={color}
                  >
                    {i?.pageTitle}
                  </S.MenuSubLink>
                </Link>
              ))}
            </S.DropDownContent>
          </S.DropDownLi>
          <Link href="/contato" passHref>
            <S.MenuLink isnotspecificroutes={isnotspecificroutes} color={color}>
              Contato
            </S.MenuLink>
          </Link>
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuFull
        isnotspecificroutes={isnotspecificroutes}
        aria-hidden={!isOpen}
        isOpen={isOpen}
      >
        <S.MenuNav>
          <S.Column>
            <Link href="/" passHref>
              <S.Title
                onClick={() => {
                  setIsOpen(false)
                  setToggleOpen(false)
                }}
              >
                Home
              </S.Title>
            </Link>
          </S.Column>
          <S.Column>
            <Link href="/sobre" passHref>
              <S.Title
                onClick={() => {
                  setIsOpen(false)
                  setToggleOpen(false)
                }}
              >
                Sobre
              </S.Title>
            </Link>
          </S.Column>
          <S.Column>
            <S.DropDownHeader
              onClick={toggling}
              aria-hidden={!ToggleOpen}
              ToggleOpen={ToggleOpen}
            >
              Serviços
              <S.IconHeader>
                <KeyboardArrowRight />
              </S.IconHeader>
            </S.DropDownHeader>

            <S.DropDownListContainer
              className={ToggleOpen == true ? 'content show' : 'content'}
            >
              <S.DropDownList>
                {data?.servicePages.map((i) => (
                  <Link href={`/${i?.slug}`} key={i?.slug} passHref>
                    <S.MenuSubLink
                      isnotspecificroutes={isnotspecificroutes}
                      onClick={() => {
                        setIsOpen(false)
                        setToggleOpen(false)
                      }}
                    >
                      {i?.pageTitle}
                    </S.MenuSubLink>
                  </Link>
                ))}
              </S.DropDownList>
            </S.DropDownListContainer>
          </S.Column>
          <S.Column>
            <Link href="/contato" passHref>
              <S.Title
                onClick={() => {
                  setIsOpen(false)
                  setToggleOpen(false)
                }}
              >
                Contato
              </S.Title>
            </Link>
          </S.Column>
          <S.SocialMenuWrapper>
            <hr />
            <Social color="primary" />
          </S.SocialMenuWrapper>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
