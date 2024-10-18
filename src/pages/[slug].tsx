import ServicePagesTemplate, {
  ServicePagesTemplateProps
} from '@/templates/ServicePage'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import { initializeApollo } from '@/utils/apollo'
import {
  ServicePagesBySlugQuery,
  ServicePageQuery
} from '@/graphql/generated/graphql'
import {
  QUERY_SERVICE_PAGE,
  QUERY_SERVICE_PAGE_BY_SLUG
} from '@/graphql/queries/pages'

const apolloClient = initializeApollo()

export default function Areas(props: ServicePagesTemplateProps) {
  const router = useRouter()
  if (router.isFallback) return null

  return <ServicePagesTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<ServicePageQuery>({
    query: QUERY_SERVICE_PAGE
  })
  const service_pages_data = data!.servicePages

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const paths = service_pages_data!.map(({ slug }: any) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<ServicePagesBySlugQuery>({
    query: QUERY_SERVICE_PAGE_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  if (!data.servicePages.length) {
    return { notFound: true }
  }

  const data_by_slug = data.servicePages[0]

  return {
    props: {
      pageTitle: data_by_slug?.pageTitle,
      slug: data_by_slug?.slug,
      intro: {
        id: data_by_slug?.Intro?.id,
        title: data_by_slug?.Intro?.title,
        description: data_by_slug?.Intro?.description,
        cover_image: data_by_slug?.Intro?.cover_image?.url
      },
      contentPage: data_by_slug?.dynamic_zone
    }
  }
}
