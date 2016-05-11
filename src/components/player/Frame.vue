<template>
  <div class="playerFrame">
    <div class="attributePanel panel">
      <player-attributes-panel></player-attributes-panel>
    </div>
    <div class="skillPanel panel">
      <player-skills-panel></player-skills-panel>
    </div>
    <div class="itemPanel panel">
        <player-items-panel></player-items-panel>
    </div>
  </div>
</template>

<script>
  import PlayerItemsPanel from './ItemsPanel'
  import PlayerAttributesPanel from './AttributesPanel'
  import PlayerSkillsPanel from './SkillsPanel'

  export default {
    components: {
      PlayerItemsPanel,
      PlayerAttributesPanel,
      PlayerSkillsPanel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .attributePanel {
    width: 170px;
  }
  .skillPanel {
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
