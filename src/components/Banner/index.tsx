import Image from 'next/image'

import * as S from './styles'

import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import Link from 'next/link'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  slug: string
}

const Banner = ({ img, title, subtitle, slug }: BannerProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
      />
    </S.ImageWrapper>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.InfoDescription dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Link href={slug} passHref>
        <S.Button>
          <ArrowRight />
        </S.Button>
      </Link>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
