<template>
  <div class="frame" v-bind:style="frame_styles(item)">
    <div class="attr" id="name">{{name(item)}}</div>
    <div class="attr">{{rarity(item)}}</div>
    <div class="attr">{{type(item)}}</div>
    <div class="attr">{{sub_type(item)}}</div>
  </div>
</template>

<script>
// import {RARITES_COLORS} from '../../helpers/items/Constants'
let ItemsManager = require('../../helpers/items/Items')
export default {
  props: ['item'],
  methods: {
    name (item) { return item.name },
    rarity (item) { return ItemsManager.getRarity(item) },
    type (item) { return ItemsManager.getType(item) },
    sub_type (item) { return ItemsManager.getSubType(item) },
    frame_styles (item) {
      return {
        color: ItemsManager.getRarityColors(item).light,
        'border-color': ItemsManager.getRarityColors(item).dark
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#name {
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}
.attr{
  float: left;
  clear: both;
}
.frame {
  padding: 20px;
  background: black;
  border: 2px solid gold;
  border-radius: 5px;
  position: absolute;
  opacity: 1;
  width: auto;
  height: auto;
}
</style>
