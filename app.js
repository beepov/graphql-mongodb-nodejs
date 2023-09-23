const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./src/schemas/bookSchema');
const connectDB = require('./src/db/database');
const {getOsEnv} = require('./src/core/env')

const app = express();

// Middleware
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

// Connect to MongoDB
connectDB();

const PORT = getOsEnv("SERVER_PORT");
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
