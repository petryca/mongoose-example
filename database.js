const mongoose = require('mongoose');

(async () => {

    try {
        await mongoose.connect('mongodb://localhost:27017', {
            dbName: 'library'
        });
        console.log('mongo connected');
    } catch (error) {
        console.log(error);
    }

})();