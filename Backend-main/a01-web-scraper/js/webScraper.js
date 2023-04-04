const cheerio = require('cheerio')
const fetch = require('node-fetch')

const extractLinks = async urls => {
    // Collect promises.
    const promises = urls.map(async url => getText(url))
  
    // Wait for the promises to resolve (or reject) to plain texts.
    const texts = await Promise.all(promises)
  
    // Parses the markup, with jsdom, and select all anchor elements to get the hrefs.
    const hrefs = texts
      .map(text => {
        const dom = new JSDOM(text)
        return Array.from(dom.window.document.querySelectorAll('a[href^="http://"],a[href^="https://"]'), element => element.href)
      })
      .flat()
  
    // Return unique links.
    return [...new Set(hrefs)]
  }
  
  /**
   * Gets the plain text from an URL.
   *
   * @param {string} url - URL to get content from.
   * @returns {string} The content as plain text.
   */
  const getText = async url => {
    const response = await fetch(url)
    return response.text()
  }
  
  // Exports
  module.exports.extractLinks = extractLinks
  module.exports.getText = getText