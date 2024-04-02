import { useQuery as useApolloQuery } from '@apollo/client';

export const useQuery = (query, r) => {
  const apollo = useApolloQuery(query, r)

  return apollo
}
