<template>
  <div>
    <div class="frame" @mouseover="show_popup()" @mouseout="hide_popup()">
        <img class="icon" v-if="checkIcon(item)" src="../../assets/icon.png">
    </div>
    <!-- <div class="frame" @click="toogle_popup()"></div> -->
    <item-popup v-if="is_popup_visible" :item="item"><item-popup>
    <!-- <div :is="item-popup" ></div> -->
  </div>
</template>

<script>
import ItemPopup from './Popup'
export default {
  props: ['item'],
  methods: {
    show_popup () { this.is_popup_visible = true },
    hide_popup () { this.is_popup_visible = false },
    toogle_popup () { this.is_popup_visible = true },
    checkIcon (item) { return item.icon }
  },
  components: {
    ItemPopup
  },
  data () {
    return {
      is_popup_visible: false
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
