import React from 'react';
import "./css/Fragrance.css";

export default class School extends React.Component {
	constructor() {
		super();
	}
	 change(e){
	 		 if(e.target.innerHTML.length<10){
	 			let a= document.querySelectorAll(".f-nav div");
	 			for(let i = 0;i<a.length;i++){
	 				a[i].style.color="black";
	 				a[i].style.backgroundColor="white";
	 			}
	 			 e.target.style.backgroundColor="#B1BEDD";
	 			 e.target.style.color="white";
	 		 }
	 }
	render() {
		return (
		<div>
			<div className="f-nav" onClick={this.change.bind(this)}>
				<div style={{backgroundColor:"#B1BEDD",color:"white"}}>香调分类</div>
				<div>柑橘调</div>
				<div>绿叶调</div>
				<div>水生调</div>
				<div>馥奇香调</div>
				<div>皮革调</div>
				<div>甘苔调</div>
				<div>木质调</div>
				<div>东方凋</div>
				<div>美食调</div>
				<div>花香调</div>
				<div>果香调</div>
			</div>
			<div className="f-content">
			
			</div>
			<div className="f-text">
				<h1>香调分类详解</h1>
				<p>简单的讲，香调是香水的一种分类规则，根据香水最主要的气味特征以及使用的香料划分为不同的类别。即使你是个刚刚开始用香水的新手，很可能也已经听过“花香调”“果香调”“木质调”这样的说法。</p>
				<p>
					<span>香调分类存在的最主要目的就是，帮助人们在不用亲自闻香水的情况下，就能根据自己的喜好，快速筛选、排除香水。</span>
					这也是专柜导购询问你喜欢哪款香水，并作出推荐的主要依据之一（虽然她们大多并分不清楚）。
				</p>
				<p>
				一个人的嗅觉偏好虽然是会经常改变的，但你最喜欢的那些香水，很可能就属于相同的一两种香调。通过观看香调圆轴图，你可以更容易地理解自己的气味喜好，以及10种香调之间的递进关系。
				</p>
				<p>
				虽然对于用香高手而言，他们会喜欢各种香调的香水，但是知道一款香水的香调仍然是很有用的信息。
				<span>香调能告诉你一款香水最主要的特征，比如一个人如果走的是小清新路线，那么辛辣浓厚的东方调香水很可能并不适合。</span>
				</p>
				<p>
				对于香调家族的具体构成，并没有一个统一的规则。在香水业内，香调分类永远是一个争议不断的话题，就比如花香调下面有几个二级香调，皮革调是否该自成一派，这些问题并没有达成一致。具体一款香水属于哪个香调也包含了很多主观的因素，因为它背后并没有一个精确的算法。</p>
				<p>香水时代网将专业文献，外国流行的分法，以及中国现有的习惯相结合，将香调家族分成了11大类，它们分别是：柑橘调、绿叶调、水生调、馥奇香调、皮革调、甘苔调(西普调)、木质调、东方调、美食调、花香调和果香调。</p>
			</div>
			</div>
		)
	}
}
