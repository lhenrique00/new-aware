import SobreTemplate, { SobreTemplateProps } from '@/templates/Sobre'
import ServicesMock from '@/components/PresentationCard/servicesMock'

export default function Sobre(props: SobreTemplateProps) {
  return <SobreTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      services: ServicesMock
    }
  }
}
