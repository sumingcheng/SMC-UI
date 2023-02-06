<template>
  <el-row class="main" :gutter="row.gutter">
    <el-col :span="span" v-for="item in items" :key="item.key">
      <div class="label">{{ item.label }}</div>
      <div class="text">{{ item.text }}</div>
    </el-col>
  </el-row>
</template>
<script>
import { nanoid } from 'nanoid';

export default {
  data() {
    return {
      row: {
        gutter: 0,
        span: 8,
      },
      items: [
        { id: nanoid(), label: 'label', text: 'Item 1' },
        { id: nanoid(), label: 'label', text: 'Item 2' },
        { id: nanoid(), label: 'label', text: 'Item 3' },
        { id: nanoid(), label: 'label', text: 'Item 3' },
        // ...
      ]
    };
  },
  computed: {
    span: function () {
      let num = 24 / this.items.length;
      return Number(num);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
}

.label {
  min-height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  background-color: #fafafa;
  border: 1px solid #ebebeb;
}

.text {
  min-height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  border: 1px solid #ebebeb;
  background-color: #bcc9ee;
}
</style>
