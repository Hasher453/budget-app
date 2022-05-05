<template>
  <div class="list-item">
    <i v-if="item.value > 0" :class="topIconActive"></i>
    <i v-else :class="bottomIconActive"></i>
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value" :style= "{ 'color': setColor  }">{{ item.value }}</span>
    <el-button type="danger" size="mini" @click="deleteItem(item.id)">Delete</el-button>
  </div>
</template>

<script>


export default {
  name: 'BudgetListItem',
  components: {
  },
  data() {
    return {
      topIconActive : 'el-icon-top' ,
      bottomIconActive: 'el-icon-bottom',
    }
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    deleteItem(id){
      let decision = confirm("delete item?")
      if(decision){
        this.$emit('deleteItem',id)
      }
    }
  },
  computed: {
    setColor() {
      let color = null
      if(this.item.value > 0){
        color = '#2bde3d'
      }else {
        color = '#F56C6C'
      }
      return color
    }
  }
}
</script>

<style scoped>
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px 15px;
  }
  .budget-comment{
    margin-left: 5px;
  }
  .budget-value {
    font-weight: bold;
    margin-left: auto ;
    margin-right: 20px;
  }
</style>