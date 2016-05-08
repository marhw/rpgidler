<template>
  <div class="playerFrame">
    <div class="attributePanel panel">
      <player-attributes-panel :attributes="playerState.attributes"></player-attributes-panel>
    </div>
    <div class="itemPanel panel">
        <player-items-panel :items="playerState.items"></player-items-panel>
    </div>
  </div>
</template>

<script>
  import PlayerItemsPanel from './ItemsPanel'
  import PlayerAttributesPanel from './AttributesPanel'
  export default {
    props: ['playerState'],
    components: {
      PlayerItemsPanel,
      PlayerAttributesPanel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .attributePanel {
    width: 170px;
  }
  .playerFrame{
    float: left;
  }
  .row {
    float: left;
    clear: both;
  }
  .panel {
    float:left;
    padding: 20px;
    border: 1px solid black;
  }

</style>
