'use strict'

const checkdigit = require('checkdigit')

module.exports = (orgNumber) => {
  if (!orgNumber) {
    throw new Error('Missing required input: organization number')
  }

  const organizationnumber = orgNumber.toString().replace(/\D/g, '')

  if (organizationnumber.length !== 9) {
    throw new Error('Wrong length. Organization number must be 9 digits')
  }

  return checkdigit.mod11.isValid(organizationnumber)
}
