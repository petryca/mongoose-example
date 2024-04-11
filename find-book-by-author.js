const mongoose = require('mongoose');
const Book = require('./models/book'); // Import the book model
require('./database'); // Import the database connection

(async () => {

    const author = 'Rowling';

    try {
        const regex = new RegExp(author, 'i'); // 'i' for case insensitive search
        // return all info about book
        // const books = await Book.find({ "authors": { "$regex": regex } });
        // return only title
        const books = await Book.find({ "authors": { "$regex": regex } }, { "title": 1, "_id": 0 });
        console.log(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }

    await mongoose.connection.close();

})();