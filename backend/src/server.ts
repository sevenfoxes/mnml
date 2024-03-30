import 'json-bigint-patch';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schema';
import { Context, createContext as context } from './context';


const start = async () => {
  const server = new ApolloServer<Context>({ schema })
  const { url } = await startStandaloneServer(server, { context })

  console.log(`🚀 server running at: ${url}`)
}

start()
