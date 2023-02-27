const express = require('express')
require('dotenv').config()

const { graphqlHTTP } = require('express-graphql')

const schema = require('./schema/schema')

const app = express()
const port = process.env.PORT || 5000

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
)

app.listen(port, console.log(`server running on port ${port}`))
