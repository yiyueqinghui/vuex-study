<template>
  <div id="app">
    <h4>vuex简介</h4>
	<p>
	   vuex安装： 
	       node命令   npm install --save vuex
	</p>
	
  <p>
      首先我们假设一个场景：当我们需要一个“常量”，在各个组件之间传播（或者是.vue文件中传播），父组件，子组件，孙组件等5层到6层。当用户打开几个窗口进行数据操作的时候，数据就可能被污染（大中型项目中常见）。这样我们就需要一个控制中心（我叫它“核心前端数据库”）的东西——这也vuex中的store（仓库），它把所有公用的数据和方法，当有“人”要改的时候，就得来我这里修改。
	</p>
	
	<Count02></Count02>
	
	
	<Count></Count>
	
	
	<Count03></Count03>
	
	<Count04></Count04>
	
  </div>
</template>

<script>
import Count from './components/mutations'
import Count02 from './components/state'
import Count03 from './components/getter'
import Count04 from './components/actions'

export default {
  name: 'app',
  components:{
     Count,
	 Count02,
	 Count03,
	 Count04
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
