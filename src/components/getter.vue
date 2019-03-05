<!--getter---对state中的原始数据进行加工筛选后的数据
	 注意：..mapGetters({})使用了三个点“...”，由于vue-cli生成的依赖包中不能解析此语法，所以需要进行如下配置。<br/>
		  1, 找到文件目录，执行node命令,安装依赖，
		     npm install babel-preset-stage-2 --save-dev               
			 <br/>
		  2, 在.babelrc文件中加一个配置
               ["stage-2"]
-->

<template>
   <div class="count">
   	  <h4 style="text-align: center;">getters使用方法</h4>
   	  <p>
   	  	原始数据
   	  	<ul>
   	  		<li v-for="item in count">{{item}}</li>
   	  	</ul>
   	  
   	  </p>   
   	  
   	  <p>
   	  	最直接的获取方法(从中选取偶数)
   	  	<ul>
   	  		<li v-for="item in count02">{{item}}</li>
   	  	</ul>
   	  
   	  </p>   
   	  <p>
   	  	最直接的获取方法(从中选取奇数)
   	  	<ul>
   	  		<li v-for="item in count03">{{item}}</li>
   	  	</ul>
   	  
   	  </p> 
   	  <!--最直接的方法-->
	  <p>mapgetters方法获取数据：{{numbe01}}</p>                  <!--mapGetters最直接的方式-->
   </div>
</template>

<script>
 import {mapState,mapGetters} from 'vuex'
 export default{
    data(){
	   return {
	       
	   }
	
	},
   
   //最直接的方式
   computed:{
   	   count(){
   	   	   return this.$store.state.arrall;                   //原始数据
   	   },
	   count02(){
	      return this.$store.getters.even;              //没有传入参数的getters(数据筛选)
	   },
	   count03(){
	      return this.$store.getters.odd(1);            //传入参数的getters(数据筛选，利用函数的柯里化)
	      
//	                理解：  首先，我们使用获得了一个由$store.getters.odd 返回的匿名函数
//            其次，我们立即传入了参数 1 执行了这个函数。
//            最后,看起来就像是我们直接传入了参数给$store.getters.odd函数，
//                但是其实getter是只能接受默认参数的 state,或者一个 可选的其他getter，
//                并不支持用户随意传入参数。我们这里用的是函数的柯里化(即函数return函数)
	      
	   },
	   ...mapGetters({                                  //mapGetters方法
	      numbe01:'even'                                 
       })
   
	
	}

 }

</script>

<style scoped>



</style>

