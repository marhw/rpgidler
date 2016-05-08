<template>
  <div>
    <div class="frame" @mouseover="showPopup()" @mouseout="hidePopup()">
        <img class="icon" v-if="checkIcon" src="../../assets/icon.png">
    </div>
    <!-- <div class="frame" @click="toogle_popup()"></div> -->
    <item-popup v-if="isPopupVisible" :item="item"><item-popup>
    <!-- <div :is="item-popup" ></div> -->
  </div>
</template>

<script>
import ItemPopup from './Popup'
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
    ItemPopup
  },
  data () {
    return {
      is_hover: false
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
