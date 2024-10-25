import Base from '@/templates/Base'
import HomeIntro from '@/components/Home/Intro'
import HomeSobre from '@/components/Home/Sobre'
import HomePorque from '@/components/Home/Porque'
import HomeClientes from '@/components/Home/Clientes'
import HomeDepoimentos from '@/components/Home/Depoimentos'
import { BannerProps } from '@/components/Banner'

export type HomeTemplateProps = {
  banners: BannerProps[]
}

const Home = ({ banners }: HomeTemplateProps) => {
  return (
    <Base>
      <HomeIntro banners={banners} />
      <HomeSobre />
      <HomePorque />
      <HomeClientes />
      <HomeDepoimentos />
    </Base>
  )
}

export default Home
