const { getJsonObject } = require('./getJsonObject')

const cinemaScraper = {
    urlArray: [],
    movieStatusArray: [],
    addUrlToArray: function(url) {
        this.urlArray.push(url)
    },
    getUrlArray: function() {
        return this.urlArray
    },
    addMovieStatus: function(status) {
        this.movieStatusArray.push(status)
    },
    getMovieStatus: function() {
        return this.movieStatusArray
    },
    scrapeMovies: async function(url, calendarScraper) {
        let days = ['05', '06', '07']
        let movies = ['01', '02', '03']

        /*
         * Get the url that will be used to get the available times for the movies.
         * Add these new URL to a URL array.
        */
        if(calendarScraper.getAvailabilityFriday()) {
            for(let counter = 0; counter < movies.length; counter++) {
                this.addUrlToArray(url + '/check?day=' + days[0] + '&movie=' + movies[counter])
            }
        }
        else if(calendarScraper.getAvailabilitySaturday()) {
            for(let counter = 0; counter < movies.length; counter++) {
                this.addUrlToArray(url + '/check?day=' + days[1] + '&movie=' + movies[counter])   
            }  
        }
        else if(calendarScraper.getAvailabilitySunday()) {
            for(let counter = 0; counter < movies.length; counter++) {
                this.addUrlToArray(url + '/check?day=' + days[2] + '&movie=' + movies[counter])     
            }
        } 
        else {
            console.log('No day is available.')
        }
        
        let urlArray = this.getUrlArray()

        /*
         * Insert arrays with the status of the movies into another array so that 
         * we can use this data on a later date.
        */
        for(let i = 0; i < this.getUrlArray().length; i++) {
            //Get the json object from the current URL.
            let aObject = await getJsonObject.get(urlArray[i])
            //Create new array so that it resets every iteration.
            let statusArray = []

            for(let j = 0; j < aObject.length; j++) {
                //Add all the status for the movies to the array.
                statusArray.push(aObject[j].status)
            }
            //Add the status for the current movie times and add to the array that will contain all the status data.
            this.addMovieStatus(statusArray)    
        }
    }
}
module.exports.cinemaScraper = cinemaScraper