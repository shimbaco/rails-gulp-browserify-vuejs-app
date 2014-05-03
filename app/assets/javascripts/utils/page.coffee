$ = require 'jquery'

module.exports = (selector, callback) ->
  if $('body').hasClass(selector)
    callback()
