# truncate-people

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> Facebook-like truncate text by the number of people

## Install

```sh
npm install --save truncate-people
```

## Usage

```js
import truncatePeople from 'truncate-people'

// return 'Ashin and Monster'
truncatePeople(['Ashin', 'Monster'])

// return 'Ashin, Monster and Stone'
truncatePeople(['Ashin', 'Monster', 'Stone'])

// return 'Ashin, Monster and 2 other people'
truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'])

// return 'Ashin, Monster and 3 other people'
truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'])
```

## Documentation

API:

```js
truncatePeople(list: string[], options: Object): string
```

Params:

| Name | Type | Description |
| --- | --- | --- |
| list | `string[]` | A list of names. |
| options | `Object` | The custom truncate options (optional). |
| options.noOneTemplate | `string` | Text of nobody, default is `''`. |
| options.compileOnePeopleTemplate | `function(a: string): string` | Default is `(a) => '${a}'`. |
| options.compileTwoPeopleTemplate | `function(a: string, b: string): string` | Default is `(a, b) => '${a} and ${b}'`. |
| options.compileThreePeopleTemplate | `function(a: string, b: string, c: string): string` | Default is `(a, b, c) => '${a}, ${b} and ${c}'`. |
| options.compileManyPeopleTemplate | `function(a: string, b: string, numberOfOthers: number): string` | Default is `(a, b, numberOfOthers) => '${a}, ${b} and ${numberOfOthers} other people'`. |

Return:

`string` Result of the truncated text.

Example:

```js
// return 'Ashin 和 Monster'
truncatePeople(['Ashin', 'Monster'], {
  compileTwoPeopleTemplate: (a, b) => `${a} 和 ${b}`
})

// return 'Ashin、Monster 和 Stone'
truncatePeople(['Ashin', 'Monster', 'Stone'], {
  compileThreePeopleTemplate: (a, b, c) => `${a}、${b} 和 ${c}`
})

// return 'Ashin、Monster 和其他 2 人'
truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'], {
  compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人`
})

// return 'Ashin, Monster and 98 other people'
truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], {
  compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}, ${b} and ${100 - 2} other people`
})
```

## License

MIT © [Amo Wu](https://amowu.com)

[npm-url]: https://npmjs.org/package/truncate-people
[npm-image]: https://img.shields.io/npm/v/truncate-people.svg?style=flat-square

[travis-url]: https://travis-ci.org/amowu/truncate-people
[travis-image]: https://img.shields.io/travis/amowu/truncate-people.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/amowu/truncate-people
[coveralls-image]: https://img.shields.io/coveralls/amowu/truncate-people.svg?style=flat-square

[depstat-url]: https://david-dm.org/amowu/truncate-people
[depstat-image]: https://david-dm.org/amowu/truncate-people.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/truncate-people.svg?style=flat-square
