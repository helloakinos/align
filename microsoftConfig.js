require("dotenv").config();
const msal = require('@azure/msal-node');

const microsoftoAuthconfig = {
    auth: {
        clientId: process.env.CLIENTID,
        authority: "https://login.microsoftonline.com/common",
        clientSecret: process.env.CLIENTSECRET
    },
    system: {
        loggerOptions: {
            loggerCallback(loglevel, message, containsPii) {
                console.log(message);
            },
            piiLoggingEnabled: false,
            logLevel: msal.LogLevel.Verbose,
        }
    }
};

module.exports = microsoftoAuthconfig;