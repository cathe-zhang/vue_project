<template>
  <div>
    <div v-for="(item,index) in goodsList"
      :key="item.id"
      class="goods-item"
    >
      <div>{{item.name}}</div>
      <div>单价：{{item.price}}</div>
      <button @click="actionBtnClick('sub', index)">-</button>
      <input type="text" 
        v-model="item.number"
        :class="{active: item.number>5}"
      >
      <button @click="actionBtnClick('add', index)">+</button>
      <div>当前商品总价：{{(item.price*item.number).toFixed(2)}}</div>
    </div>
    <div>总商品数量：{{totalNum}}</div>
    <div>所有商品总价：{{totalAmount}}</div>
    <div>firstName:{{fullName.firstName}}</div>
    <div>lastName:{{fullName.lastName}}</div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return {
        grammar: 123,
        reminder: '猪猪侠',
        number: 0,
        goodsList: [],  // 商品列表
        firstName: 'foo',
        lastName: 'bar'
      }
    },
    methods: {
      buttonClick() {
        console.log('button clicked')
        alert(`这是一个${this.reminder}`)
      },
      actionBtnClick(actionType, index){
        let goodsItem = this.goodsList[index]
        if ( actionType == 'add' ) {
          goodsItem.number++
        }
        else if ( actionType == 'sub' ) {
          if ( goodsItem.number - 1 > 0 ) {
            goodsItem.number--
          }
          else {
            alert(`最少买${goodsItem.number}个`)
          }
        }
      },
      async queryGoodsList(){
        let res = await axios.get('/api/goodsList')
        console.log(res)
        // this.goodsList = res.data.data
        res.data.data.forEach((item,index) => {
          item.number = 1
        });
        this.goodsList = res.data.data
      }
    },
    computed: {
      totalNum(){
        return this.goodsList.length
      },
      // 全部商品总价
      totalAmount(){
        let amount = 0
        this.goodsList.forEach((item,index) => {
          amount+= item.number*item.price
        });
        return amount.toFixed(2)
      },
      fullName(){
        return this.firstName + ' ' + this.lastName
      }
    },
    watch: {
      goodsList: {
        handler(n, o){
          console.log(n)
          console.log(o)
        },
        deep: true
      }
    },
    created(){
      this.queryGoodsList()
    }
  }
</script>

<style scoped>
  .goods-item .number {
    display: inline-block;
    width: 100px;
    text-align: center;
  }
  .active {
    text-align: center;
  }
</style>