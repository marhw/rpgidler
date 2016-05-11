import {GenerateTestItem} from '../helpers/items/Generators'
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
  slots: {
    2: GenerateTestItem(),
    3: GenerateTestItem(),
    4: GenerateTestItem(),
    5: GenerateTestItem(),
    6: GenerateTestItem(),
    7: GenerateTestItem(),
    8: GenerateTestItem(),
    9: GenerateTestItem(),
    10: GenerateTestItem(),
    11: GenerateTestItem(),
    12: GenerateTestItem(),
    13: GenerateTestItem()
  },
  backpack: {
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
