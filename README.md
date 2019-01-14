### vue project log

- v-if  条件语句
- v-for 循环语句
- v-model 双向数据绑定
- @click  事件绑定
- computed 计算属性
- 动态样式 
- mock数据 vue.config.js

> 子组件最好不要更改数据，通知父组件是好的选择


computed和watch的区别
- computed返回一个新的属性，根据data或props中属性的变化而变化
- watch则是监听值的变化，例如在某个值变化之后请求后台接口

watch监听属性变化：
```
watch: {
  // 监听属性变化 
  cartList: {
    // 发生变化时执行的函数
    handler(n, o){
      console.log(n)
      console.log(o)
      localStorage.setItem('cartList', JSON.stringify(n))
    },
    // 深层监听，如对象的属性发生变化也执行该函数
    deep: true
  }
},
```

$set改变属性
```
// 代码中动态添加的对象的属性是无法做到数据响应的，使用$set就可以
// 参数1：要改变的对象
// 参数2：要改变的属性
// 参数3：改变的值
this.$set(this.foo, 'abc', 'aaa')
```

async await


#### 生命周期

|生命周期|时期|
|---|---|
| beforeCreate |组件创建之前|
| created  | 组件创建完毕|
|beforeMount|加入DOM之前的最后时刻|
|mounted|DOM加载完毕，可以进行DOM操作|
|beforeUpdate|组件即将更新|
|updated|虚拟DOM更新完毕，组件更新完毕|
|beforeDestroy|组件销毁之前，如路由变化|
|destroyed|组件已经销毁|


















