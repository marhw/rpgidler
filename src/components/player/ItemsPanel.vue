<template>
  <div>
    <div class="column columnLeft">
      <item-frame :item="items[1]"></item-frame>
      <item-frame :item="items[2]"></item-frame>
      <item-frame :item="items[3]"></item-frame>
    </div>
    <div class="column columnCenter">
      <item-frame :item="items[4]"></item-frame>
      <item-frame :item="items[5]"></item-frame>
      <item-frame :item="items[6]"></item-frame>
      <item-frame :item="items[7]"></item-frame>
    </div>
    <div class="column columnRight">
      <item-frame :item="items[8]"></item-frame>
      <item-frame :item="items[9]"></item-frame>
      <item-frame :item="items[10]"></item-frame>
    </div>
  </div>
</template>

<script>
  import ItemFrame from '../item/Frame'
  export default {
    props: ['items'],
    components: {
      ItemFrame
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
