<template>
  <div>

    <!-- 条件语句 页面标题-->
    <div class="v-if" v-if="showText">
      {{text}}
    </div>

    <!-- 循环语句 商品列表 -->
    <ul>
      <!-- item上写遍历 -->
      <li v-for="item in goodsList"
        :key="item.id"
      >
        <div>{{item.name}}</div>
        <div>价格：￥{{item.price}}</div>
        <!-- 事件绑定 -->
        <button @click="addToCart(item.id)">加入购物车</button>
      </li>
    </ul>

    <!-- 购物车列表 -->
    <table>
      <tr>
        <th>选择</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>总价</th>
      </tr>
      <tr v-for="(item,index) in cartList"
        :key="item.id"
        :class="{active: item.checked}"
      >
        <td>
          <input type="checkbox"
            v-model="item.checked"
          >
        </td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <span class="sub"
            @click="subClick(index)"
          >-</span>
          <span class="text">{{item.count}}</span>
          <span class="add"
            @click="addClick(index)"
          >+</span>
        </td>
        <td>{{parseFloat(item.count*item.price).toFixed(2)}}</td>
      </tr>
      <tr>
        <td colspan="2">
          选中数量：{{selectedCount}}/{{totalCount}}
        </td>
        <td colspan="2">
          总价：{{totalAmount}}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

  import axios from 'axios'
  export default {

    // 属性
    data(){
      return {
        text: '购物车',
        showText: false,
        goodsList: [],  // 商品列表
        cartList: JSON.parse(localStorage.getItem('cartList')),  // 购物车列表
      }
    },

    // 事件
    methods: {

      // 商品加入购物车
      addToCart(id){
        const goodsItem = this.goodsList.find(item=>item.id==id)
        let existedItem = this.cartList.find(item=>item.id==id)

        // 购物车数组中已存在则数量加1
        if ( existedItem ) {
          existedItem.count++
        }
        // 否则追加新item
        else {
          this.cartList.push({
            ...goodsItem,
            count: 1,
            checked: false
          })
        }
      },

      // 购物车商品数量加
      subClick(index){
        if ( this.cartList[index].count > 1 ) {
          this.cartList[index].count--
        }
        else {
          if ( window.confirm('确认要删除此商品吗？') ) {
            this.cartList.splice(index, 1)
          }
        }
      },

      // 购物车商品数量加
      addClick(index){
        this.cartList[index].count+=1
      },

      // 获取商品列表
      async queryGoodsList(){
        let res = await axios.get('/api/goods')
        this.goodsList = res.data.data
      }
    },

    // 计算属性
    computed: {

      // 选中的购物车商品数量
      selectedCount(){
        let num = 0
        this.cartList.forEach(item=>{
          if ( item.checked ) {
            num+=1
          }
        })
        console.log(num)
        return num
      },

      // 购物车商品总数量
      totalCount(){
        return this.cartList.length
      },

      // 购物车选中的商品总价
      totalAmount(){
        let num = 0
        this.cartList.forEach(item=>{
          if ( item.checked ) {
            num+= item.price*item.count
          }
        })
        return num.toFixed(2)
      } 
    },

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

    // 组件创建完毕
    async created(){
      setTimeout(() => {
        this.showText = true
        console.log(this.showText)
      }, 2000);

      // 获取商品列表
      this.queryGoodsList()
    }
  }
</script>

<style scoped>
  .sub, .add {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #222;
  }
  .active {
    color: red;
  }
</style>