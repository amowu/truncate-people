const defaultOptions = {
  noOneTemplate: '',
  compileOnePeopleTemplate: (a) => `${a}`,
  compileTwoPeopleTemplate: (a, b) => `${a} and ${b}`,
  compileThreePeopleTemplate: (a, b, c) => `${a}, ${b} and ${c}`,
  compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}, ${b} and ${numberOfOthers} other people`,
}

/**
 * Facebook-like truncate function for text by number of people.
 *
 * @param {string[]} list - A list of names.
 * @example
 * // return ''
 * truncatePeople()
 * @example
 * // return 'Ashin'
 * truncatePeople(['Ashin'])
 * @example
 * // return 'Ashin and Monster'
 * truncatePeople(['Ashin', 'Monster'])
 * @example
 * // return 'Ashin, Monster and Stone'
 * truncatePeople(['Ashin', 'Monster', 'Stone'])
 * @example
 * // return 'Ashin, Monster and 2 other people'
 * truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'])
 * @example
 * // return 'Ashin, Monster and 3 other people'
 * truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'])
 *
 * @param {Object} options - The custom truncate options (optional).
 * @param {string} options.noOneTemplate - Text of nobody, default is `''`.
 * @param {function(a: string): string} options.compileOnePeopleTemplate - Default is `(a) => '${a}'`.
 * @param {function(a: string, b: string): string} options.compileTwoPeopleTemplate - Default is `(a, b) => '${a} and ${b}'`.
 * @param {function(a: string, b: string, numberOfOthers: number): string} options.compileManyPeopleTemplate - Default is `(a, b, numberOfOthers) => '${a}, ${b} and ${numberOfOthers} other people'`.
 * @param {function(a: string, b: string, c: string): string} options.compileThreePeopleTemplate - Default is `(a, b, c) => '${a}, ${b} and ${c}'`.
 * @example
 * // return 'Ashin 和 Monster'
 * truncatePeople(['Ashin', 'Monster'], {
 *   compileTwoPeopleTemplate: (a, b) => `${a} 和 ${b}`
 * })
 * @example
 * // return 'Ashin、Monster 和 Stone'
 * truncatePeople(['Ashin', 'Monster', 'Stone'], {
 *   compileThreePeopleTemplate: (a, b, c) => `${a}、${b} 和 ${c}`
 * })
 * @example
 * // return 'Ashin、Monster 和其他 2 人'
 * truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'], {
 *   compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人`
 * })
 * @example
 * // return 'Ashin, Monster and 98 other people'
 * truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], {
 *   compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}, ${b} and ${100 - 2} other people`
 * })
 *
 * @returns {string} Result of the truncated text.
 */
export default function (list = [], options = {}) {
  const { length } = list
  const [a, b, ...others] = list
  const [c, ...more] = others

  const mergedOptions = Object.assign({}, defaultOptions, options)
  const {
    noOneTemplate,
    compileOnePeopleTemplate,
    compileTwoPeopleTemplate,
    compileThreePeopleTemplate,
    compileManyPeopleTemplate,
  } = mergedOptions;

  if (length === 0) return noOneTemplate
  if (length === 1) return compileOnePeopleTemplate(a)
  if (length === 2) return compileTwoPeopleTemplate(a, b)
  if (length === 3) return compileThreePeopleTemplate(a, b, c)
  if (length > 3) return compileManyPeopleTemplate(a, b, others.length)
}
