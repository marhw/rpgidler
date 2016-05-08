export const SLOTS = {
  0: 'Not Equipable',
  1: 'Shoulders',
  2: 'Gloves',
  3: 'Left ring',
  4: 'Left hand',
  5: 'Head',
  6: 'Chest',
  7: 'Pants',
  8: 'Waist',
  9: 'Boots',
  10: 'Amulet',
  11: 'wrist',
  12: 'Right ring',
  13: 'Right hand'
}

export const RARITES = {
  0: 'unobtainable',
  1: 'broken',
  2: 'normal',
  3: 'magic',
  4: 'rare',
  5: 'epic',
  6: 'legendary',
  7: 'set'
}

export const RARITES_COLORS = {
  0: {light: '#e60000', dark: '#ad3232'},
  1: {light: '#e60000', dark: '#ad3232'},
  2: {light: '#ffffff', dark: '#ffffff'},
  3: {light: '#3939e4', dark: '#2424e2'},
  4: {light: 'Gold', dark: 'Gold'},
  5: {light: '#8c526f', dark: '#5c3649'},
  6: {light: '#b58f6a', dark: '#755E48'},
  7: {light: '#8eaf4c', dark: '#5e8e00'}
}

export const ITEM_TYPES = {
  0: {
    type: 'test_item',
    sub_types: { 0: 'sub_type' }
  },
  1: {
    type: 'weapon',
    sub_types: WEAPON_TYPES
  },
  2: {
    type: 'armor',
    sub_types: ARMOR_TYPES
  },
  3: {
    type: 'jevelery',
    sub_types: JEVELERY_TYPES
  }
}

export const WEAPON_TYPES = {
  0: 'weapon_type',
  1: 'bow',
  2: 'crossbow',
  3: 'staff',
  4: 'sword',
  5: 'axe',
  6: 'Two-handed axe',
  7: 'Two-handed sword',
  8: 'wand',
  9: 'orb'
}

export const ARMOR_TYPES = {
  0: 'armor_type',
  1: 'chest',
  2: 'gloves',
  3: 'boots',
  5: 'shoulders',
  6: 'pants',
  7: 'helmet',
  8: 'shield'
}

export const JEVELERY_TYPES = {
  0: 'jevelery_type',
  1: 'ring',
  2: 'amulet'
}

export const NAME_ADJECTIVES = ['angry', 'crezy', 'solid', 'powerfull', 'mythic', 'ruthless', 'frozen', 'burned', 'lucky']
export const NAME_NOUNS = ['demon', 'devil', 'angel', 'sun', 'moon', 'light', 'darkness', 'earth', 'air', 'water', 'fire']
