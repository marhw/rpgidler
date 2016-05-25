<template>
  <div class="backpackFrame">
    <div class="frame" @mouseover="showPopup()" @mouseout="hidePopup()" draggable="true">
        <item-icon v-if="item" :item="item"></item-icon>
        <small class="amount" v-if="checkAmount"><span class="text_for_ammount">{{amount}}</spam><div class="background_for_ammount"></div></small>
    </div>
    <item-popup v-if="isPopupVisible" :item="item" :positiont="item_position_top" :positionl="item_position_left"><item-popup>
  </div>
</template>

<script>
import ItemPopup from '../../item/Popup'
import ItemIcon from './icon'
export default {
  props: ['item'],
  computed: {
    isPopupVisible () { return this.is_hover && this.item },
    checkIcon () { return this.item.icon },
    checkAmount () { return this.item && this.item.stackable },
    amount () { return this.item.amount }
  },
  methods: {
    showPopup () { this.is_hover = true },
    hidePopup () { this.is_hover = false }
  },
  components: {
    ItemPopup,
    ItemIcon
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
.text_for_ammount{
  opacity: 1;
  z-index: 5;
  color: #ccc;
}
.background_for_ammount{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  float:left;
  box-sizing: border-box;
  /*border-radius: 5px;*/
  border: 1px solid #666 ;
  /*opacity: 0.8;*/
  z-index: -1;
}
.amount{
  box-sizing: border-box;
  position: absolute;
  right: 3px;
  bottom: 3px;
  /*background-color: black;*/
  /*font-weight: bold;*/
  text-shadow: 0 0 5px black;
  padding: 0 2px;
  opacity: 0.8;
  z-index: 2;
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
