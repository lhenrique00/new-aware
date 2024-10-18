import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

// eslint-disable-next-line import/no-anonymous-default-export
export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        Categories: concatPagination(['title', 'sort', 'limit']),
        Posts: concatPagination(['slug', 'sort', 'limit'])
      }
    }
  }
})
