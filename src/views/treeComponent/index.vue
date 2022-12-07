<template>
  <div class="head-container-drawer">
    <el-tree show-checkbox :data="treeData" :props="defaultProps" :expand-on-click-node="false" ref="tree"
      :indent="30" node-key="id" :default-expanded-keys="defaultExpansion">
      <template v-slot="{data,node}">
        <span :class="data.levelOne===true?'treeNodeIcon':''">{{ data.name }}</span>
      </template>
    </el-tree>
  </div>
</template>

<script>
export default {
  data() {
    return {
      treeData: '',
      defaultProps: '',
      defaultExpansion: '',
    };
  },
  mounted() {

  },
  methods: {
    expandData(tree) {
      let arr = [];
      tree.some((elem) => {
        if (elem.hasChild === true) {
          arr.push(elem.id);
          if (elem.hasChild === true && elem.checked === true) {
            arr.push(elem.id);
            return true;
          }
        }
      });
      this.defaultExpansion = arr.slice(- 2);
    },
  }
};
</script>

<style lang="scss" scoped>
</style>
