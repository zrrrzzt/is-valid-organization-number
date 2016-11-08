'use strict'

const checkdigit = require('checkdigit')

module.exports = (orgNumber) => {
  if (!orgNumber) {
    throw new Error('Missing required input: organization number')
  }
  const organizationnumber = orgNumber.replace(/\D/g, '')

  return checkdigit.mod11.isValid(organizationnumber)
}
