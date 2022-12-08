<template>
  <div>
    <el-tree class="treeStyle" :show-checkbox="isCheckbox" :filter-node-method="filterNode" @node-click="treeClick"
        :props="defaultProps" :data="TreeData" :default-expanded-keys="expandArray"
        :default-expand-all="defaultExpansion"
        ref="tree" :expand-on-click-node="true" node-key="id" :indent="30">
    </el-tree>
  </div>
</template>
<script>

export default {
  props: {
    isCheckbox: {
      type: Boolean,
      default: false
    },
    // 是否全部展开
    defaultExpansion: {
      type: Boolean,
      default: false
    },
    // 树形结构数据
    TreeData: {
      type: Array,
      default: () => []
    },
    // 默认节点名
    defaultProps: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      arr: []
    };
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.dfs(this.TreeData);
    },
    dfs(tree) {
      tree.forEach(elem => {
        this.arr.push(elem.id);
        if (elem.hasChild && elem.hasChild === true) {
          this.dfs(elem.children);
        }
      });
    },
    treeClick(data) {
      console.log(data);
      // this.temp.push(data.id);
      // this.treeClickData = data;
      // let t = this.temp.some((elem, index, arr) => {
      //   if (elem === arr[index - 1]) {
      //     this.temp = [];
      //     this.submitTree();
      //     return true;
      //   } else {
      //     return false;
      //   }
      // });
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.unitName.indexOf(value) !== - 1;
    }
  }
};
</script>

<style lang="scss" scoped>
.treeStyle {
  width: 300px;

  ::v-deep .el-tree-node__label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  ::v-deep .el-tree-node__content {
    font-size: 16px;
    height: 36px;

    &:hover {
      background-color: #f5f7fa;
      font-weight: bold;
      color: #409eff;
    }

    &:focus {
      background-color: #f5f7fa;
      font-weight: bold;
      color: #409eff;
    }

    &:active {
      background-color: #f5f7fa;
      font-weight: bold;
      color: #409eff;
    }

  }
}
</style>
