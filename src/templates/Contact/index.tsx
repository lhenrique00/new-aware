import Base from '@/templates/Base'
import { useSpring } from '@react-spring/web'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@styled-icons/fluentui-system-regular/ArrowRight'
import MediaMatch from '@/components/MediaMatch'
import Social from '@/components/Social'

export type ContactProps = {
  color?: 'white' | 'primary'
}

const Contact = ({ color = 'primary' }: ContactProps) => {
  const props = useSpring({
    loop: false,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
    config: { duration: 1000 }
  })
  return (
    <>
      <Base>
        <S.ContactWrapper>
          <S.ContactColumn>
            <S.InfoWrapper>
              <S.Title style={props}>Contato</S.Title>
              <S.Description>
                Entre em contato conosco para tirar as suas dúvidas ou realizar
                seu orçamento.
              </S.Description>
              <S.ContactItem>
                <S.ContactItemTitle>Aware Digital</S.ContactItemTitle>
                <hr />
                <Social color="primary" />
                <S.ContactItemDescription>
                  E-mail: awaresolucoes@gmail.com
                </S.ContactItemDescription>
              </S.ContactItem>
              <S.ContactItem>
                <S.ContactItemTitle>Aware Digital</S.ContactItemTitle>
                <hr />
                <S.Social color={color}>
                  {/* Instagram */}
                  <Link
                    href="https://www.instagram.com/aware.informatica/"
                    target="_blank"
                  >
                    <svg viewBox="0 0 50 50">
                      <path d="M34 3H16C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13zm-9 33c-6.07 0-11-4.93-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm12-21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      <path d="M34 25c0 4.96-4.04 9-9 9s-9-4.04-9-9 4.04-9 9-9 9 4.04 9 9z" />
                    </svg>
                  </Link>
                  {/* Facebook */}
                  <Link
                    href="https://www.facebook.com/aware.inf"
                    target="_blank"
                  >
                    <svg viewBox="0 0 50 50">
                      <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z" />
                    </svg>
                  </Link>
                  {/* WhatsApp */}
                  <Link
                    href="https://wa.me/message/RIYS7ZUNKPVRK1"
                    target="_blank"
                  >
                    <svg viewBox="0 0 50 50">
                      <path d="M25 2C12.318 2 2 12.318 2 25c0 3.96 1.023 7.854 2.963 11.29L2.037 46.73a.999.999 0 0 0 1.203 1.241l10.896-2.699A23.014 23.014 0 0 0 25 48c12.682 0 23-10.318 23-23S37.682 2 25 2zm11.57 31.116c-.492 1.362-2.852 2.605-3.986 2.772-1.018.149-2.306.213-3.72-.231a34.606 34.606 0 0 1-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804-.295-.389-2.411-3.161-2.411-6.03s1.525-4.28 2.067-4.864c.542-.584 1.181-.73 1.575-.73s.787.005 1.132.021c.363.018.85-.137 1.329 1.001.492 1.168 1.673 4.037 1.819 4.33.148.292.246.633.05 1.022s-.294.632-.59.973-.62.76-.886 1.022c-.296.291-.603.606-.259 1.19s1.529 2.493 3.285 4.039c2.255 1.986 4.158 2.602 4.748 2.894.59.292.935.243 1.279-.146.344-.39 1.476-1.703 1.869-2.286s.787-.487 1.329-.292c.542.194 3.445 1.604 4.035 1.896.59.292.984.438 1.132.681.148.242.148 1.41-.344 2.771z" />
                    </svg>
                  </Link>
                  {/* Google */}
                  <Link
                    href="https://maps.app.goo.gl/P5baBobm7wLefUau8"
                    target="_blank"
                  >
                    <svg viewBox="0 0 50 50">
                      <path d="M25.997 48C13.312 48 2.992 37.683 2.992 25c0-12.682 10.32-23 23.005-23a22.95 22.95 0 0 1 15.491 5.997l.774.706-7.588 7.585-.703-.602a12.274 12.274 0 0 0-7.975-2.956c-6.767 0-12.273 5.504-12.273 12.27s5.506 12.27 12.273 12.27c4.879 0 8.733-2.491 10.549-6.737H24.997V20.176l22.549.031.167.793c1.179 5.582.235 13.793-4.528 19.667C39.238 45.533 33.456 48 25.997 48z" />
                    </svg>
                  </Link>
                </S.Social>
                <S.ContactItemDescription>
                  E-mail: informatica.awaresolucoes@gmail.com
                </S.ContactItemDescription>
              </S.ContactItem>
              <S.ContactItem>
                <S.ContactItemTitle>Localização</S.ContactItemTitle>
                <hr />
                <S.ContactItemLocationDescription>
                  Av. Getúlio Vargas, 731, Porto União - SC
                </S.ContactItemLocationDescription>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d447.3301969653647!2d-51.08636492034834!3d-26.24083325663655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1729858351730!5m2!1spt-BR!2sbr"
                  height="250"
                  style={{ border: '0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <Link href="https://www.google.com/maps/@-26.2407226,-51.0866063,3a,75y,65.25h,88.74t/data=!3m7!1e1!3m5!1sUPgvnZD_ca2TIPvi_R39Zw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D1.2648916503989938%26panoid%3DUPgvnZD_ca2TIPvi_R39Zw%26yaw%3D65.25492080049963!7i16384!8i8192?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D">
                  <S.ButtonBlack>
                    <p>Acessar Localização</p>
                    <ArrowRight />
                  </S.ButtonBlack>
                </Link>
              </S.ContactItem>
            </S.InfoWrapper>
          </S.ContactColumn>
          <S.ContactColumn>
            <MediaMatch greaterThan="medium">
              <S.imageWrapper>
                <Image
                  src="/images/recepcao.jpg"
                  alt="Recepção Aware"
                  objectFit="cover"
                  layout="fill"
                  quality={100}
                  priority={true}
                />
                <S.Mask />
              </S.imageWrapper>
            </MediaMatch>
          </S.ContactColumn>
        </S.ContactWrapper>
      </Base>
    </>
  )
}

export default Contact
