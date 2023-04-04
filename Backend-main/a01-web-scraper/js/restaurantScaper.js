const fetch = require('node-fetch')
const cheerio = require('cheerio')

const restaurantScraper = {
    loginToBooking: async function(url) {
        const login ={
            username: 'zeke',
            password: 'coys',
            submit: "login"
        }
        try {
            await fetch(url + '/login'), {
                headers: 'Content-Type: text/html; charset=utf-8',                
                method: 'post',
                body: login
            }.then(function(response){  
                if(response.ok){
                    console.log('The request is ok.')
                    return
                }
                throw new Error(`We have a error! Status: ${response.status}`)
            })
            /*const response = await fetch(url, getData)
            const data = await response.text()
            let $=cheerio.load(data)
            console.log($.html())*/
        }
        catch (error) {
            throw new Error(error)
        }
    }
}

module.exports.restaurantScraper = restaurantScraper