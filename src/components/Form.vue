<template>
  <el-card class="form-card">
    <el-form
      :model="formData"
      ref="addItemForm"
      :rules="rules"
      label-position="left"
    >
      <el-form-item label="Type" prop="type">
        <el-select
          class="type-select"
          v-model="formData.type"
          placeholder="Choose type..."
        >
          <el-option label="Income" value="INCOME" />
          <el-option label="Outcome" value="OUTCOME" />
        </el-select>
      </el-form-item>

      <el-form-item label="Comment" prop="comment">
        <el-input v-model="formData.comment" />
      </el-form-item>

      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" />
      </el-form-item>

      <el-button @click="onSubmit" type="primary" round>Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: '',
      value: 0,
    },

    /*
     1) Объект с правилрами необходимми для валидации формы (работает только с Element io)
     2) В масив пишем правила которым должны соответствовать данные в элементе формы
    */
    rules: {
      type: [
        { required: true, message: 'Please select type', trigger: 'blur' },
      ],
      comment: [
        { required: true, message: 'Please input comment', trigger: 'change' },
      ],
      value: [
        { required: true, message: 'Please input value', trigger: 'change' },
        {
          type: 'number',
          message: 'Value must be a number',
          trigger: 'change',
        },
      ],
    },
  }),
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.type === 'OUTCOME' && this.formData.value > 0) {
            this.formData.value -= this.formData.value * 2;
          }
          this.$emit('submitForm', { ...this.formData });
          this.$refs.addItemForm.resetFields();
        }
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>
