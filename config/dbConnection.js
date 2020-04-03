const mongoose = require('mongoose');
const config = require('config');
const URI = config.get('mongoURI');

const connectToDb = async () => {

    await mongoose
        .connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Connected to Database');
        })
        .catch(err => {
            console.log(err.message);

            /*
            This forcefully exits us out of the application
            */
            process.exit(1);
        })
}

module.exports = connectToDb;