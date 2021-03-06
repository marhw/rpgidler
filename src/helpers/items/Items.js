import {RARITES, ITEM_TYPES, RARITES_COLORS} from '../../helpers/items/Constants'
let Items = {}
Items.addAttribute = function (item, attr, val) {
  item.attr[attr] = val
  item.attrs.push('attr')
  return item
}
Items.addPossibleSlot = function (item, slot) {
  item.slots[slot] = 1
  return item
}
Items.setRarity = function (item, rarity) {
  item.rarity = rarity
  return item
}

Items.setIcon = function (item, x, y) {
  item.icon = {x, y}
  return item
}

Items.getRarity = function (item) {
  return RARITES[item.rarity]
}

Items.getRarityColors = function (item) {
  return RARITES_COLORS[item.rarity]
}

Items.getType = function (item) {
  let itemType = ITEM_TYPES[item.type]
  return itemType.type
}
Items.getSubType = function (item) {
  let itemsubType = ITEM_TYPES[item.type].sub_types[item.sub_type]
  return itemsubType
}

Items.setName = function (item, name) {
  item.name = name
  return item
}
Items.setType = function (item, type) {
  item.type = type
  return item
}

Items.setStackable = function (item, stackable) {
  item.stackable = stackable
  return item
}

Items.setAmount = function (item, amount) {
  item.amount = amount
  return item
}

Items.addAmount = function (item, amount) {
  item.amount += amount
  return item
}

Items.createEmptyItem = function () {
  return {
    name: 'No name',
    rarity: 0,
    type: 0,
    sub_type: 0,
    attr: {},
    attrs: [],
    slots: {},
    icon: {x: 0, y: 0},
    stackable: false,
    amount: 1
  }
}

module.exports = Items
