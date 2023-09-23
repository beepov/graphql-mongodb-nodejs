const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const bookResolvers = require('../resolvers/bookResolver');

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: {
        _id: { type: GraphQLID },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
    },
});

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        books: {
            type: new GraphQLList(BookType),
            resolve: bookResolvers.Query.books,
        },
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve: bookResolvers.Query.book,
        },
    },
});

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBook: {
            type: BookType,
            args: {
                title: { type: GraphQLString },
                author: { type: GraphQLString },
            },
            resolve: bookResolvers.Mutation.createBook,
        },
        updateBook: {
            type: BookType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                author: { type: GraphQLString },
            },
            resolve: bookResolvers.Mutation.updateBook,
        },
        deleteBook: {
            type: GraphQLString,
            args: { id: { type: GraphQLID } },
            resolve: bookResolvers.Mutation.deleteBook,
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType,
});
