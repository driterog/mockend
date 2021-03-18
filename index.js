const url = 'https://mockend.com/driterog/mockend/graphql'

const query = gql`
{
  posts(orderBy: [{views: desc}], limit: 5) {
    id
    title
    views
  }
}
`