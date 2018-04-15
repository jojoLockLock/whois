const isEmoji = require('isemoji')

module.exports = function (value) {
  if (typeof value === "string") {
    return value.split("").some(isEmoji)
  }
  return false
}