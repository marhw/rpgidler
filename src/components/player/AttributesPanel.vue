<template>
  <h2>Attributes</h2>
  <div v-for="attr in attributes">
    <div class="attribute"><span class="attributeName">{{attr.name}}</span><span class="attributeValue">{{attr.value}}</span></div>
  </div>
</template>

<script>
  var Player = require('../../store/Player.js')
  var PLAYER_ATTRIBUTES = require('../../helpers/stats/Constants.js').PLAYER_ATTRIBUTES

  export default {
    computed: {
      attributes () {
        let attrs = []
        Object.keys(Player.attributes).forEach(function (key, index) {
          // console.log(PLAYER_ATTRIBUTES, Player.attributes)
          let name = PLAYER_ATTRIBUTES[key]
          let val = Player.attributes[key]
          attrs.push({name: name, value: val})
        })

        return attrs
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
