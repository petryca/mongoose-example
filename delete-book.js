const mongoose = require('mongoose');
const Book = require('./models/book'); // Import the book model

// Import the readline module to read from the command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// A function that uses a promise to wait for the user's input
const getUserInput = (question) => new Promise(resolve => readline.question(question, answer => {
    readline.close(); // Close the input stream
    resolve(answer); // Resolve the promise with the input
}));

async function deleteBookById(bookId) {
    try {
        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (deletedBook) {
            console.log('Book deleted successfully:', deletedBook);
        } else {
            console.log('No book found with the provided _id.');
        }
    } catch (error) {
        console.error('Error deleting book:', error);
    }
}

(async () => {

    const userInput = await getUserInput('Please enter a string: '); // Wait for user's input
    require('./database'); // Import the database connection
    await deleteBookById(userInput);
    await mongoose.connection.close();

})();