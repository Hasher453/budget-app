<template>
  <div id="app">
    <!-- Эмиты : там тут -->
    <!-- Пропсы : там тут -->
    <Form @submitForm="onFormSubmit" />
    <Select :optionForIncorrectInput="currentOption" @changeOption="onChangeOption" />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="filteredItems" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudjetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import Select from "@/components/Select";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Select,
  },
  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "outcome comment",
        id: 2,
      },
    },
    sortedList: {},
    currentOption: "",
  }),
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    filteredItems() {
      if (Object.keys(this.sortedList).length) {
        return this.sortedList;
      } else {
        return {};
      }
    },
  },
  methods: {
    onDeleteItem(id) {
      //Метод для удаления свойства из объекта, при нем срабатывает реактивность,он удалит и вызовет перерендеринг
      this.$delete(this.list, id);
      this.$delete(this.sortedList, id);
    },
    onFormSubmit(data) {
      const newOgj = {
        ...data,
        id: String(Math.random()),
      };
      //Устанавливаем свойство в объект для реактивности
      this.$set(this.list, newOgj.id, newOgj);

      if (data.type !== this.currentOption && this.currentOption !== 'All') {
        this.onChangeOption(data.type);
        return;
      }
      this.$set(this.sortedList, newOgj.id, newOgj);
      // this.onChangeOption(data.type)
    },
    onChangeOption(option) {
      // this.sortedList = {};
      this.currentOption = option;
      if (option === "All") {
        return (this.sortedList = this.list);
      }
      this.sortedList = Object.values(this.list).reduce((acc, item) => {
        if (item.type === option) {
          // this.sortedList.push(item);
          acc[item.id] = item;
        }
        return acc;
      }, {});
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
