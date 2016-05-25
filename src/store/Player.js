import {GenerateTestBackpack} from '../helpers/player/Backpack'
import {GenerateTestEq} from '../helpers/player/Eq'
let Player = {
  attributes: {
    1: 'ZENON',
    2: 'Knight',
    3: '1',
    4: 10,
    5: 20,
    6: 10,
    7: 7
  },
  slots: GenerateTestEq(),
  backpack: {
    basic: GenerateTestBackpack(10),
    slot1: GenerateTestBackpack(5),
    slot2: GenerateTestBackpack(5),
    slot3: GenerateTestBackpack(5),
    slot4: GenerateTestBackpack(5)
  },
  skills: {
    1: 10,
    2: 10,
    3: 10,
    4: 10,
    5: 10,
    6: 10
  }
}

module.exports = Player
