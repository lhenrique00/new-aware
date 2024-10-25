import { gql } from '@apollo/client'

export const QUERY_SERVICE = gql`
  query AllService {
    allService {
      Services {
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
    }
  }
`
