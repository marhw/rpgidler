<template>
  <div>
    <div class="frame" @mouseover="showPopup" @mouseout="hidePopup" ldraggable="true">
        <item-icon :item="item"></item-icon>
    </div>
    <item-popup v-if="isPopupVisible" :item="item" :positiont="item_position_top" :positionl="item_position_left"><item-popup>
    <!-- <div :is="item-popup" ></div> -->
  </div>
</template>

<script>
import ItemPopup from '../../item/Popup'
import ItemIcon from './icon'
export default {
  props: ['item'],
  computed: {
    isPopupVisible () { return this.is_hover && this.item },
    checkIcon () { return this.item && this.item.icon }
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
    if (this.$el) {
      var el = this.$el.getElementsByClassName('frame')[0]
      this.item_position_top = el.offsetTop
      this.item_position_left = el.offsetLeft + 50
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frame {
  width: 40px;
  height:40px;
  clear:both;
  margin:10px 20px;
  border: 2px solid black;
  border-radius: 5px;
}

.expand-transition {
  transition: all .3s ease;
}
.expand-enter, .expand-leave {
  opacity: 0;
}
.icon {
  width: 40px;
  height: 40px;
}
</style>
