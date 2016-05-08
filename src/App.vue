<template>
  <div>
    <player-frame :player-state="sharedState.playerState"></player-frame>
  </div>
</template>

<script>
import PlayerFrame from './components/player/Frame'

export default {
  props: ['sharedState', 'privateState'],
  components: {
    PlayerFrame
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
