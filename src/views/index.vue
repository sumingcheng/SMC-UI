<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">树形组件</el-menu-item>
      <el-submenu index="2">
        <template v-slot="title">分页组件</template>
        <el-menu-item index="2-1">太原封装</el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="content">
      <treeComponent :TreeData="TreeData"></treeComponent>
    </div>
  </div>
</template>

<script>
import treeComponent from '@/views/treeComponent/index.vue';

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      TreeData: [ {
        id: 1,
        label: '一级 1',
        children: [ {
          id: 4,
          label: '二级 1-1',
          children: [ {
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          } ]
        } ]
      },
        {
          id: 2,
          label: '一级 2',
          children: [ {
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          } ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [ {
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [ {
              id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            } ]
          } ]
        },
        {
          id: 4,
          label: '一级 4',
          children: [ {
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [ {
              id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            } ]
          } ]
        },
        {
          id: 5,
          label: '一级 5',
          children: [ {
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2',
            children: [ {
              id: 11,
              label: '三级 3-2-1'
            }, {
              id: 12,
              label: '三级 3-2-2'
            }, {
              id: 13,
              label: '三级 3-2-3'
            } ]
          } ]
        }
      ],
    };
  },
  components: {
    treeComponent
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    taiyuan() {
      this.$router.push({ path: '/taiyuan' });
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
