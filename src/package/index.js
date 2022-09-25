import RenCard from './ren-card/index.vue'     // 引入封装好的组件
import RenButton from './ren-button/index.vue' 
const coms=[RenCard, RenButton]    // 将组件统一放到一个数组里面

// 批量注册组件
const install=function (Vue){
    coms.forEach(com=>{
        Vue.component(com.name,com)
    })
}

// 导出
export default install
