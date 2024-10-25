import Base from '@/templates/Base'
import * as S from './styles'
import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from '@react-spring/web'
import { useRef } from 'react'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import Accordion from '@/components/Accordion'
import PresentationCard from '@/components/PresentationCard'
import AnimatedDescription, {
  MessageProps
} from '@/components/AnimatedDescription'
import AccordionService from '@/components/AccordionService'
import Gallery from '@/components/Gallery'
import Intro, { ServicePageIntroProps } from '@/components/ServicePage/Intro'

export const getStrapiMedia = (url: string) => {
  return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
}

// Tipos dos componentes da zona dinâmica
export type ButtonProps = {
  id: string
  link: string
  title: string
}

export type ImageProps = {
  url: string
}

export type ImagesProps = {
  id: string
  url: string
}

export type PersonalizedItemProps = {
  id: string
  number: string
  title: string
  description: string
}

export type FAQItemProps = {
  id: string
  number: string
  title: string
  description: string
}

export type PersonalizedProps = {
  id: string
  image: string
  title: string
  description: string
  cta_text: string
  button: ButtonProps
  items: PersonalizedItemProps
}

export type HorarioProps = {
  id: string
  title: string
  description: string
  seg_sex: string
  sab_dom: string
}

export type CTAButtonProps = {
  id: string
  link: string
  title: string
}

export type OurProcessItemProps = {
  id: string
  number: string
  title: string
  description: string
}

export type PlatformsItemProps = {
  id: string
  svg: ImageProps
  title: string
  description: string
}

export type PortfolioItemCattegoryProps = {
  id: string
  title: string
}

export type PortfolioItemProps = {
  id: string
  title: string
  image: ImageProps
  cattegory: PortfolioItemCattegoryProps[]
}

export type ServiceProps = {
  id: string
  title: string
  description: string
  bg_img: ImageProps
}

export type serviceCattegoryProps = {
  id: string
  title: string
  description: string
  service: ServiceProps[]
}

export type AnimatedDescriptionProps = {
  id: string
}

// _____________________________________________

export type WebsiteServicesInfosProps = {
  id: string
  title: string
  description: string
  number: string
}

export type WebsiteServicesProps = {
  id: string
  title: string
  description: string
  WebsiteServicesInfos: WebsiteServicesInfosProps[]
  cta_button: CTAButtonProps[]
  image: ImageProps
}

// ___________________________

export type InformaticaItemProps = {
  id: string
  title: string
}

export type InformaticaServicesItemProps = {
  id: string
  number: string
  title: string
  button: ButtonProps
  item: InformaticaItemProps[]
}

// ___________________________

export type ContentProps = {
  __typename: string
  id: string
  title: string
  description: string
  cta_text: string
  street: string
  city_state: string
  horario: HorarioProps
  cta_button: CTAButtonProps[]
  image: ImageProps
  images: ImagesProps[]
  button: ButtonProps
  personalized_item: PersonalizedItemProps[]
  FAQItem: FAQItemProps[]
  item: OurProcessItemProps[]
  platforms_item: PlatformsItemProps[]
  PortfolioItem: PortfolioItemProps[]
  serviceCattegory: serviceCattegoryProps[]
  first_message: MessageProps[]
  second_message: MessageProps[]
  third_message: MessageProps[]
  WebsiteServicesItem: WebsiteServicesProps[]
  informatica_services: InformaticaServicesItemProps[]
}

export type CattegoryServiceProps = {
  id: string
  title: string
  bg_img: string
}

export type CattegoryProps = {
  title: string
  slug: string
}

export type ServicePagesTemplateProps = {
  intro: ServicePageIntroProps
  contentPage: ContentProps[]
}

