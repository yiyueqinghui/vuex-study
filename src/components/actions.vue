<!--actions---处理方法，
    Action 通过 store.dispatch 方法触发：
    eg:
	   // 以载荷形式分发
		store.dispatch('incrementAsync', {
		  amount: 10
		})
	   
	   // 以对象形式分发
		store.dispatch({
		  type: 'incrementAsync',
		  amount: 10
		})
-->

<template>
   <div class="count">
   	  <h4 style="text-align: center;">acitons使用方法</h4>
      <p>
	     actions 和Mutations的区别是Mutations是同步状态，Actions是异步状态，
         可以调用Mutations中的状态，异步的处理的一个集合.
	  </p>
	  
	  <div class="">
	       <button name="buttonAdd" @click="up">加一个</button>                   <!--函数派发通过 store.dispatch 方法触发-->
		   
		   <button name="buttondec" @click="minusPlus">减一个</button>            <!--mapActions方法触发actions-->
	  
	  </div>
   </div>
</template>

<script>
 import {mapGetters,mapActions} from 'vuex'
 export default{
    data(){
	   return {
	   
	   }
	
	},
	methods:{
	   ...mapActions({
	       minusPlus:'minusPlus',                                   //mapActions方法触发actions
	   }),
	   up(){
	   	 this.$store.dispatch('addPlus');                          //函数派发通过 store.dispatch 方法触发
	   }
	
	
	}

 }

</script>

<style scoped>



</style>

