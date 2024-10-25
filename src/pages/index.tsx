import HomeTemplate, { HomeTemplateProps } from '@/templates/Home'
import bannersMock from '@/components/Banner/mock'

export default function Home(props: HomeTemplateProps) {
  return <HomeTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      banners: bannersMock
    }
  }
}
