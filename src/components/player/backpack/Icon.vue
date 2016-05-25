<template>
  <img class="icon" src="../../../assets/icons.png" v-if="item" v-bind:style="iconStyles">
</template>

<script>
export default {
  props: ['item'],
  computed: {
    iconStyles () {
      return {
        'object-fit': 'none',
        'object-position': this.calcX + 'px ' + this.calcY + 'px',
        width: 34 + 'px',
        height: 34 + 'px'
      }
    },
    calcX () {
      return -(this.item.icon.x * 34) - 1
    },
    calcY () {
      return -(this.item.icon.y * 34) - 1
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  padding: 3px;
  position: absolute;
  width: 40px;
  height: 40px;
}
</style>
