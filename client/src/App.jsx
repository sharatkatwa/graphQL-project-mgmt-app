import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Header from './components/Header'
import Clients from './components/Clients.jsx'
import AddClientModel from './components/AddClientModel'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <AddClientModel />
        <div className='container'>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
