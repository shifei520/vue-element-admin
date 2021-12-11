// 导出属于员工的路由规则
import Layout from '@/layout'
//  {  path: '', component: '' }
// 每个子模块 其实 都是外层是layout  组件位于layout的二级路由里面
export default {
  path: '/setting',
  name: 'setting',
  component: Layout,
  children: [
    {
      path: '',
      component: () => import('@/views/setting'),
      meta: {
        title: '公司设置'
      }
    }
  ]
}
