import React from 'react';
import "./css/Odor.css";

export default class School extends React.Component {
	constructor() {
		super();
	}
	 change(e){
		 if(e.target.innerHTML.length<10){
		 			let a= document.querySelectorAll(".o-nav div");
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
			<div className="odor"> 
					<div className="o-nav" onClick={this.change.bind(this)}>
						<div style={{backgroundColor:"#B1BEDD",color:"white"}}>柑橘类</div>
						<div>蔬菜、坚果</div>
						<div>花卉</div>
						<div>白色花卉</div>
						<div>草本、绿叶</div>
						<div>树木、苔藓</div>
						<div>树脂</div>
						<div>辛香料</div>
						<div>动物、琥珀</div>
						<div>糖果、美食</div>
						<div>饮料</div>
						<div>人工、新奇</div>
					</div>
					<div className="o-c1">
					<div className="o-c11"><span>柑橘类</span></div>
					</div>
					<p>在香水业中，柑橘类香料指柑橘属植物的果实，或具有类似柑橘气味的香料（如香茅和马鞭草），柑橘类水果通常皮厚味浓，富含天然精油并容易萃取，所以柑橘类水果被独自划分为了一大类。其中一些作为香料很早以前就开始用来制作香水了，跟松香一样历史悠久，而一些则是现代香水业才开始使用的香料，如柚子，葡萄柚，日本柚子，八朔橘等，它们的精油是依靠现代科技才得以提炼的。</p>
					<p>柑橘类精油通常是通过冷压法提炼出的，用来保留其自身的清新气息。苦橙叶是个例外，它的精油是通过对苦橙树的枝叶蒸馏而得的。柑橘类香料能为香水增加一种清新怡人的特质，通常由于其高挥发性，而应用于香水的前调，挑逗我们的嗅觉。佛手柑更是制造经典古龙水不可或缺的香料之一。</p>
					<p>
					柑橘类酸酸甜甜的气味会让人心境开阔，怡然自得，让人联想起清爽干净的空气。柑橘类香料是花香香料，以及东方香调香水中树脂类香料的最佳伴侣。在果香调香水中使用，能够降低香水的甜腻度，并增加酸爽感。</p>
					<div className="o-c2">
					<div>
						<div>
						</div>
						<div>
							<span>香柠檬</span><br/>
							<span>Bergamot</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>柠檬</span><br/>
							<span>Lemon</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>橘子</span><br/>
							<span>Mandarin Orange</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>葡萄柚</span><br/>
							<span>Grapefruit</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>橙子</span><br/>
							<span>Orange</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>橙花油</span><br/>
							<span>Neroli</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>柑橘</span><br/>
							<span>Citruses</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>青柠</span><br/>
							<span>Lime</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>苦橙</span><br/>
							<span>Bitter Orange</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>苦橙叶</span><br/>
							<span>Petitgrain</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>蜜橘</span><br/>
							<span>Tangerine</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>日本柚子</span><br/>
							<span>Yuzu</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>血橙</span><br/>
							<span>Blood Orange</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>柠檬马鞭草</span><br/>
							<span>Lemon Verbena</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>克里曼丁红橘</span><br/>
							<span>Clementine</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>香橼</span><br/>
							<span>Citron</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>金橘</span><br/>
							<span>Kumquat</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>柚子</span><br/>
							<span>Pomelo</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>香茅</span><br/>
							<span>Lemongrass</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>柠檬树</span><br/>
							<span>Lemon tree</span>
						</div>
					</div><div>
						<div>
						</div>
						<div>
							<span>柠檬皮</span><br/>
							<span>Lemon Zest</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>山苍树</span><br/>
							<span>Litsea Cubeba</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>香蜂草</span><br/>
							<span>Lemon Balm</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>圆柚甲烷</span><br/>
							<span>Methyl Pamplemousse</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>泰国青柠</span><br/>
							<span>Kaffir Lime</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>哈克拉橘</span><br/>
							<span>Hatkora lemon</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>八朔橘</span><br/>
							<span>Hassaku</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>橘柚</span><br/>
							<span>Tangelo</span>
						</div>
					</div>
					<div>
						<div>
						</div>
						<div>
							<span>智诺土橘</span><br/>
							<span>Chinotto</span>
						</div>
					</div>
					
					</div>
			</div>
		)
	}
}
