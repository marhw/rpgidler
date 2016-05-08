<template>
  <div class="frame" v-bind:style="frameStyles">
    <div class="attr" id="name">{{name}}</div>
    <div class="attr">{{rarity}}</div>
    <div class="attr">{{type}}</div>
    <div class="attr">{{subType}}</div>
  </div>
</template>

<script>
let ItemsManager = require('../../helpers/items/Items')
export default {
  props: ['item'],
  computed: {
    frameStyles () {
      return {
        color: ItemsManager.getRarityColors(this.item).light,
        'border-color': ItemsManager.getRarityColors(this.item).dark
      }
    },
    rarity () { return ItemsManager.getRarity(this.item) },
    type () { return ItemsManager.getType(this.item) },
    subType () { return ItemsManager.getSubType(this.item) },
    name () { return this.item.name }
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
