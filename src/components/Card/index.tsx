// import Link from 'next/link'
import * as S from './styles'
import Image from 'next/image'

export const getStrapiMedia = (url: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
}

export type ImageProps = {
  url: string
}

export type DetailsButtonProps = {
  id: string
  title: string
  src: string
}

export type CardProps = {
  title: string
  description: string
  id: string
  bg_img: ImageProps
  // contactButton: ContactButtonProps
  // detailsButton: DetailsButtonProps
}

const Card = ({
  title,
  description,
  bg_img
}: // contactButton,
// detailsButton
CardProps) => (
  <S.Wrapper>
    <S.Column>
      <S.Card>
        <S.InfoWrapper>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardDescription>{description}</S.CardDescription>
        </S.InfoWrapper>
        {!!bg_img && (
          <S.imageWrapper>
            <Image
              src={getStrapiMedia(bg_img.url)}
              alt="Recepção Aware"
              objectFit="cover"
              layout="fill"
              quality={100}
              priority={true}
            />
          </S.imageWrapper>
        )}
        <S.Mask />
        {/* <S.ButtonsWrapper>
          <Link href={contactButton.src} target="_blank" key={contactButton.id}>
            <S.ContactButton>
              <p>{contactButton.title}</p>
            </S.ContactButton>
          </Link>

          <Link href={detailsButton.src} key={detailsButton.id}>
            <S.DetailsButton>
              <p>{detailsButton.title}</p>
              <svg viewBox="0 96 960 960">
                <path d="M480 880.614 175.386 576 480 271.386l42.768 42.153-232.462 232.462h494.308v59.998H290.306l232.462 232.462L480 880.614Z" />
              </svg>
            </S.DetailsButton>
          </Link>
        </S.ButtonsWrapper> */}
      </S.Card>
    </S.Column>
  </S.Wrapper>
)

export default Card
