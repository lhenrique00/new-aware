import { gql, QueryHookOptions, useQuery } from '@apollo/client'

export const QUERY_SERVICE_PAGE = gql`
  query servicePage {
    servicePages {
      pageTitle
      slug
      Intro {
        id
        title
        description
        cover_image {
          url
        }
      }

      dynamic_zone {
        ... on ComponentGeneralPersonalized {
          id
          image {
            url
          }
          title
          description
          cta_text
          button {
            id
            link
            title
          }
          personalized_item {
            id
            number
            title
            description
          }
        }
        ... on ComponentGeneralGallery {
          id
          title
          images_connection {
            nodes {
              url
            }
          }
          images {
            url
          }
        }
        ... on ComponentServicesFaq {
          id
          title
          description
          FAQItem {
            id
            number
            title
            description
          }
        }
        ... on ComponentServicesLocation {
          id
          title
          description
          street
          city_state
          image {
            url
          }
          horario {
            id
            title
            description
            seg_sex
            sab_dom
          }
          cta_button {
            id
            link
            title
          }
        }
        ... on ComponentServicesOurProcces {
          id
          title
          image {
            url
          }
          description
          item {
            id
            number
            title
            description
          }
        }
        ... on ComponentServicesPlatform {
          id
          title
          description
          platforms_item {
            id
            title
            description
            svg {
              url
            }
          }
        }
        ... on ComponentServicesPortfolio {
          id
          title
          description
          PortfolioItem {
            id
            title
            image {
              url
            }
            cattegory {
              id
              title
            }
          }
        }
        ... on ComponentServicesServicesContent {
          id
          title
          serviceCattegory {
            id
            title
            description
            service {
              id
              title
              description
              bg_img {
                url
              }
            }
          }
        }
        ... on ComponentServicesAnimatedDescription {
          id
          first_message {
            id
            bold
            text
          }
          second_message {
            id
            bold
            text
          }
          third_message {
            id
            bold
            text
          }
        }
        ... on ComponentServicesWebsiteServices {
          WebsiteServicesItem {
            id
            title
            description
            WebsiteServicesInfos {
              id
              title
              description
              number
            }
            cta_button {
              id
              link
              title
            }
            image {
              url
            }
          }
        }
        ... on ComponentServicesInformaticaServices {
          id
          title
          description
          informatica_services {
            id
            number
            title
            button {
              id
              link
              title
            }
            item {
              id
              title
            }
          }
        }
      }
    }
  }
`

export const QUERY_SERVICE_PAGE_BY_SLUG = gql`
  query servicePagesBySlug($slug: String) {
    servicePages(filters: { slug: { eq: $slug } }) {
      pageTitle
      slug
      Intro {
        id
        title
        description
        cover_image {
          url
        }
      }

      dynamic_zone {
        ... on ComponentGeneralPersonalized {
          id
          image {
            url
          }
          title
          description
          cta_text
          button {
            id
            link
            title
          }
          personalized_item {
            id
            number
            title
            description
          }
        }
        ... on ComponentGeneralGallery {
          id
          title
          images_connection {
            nodes {
              url
            }
          }
          images {
            url
          }
        }
        ... on ComponentServicesFaq {
          id
          title
          description
          FAQItem {
            id
            number
            title
            description
          }
        }
        ... on ComponentServicesLocation {
          id
          title
          description
          street
          city_state
          image {
            url
          }
          horario {
            id
            title
            description
            seg_sex
            sab_dom
          }
          cta_button {
            id
            link
            title
          }
        }
        ... on ComponentServicesOurProcces {
          id
          title
          image {
            url
          }
          description
          item {
            id
            number
            title
            description
          }
        }
        ... on ComponentServicesPlatform {
          id
          title
          description
          platforms_item {
            id
            title
            description
            svg {
              url
            }
          }
        }
        ... on ComponentServicesPortfolio {
          id
          title
          description
          PortfolioItem {
            id
            title
            image {
              url
            }
            cattegory {
              id
              title
            }
          }
        }
        ... on ComponentServicesServicesContent {
          id
          title
          serviceCattegory {
            id
            title
            description
            service {
              id
              title
              description
              bg_img {
                url
              }
            }
          }
        }
        ... on ComponentServicesAnimatedDescription {
          id
          first_message {
            id
            bold
            text
          }
          second_message {
            id
            bold
            text
          }
          third_message {
            id
            bold
            text
          }
        }
        ... on ComponentServicesWebsiteServices {
          WebsiteServicesItem {
            id
            title
            description
            WebsiteServicesInfos {
              id
              title
              description
              number
            }
            cta_button {
              id
              link
              title
            }
            image {
              url
            }
          }
        }
        ... on ComponentServicesInformaticaServices {
          id
          title
          description
          informatica_services {
            id
            number
            title
            button {
              id
              link
              title
            }
            item {
              id
              title
            }
          }
        }
      }
    }
  }
`
