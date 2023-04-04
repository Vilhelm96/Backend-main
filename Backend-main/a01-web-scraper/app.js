const { calendarScraper } = require('./js/calendarScraper')
const { cinemaScraper } = require('./js/cinemaScraper')

const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { restaurantScraper } = require('./js/restaurantScaper')
async function getHTML() {
    let url = process.argv[2]
    let calenderURL
    let cinemaURL
    let restaurantURL
    const getData = {
        method: 'Get'
    }
    const response = await fetch(url, getData)
    const data = await response.text()
    let $=cheerio.load(data)

    //If this doesn't work just collect the urls and then do the async functions after the for each loop.
    $('a').each(async (index, element) => {
        switch(index) {
            case 0: {
                calenderURL = $(element).attr('href')
                break
            } 
            case 1: {
                cinemaURL = $(element).attr('href')
                break
            }
            case 2: {
                restaurantURL = $(element).attr('href')
                break
            }
            default: break
        }
    })
    await calendarScraper.scrapeCalendar(calenderURL)
    await cinemaScraper.scrapeMovies(cinemaURL, calendarScraper)
    await restaurantScraper.loginToBooking(restaurantURL)
    
    /*let derp = cinemaScraper.getMovieStatus()
        
        for(let h = 0; h < derp.length; h++) {
            for(let k = 0; k < derp[h].length; k++) {
                console.log('In APP First index ' + h + ' second index ' + k + ' ' + derp[h].length)

                console.log('Available ' + derp[h][k])
            }
        }*/
}

getHTML()
