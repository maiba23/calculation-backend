import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
    type Query {
        result: Int!
    }

   type Mutation {
    sum(numbers: [Int!]): Int!
  }
`;

const resolvers = {
  Mutation: {
    sum: (parent: any, { numbers }: { numbers: number[] }) => {
      return numbers.reduce((a, b) => a + b, 0);
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Server is running on http://localhost:4000"));
