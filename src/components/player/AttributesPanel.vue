<template>
  <div>
    <div class="attribute"><span class="attributeName">Name:</span><span class="attributeValue">{{attributes.name}}</span></div>
    <div class="attribute"><span class="attributeName">Level:</span><span class="attributeValue">{{attributes.lvl}}</span></div>
    <div class="attribute"><span class="attributeName">Class:</span><span class="attributeValue">{{attributes.class}}</span></div>
    <div class="attribute"><span class="attributeName">Vitality:</span><span class="attributeValue">{{attributes.stats.vit}}</span></div>
    <div class="attribute"><span class="attributeName">Strength:</span><span class="attributeValue">{{attributes.stats.str}}</span></div>
    <div class="attribute"><span class="attributeName">Dexterity:</span><span class="attributeValue">{{attributes.stats.dex}}</span></div>
    <div class="attribute"><span class="attributeName">Intellect:</span><span class="attributeValue">{{attributes.stats.int}}</span></div>
  </div>
</template>

<script>
  export default {
    props: ['attributes']
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
