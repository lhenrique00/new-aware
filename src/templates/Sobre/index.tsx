import Base from '@/templates/Base'
import SobreIntro from '@/components/Sobre/Intro'
import NossaProposta from '@/components/Sobre/NosaProposta'
import SobrePrincipios from '@/components/Sobre/Principios'
import Equipe, { EquipeCardProps } from '@/components/Sobre/Equipe'
import PresentationCard, {
  PresentationCardInfoProps
} from '@/components/PresentationCard'
import * as S from './styles'

export type SobreTemplateProps = {
  services: PresentationCardInfoProps[]
  equipe: EquipeCardProps[]
}

const SobreTemplate = ({ services, equipe }: SobreTemplateProps) => {
  return (
    <>
      <Base>
        <SobreIntro />
        <NossaProposta />
        <SobrePrincipios />
        <Equipe items={equipe} />
        <S.ServicosSection>
          <S.ServicesTitle>Nossos serviços</S.ServicesTitle>
          <PresentationCard items={services} />
        </S.ServicosSection>
      </Base>
    </>
  )
}

export default SobreTemplate
