import SobreTemplate, { SobreTemplateProps } from '@/templates/Sobre'
import EquipeMock from '@/components/Sobre/Equipe/mock'
import { initializeApollo } from '@/utils/apollo'
import { AllServiceQuery } from '@/graphql/generated/graphql'
import { QUERY_SERVICE } from '@/graphql/queries/services'

export default function Sobre(props: SobreTemplateProps) {
  return <SobreTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { allService }
  } = await apolloClient.query<AllServiceQuery>({
    query: QUERY_SERVICE
  })

  const data = allService

  return {
    props: {
      services: data?.Services?.serviceCattegory?.map((i) => ({
        id: i?.id,
        title: i?.title,
        description: i?.description,
        service: i?.service?.map((s) => ({
          id: s?.id,
          title: s?.title,
          description: s?.description,
          bg_img: s?.bg_img
        }))
      })),
      equipe: EquipeMock
    }
  }
}
