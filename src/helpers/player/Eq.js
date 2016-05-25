import {GenerateEQTestItem} from '../items/Generators'
export function GenerateTestEq () {
  let obj = {}
  for (let i = 2; i <= 13; i++) {
    obj[i] = GenerateEQTestItem()
  }
  return obj
}
