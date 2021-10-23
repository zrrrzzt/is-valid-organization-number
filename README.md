[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# is-valid-organization-number

Validates organization numbers as specified from the [Norvegian entity registry](https://www.brreg.no/om-oss/samfunnsoppdraget-vart/registera-vare/einingsregisteret/organisasjonsnummeret/)

## Installation

```sh
$ npm i is-valid-organization-number
```

## Usage
```JavaScript
const isValidOrganizationNumber = require('is-valid-organization-number')

isValidOrganizationNumber(123456785) // => true

isValidOrganizationNumber(123456786) // => false
```

## License

[MIT](LICENSE)
