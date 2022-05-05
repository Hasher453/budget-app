<template>
  <div class="budget-list-wrap">
      <el-card :header="header">
        <template v-if="!isEmpty">
          <!-- <div class="list-item" v-for="(item,prop) in list" :key="prop">
            <span class="budget-comment">{{ item.comment }}</span>
            <span class="budget-value">{{ item.value }}</span>
            <el-button type="danger" size="mini" @click="deleteItem(item.id)">Delete</el-button>
          </div> -->
          <BudgetListItem :item="item" v-for="(item,prop) in list" :key="prop" @deleteItem="deleteItem"/>
        </template>
        <el-alert v-else type="info" :title="emptyTitle" :closable="false"/>
      </el-card>
  </div>
</template>


<script>
import BudgetListItem from './BudgetListItem.vue'


export default {
  name: 'BudgetList',
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header : 'Budget list',
    emptyTitle: "Empty List",
  }),
  computed: {
    isEmpty(){
      return !Object.keys(this.list).length;
    }
  },
  methods: {
    deleteItem(id){
      this.$emit('deleteItem',id)
    }
  }
};

</script>

<style scoped>
  .budget-list-wrap {
    max-width: 500px;
    margin: auto;
  }

</style>