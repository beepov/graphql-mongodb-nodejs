const Book = require('../models/book');

const bookResolvers = {
    Query: {
        books: async () => {
            return await Book.find({});
        },
        book: async (_, { id }) => {
            return await Book.findById(id);
        },
    },
    Mutation: {
        createBook: async (_, { title, author }) => {
            const newBook = new Book({ title, author });
            return await newBook.save();
        },
        updateBook: async (_, { id, title, author }) => {
            return await Book.findByIdAndUpdate(id, { title, author }, { new: true });
        },
        deleteBook: async (_, { id }) => {
            await Book.findByIdAndRemove(id);
            return 'Book deleted successfully';
        },
    },
};

module.exports = bookResolvers;
