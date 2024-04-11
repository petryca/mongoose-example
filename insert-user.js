const mongoose = require('mongoose');
const User = require('./models/user');
require('./database');

async function insertUser(userData) {
    try {
        const user = new User({
            name: userData.name,
            age: userData.age,
            email: userData.email,
            preferences: userData.preferences,
            logins: userData.logins
        });

        const savedUser = await user.save();
        console.log('User saved successfully:', savedUser);

    } catch (error) {
        console.error(error);
    }
}

// Example usage
const userData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example2.com',
    preferences: {
        theme: 'dark',
        notifications: false
    },
    logins: [
        {
            logedinAt: new Date(),
            ipv4: '192.168.1.1'
        }
    ]
};

// Call the function with the userData object
(async () => {

    await insertUser(userData);
    await mongoose.connection.close();

})();
