import Base from '@/templates/Base'
import SobreIntro from '@/components/Sobre/Intro'
import NossaProposta from '@/components/Sobre/NosaProposta'
import SobrePrincipios from '@/components/Sobre/Principios'
import Equipe from '@/components/Sobre/Equipe'
import PresentationCard, {
  PresentationCardInfoProps
} from '@/components/PresentationCard'

export type SobreTemplateProps = {
  services: PresentationCardInfoProps[]
}

const SobreTemplate = ({ services }: SobreTemplateProps) => {
  return (
    <>
      <Base>
        <SobreIntro />
        <NossaProposta />
        <SobrePrincipios />
        <Equipe />
        <PresentationCard items={services} />
      </Base>
    </>
  )
}

export default SobreTemplate