const ServicePagesTemplate = ({
  intro,
  contentPage
}: ServicePagesTemplateProps) => {
  const [servicesRef, servicesSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-50% 0%'
    }
  )

  const [animatedDescriptionRef, animatedDescriptionSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [personalizedRef, personalizedSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [galleryRef, gallerySprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [faqRef, faqSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [locationRef, locationSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [platformRef, platformSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [portfolioRef, portfolioSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [ourprocessRef, ourprocessSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [websiteServicesRef, websiteServicesSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-30% 0%'
    }
  )

  const [informaticaServicesRef, informaticaServicesSprings] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 0
      },
      to: {
        opacity: 1,
        y: -10
      },
      reverse: true,
      config: { duration: 800 },
      delay: 0
    }),
    {
      rootMargin: '-40% 0%'
    }
  )

  const containerRef = useRef(null)

  return (
    <Base>
      <Intro
        cover_image={intro.cover_image}
        description={intro.description}
        title={intro.title}
        key={intro.title}
      />

      {contentPage.map((component, index) => {
        switch (component.__typename) {
          case 'ComponentServicesServicesContent':
            return (
              <>
                <S.ServicosSection
                  id={`${component.id}`}
                  key={index}
                  ref={servicesRef}
                  style={servicesSprings}
                >
                  <S.ServicesTitle>{component.title}</S.ServicesTitle>
                  <PresentationCard items={component.serviceCattegory} />
                </S.ServicosSection>
              </>
            )
          case 'ComponentGeneralPersonalized':
            return (
              <S.PersonalizedSection
                id={`${component.id}`}
                key={index}
                ref={personalizedRef}
                style={personalizedSprings}
              >
                <S.PersonalizedTitle>{component.title}</S.PersonalizedTitle>
                <S.PersonalizedDescription>
                  {component.description}
                </S.PersonalizedDescription>
                <hr />
                {component.personalized_item.length > 3 ? (
                  <>
                    <S.ListMaiorQue>
                      {component.personalized_item?.map((i) => (
                        <>
                          <S.ListItemMaiorQue key={i?.id}>
                            <S.ListNumber>0{i?.number}</S.ListNumber>
                            <S.ListInfo>
                              <S.InfoTitleMaiorQue>
                                {i?.title}
                              </S.InfoTitleMaiorQue>
                              <S.InfoDescriptionMaiorQue>
                                {i?.description}
                              </S.InfoDescriptionMaiorQue>
                            </S.ListInfo>
                          </S.ListItemMaiorQue>
                        </>
                      ))}
                    </S.ListMaiorQue>
                  </>
                ) : (
                  <>
                    {component.personalized_item?.map((i) => (
                      <S.List key={i?.id}>
                        <S.ListItem>
                          <S.ListNumber>0{i?.number}</S.ListNumber>
                          <S.ListInfo>
                            <S.InfoTitle>{i?.title}</S.InfoTitle>
                            <S.InfoDescription>
                              {i?.description}
                            </S.InfoDescription>
                          </S.ListInfo>
                        </S.ListItem>
                        <hr />
                      </S.List>
                    ))}
                  </>
                )}
                <S.CTAPersonalizedWrapper>
                  <S.CTAPersonalizedDescription>
                    {component.cta_text}
                  </S.CTAPersonalizedDescription>
                  <h3>{component.image?.url}</h3>
                  <Link href={`${component.button?.link}`}>
                    <S.ContactButtonBlack key={component.button?.id}>
                      <p>{component.button?.title}</p>
                      <ArrowRight />
                    </S.ContactButtonBlack>
                  </Link>
                </S.CTAPersonalizedWrapper>
              </S.PersonalizedSection>
            )
          case 'ComponentGeneralGallery':
            return (
              <Container>
                <S.GallerySection
                  id={`${component.id}`}
                  key={index}
                  ref={galleryRef}
                  style={gallerySprings}
                >
                  <S.GalleryTitle>{component.title}</S.GalleryTitle>
                  <Gallery items={component.images} />
                </S.GallerySection>
              </Container>
            )
          case 'ComponentServicesFaq':
            return (
              <Container>
                <S.FAQSection
                  id={`${component.id}`}
                  key={index}
                  ref={faqRef}
                  style={faqSprings}
                >
                  <S.FAQWrapper>
                    <S.FAQColumn>
                      <S.FAQTitle>{component.title}</S.FAQTitle>
                      <S.FAQDescription>
                        {component.description}
                      </S.FAQDescription>
                    </S.FAQColumn>
                    <S.FAQColumn>
                      <Accordion items={component.FAQItem} />
                    </S.FAQColumn>
                  </S.FAQWrapper>
                </S.FAQSection>
              </Container>
            )
          case 'ComponentServicesLocation':
            return (
              <Container>
                <S.LocationSection
                  id={`${component.id}`}
                  key={index}
                  ref={locationRef}
                  style={locationSprings}
                >
                  <S.LocationTitle>{component.title}</S.LocationTitle>
                  <S.LocationDescription>
                    {component.description}
                  </S.LocationDescription>
                  <S.LocationWrapper>
                    <S.LocationInfoDescription>
                      {component.street}
                    </S.LocationInfoDescription>
                    <S.LocationInfoDescription>
                      {component.city_state}
                    </S.LocationInfoDescription>
                  </S.LocationWrapper>
                  <S.LocationHourTitle>
                    {component.horario.title}
                  </S.LocationHourTitle>
                  <S.LocationDescription>
                    {component.horario.description}
                  </S.LocationDescription>
                  <S.HorariosWrapper>
                    <S.LocationDescription>
                      {component.horario.seg_sex}
                    </S.LocationDescription>
                    <S.LocationDescription>
                      {component.horario.sab_dom}
                    </S.LocationDescription>
                  </S.HorariosWrapper>
                  {component.cta_button.map((i) => (
                    <S.LocationButtonWrapper key={i.id}>
                      <Link href={`${i.link}`}>
                        <S.ButtonBlack key={i.id}>
                          <p>{i.title}</p>
                          <ArrowRight />
                        </S.ButtonBlack>
                      </Link>
                    </S.LocationButtonWrapper>
                  ))}
                  <S.imageLocationWrapper>
                    <Image
                      src={getStrapiMedia(component.image.url)}
                      alt="Recepção Aware"
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                      priority={true}
                    />
                  </S.imageLocationWrapper>
                </S.LocationSection>
              </Container>
            )
          case 'ComponentServicesOurProcces':
            return (
              <Container>
                <S.OurProcessSection
                  id={`${component.id}`}
                  key={index}
                  ref={ourprocessRef}
                  style={ourprocessSprings}
                >
                  <S.OurProcessInfo>
                    <S.OurProcessTitle>{component.title}</S.OurProcessTitle>
                    <S.OurProcessDescription>
                      {component.description}
                    </S.OurProcessDescription>
                  </S.OurProcessInfo>
                  <S.imageOurProcessWrapper>
                    <Image
                      src={getStrapiMedia(component.image.url)}
                      alt="Recepção Aware"
                      objectFit="cover"
                      layout="fill"
                      quality={100}
                      priority={true}
                    />
                  </S.imageOurProcessWrapper>
                  <S.InfoOurProcessWrapper>
                    {component.item.map((i) => (
                      <S.InfoOurProcessItem key={i.id}>
                        <S.BigNumber>0{i.number}</S.BigNumber>
                        <S.OurProcessInfoTitle>{i.title}</S.OurProcessInfoTitle>
                        <S.OurProcessInfoDescription>
                          {i.description}
                        </S.OurProcessInfoDescription>
                      </S.InfoOurProcessItem>
                    ))}
                  </S.InfoOurProcessWrapper>
                </S.OurProcessSection>
              </Container>
            )
          case 'ComponentServicesPlatform':
            return (
              <Container>
                <S.PlatformSection
                  id={`${component.id}`}
                  key={index}
                  ref={platformRef}
                  style={platformSprings}
                >
                  <S.PlatformTitle>{component.title}</S.PlatformTitle>
                  <S.PlatformDescription>
                    {component.description}
                  </S.PlatformDescription>
                  <S.PlatformInfoWrapper>
                    {component.platforms_item.map((i) => (
                      <S.PlatformItem key={i.id}>
                        <S.platformImageWrapper>
                          <Image
                            alt="svg"
                            src={getStrapiMedia(i.svg.url)}
                            width={80}
                            height={80}
                            quality={100}
                            priority={true}
                          />
                        </S.platformImageWrapper>
                        <S.PlatformInfoTitle>{i.title}</S.PlatformInfoTitle>
                        <S.PlatformInfoDescription>
                          {i.description}
                        </S.PlatformInfoDescription>
                      </S.PlatformItem>
                    ))}
                  </S.PlatformInfoWrapper>
                </S.PlatformSection>
              </Container>
            )
          case 'ComponentServicesPortfolio':
            return (
              <Container>
                <S.PortfolioSection
                  id={`${component.id}`}
                  key={index}
                  ref={portfolioRef}
                  style={portfolioSprings}
                >
                  <S.PortfolioTitle>{component.title}</S.PortfolioTitle>
                  <S.PortfolioDescription>
                    {component.description}
                  </S.PortfolioDescription>
                  <PortfolioCarousel items={component.PortfolioItem} />
                </S.PortfolioSection>
              </Container>
            )
          case 'ComponentServicesAnimatedDescription':
            return (
              <Container>
                <S.AnimatedDescriptionSection
                  ref={animatedDescriptionRef}
                  style={animatedDescriptionSprings}
                >
                  <AnimatedDescription
                    id={component.id}
                    first_message={component.first_message}
                    second_message={component.second_message}
                    third_message={component.third_message}
                  />
                </S.AnimatedDescriptionSection>
              </Container>
            )
          case 'ComponentServicesInformaticaServices':
            return (
              <Container>
                <S.InformaticaServiceSection
                  ref={informaticaServicesRef}
                  style={informaticaServicesSprings}
                >
                  <S.StickyContainer>
                    <S.informaticaServicesTitle
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                    >
                      {component.title}
                    </S.informaticaServicesTitle>
                    <S.informaticaServicesDescription
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      {component.description}
                    </S.informaticaServicesDescription>
                  </S.StickyContainer>

                  <S.CardsContainer>
                    {component.informatica_services.map((service, index) => (
                      <S.StickyCard
                        key={service.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true, root: containerRef }}
                      >
                        <S.ServiceCard>
                          <S.ServiceCardWrapper>
                            <S.ServiceCardColumn>
                              <S.BigNumberBlack>
                                0{service.number}
                              </S.BigNumberBlack>
                            </S.ServiceCardColumn>
                            <S.ServiceCardColumn>
                              <S.CardInfoWrapper>
                                <S.CardInfoTitle>
                                  {service.title}
                                </S.CardInfoTitle>
                                <S.CardInfoItemsWrapper>
                                  {service.item.map((item) => (
                                    <>
                                      <S.CardItemTitle key={item.title}>
                                        {item.title}
                                      </S.CardItemTitle>
                                      <hr />
                                    </>
                                  ))}
                                </S.CardInfoItemsWrapper>
                                <Link href={`${service.button?.link}`}>
                                  <S.ButtonBlack key={service.button?.id}>
                                    <p>{service.button?.title}</p>
                                    <ArrowRight />
                                  </S.ButtonBlack>
                                </Link>
                              </S.CardInfoWrapper>
                            </S.ServiceCardColumn>
                          </S.ServiceCardWrapper>
                        </S.ServiceCard>
                      </S.StickyCard>
                    ))}
                  </S.CardsContainer>
                </S.InformaticaServiceSection>
              </Container>
            )

          case 'ComponentServicesWebsiteServices':
            return (
              <Container>
                <S.WebsiteServicesSection
                  id={`${component.id}`}
                  key={index}
                  ref={websiteServicesRef}
                  style={websiteServicesSprings}
                >
                  <S.WebsiteServicesItemWrapper>
                    {component.WebsiteServicesItem.map((i) => (
                      <>
                        <S.WebsiteServicesTitle>
                          {i.title}
                        </S.WebsiteServicesTitle>
                        <S.WebsiteServicesDescription>
                          {i.description}
                        </S.WebsiteServicesDescription>
                        <S.WebsiteServicesWrapper>
                          <S.WebsiteServicesColumn>
                            <S.WebsiteServicesImage>
                              <Image
                                src={getStrapiMedia(i.image.url)}
                                alt=""
                                objectFit="contain"
                                layout="fill"
                                quality={100}
                                priority={true}
                              />
                            </S.WebsiteServicesImage>
                          </S.WebsiteServicesColumn>
                          <S.WebsiteServicesColumn>
                            <AccordionService items={i.WebsiteServicesInfos} />
                          </S.WebsiteServicesColumn>
                        </S.WebsiteServicesWrapper>
                      </>
                    ))}
                  </S.WebsiteServicesItemWrapper>
                </S.WebsiteServicesSection>
              </Container>
            )
          default:
            return null
        }
      })}
    </Base>
  )
}

export default ServicePagesTemplate
