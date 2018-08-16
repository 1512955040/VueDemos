
const REMEBER_TITLE="REMEBER_TITLE"
const JIZHU_ANSWER="JIZHU_ANSWER"
const CHU_SHIHUA="CHU_SHIHUA"
export default{
	//点击下一题
	[REMEBER_TITLE](state){
		state.itemNum+=1
	},
	//记住答案
	[JIZHU_ANSWER](state,id){
		state.answerid.push(id)
		console.log(state.answerid)
	},
	//项目初始化
	[CHU_SHIHUA](state){
		state.answerid=[]
		state.itemNum = 1;
	}
}
