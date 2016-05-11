<template>
  <div>
    <div class="column columnLeft">
      <item-frame :item="getSlot(1)"></item-frame>
      <item-frame :item="getSlot(2)"></item-frame>
      <item-frame :item="getSlot(3)"></item-frame>
    </div>
    <div class="column columnCenter">
      <item-frame :item="getSlot(4)"></item-frame>
      <item-frame :item="getSlot(5)"></item-frame>
      <item-frame :item="getSlot(6)"></item-frame>
      <item-frame :item="getSlot(7)"></item-frame>
    </div>
    <div class="column columnRight">
      <item-frame :item="getSlot(8)"></item-frame>
      <item-frame :item="getSlot(9)"></item-frame>
      <item-frame :item="getSlot(10)"></item-frame>
    </div>
  </div>
</template>

<script>
  var Player = require('../../store/Player.js')
  import ItemFrame from '../item/Frame'
  export default {
    props: ['items'],
    components: {
      ItemFrame
    },
    methods: {
      getSlot (x) {
        return Player.slots[x]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column {
    float:left;
  }
  .columnLeft > :first-child {
    margin-top: 30px;
  }
  .columnRight > :first-child {
    margin-top: 30px;
  }
</style>
