import { GraphQLServer } from "graphql-yoga"
import { db } from "./db/db.js"
import {Query } from './resolvers/Query.js'
import {User } from './resolvers/User.js'


const typeDefs = "src/schemas/schema.graphql"
const resolvers = { Query,User }
const server = new GraphQLServer({typeDefs, resolvers, context: {db}})
server.start(()=>console.log("Serveur à l'écoute du port 4000..."))
