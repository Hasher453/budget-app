<template>
  <div id="app">
    <!-- Эмиты : там тут -->
    <!-- Пропсы : там тут -->
    <Form @submitForm="onFormSubmit" />
    <Select
      :optionForIncorrectInput="currentOption"
      @changeOption="onChangeOption"
    />
    <TotalBalance :total="totalBalance" />
    <BudgetList :list="filteredItems" @deleteItem="onDeleteItem" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudjetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import Select from "@/components/Select";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    Select,
  },
  data: () => ({
    currentOption: "",
  }),
  computed: {
    ...mapGetters("transaction", ["transactionList", "sortedTransactionList"]),

    totalBalance() {
      return Object.values(this.transactionList).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
    filteredItems() {
      if (Object.keys(this.sortedTransactionList).length) {
        return this.sortedTransactionList;
      } else {
        return {};
      }
    },
  },
  methods: {
    ...mapActions("transaction", [
      "addTransactionInList",
      "addTransactionInSortedList",
      "deleteTransactions",
      "sortingTransactions",
      "alignmentLists"
    ]),
    onDeleteItem(id) {
      this.deleteTransactions(id);
    },
    onFormSubmit(data) {
      const newOgj = {
        ...data,
        id: String(Math.random()),
      };

      this.addTransactionInList(newOgj);

      if (data.type !== this.currentOption && this.currentOption !== "All") {
        this.onChangeOption(data.type);
        return;
      }
      this.addTransactionInSortedList(newOgj);
    },
    onChangeOption(option) {
      this.currentOption = option;

      if (option === "All") {
        this.alignmentLists()
        return
      }

      this.sortingTransactions(option);
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
