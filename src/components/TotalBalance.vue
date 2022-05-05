<template>
  <div :style= "{ 'color': setColor  }" class="tottal-value">Balance: {{ total }}</div>
</template>

<script>

export default {
  name: 'TotalBalance',
  data: () => ({
  }),
  props: {
    total: {
      type: Number,
      default: 0,
    }
  },
  computed:{
    setColor() {
      let color = null
      if(this.total > 0){
        color = '#409EFF'
      }else if(this.total === 0) {
        color = 'black'
      }else {
        color = '#F56C6C'
      }
      return color
    }
  }
}
</script>

<style scoped>
  .tottal-value{
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>