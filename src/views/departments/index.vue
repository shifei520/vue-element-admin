<template>
  <div class="department">
    <el-card class="tree-card">
      <!-- 用了一个行列布局 -->
      <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
      <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
        <!-- 传入内容 插槽内容 会循环多次 有多少节点 就循环多少次 -->
        <!-- 作用域插槽 slot-scope="obj" 接收传递给插槽的数据   data 每个节点的数据对象-->
        <tree-tools slot-scope="{ data }" :tree-node="data" @delDepts="getDepartments" @addDepts="addDepts" />
      </el-tree>
    </el-card>
    <!-- 放置新增弹层组件  -->
    <add-dept :show-dialog.sync="showDialog" />
  </div>
</template>

<script>
import TreeTools from './components/TreeTools.vue'
import AddDept from './components/add-dept' // 引入新增部门组件
import { getDepartments } from '@/api/departments.js'
import { tranListToTreeData } from '@/utils/index.js'
export default {
  components: {
    TreeTools,
    AddDept
  },
  data() {
    return {
      company: {},
      departs: [{ name: '总裁办', manager: '曹操', children: [{ name: '董事会', manager: '曹丕' }] },
        { name: '行政部', manager: '刘备' },
        { name: '人事部', manager: '孙权' }],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      },
      showDialog: false // 显示窗体
    }
  },
  created() {
    this.getDepartments() // 调用自身的方法
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      this.departs = tranListToTreeData(result.depts, '') // 需要将其转化成树形结构
    },
    addDepts(node) {
      this.showDialog = true // 显示弹层
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    }
  }
}
</script>

<style lang="scss" scoped>
  .tree-card {
    padding: 30px  140px;
    font-size:14px;
  }
</style>
