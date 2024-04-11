const mongoose = require('mongoose');
const User = require('./models/user');
require('./database');

async function updateUserEmailById(userId, newEmail) {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId, // user's _id
            { email: newEmail }, // new email to be updated
            { new: true } // options: return the updated document
        );

        if (updatedUser) {
            console.log('User email updated successfully:', updatedUser);
        } else {
            console.log('No user found with the provided _id.');
        }
    } catch (error) {
        console.error('Error updating user email:', error);
    }
}

// Example usage
const userId = '661769e7872a8e7f88ea90bd'; // Replace with the actual _id of the user
const newEmail = 'new.email@example.com';

// Call the function with the userData object
(async () => {

    await updateUserEmailById(userId, newEmail);
    await mongoose.connection.close();

})();
