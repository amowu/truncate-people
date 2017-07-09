import test from "tape"
import truncatePeople from "../src"

test("truncatePeople()", (t) => {
  t.plan(1)
  t.equal('', truncatePeople(), "return ''")
})

test("truncatePeople(['Ashin'])", (t) => {
  t.plan(1)
  t.equal('Ashin', truncatePeople(['Ashin']), "return 'Ashin'")
})

test("truncatePeople(['Ashin', 'Monster'])", (t) => {
  t.plan(1)
  t.equal('Ashin and Monster', truncatePeople(['Ashin', 'Monster']), "return 'Ashin and Monster'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone'])", (t) => {
  t.plan(1)
  t.equal('Ashin, Monster and Stone', truncatePeople(['Ashin', 'Monster', 'Stone']), "return 'Ashin, Monster and Stone'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'])", (t) => {
  t.plan(1)
  t.equal('Ashin, Monster and 2 other people', truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa']), "return 'Ashin, Monster and 2 other people'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'])", (t) => {
  t.plan(1)
  t.equal('Ashin, Monster and 3 other people', truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming']), "return 'Ashin, Monster and 3 other people'")
})

test("truncatePeople(['Ashin', 'Monster'], { compileTwoPeopleTemplate: (a, b) => `${a} 和 ${b}` })", (t) => {
  t.plan(1)
  t.equal('Ashin 和 Monster', truncatePeople(['Ashin', 'Monster'], {
    compileTwoPeopleTemplate: (a, b) => `${a} 和 ${b}`,
  }), "return 'Ashin 和 Monster'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone'], { compileThreePeopleTemplate: (a, b, c) => `${a}、${b} 和 ${c}` })", (t) => {
  t.plan(1)
  t.equal('Ashin、Monster 和 Stone', truncatePeople(['Ashin', 'Monster', 'Stone'], {
    compileThreePeopleTemplate: (a, b, c) => `${a}、${b} 和 ${c}`,
  }), "return 'Ashin、Monster 和 Stone'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'], { compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人` })", (t) => {
  t.plan(1)
  t.equal('Ashin、Monster 和其他 2 人', truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa'], {
    compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人`,
  }), "return 'Ashin、Monster 和其他 2 人'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], { compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人` })", (t) => {
  t.plan(1)
  t.equal('Ashin、Monster 和其他 3 人', truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], {
    compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}、${b} 和其他 ${numberOfOthers} 人`,
  }), "return 'Ashin、Monster 和其他 3 人'")
})

test("truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], { compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}, ${b} and ${100 - 2} other people` })", (t) => {
  t.plan(1)
  t.equal('Ashin, Monster and 98 other people', truncatePeople(['Ashin', 'Monster', 'Stone', 'Masa', 'Ming'], {
    compileManyPeopleTemplate: (a, b, numberOfOthers) => `${a}, ${b} and ${100 - 2} other people`,
  }), "return 'Ashin, Monster and 98 other people'")
})
