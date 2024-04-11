const mongoose = require('mongoose');
const Book = require('./models/book'); // Import the book model
require('./database'); // Import the database connection

(async () => {

    // Create a new book	
    try {

        const newBooks = [];
        newBooks[0] = { title: "Philosopher's Stone", authors: 'J. K. Rowling', isbn: '978-0-7475-3269-9'};
        newBooks[1] = { title: "Chamber of Secrets", authors: 'J. K. Rowling', isbn: '0-7475-3849-1' };
        newBooks[2] = { title: "Prisoner of Azkaban", authors: 'J. K. Rowling', isbn: '0-7475-3849-2' };


        for (let i = 0; i < newBooks.length; i++) {
            const newBook = new Book(newBooks[i]);
            const savedBook = await newBook.save();
            console.log('Book saved:', savedBook);
        }

    } catch (err) {
        console.error(err);
    }

    await mongoose.connection.close();

})();