<!--mutations---触发状态
	            必须要用     commit触发         mutations中的方法
		 
		 你不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地通过 (commit) mutation来改变
		 
		 注意mutation 必须同步执行，
		 Action 就不受约束！我们可以在 action 内部执行异步操作
-->
<template>
   <div class="count">
      <p style="text-align: center;font-weight: 800;">mutations使用方法</p>
	  
	  <div class="">
	       <!--<button name="buttonAdd" @click=add({a:10}) >加10</button>       <!--方法二     利用mapMutations引入sotre中的触发状态-->
	       
		   <button name="buttonAdds" @click="adds">加两个</button>    <!--方法一    常规的直接从store里边触发方法-->
	       
		   <button name="buttondec"  @click="$store.commit('dec')">减一个</button>
	  
	  </div>
   </div>
</template>

<script>
 import {mapMutations} from 'vuex'
 export default{
    data(){
	   return {
	   
	   }
	
	},
//	methods:mapMutations([
//		'add'
//	])
    methods:{
    	adds(){
    		var obj = {a:2}
    		this.$store.commit('add',obj);
    	}
    }
 
 }

</script>

<style scoped>



</style>

