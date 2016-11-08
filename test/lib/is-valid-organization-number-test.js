'use strict'

const tap = require('tap')
const isValidOrganizationNumber = require('../../index')

tap.throws(
  () => {
    isValidOrganizationNumber()
  },
  {message: 'Missing required input: organization number'},
  'throws if input is missing'
)

tap.throws(
  () => {
    isValidOrganizationNumber(123)
  },
  {message: 'Wrong length. Organization number must be 9 digits'},
  'throws if input is too short'
)

tap.throws(
  () => {
    isValidOrganizationNumber(123456789087161)
  },
  {message: 'Wrong length. Organization number must be 9 digits'},
  'throws if input is too long'
)

tap.equal(isValidOrganizationNumber(123456785), true, 'returns true for valid organization number')

tap.equal(isValidOrganizationNumber('1234 56785'), true, 'returns true for valid organization number')

tap.equal(isValidOrganizationNumber('12.345.67-85'), true, 'returns true for valid organization number')

tap.equal(isValidOrganizationNumber(123456786), false, 'returns false for invalid organization number')
