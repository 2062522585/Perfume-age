import React from 'react';
import {StarFilled} from '@ant-design/icons';
import { WeiboOutlined } from '@ant-design/icons';
import { WechatOutlined } from '@ant-design/icons';
import "./css/inf.css";
import axios from 'axios';

export default class Inf extends React.Component {
    constructor(){
		super();
		this.state={
			list:[],
			arr:[]
		}
	}
	componentDidMount() {
		this.getCom();
		this.getPef();
	}
	// 香评达人
	async getCom(){
		let url = "http://localhost:7001/getCom"
		let r = await axios.get(url);
		let list = r.data;
		this.setState({
			list:list
		})
	}
	imgList(){
		return this.state.list.map(item=>{
			return(
				<li>
					<img src={item.avatar} />
					<p>{item.name}</p>
				</li>
			)
		})
	}
	//香水展示
	async getPef(){
		let url = "http://localhost:7001/getPef"
		let r = await axios.get(url);
		let arr = r.data;
		this.setState({
			arr:arr
		})
		console.log(arr[0])
	}
	pef(){
		return this.state.arr.map(item=>{
			return (
				<>
					<img className="twoUlimg" src={item.img} />
					<p>{item.title}</p>
				</>
			)
		})
	}
	//问题处点击显示
	cjwt(cln){
		let pop = document.querySelector(".pop-up");
		let pop1 = document.querySelector(".pop-up1");
		let pop2 = document.querySelector(".pop-up2");
		let pop3 = document.querySelector(".pop-up3");
		if(cln=="pop"){
			pop.style.display="block";
		}else if(cln=="pop1"){
			pop1.style.display="block";
		}else if(cln=="pop2"){
			pop2.style.display="block";
		}else{
			pop3.style.display="block";
		}
	}
	// 问题处点击隐藏
	clearbox(){
		let pop = document.querySelector(".pop-up");
		let pop1 = document.querySelector(".pop-up1");
		let pop2 = document.querySelector(".pop-up2");
		let pop3 = document.querySelector(".pop-up3");
		if(pop.style.display=="block"){
			pop.style.display="none";
		}else if(pop1.style.display=="block"){
			pop1.style.display="none";
		}else if(pop2.style.display=="block"){
			pop2.style.display="none";
		}else{
			pop3.style.display="none";
		}
	}
    render(){
        return(
            <div>
				<div className="infbox">
					<ul className="hultwo ulfirst">
						<li>
							{this.pef()[0]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/19215104.jpg!s?1592476219" /> Kai
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
							</div>
							<div className="twotext">像是各种叶子的杂糅：一片非常真实的薄荷在最中间，周围环绕着各种奇奇怪怪的绿叶。很像韩式料理中经常见到的，装着各种用来解腻的菜叶的大盘子。说有牙膏味的估计是比较看重前调，其实过一会儿味道就更偏向薄荷了。过了半个小时，现在感觉手腕上种了一大株薄荷。</div>
						</li>
						<li>
							{this.pef()[1]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/46593792.jpg!s?1537724672" /> 吴小葱
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
							</div>
							<div className="twotext">先说说第一次使用时的感受。
										那是一支1ml试管，也是我第一次使用Extrait De Parfum浓度，喷在了枕头上，前调感觉有点梧桐影木或者说墨恋的影子。但没过多久，麝猫海狸香+乌木成为主角，然后我就抱着枕头开始一顿猛吸了。。。麝猫+海狸香组合对于我这个撸猫爱好者而言简直是在吸毒，暖暖的动物感十分圆润地修饰了乌木，使得一款香精浓度香变得日常，迷人而又没有侵略感。扩散一米以内，留香爆表，第二天醒来头发也带了香味，此时已超过24小时，头发仍时不时散发出来，让人误以为是体香。。。最后，一直持续了7天，该味道才从我的枕头彻底散去(完全不夸张。。。)
										后来使用多了，有了心得，这款香其实十分日常，只是使用方法和场合的问题罢了。浓香，直接上皮。淡香，睡觉前喷衣物上醒来再穿。清香，喷枕头靠头发留香足矣(侍寝香之一哈哈哈)本人更喜欢上皮或者喷枕头，尾调通过身体的温度散发出来...</div>
						</li>
						<li>
							{this.pef()[2]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/61335157.jpg!s?1424073985" /> 辰雨之境
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
							</div>
							<div className="twotext">用力过度 商业化
									首先你要知道这是爱慕最贵的香水，官网一直把他作为限量发行的，出品时间是2013，实际上是比女香宠爱晚了一阵子，售价比正常的贵50欧元好像是340欧元，但这款真心和女香不是一对，爱慕宠爱女你们可以去看我的香评，写的非常细致感人，在我看来似乎其中似乎包含了爱慕曾经的一切辉煌而美好的旧时光回忆，而这款男香直接鲁莽的本着之后错误的道路一头扎到底了。
									官网买的这么贵肯定是原料出现了问题，估计是某种原料参考进价价格后觉得精纯度高应该产品也提价，但实际上闻到...</div>
						</li>
					</ul>
					<ul className="hultwo ulsecond">
						<li>
							{this.pef()[3]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/35784439.jpg!s?1544385848" /> 旦一Daniel
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
							</div>
							<div className="twotext">……各种网站上的三调表也太扯了吧，这么明显且持久的鸢尾，提都没提啊。一支很好的皮革-鸢尾主题香水，里头黄葵加得到位，质感全靠它。桂花茉莉营造了一个有点俗套，但着实雅致的后调。推荐给找皮革鸢尾香水，找到门蒂托罗萨海王星，结果大失所望的朋友。这一支能满足你的期望。</div>
						</li>
						<li>
							{this.pef()[4]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/66917960.jpg!s?1600210753" /> BlueDarkWaltz
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
							</div>
							<div className="twotext">这款香水 销量已经证明一切 男的喜欢女的喜欢你爹你妈都喜欢 没必要用你装逼的嘴角来喷蔚蓝 蔚蓝做的很棒只是用的人多了显摆挑刺罢了 喷香水也不需要什么长得帅才能喷吧 如果按你这样说女用男香什么鬼 不要拿一款香水来标记人群 不知道你们老板中年油腻男喷蔚蓝你怎么说</div>
						</li>
						<li>
							{this.pef()[5]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/53710300.jpg!s?1545546173" /> TXTT_
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
							</div>
							<div className="twotext">提前总结就是在东南亚旅游逛完一家香料店出来之后身上留下的味道 偏甜的塞满梵文的木质香受不了 对这支并没有真香 以至于剩下的分装我都不想用了 官方介绍是东方辛辣型的中性香  真的很吸引本黑糖姜茶姜糖姜饼干爱好者了【骗局开始】但是 一上手有一种走进了东南亚旅游纪念品店  那种香料香塔店啊 玛瑙玉石店啊 线织品店啊 的味道 很浓的宗教感 老门东有家印度特产店 就是这味【萨瓦迪卡】
									木质的味道也很浓 有些木质家具店或者diy木制品小作坊里也是这个味道 而且一定得是招牌上写着梵文的店【阿弥陀佛】❌穿这支靠在壁炉旁看书根本不可能 ❌更不适合圣诞夜烤姜饼小人啊 【无语无语】
									👀看了介绍里中调偏姜的味道 我表示十分怀疑并且为了求证还去闻了一下生姜 嗯 是没有的 或者说姜的香味是没有的 最多算是保留了姜的冲鼻子的气息🙃🙃🙃本来期待...</div>
						</li>
					</ul>
					<ul className="hultwo ulthree">
						<li>
							{this.pef()[6]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/34487122.jpg!s?1597728062" /> 彭逸昭
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
								<StarFilled style={{color:"#DFDFDF"}} />
							</div>
							<div className="twotext">咖啡仅在刚上皮存在较为明显，瞬间之后就呗打散成粉，撒入白花之中，偶有闪现。晚香玉、栀子花和香草构成了漫无边际的浓郁醇厚的奶脂花香，奶脂的质感有时甚至能浓稠到和树脂一样。当无花果和黑加仑甘甜的果香出现在气味里时，因为果香的质感和之前太过醇厚的气味，那种逼人的奶甜气息终于稍稍平静下来，而之后微微的粉质感不仅加重了奶脂，还让气味变得有点混浊。</div>
						</li>
						<li>
							{this.pef()[7]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/24855409.jpg!s?1581587469" /> 安吉
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
							</div>
							<div className="twotext">可能是我平时打扮不够符合它的气质吧，所以一直没入大瓶正装，它不太可爱也不性感，是个短发、帅气的清爽女孩子，抱着一颗大青柚？不过后调就软了很多。最适合夏天穿，但是无论什么季节我都喜欢在头昏脑涨思绪不清的时候抹一点在腕上，就立刻回到了那个清风徐来的夏天早晨。</div>
						</li>
						<li>
							{this.pef()[8]}
							
							<div className="twoUldiv">
								<img src="https://img.xssdcdn.com/avatar/19692422.jpg!s?1588520020" /> noviaaa-
								<span style={{margin:"0 10px"}}>|</span>
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
								<StarFilled style={{color:"#F3BF51"}} />
							</div>
							<div className="twotext">晕好多椰子除了欧珑的海风青柠和这支！竟然莫名的喜欢哈哈哈？有种度假酒店大堂的气味，好安逸，就像洗完澡躺在酒店舒服的大床上，想着明天玩什么吃什么，无忧无虑，哇，简直幸福！每天睡觉前都要喷一喷～放松身心。而且这支特别适合和别的香水叠喷，和同品牌的慵懒周日超配！</div>
						</li>
					</ul>
				</div>
			
				<div className="jlbox">
					<div className="huati">
						<h2>热门话题</h2>
						<ul>
							<li>大家人生的第一瓶香水都是什么呀？</li>
							<li>大家来交流 SCENT OF TODAY!</li>
							<li>扒一扒让你们闻了头昏的香水</li>
							<li>大家都来安利安利自己的侍寝香咩！╰(*°▽°*)╯</li>
							<li>你喷的哪些香水被人问过？</li>
						</ul>
					</div>
					<div className="wenti">
						<h2>常见问题</h2>
						<ul>
							<li onClick={this.cjwt.bind(this,"pop")}>怎样才是正确的试香方法？</li>
							<li onClick={this.cjwt.bind(this,"pop1")}>该如何保存香水？</li>
							<li onClick={this.cjwt.bind(this,"pop2")}>香水的三调变化是什么意思？</li>
							<li onClick={this.cjwt.bind(this,"pop3")}>EDT, EDP, Parfum都是什么意思 ？</li>
						</ul>
					</div>
					<div className="pop-up">
						<span style={{color:"#444",fontSize:"12px"}}>怎样才是正确的试香方法？</span>
						<span className="clearpop" onClick={this.clearbox.bind(this)}>&Chi;</span>
						<p>因为香水能让我们更有魅力、更加自信。有一项心理学测试曾表明，经常喷香水的人比不喷香水的人有更强的社交能力。如果一个人身上香味宜人的话，他在跟人交流的时候就会更有信心、更加幽默。</p>
					</div>
					<div className="pop-up1">
						<span style={{color:"#444",fontSize:"12px"}}>应该如何保存香水？</span>
						<span className="clearpop" onClick={this.clearbox.bind(this)}>&Chi;</span>
						<p>香水应保存在远离日照或热源的干燥凉爽处。日照是香水贮藏的第一大敌，它能分解掉香水中的香料物质。过热或者过冷也会破坏香水中各种精油的平衡，继而改变香水的味道。不带喷头的沾式香水一旦打开就尽快使用，否则会发生缓慢的挥发。如果有长时间不用的香水，可以将它们放置于保鲜盒中避光保存，这样能大幅度延长它们的寿命。</p>
					</div>
					<div className="pop-up2">
						<span style={{color:"#444",fontSize:"12px"}}>香水的三调变化是什么意思？</span>
						<span className="clearpop" onClick={this.clearbox.bind(this)}>&Chi;</span>
						<p>香水刚刚喷出来，从接触到皮肤开始，历经前调、中调和后调的演变，最终只剩下最后一点点香味的变化过程。</p>
					</div>
					<div className="pop-up3">
					<span style={{color:"#444",fontSize:"12px"}}>EDT, EDP, Parfum都是什么意思 ？</span>
						<span className="clearpop" onClick={this.clearbox.bind(this)}>&Chi;</span>
						<p>通常EDT, EDP，Parfum代表了一款香水的浓度，持久度。或者说有多大比例的酒精或水份加入了纯精油中。Parfum 浓香精是你能买到的浓度最高的香水，有15%-25%的纯精油。</p>
						<p>Eau Fraiche 清香水（通常纯香精小于3%）(Usually 3% or less perfume oil)</p>
						<p>Eau de Cologne 古龙水（纯香精占2-5%） (2 – 5% perfume oil)</p>
						<p>Eau de Toilette 淡香水 (纯香精占4 – 10% ) perfume oil)</p>
						<p>Eau de Parfum 淡香精 (纯香精占8 – 15%) perfume oil)</p>
						<p>Parfum/Extrait 浓香精 (纯香精占15 – 25% )</p>
						<p>甚至有少数情况你会看到香水标注Parfum de Toilette一词，这代表了这款香水的浓度介于EDP与Parfum之间。</p>
					</div>
				</div>

				
				<div className="lastbox">
					<div className="Commentator">
						<h2>香评达人</h2>
						<ul>
							{this.imgList()}
						</ul>
					</div>
					<div className="download">
						<h2>下载香水时代APP</h2>
						<div className="down">
							<div className="downleft">
								<div style={{fontSize:"14px",color:"#444",marginTop:"16px"}}>扫描右侧二维码下载手机APP</div>
								<div style={{marginTop:"15px"}}>
									<WeiboOutlined style={{color:"#D9241B",fontSize:"26px",marginRight:"10px"}} />
									<a href="https://weibo.com/nosetime">香水时代官方微博</a>
								</div>
								<div style={{marginTop:"14px"}}>
									<WechatOutlined style={{color:"#93CE22",fontSize:"26px",marginRight:"10px"}} />
									<span>微信公众号：NoseTime_com</span>
								</div>
							</div>
							<div>
								<img src="https://img.xssdcdn.com/static/nosetime_com2.jpg" style={{width:"122px",height:"122px",alt:"微信公众号 NoseTime_com"}} />
							</div>
						</div>
					</div>
				</div>


			</div>
            
                    
        )
    }
}