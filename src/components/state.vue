<!--state---访问的方法
    在组件中调用 store 中的状态==》  简单到仅需要在计算属性中返回即可
	触发变化state也仅仅是在组件的 methods 中提交 mutation。
-->

<template>
   <div class="count">
 <!--<p>统计情况如下：{{count}}</p> -->                <!--写法二-->
  <!--<p>统计情况如下：{{$store.state.num}}</p>       方式一  直接读取-->
  <!--<p>统计情况如下：{{num}}</p>                       方式三-->
	 <!-- <p>统计情况如下：{{counts}}</p>                  方式四-->
	    <p style="text-align: center;font-weight: 800;">state使用方法</p>                  <!--最直接的方式-->
        <p>computed获取：{{count01}}</p>
        <p>直接在html中获取：{{$store.state.num}}</p>
   </div>
</template>

<script>
 import {mapState} from 'vuex'
 export default{
    data(){
	   return {
	   
	   }
	
	},
   //最直接的方式
   computed:{
	   count01(){
	      return this.$store.state.num;
	   }
	
	}
	
	
	//方式二，利用mapState
//	computed:mapState({             
//	   count:function(state){
//	       return state.num      
//	   }
//	})
    

//  方式三,不对数据进行计算（加工处理），当数据较多的时候,数组形式
//  computed:mapState([
//  	'num'     ////这里必须state中的数据和此模板中的数据一个名字，也就类似组件定义的简写	
//  ])
    
//  方式四,不对数据进行计算 ，当数据较多的时候,json形式
   // computed:mapState({
 //   	counts:'num'
  //  })
 
 }

</script>

<style scoped>



</style>

