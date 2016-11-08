[![Build Status](https://travis-ci.org/zrrrzzt/is-valid-organization-number.svg?branch=master)](https://travis-ci.org/zrrrzzt/is-valid-organization-number)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/is-valid-organization-number/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/is-valid-organization-number?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# is-valid-organization-number
Validates organization numbers as specified from the [Norvegian entity registry](https://www.brreg.no/om-oss/samfunnsoppdraget-vart/registera-vare/einingsregisteret/organisasjonsnummeret/)

## Installation
```sh
$ npm i is-valid-organization-number
```

## Usage
```JavaScript
'use strict'

const isValidOrganizationNumber = require('is-valid-organization-number')

isValidOrganizationNumber(123456785) // => true

isValidOrganizationNumber(123456786) // => false
```

## License
[MIT](LICENSE)