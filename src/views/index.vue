<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">树形组件</el-menu-item>
      <el-submenu index="2">
        <template slot="title">分页组件</template>
        <el-menu-item index="2-1">太原封装</el-menu-item>
      </el-submenu>
    </el-menu>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
  mounted() {
    this.getTree();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    taiyuan() {
      this.$router.push({ path: '/taiyuan' });
    },
    getTree() {

    }
  }
};
</script>

<style lang="scss" scoped>
.buttonLayout {
  width: 100%;
  height: 100%;
}
</style>
