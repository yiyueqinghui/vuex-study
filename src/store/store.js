// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {  //一般是通过外部文件引入的，东西会很多
	//定义数据 ---类似data
	num:12 ,   //生成了一个静态的常量
	arrall:[0,1,2,3,4,5]  
	
}

const mutations = {
	//定义方法 ---类似于methods
	add(state,n){     //state是把上面的数据引入进来的
		console.log(n);   //传入进来的值
		if(!n){
		   n={a:1};
		}
		state.num +=n.a;
	},
	dec(state){
		state.num--;
	}
	
}

const getters = {
	//没有传入参数的数据筛选
	even(state){
		var ev = [];
		for(var i in state.arrall){
			if(state.arrall[i]%2==0){
				ev.push(state.arrall[i]);
			}
		}
		return ev;
	},
	//根据传入的参数，选出偶数/奇数（根据n值判断选出奇数，还是偶数）
	odd(state){
		return function(id){
			var od = [];
			for(var i in state.arrall){
				if(state.arrall[i]%2==id){
					od.push(state.arrall[i]);
				}
			}
			return od;
		}
		
	}
	
//	等同于  es6写法
//	odd(state){
//		return (id)=>{
//			var od = [];
//			for(var i in state.arrall){
//				if(state.arrall[i]%2==id){
//					od.push(state.arrall[i]);
//				}
//			}
//			return od;
//		}
//		
//	}
	
}


const actions = {
	addPlus(context){       //context代表了整个的store对象
		context.commit('add',{a:2});
		setTimeout(function(){
			context.commit('dec');
		},3000)
	},
	
	minusPlus({commit}){    //commit 
		commit('dec')
	}
}





export default new Vuex.Store({
	state,      //使用vuex中的数据
	mutations,    //使用vuex中的方法
	getters,     //  对state中的数据进行初步加工，返回的是加工过的数据
    actions       //对vuex中的方法进行了加工，形成新的方法    
	
})