<template>
	<div id="index">
		<div class="BacImage">
			<span class="hello" v-if="fatherComponent=='home'">第一周</span>
			<span class="hello" v-if="fatherComponent=='list'">题目{{itemNum}}</span>
		</div>
		<span class="welcome" v-if="fatherComponent=='home'"></span>
		<span class="welcome1" v-if="fatherComponent=='list'"></span>
		<router-link class="actionsNow" :to="{path:'/list'}" v-if="fatherComponent == 'home'"></router-link>
		<div class="pagelist" v-if="fatherComponent == 'list'">
			<header class="item_title" >{{itemDetail[itemNum-1].topic_name}}</header>
			<ul>
				<li v-for="(item_details,index) in itemDetail[itemNum-1].topic_answer" class="ulli6" @click="chose_num(index,item_details.topic_answer_id)">
					<span class="quaner"  style="color: white;" :class="{'translatges':delates==index}">{{chose_one(index)}}</span>
					<span class="quaners" style="color: white;">{{item_details.answer_name}}</span>
				</li>
			</ul>
			<div class="nextTitle" @click="jiaId" v-if="itemNum<itemDetail.length"></div>
			<div class="Tijiao" v-else @click="TijiaoFs"></div>
		</div>
	</div>
</template>
<script>
	import { mapState,mapGetters,mapActions } from 'vuex';
	export default{
		name:"index",
		data(){
			return{
				delates:null,//点击的哪个变化
				pageIds:null,//获取选中答案的ID
			}
		},
		props:["fatherComponent"],
		computed:{
			...mapState([
				"itemNum",
				"itemDetail"
			])
		},
		created(){
			if(this.fatherComponent=='home'){
				this.lalala()	
			}
		},
		methods:{
			...mapActions([
				"addNum",
				"lalala"
			]),
			//返回对应的ABCD
			chose_one(type){
				switch(type){
					case 0 : return "A";
					case 1 : return "B";
					case 2 : return "C";
					case 3 : return "D"
				}
			},
			//点击选择事件
			chose_num(index,id){
				this.delates=index;
				this.pageIds=id;
			},
			//点击下一题
			jiaId(){
				if(this.delates!==null){
					this.delates=null;
//					this.$store.commit("REMEBER_TITLE")
//					this.$store.commit("JIZHU_ANSWER",this.pageIds)
					this.addNum(this.pageIds)
				}else{
					alert("请输入正确答案")
				}
			},
			//点击提交
			TijiaoFs(){
				if(this.delates!=null){
					this.delates=null;
					this.$store.commit("JIZHU_ANSWER",this.pageIds)
					this.$router.push('score')
				}else{
					alert("输入正确的答案")
				}
			}
		}
	}
</script>
<style>
	#index{
		background: url(../assets/1-1.jpg) no-repeat;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
	}
	ul li{
		list-style: none;
	}
	.welcome,.welcome1{
		background: url(../assets/1-2.png) no-repeat;
		width:18rem;
		height:11rem;
		position: absolute;
		left: 2rem;
		background-size: 18rem 11rem;
		top: 7.5rem;	
	}
	.welcome1{
		background: url(../assets/2-1.png) no-repeat;
		background-size: 18rem 11rem;
	}
	.actionsNow{
		background: url(../assets/1-4.png) no-repeat;
		width: 9rem;
		height: 3rem;
		position: absolute;
		background-size: 9rem 3rem;
		left: 50%;
		margin-left: -4.5rem;
		top: 24rem;
	}
	.item_title{
		font-size: 0.65rem;
		color: #fff;
		line-height: 0.7rem;
	}
	.pagelist{
		position: absolute;
    	width: 12rem;
    	height: 6rem;
    	top: 9rem;
    	left: 4.8rem;
	}
	.ulli6{
		width: 10rem;
		height: 1.5rem;
		line-height: 1.5rem;
	}
	.quaner{
		font-size: .6rem;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		border: 1px solid red;
		display: inline-block;
		margin-right: 0.3rem;
		vertical-align: middle;
		line-height: 1rem;
	}
	.quaners{
		font-size: 0.8rem;
		display: inline-block;
		width: 6rem;
		text-align: left;
		vertical-align: middle;
	}
	.translatges{
		background: yellow;
	}
	.nextTitle{
		background: url(../assets/2-2.png);
		background-repeat: no-repeat;
		width: 9rem;
		height: 3rem;
		position: absolute;
		background-size: 9rem 3rem;
		left: 50%;
		margin-left: -4.5rem;
		top: 16rem;
	}
	.Tijiao{
		background: url(../assets/3-1.png);
		background-repeat: no-repeat;
		width: 9rem;
		height: 3rem;
		position: absolute;
		background-size: 9rem 3rem;
		left: 50%;
		margin-left: -4.5rem;
		top: 16rem;
	}
</style>