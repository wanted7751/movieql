import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs:"./graphql/schema.graphql",
    //typeDefs는 모든 타입들에 대한 정의이다.
    resolvers:resolvers  
})

server.start(() => console.log("Graphql Server Running"));