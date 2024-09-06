<template>
  <el-card class="form-card">
    Select please
    <el-select v-model="value" placeholder="category" @change="handlerEvent">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </el-card>
</template>

<script>
export default {
  name: "Select",
  data: () => ({
    options: [
      {
        value: "All",
        label: "All",
      },
      {
        value: "INCOME",
        label: "Income",
      },
      {
        value: "OUTCOME",
        label: "Outcome",
      },
    ],
    value: "",
  }),
  props: {
    optionForIncorrectInput: {
      type: String,
      default: "",
    },
  },
  methods: {
    handlerEvent(option) {
      this.$emit("changeOption", option);
    },
    handlerOption() {
      this.value = this.optionForIncorrectInput;
    },
  },
  watch: {
    optionForIncorrectInput: "handlerOption",
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
  margin-top: 20px;
  text-align: left;
}
</style>
