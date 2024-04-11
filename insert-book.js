const mongoose = require('mongoose');
const Book = require('./models/book'); // Import the book model
require('./database'); // Import the database connection

(async () => {

    // Create a new book	
    try {
        const newBook = new Book({
            title: 'The Great Gatsby',
            authors: ['F. Scott Fitzgerald'],
            isbn: '1234567890'
        });

        const savedBook = await newBook.save();
        console.log('Book saved:', savedBook);
    } catch (err) {
        console.error(err);
    }

    await mongoose.connection.close();

})();