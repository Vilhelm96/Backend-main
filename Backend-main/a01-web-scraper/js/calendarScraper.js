const fetch = require('node-fetch')
const cheerio = require('cheerio')

const calendarScraper = {
    allAvailableFriday: false,
    allAvailableSaturday: false,
    allAvailableSunday: false,
    /*getAvailability: async function() {
        let availabilityArray = [this.allAvailableFriday, this.allAvailableSaturday, this.allAvailableSunday]
        return availabilityArray
    },*/
    getAvailabilityFriday: function() {
        return this.allAvailableFriday
    },
    getAvailabilitySaturday: function() {
        return this.allAvailableSaturday
    },
    getAvailabilitySunday: function() {
        return this.allAvailableSunday
    },
    setAvailabilityFriday: function(amountAvailable) {
        this.allAvailableFriday = true;
    },
    setAvailabilitySaturday: function(amountAvailable) {
        this.allAvailableSaturday = true;
    },
    setAvailabilitySunday: function(amountAvailable) {
        this.allAvailableSunday = true;
    },
    scrapeCalendar: async function(url) {
        let array = [0, 0, 0]
        const getData = {
            method: 'Get'
        }
        const response = await fetch(url, getData)
        const data = await response.text()
        let $=cheerio.load(data)
        let paulURL
        let peterURL
        let maryURL

        //Append to three separate urls to get the correct url for paul, peter and mary.
        $('a').each((index, element) => {
            if(index == 0) {
                paulURL = url + $(element).attr('href')
            }
            else if(index == 1) {
                peterURL = url + $(element).attr('href')
            }
            else {
                maryURL = url + $(element).attr('href')
            }
        })
        //Scrape the available days.
        await this.scrapeUser(paulURL, array)
        await this.scrapeUser(peterURL, array)
        await this.scrapeUser(maryURL, array)
        /*
        $('a').each(async(index, element) => {
            let newURL = url + $(element).attr('href')
            await this.scrapeUser(newURL, array)
        })*/
    },
    scrapeUser: async function (url, array) {
        const getData = {
            method: 'Get'
        }
        const response = await fetch(url, getData)
        const data = await response.text()

        let $ = cheerio.load(data)
        //Go through each table and increment the value on the index whenever a table cell is OK
        $('td').each((index, element) => {
            if($(element).text().toUpperCase() === 'OK') {
                array[index]++
                //If a day gets 3 OK set the availability for that day as true.
                if(array[index] === 3) {
                    if(index === 0) {
                        this.setAvailabilityFriday(true)
                    }
                    else if(index === 1) {
                        this.setAvailabilitySaturday(true)
                    }
                    else {
                        this.setAvailabilitySunday(true)
                    }
                }
            }
        })
    }
}

module.exports.calendarScraper = calendarScraper