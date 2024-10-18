import * as S from './styles'
import Link from 'next/link'

export type SocialProps = {
  color?: 'white' | 'primary'
}

const Social = ({ color }: SocialProps) => {
  return (
    <S.Social color={color}>
      {/* Instagram */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M34 3H16C8.83 3 3 8.83 3 16v18c0 7.17 5.83 13 13 13h18c7.17 0 13-5.83 13-13V16c0-7.17-5.83-13-13-13zm-9 33c-6.07 0-11-4.93-11-11s4.93-11 11-11 11 4.93 11 11-4.93 11-11 11zm12-21c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <path d="M34 25c0 4.96-4.04 9-9 9s-9-4.04-9-9 4.04-9 9-9 9 4.04 9 9z" />
        </svg>
      </Link>
      {/* Facebook */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zm-4 15h-2c-2.14 0-3 .5-3 2v3h5l-1 5h-4v15h-5V29h-4v-5h4v-3c0-4 2-7 6-7 2.9 0 4 1 4 1v4z" />
        </svg>
      </Link>
      {/* WhatsApp */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M25 2C12.318 2 2 12.318 2 25c0 3.96 1.023 7.854 2.963 11.29L2.037 46.73a.999.999 0 0 0 1.203 1.241l10.896-2.699A23.014 23.014 0 0 0 25 48c12.682 0 23-10.318 23-23S37.682 2 25 2zm11.57 31.116c-.492 1.362-2.852 2.605-3.986 2.772-1.018.149-2.306.213-3.72-.231a34.606 34.606 0 0 1-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804-.295-.389-2.411-3.161-2.411-6.03s1.525-4.28 2.067-4.864c.542-.584 1.181-.73 1.575-.73s.787.005 1.132.021c.363.018.85-.137 1.329 1.001.492 1.168 1.673 4.037 1.819 4.33.148.292.246.633.05 1.022s-.294.632-.59.973-.62.76-.886 1.022c-.296.291-.603.606-.259 1.19s1.529 2.493 3.285 4.039c2.255 1.986 4.158 2.602 4.748 2.894.59.292.935.243 1.279-.146.344-.39 1.476-1.703 1.869-2.286s.787-.487 1.329-.292c.542.194 3.445 1.604 4.035 1.896.59.292.984.438 1.132.681.148.242.148 1.41-.344 2.771z" />
        </svg>
      </Link>
      {/* Google */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M25.997 48C13.312 48 2.992 37.683 2.992 25c0-12.682 10.32-23 23.005-23a22.95 22.95 0 0 1 15.491 5.997l.774.706-7.588 7.585-.703-.602a12.274 12.274 0 0 0-7.975-2.956c-6.767 0-12.273 5.504-12.273 12.27s5.506 12.27 12.273 12.27c4.879 0 8.733-2.491 10.549-6.737H24.997V20.176l22.549.031.167.793c1.179 5.582.235 13.793-4.528 19.667C39.238 45.533 33.456 48 25.997 48z" />
        </svg>
      </Link>

      {/* LinkedIn */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM17 20v19h-6V20h6zm-6-5.53c0-1.4 1.2-2.47 3-2.47s2.93 1.07 3 2.47c0 1.4-1.12 2.53-3 2.53-1.8 0-3-1.13-3-2.53zM39 39h-6V29c0-2-1-4-3.5-4.04h-.08C27 24.96 26 27.02 26 29v10h-6V20h6v2.56S27.93 20 31.81 20c3.97 0 7.19 2.73 7.19 8.26V39z" />
        </svg>
      </Link>
      {/* Behance */}
      <Link href="" target="_blank">
        <svg viewBox="0 0 50 50">
          <path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM29 18h7v2h-7v-2zm-9.98 14H12V18h6.73c.73 0 4.68-.05 4.68 3.57 0 1.92-1.31 2.57-1.9 2.86.88.28 2.49 1.09 2.49 3.57 0 3.83-4.39 4-4.98 4zm13.87-2.17c.62 0 1.08-.15 1.55-.44.46-.29.62-.57.77-.86h2.63c-.46 1.15-1.08 2.02-2.01 2.6s-2.01.87-3.25.87c-.78 0-1.55-.15-2.33-.44-.62-.29-1.24-.72-1.7-1.15-.46-.44-.77-1.02-1.08-1.74-.31-.58-.47-1.45-.47-2.17s.29-5.5 5.73-5.5c3.9 0 4.96 3.04 5.12 3.76.15.73.15 1.37.15 2.24h-7.9c0 .87.46 2.83 2.79 2.83z" />
          <path d="M20.68 27.71c0 1.77-2.039 1.86-2.328 1.86H15v-3.86h3.352c.726 0 2.328.24 2.328 2zM20.12 22c0 1.47-1.46 1.71-1.9 1.71H15v-3.28h2.93c.29 0 2.19.1 2.19 1.57zM35.06 25.34H30.1c0-.14.37-2.31 2.63-2.31 1.52 0 2.17 1.59 2.33 2.31z" />
        </svg>
      </Link>
    </S.Social>
  )
}

export default Social