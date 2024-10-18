import Base from '@/templates/Base'
import HomeIntro from '@/components/Home/Intro'
import HomeSobre from '@/components/Home/Sobre'
import HomePorque from '@/components/Home/Porque'
import HomeClientes from '@/components/Home/Clientes'
import HomeDepoimentos from '@/components/Home/Depoimentos'

const Home = () => {
  return (
    <Base>
      <HomeIntro />
      <HomeSobre />
      <HomePorque />
      <HomeClientes />
      <HomeDepoimentos />
    </Base>
  )
}

export default Home
