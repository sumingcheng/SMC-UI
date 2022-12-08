<template>
  <div>
    <el-tree class="treeStyle" :data="TreeData" :props="defaultProps" :default-expanded-keys="expandArray"
        :filter-node-method="filterNode" @node-click="treeClick" ref="tree" :expand-on-click-node="true"
        node-key="id" :indent="30">
    </el-tree>
  </div>
</template>
<script>

export default {
  props: {
    TreeData: {
      type: Array,
      default: () => []
    },
    defaultProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      expandArray: [],

    };
  },
  mounted() {

  },
  methods: {
    treeClick(data) {
      this.temp.push(data.id);
      this.treeClickData = data;
      let t = this.temp.some((elem, index, arr) => {
        if (elem === arr[index - 1]) {
          this.temp = [];
          this.submitTree();
          return true;
        } else {
          return false;
        }
      });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.unitName.indexOf(value) !== - 1;
    }
  }
};
</script>

<style scoped>

</style>
