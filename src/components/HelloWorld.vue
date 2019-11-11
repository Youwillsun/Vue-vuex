<template>
  <div class="hello">
    <button @click="increase">增加</button>
    <button @click="decrease">减少</button>
  </div>
</template>

<script>
  // 映射vuex中的方法
  import {
    mapMutations,
    mapActions
  } from 'vuex';
  import {
    INCREMENT,
    DECREMENT
  } from '../store/mutation-types'
  export default {
    name: 'HelloWorld',
    data() {
      return {

      }
    },
    methods: {
      // 解构赋值
      // ...mapMutations(['increment','decrement']),
      ...mapMutations([INCREMENT, DECREMENT]),
      ...mapActions(['myIncrease', 'myDecrease' , 'myuserincrease']),
      increase() {
        // 第一种方法
        // this.$store.commit('increment');
        // 第二行种方法 直接调
        // this.increment();
        // 第三种方法，调用在store里的actions中定义的方法【并向actions方法方法中传参】
        this.myIncrease('syw');
        this.myuserincrease();
      },
      decrease() {
        // this.$store.commit('decrement');
        // this.decrement();
        this.myDecrease();
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>