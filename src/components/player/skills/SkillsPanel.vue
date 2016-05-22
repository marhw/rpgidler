<template>
  <h2>SKILLS</h2>
  <div v-for="skill in skills">
    <div class="attribute"><span class="attributeName">{{skill.name}}:</span><span class="attributeValue">{{skill.value}}</span></div>
  </div>
</template>

<script>
  var Player = require('../../../store/Player.js')
  var PLAYER_SKILLS = require('../../../helpers/stats/Constants.js').PLAYER_SKILLS

  export default {
    computed: {
      skills () {
        let skills = []
        for (var attr in Player.skills) {
          let name = PLAYER_SKILLS[attr]
          let val = Player.skills[attr]
          skills.push({name: name, value: val})
        }
        return skills
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .attribute {
    clear: both;
    width: 100%;
    float:left;
    padding: 3px 0;
  }
  .attributeName{
    text-align: left;
    float:left;
  }
  .attributeValue{
    text-align: right;
    float:right;
  }
</style>
