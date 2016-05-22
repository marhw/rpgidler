<template>
  <div class="backpackFrame">
    <div class="frame" @mouseover="showPopup()" @mouseout="hidePopup()" draggable="true">
        <img class="icon"  v-if="checkIcon" src="../../../assets/icon.png">
        <small class="amount" v-if="checkAmount">{{amount}}</small>
    </div>
    <item-popup v-if="isPopupVisible" :item="item" :positiont="item_position_top" :positionl="item_position_left"><item-popup>
  </div>
</template>

<script>
import ItemPopup from '../../item/Popup'
export default {
  props: ['item'],
  computed: {
    isPopupVisible () { return this.is_hover && this.item },
    checkIcon () { return this.item && this.item.icon },
    checkAmount () { return true }, // this.item && this.item.amount > 0 },
    amount () { return 10 }
  },
  methods: {
    showPopup () { this.is_hover = true },
    hidePopup () { this.is_hover = false }
  },
  components: {
    ItemPopup
  },
  data () {
    return {
      is_hover: false,
      item_position_top: 0,
      item_position_left: 0
    }
  },
  ready: function () {
    if (this.$el.getElementsByClassName) {
      var el = this.$el.getElementsByClassName('frame')[0]
      this.item_position_top = el.offsetTop
      this.item_position_left = el.offsetLeft + 50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amount{
  color: red;
  position: absolute;
  right: 3px;
  bottom: 3px;
  background-color: black;
  padding: 1px;
}

.backpackFrame{
  float: left;
}

.frame {
  margin: 1px;
  width: 40px;
  height:40px;
  border: 1px solid black;
  border-radius: 5px;
  float: left;
  position: relative;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>
