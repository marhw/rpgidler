import {GenerateBackpackTestItem} from '../items/Generators'
export function GenerateTestBackpack (possibleAmmount) {
  let obj = {possible_slots: possibleAmmount, items: {}}
  for (let i = 1; i <= possibleAmmount; i++) {
    obj.items[i] = GenerateBackpackTestItem()
  }
  return obj
}
