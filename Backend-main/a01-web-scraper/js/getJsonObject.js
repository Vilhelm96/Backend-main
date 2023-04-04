const fetch = require('node-fetch')

const getJsonObject = {
    get: async function(url) {
        const theHeader = {
            method: 'Get'
        }

        const response = await fetch(url, theHeader)
        const data = await response.json()
        return data
    }
}

module.exports.getJsonObject = getJsonObject
