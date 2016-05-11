<template>
  <div>
    <div class="row">
        <managing-panel></managing-panel>
    </div>
    <div class="row">
        <player-frame></player-frame>
    </div>
  </div>
</template>

<script>
import PlayerFrame from './components/player/Frame'
import ManagingPanel from './components/UI/managingPanel'

export default {
  components: {
    PlayerFrame,
    ManagingPanel
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
 .row{
     width: 100%;
     float: left;
     clear: both;
 }
 .row:first-child {
     margin-bottom: 10px;
 }
</style>
