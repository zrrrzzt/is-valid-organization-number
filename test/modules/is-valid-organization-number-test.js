'use strict'

const tap = require('tap')
const isValidOrganizationNumber = require('../../index')

tap.ok(isValidOrganizationNumber, 'is-valid-organization-number loads ok')
