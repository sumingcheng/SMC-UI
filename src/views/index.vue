<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">树形组件</el-menu-item>
      <el-menu-item index="2">
        <el-menu-item index="2-1">分页封装</el-menu-item>
      </el-menu-item>
    </el-menu>
    <div class="exhibition">
      <div>
        <treeComponent :TreeData="treeData" :options="options" :defaultProps="defaultProps" :isCheckbox="true"
            :defaultExpansion="false" @nodeClick="nodeClick">
        </treeComponent>
      </div>
      <div class="content">
        <h1>点击的数据：{{ nodeData.id }}</h1>
        <ul>
          <li>是否永远子节点：{{ nodeData.hasChild === true ? '是' : '否' }}</li>
          <li>标题：{{ nodeData.label }}</li>
          <li>节点id：{{ nodeData.id }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import treeComponent from '@/views/treeComponent/index.vue';
import { tree } from '@/mock/mock';

export default {
  data() {
    return {
      options: {
        expandLevel1Data: true,
        childNodeID: 'hasChild',
        defaultExpansion: false,
        indent: 30,
        isCheckbox: true,
        isIcon: true,
        checkedName: 'checked',
        customIcon: false,
      },
      activeIndex: '1',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      nodeData: {
        hasChild: '',
        label: '',
        id: '',
      },
    };
  },
  components: {
    treeComponent
  },
  computed: {
    treeData() {
      let { array } = tree;
      return array;
    }
  },
  mounted() {
  },
  methods: {
    nodeClick(data) {
      this.nodeData = data;
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  }
};
</script>

<style lang="scss" scoped>
.exhibition {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows:  repeat(4, 25%);

  .content {
    margin: 20px;
  }

  li {
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
  }
}

</style>
