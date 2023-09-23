require('dotenv').config();

const getOsEnv = (key) => {
    if (typeof process.env[key] === "undefined") {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return process.env[key];
}

module.exports = { getOsEnv }