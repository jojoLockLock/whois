const punycode = require('punycode')
const whois = require('whois-api')
const hasEmoji = require('./hasEmoji')


function _whois(domain) {

  return new Promise(function (resolve, reject) {

    try {
      if (hasEmoji(domain)) {
        domain = punycode.toASCII(domain)
      }

      whois.lookup(domain, (error, result) => {
        if (error) {
          reject(error)
          return
        }
        resolve(result)
      })

    } catch (e) {
      reject(e)
    }

  })
}

module.exports = _whois

