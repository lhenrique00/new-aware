import Link from 'next/link'
import * as S from './styles'
import Social from '@/components/Social'

export type FooterProps = {
  color?: 'white' | 'primary'
}

const Footer = ({ color = 'white' }: FooterProps) => {
  return (
    <S.Wrapper>
      <S.ContactContent>
        <S.Column>
          <S.ContactTitle>Entre em contato</S.ContactTitle>
        </S.Column>
        <S.Column>
          <S.Description>
            Estamos sempre prontos para ouvir suas necessidades e ajudar seu
            negócio a crescer. Entre em contato conosco e descubra como a Aware
            Soluções pode transformar a presença online da sua empresa.
          </S.Description>
        </S.Column>
      </S.ContactContent>
      <hr />
      <S.Content>
        <S.Column>
          <S.Title>Navegação</S.Title>
          <S.Links>
            <Link href="/">
              <S.MenuLink>Home</S.MenuLink>
            </Link>
            <Link href="/sobre">
              <S.MenuLink>Sobre</S.MenuLink>
            </Link>
            <Link href="/sobre">
              <S.MenuLink>Design</S.MenuLink>
            </Link>
            <Link href="/sobre">
              <S.MenuLink>Social Media</S.MenuLink>
            </Link>
            <Link href="/publicacoes">
              <S.MenuLink>Tráfego Pago</S.MenuLink>
            </Link>
            <Link href="/publicacoes">
              <S.MenuLink>Websites</S.MenuLink>
            </Link>
            <Link href="/publicacoes">
              <S.MenuLink>Informática</S.MenuLink>
            </Link>
            <Link href="/contato">
              <S.MenuLink>Contato</S.MenuLink>
            </Link>
          </S.Links>
        </S.Column>
        <S.Column>
          <S.Title>Social</S.Title>
          <Social color={color} />
        </S.Column>
        <S.Column>
          <S.Title>Localização</S.Title>
          <S.Links>
            <Link href="https://g.co/kgs/1ifyYV4" target="_blank">
              <S.MenuLink>
                Av. Getúlio Vargas, 731, Cidade Nova - Porto União - SC
              </S.MenuLink>
            </Link>
          </S.Links>
        </S.Column>
        <S.Column>
          <S.Title>Contato</S.Title>
          <S.Links>
            <p>(42) 98442-7303</p>
            <Link href="mailto:contato@advocacialr.com.br">
              <S.MenuLink>awaresolucoes@gmail.com</S.MenuLink>
            </Link>
          </S.Links>
        </S.Column>
      </S.Content>

      <S.Copyright>
        <S.Hr />
        <S.CopyrightDescription>
          © {new Date().getFullYear()} COPYRIGHT: awaresolucoes.com - Aware
          Soluções Digitais®
        </S.CopyrightDescription>
        <S.CopyDescription>
          Transparência e comprometimento com você e sua empresa.
        </S.CopyDescription>
      </S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
