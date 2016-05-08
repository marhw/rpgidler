import {JEVELERY_TYPES, ARMOR_TYPES, WEAPON_TYPES, NAME_ADJECTIVES, NAME_NOUNS} from './Constants'
let NameCreator = {}

NameCreator.createNameForWeapon = function (type) {
  let name = []
  name.push(getRandomAdjective())
  name.push(WEAPON_TYPES[type])
  name.push('of')
  name.push(getRandomNoun())
  return name.join(' ')
}

NameCreator.createNameForArmor = function (type) {
  let name = []
  name.push(getRandomAdjective())
  name.push(ARMOR_TYPES[type])
  name.push('of')
  name.push(getRandomNoun())
  return name.join(' ')
}

NameCreator.createNameForJevelery = function (type) {
  let name = []
  name.push(getRandomAdjective())
  name.push(JEVELERY_TYPES[type])
  name.push('of')
  name.push(getRandomNoun())
  return name.join(' ')
}

module.exports = NameCreator

function getRandomFromArray (arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

function getRandomAdjective () {
  return getRandomFromArray(NAME_ADJECTIVES)
}

function getRandomNoun () {
  return getRandomFromArray(NAME_NOUNS)
}
