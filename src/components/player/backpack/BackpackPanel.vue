<template>
  <h2>Backpack</h2>
  <div class="backpack_row">
    <template v-for="item in getItemsFromBasic">
      <item-frame :item="item"></item-frame>
    </template>
  </div>
  <div class="backpack_row">
    <template v-for="item in getItemsFromSlot1" class="backpack_row">
      <item-frame :item="item"></item-frame>
    </template>
  </div>
  <div class="backpack_row">
    <template v-for="item in getItemsFromSlot2" class="backpack_row">
      <item-frame :item="item"></item-frame>
    </template>
  </div>
  <div class="backpack_row">
    <template v-for="item in getItemsFromSlot3" class="backpack_row">
      <item-frame :item="item"></item-frame>
    </template>
  </div>
  <div class="backpack_row">
    <template v-for="item in getItemsFromSlot4" class="backpack_row">
      <item-frame :item="item"></item-frame>
    </template>
  </div>
</template>

<script>
  var Backpack = require('../../../store/Player.js').backpack
  import ItemFrame from './Frame'
  export default {
    components: {
      ItemFrame
    },
    computed: {
      getItemsFromBasic () { return this.getBackpackSlotItems('basic') },
      getItemsFromSlot1 () { return this.getBackpackSlotItems('slot1') },
      getItemsFromSlot2 () { return this.getBackpackSlotItems('slot2') },
      getItemsFromSlot3 () { return this.getBackpackSlotItems('slot3') },
      getItemsFromSlot4 () { return this.getBackpackSlotItems('slot4') }
    },
    methods: {
      getBackpackSlotItems (slot) {
        var possible = Backpack[slot].possible_slots
        if (possible === 0) return []

        var items = Backpack[slot].items

        var formatedItems = {}
        for (var i = 1; i <= possible; i++) {
          formatedItems[i] = items[i]
        }
        return formatedItems
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .backpack_row{
    width: 100%;
    clear:both;
    float:left;
  }
</style>
