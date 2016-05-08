import Vue from 'vue'
import App from './App'

import {GenerateTestItem} from './helpers/items/Generators'
// import Player from './helpers/Player'

var store = {
  state: {
    playerState: {
      attributes: {
        name: 'ZENON',
        class: 'Knight',
        lvl: '1',
        stats: {
          vit: 10,
          str: 20,
          dex: 10,
          int: 7
        }
      },
      items: {
        1: GenerateTestItem(),
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
      }
    }
  }
}

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App },
  data: {
    privateState: {},
    sharedState: store.state
  }
})
