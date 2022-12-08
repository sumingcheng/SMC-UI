<template>
  <div>
    <el-tree class="treeStyle" :show-checkbox="options.isCheckbox" :filter-node-method="filterNode"
        @node-click="treeClick" :props="defaultProps" :data="TreeData" :default-expanded-keys="customOpen"
        :default-expand-all="options.defaultExpansion" ref="tree" :expand-on-click-node="true" node-key="id"
        :indent="options.indent">

    </el-tree>
  </div>
</template>
<script>

export default {
  props: {
    // 是否默认展开一级
    options: {
      type: Object,
      default: () => ({
        // 默认展开一级
        expandLevel1Data: true,
        // 子节点标识
        childNodeID: 'hasChild',
        // 缩进
        indent: 30,
        // 是否可选
        isCheckbox: false,
        // 是否全部展开
        defaultExpansion: false
      })
    },
    // 树形结构数据
    TreeData: {
      type: Array,
      default: () => []
    },
    // 默认节点名
    defaultProps: {
      type: Object,
      default: () => ({
        children: 'children',
        label: 'label'
      })
    }
  },
  data() {
    return {
      // 展开数据
      arr: []
    };
  },
  computed: {
    customOpen() {
      return this.arr.slice(0, 1);
    }
  },
  mounted() {
    if (this.options.expandLevel1Data) {
      this.init();
    }
  },
  methods: {
    init() {
      // 默认展开一级
      this.dfs(this.TreeData);
    },
    dfs(tree) {
      tree.forEach(elem => {
        if (elem[this.options.childNodeID] && elem[this.defaultProps.children] && elem[this.options.childNodeID] === true) {
          this.arr.push(elem.id);
          this.dfs(elem[this.defaultProps.children]);
        }
      });
    },
    treeClick(data) {
      this.$emit('nodeClick', data);
    },
    filterNode(value, data) {
      if (!value) return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.treeStyle {
  width: 300px;
  height: 100%;

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
