<template>
	<div id="score">
		<div class="yourspic">
			<span style="color: red;" class="yourpic1">{{scoesa}}</span>
			<p  class="yourpic2">{{msg}}</p>
		</div>
		<div class="yourspics" @click="pinuctsd"></div>
		<div class="yourpic3" v-if="picc" @click="pinuctsd">
			<span class="yourpic4"></span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"score",
		data(){
			return{
				picc:false,
				scoesa:0,
				msg:null,
				rightAnswer: [2, 7, 12, 13, 18], //正确答案
				scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
			}
		},
		created(){
			this.scoing()
			this.msging()
		},
		methods:{
			scoing(){
				this.$store.state.answerid.forEach((rights,index)=>{
					if(rights==this.rightAnswer[index]){
						console.log(rights)
						this.scoesa+=20
					}
				})
			},
			msging(){
				if(this.scoesa<=20){
					this.msg=this.scoreTipsArr[0]
				}else if(this.scoesa>20 && this.scoesa<=40){
					this.msg=this.scoreTipsArr[1]
				}else if(this.scoesa>40 && this.scoesa<=60){
					this.msg=this.scoreTipsArr[2]
				}else if(this.scoesa>60 && this.scoesa<=80){
					this.msg=this.scoreTipsArr[3]
				}else{
					this.msg=this.scoreTipsArr[4]
				}
			},
			pinuctsd(){
				this.picc=!this.picc
			}
		}
	}
</script>

<style scoped>
	#score{
		background-image:url(./../assets/4-1.jpg);
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		position: absolute;
	}
	.yourspic{
		width: 9.7rem;
        height: 9.1rem;
        background: url(./../assets/4-2.png) no-repeat;
        background-size: 100% 100%;
        position: absolute;
       	left: 50%;
        margin-left: -4.55rem;
        top: 3rem;
	}
	.yourpic1{
		position: absolute;
		font-size: 2rem;
		top: 3.5rem;
		/*left: 50%;
		margin-left: -1rem;*/
	}
	.yourpic2{
		font-size: 0.95rem;
		color: black;
		position: absolute;
		top: 6rem;
		left: 10%;
	}
	.yourspics{
		position: absolute;
		background: url(./../assets/4-3.png);
		background-size:100% 100%;
		width: 8.5rem;
		height: 3.2rem;
		left: 50%;
		margin-left: -4.25rem;
		top: 16rem;
	}
	.yourpic3{
		position: absolute;
		background: url(./../assets/5-1.png);
		background-repeat:no-repeat;
		width: 100%;
		height: 100%;
		opacity: 0.5;
	}
	.yourpic4{
		position: absolute;
		background: url(./../assets/5-2.png);
		background-repeat: no-repeat;
		width: 16rem;
		height: 16rem;
		background-size: 100% 100%;
		left: 50%;
		margin-left: -8rem;
	}
	
</style>