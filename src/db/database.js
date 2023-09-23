const mongoose = require('mongoose');
const { getOsEnv } = require('../core/env')

const connectDB = async () => {
    try {
        const host = getOsEnv("MONGODB_HOST")
        const mongoDbName = getOsEnv("MONGODB_DB")
        const mongoPort = getOsEnv("MONGODB_PORT")
        const mongoUser = getOsEnv("MONGODB_USER")
        const mongoPwd = getOsEnv("MONGODB_PWD")
        const mongodbStr = `mongodb://${mongoUser}:${mongoPwd}@${host}:${mongoPort}/${mongoDbName}`
        await mongoose.connect(mongodbStr, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
