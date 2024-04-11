const mongoose = require('mongoose');
const User = require('./models/user');
require('./database');

async function addLoginForUser(email, newLogin) {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { email: email }, // find a document by email
            {
                $push: { logins: newLogin } // push a new login object to the logins array
            },
            { new: true } // options: return the updated document
        );

        if (updatedUser) {
            console.log('Updated user:', updatedUser);
        } else {
            console.log('No user found with that email.');
        }
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

// Example usage
const email = 'john.doe@example.com';
const newLogin = {
    logedinAt: new Date(),
    ipv4: '192.168.1.2'
};

// Call the function with the userData object
(async () => {

    await addLoginForUser(email, newLogin);
    await mongoose.connection.close();

})();
