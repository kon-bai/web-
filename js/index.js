//登录 和 注册 按钮
const sydl = document.querySelector('.sm .top .left span:nth-child(1)');
const syzc = document.querySelector('.sm .top .left span:nth-child(2)');
//登录 事件
sydl.addEventListener('click', sydlhs)
// console.log(sydl.innerHTML);
let bdhsj = { zh: '登  录', mima: '注  册' }
//获取本地存储
const sybdcc = JSON.parse(localStorage.getItem('用户')) || bdhsj
// console.log(sybdcc);

// if (sybdcc.zh == null) {
//     sydl.innerHTML = '注  册'
// } else {
sydl.innerHTML = sybdcc.zh
syzc.innerHTML = sybdcc.mima
// }


function sydlhs() {
    if (sydl.innerHTML === '登  录') return location.href = './src/登录.html'
}
//注册 事件
syzc.addEventListener('click', syzchs)
function syzchs() {
    if (syzc.innerHTML === '注  册') return location.href = './src/注册.html'
    if (syzc.innerHTML === '退  出') {
        sydl.innerHTML = '登  录'
        syzc.innerHTML = '注  册'
    }
}


//渲染人物数据
let sj = [
    {
        usrc: 'ltl.webp',
        alt: '冈部伦太郎',
        mz: '冈部伦太郎（おかべ りんたろう）',
        NO: 'LabMem No.001',
        py: '配音：宫野真守',
        wb: '游戏主人公，东京电机大学一年级，“未来道具研究所”研究员No.001。虽然清瘦的外表看上去很帅，但交谈时会突然掏出手机，然后开始莫名其妙的自言自语，并在结束的时候附上“这是Steins;Gate的选择”和不明所以的“エル・プサイ・コングルゥ”的句尾，不禁使人退避三舍，是个严重厨二病患者。自称是狂乱的疯狂科学家，而为了将这个自我设定扮演好，平时的行动也总是装出一副恶役般的造型。以改革世界的支配构造为最终目标进行活动。不过实际上做的事是在“未来道具研究所”里天天制作奇怪的发明。他的“信念”过于强烈，又不会看别人脸色做事，这使得他身边的朋友非常少。'
    },
    {
        usrc: 'kls.webp',
        alt: '牧濑红莉栖',
        mz: '牧濑红莉栖（まきせ くりす）',
        NO: 'LabMem No.004',
        py: '配音：今井麻美',
        wb: '维克多·孔多利亚（原型为哥伦比亚大学）大学脑科学研究所的研究员，18 岁即从大学毕业，因为美国的跳级制度，所以实际年龄跟高三学生相当，在美国著名的学术杂志上刊登论文而受到瞩目。或许是因为饱尝周围人们充满羡慕与嫉妒的目光，面对他人时从来不会露出半点破绽。然而作为研究者，其本质还是个难以掩藏旺盛的好奇心、对感兴趣的事物一头扎进去的女孩。其言行让人感觉比起一般世间的常识更加注重研究的成果，而因此也被冈伦评为“相当程度的科学狂人”，然而本人却并不这么认为。外表是个美人，纤细的双腿充满魅力。平时穿着按照自己的风格所改造的高中制服，虽然严格来说已经不是高中生了，不过常用“因为可爱”这样的理由进行辩解。是个典型的傲娇，而且是一旦关系变好后就用情很深的类型。平时经常引用动画《10之使魔》女主角“露易丝”的台词，但这似乎只是受到大型论坛2ch的影响而在不知出处的情况下使用。想做一名匿名的2cher，不过却反而暴露出来。因为天才的个性使然，所以对冈伦的厨二病发言毫不留情。'
    },
    {
        usrc: 'zyl.webp',
        alt: '椎名真由理',
        mz: '椎名真由理（しいな まゆり）',
        NO: 'LabMem No.002',
        py: '配音：花泽香菜',
        wb: '私立花浅葱大学附属学园二年级。保持着不紧不慢的行动和语调，是个一直挂着笑容的天然系角色。相当能吃，即使吃很多还是很瘦。虽然住在池袋，不过每天都去与学校和打工地点很近的未来道具研究所。对冈伦的厨二病发言不装傻也不吐槽而是直接点头接受（直接忽视的次数也很多）。虽然是未来道具研究所的成员，不过对于发明没有兴趣，所以转而制作 Cosplay 服。但实际上做的只有女性服装，而且自己并不穿，最近正努力地在使漆原（伪娘）穿上自己制作的衣服。受到景仰的奶奶的影响，喜欢抬头仰望星空，经常可以看到她面向夜空伸出手。'
    },
    {
        usrc: 'tz.webp',
        alt: '桥田至',
        mz: '桥田至（はしだ いたる）',
        NO: 'LabMem No.003',
        py: '配音：关智一',
        wb: '东京电机大学一年级。冈伦高中时代的友人，两人也在同一所大学上学。因为出色的编程和黑客技术，被冈伦称为“右手”的未来道具研究所的宝贵战力。御宅族，常常使用2ch用语，喜欢谈下半身的话题，是个从2次元到3次元甚至到无机物都能萌上的家伙。口癖“常考”。最近喜欢的是动画《10之使魔》的露易丝，在女仆咖啡厅“Mayqueen+Nyan 2”打工的菲利斯等。'
    },
    {
        usrc: 'my.webp',
        alt: '桐生萌郁',
        mz: '桐生萌郁（きりゅう もえか）',
        NO: 'LabMem No.005',
        py: '配音：后藤沙绪里',
        wb: '为了都市传说的取材而寻找幻之PC“IBN5100”的时候，在秋叶原邂逅了冈伦。她沉默寡言到了与别人的交流全部都要通过手机短信的地步（就算对方在眼前）。虽然会让人觉得她的性格十分冷淡，但其实只是因为她不擅长与别人交谈罢了。而且这个不擅长当面交谈的问题即使通过电话也改不了，所以与其说是手机依赖症，不如说是手机短信依赖症更为恰当。让人大跌眼镜的是，她透过短信传达过来的感情意外的高昂开朗，与本人的形象有着鲜明的反差。每当有新机种上市，她都会立刻进行更换。另外，她打字的速度是连眼睛都跟不上的杰出的特技，亲眼目睹过的冈伦将其称之为“闪光的指压师”。'
    },
    {
        usrc: 'lhz.webp',
        alt: '漆原琉华',
        mz: '漆原琉华（うるしばら るか）',
        NO: 'LabMem No.006',
        py: '配音：小林优',
        wb: '私立花浅葱大学附属学园二年级。秋叶原的柳林神社当家的儿子。在家里的神社时穿着巫女服。清秀端庄，一副正统美少女的性格。不过，是男性。外表上怎么看都是美少女，不过，是男性。不喜欢引人注目，也没有什么自己的主张，一遇到问题就会脸红。做事认真缺乏变通。一直被真由理拜托穿Cosplay服，虽然毎次都以“害羞”为借口拒绝，但她还能坚持多久呢。妖刀・ 五月雨作为柳林神社代代相传的退魔宝刀，其实是冈伦送给他的仿制刀。身为师父的冈伦命令他每天练习抡刀，如果没带的话会被训斥。因为本性过于认真，所以把冈伦的厨二病发言都误解成了事实。总是把暗语说错。'
    },
    {
        usrc: 'fls.webp',
        alt: '菲利斯·喵喵',
        mz: '菲利斯·喵喵（フェイリス・ニャンニャン）',
        NO: 'LabMem No.007',
        py: '配音：桃井晴子',
        wb: '私立金丝雀学园2年级学生。在秋叶原的大人气猫耳女仆咖啡厅打工的少女。因为平时就戴着猫耳，所以使用着动画中常出现的“喵喵～”的口癖。自称有着只要注视对方眼睛就知道内心想法的特殊能力“笑面猫的微笑”，所以对他人的心情十分敏感。由于猫耳的萌要素和能力使她在打工的地方赢得了No.1的人气，是那种玩弄男人内心的小恶魔。在世界规模的人气对战卡片游戏《雷net access battles》上有着一流的技术，不过并没有怎么在正式比赛中出过场。因为是战略性很高的游戏，所以她擅长的心理洞察的特殊能力能得到充分的发挥。虽然是冈伦天敌一般的存在，却亲切地称呼他为“凤凰院凶真”，经常把他耍得团团转。'
    },
    {
        usrc: 'awy.webp',
        alt: '阿万音铃羽',
        mz: '阿万音铃羽（あまね すずは）',
        NO: 'LabMem No.008',
        py: '配音：田村由加莉',
        wb: '在未来道具研究所所在的一楼“布朗管工房”打工的少女。因为直率的性格（也被说成自来熟），所以和别人的关系能很快就融洽起来（但不知原因惟独敌视红莉栖） 。虽然有时元气过剩，时时让人感觉粗枝大叶，但实际相处起来还是个很乐于帮助人的人，也会有很细心的一面。不过在与人交往时往往不会相交太深，也不喜欢借助他人的力量，因此即使自己已经陷入困境，除非实在无法忍耐下去，否则也不会向周围的人诉说。从不提及自己的事，因此让人感觉充满了谜团。　　能把杂草虫子之类的东西很好地进行料理，看起来拥有很高的生存能力。相当擅长的格斗技，有着在实战中也不辱其名的实力，本人则称之为生存技巧。她生活的中心就是骑自行车，是个狂热的自行车爱好者。一但提到时就会性格突变，采取积极的行动，甚至还会邀请冈伦和桥田等未来道具研究所成员一起骑车去兜风。常用Mountain Bike（山地自行车），简称 MTB。虽然刚买不久，不过已经完全喜欢上了，常能看见她在“布朗管工房”前努力维护自行车的身影。'
    },
]
const bom = document.querySelector('.rwjs .bom')
let sjStr = ' '
// console.log(bom);
for (let i = 0; i < sj.length; i++) {
    sjStr += `
            <div class="rw">
                 <div class="left">
                    <img src="./img/${sj[i].usrc}" alt="${sj[i].alt}">
                    <p>${sj[i].alt}</p>
                </div>
                <div class="rig">
                    <p>${sj[i].mz}
                        <br>
                         ${sj[i].NO}
                        <br>
                        ${sj[i].py}
                         <br>
                        ${sj[i].wb}
                    </p>
                </div>
            </div>
            `
}
// console.log(sjStr);
bom.innerHTML = sjStr

//渲染表格数据
let bgsj = [
    { mc: '名  称', ms: '描  述' },
    { mc: 'Time leap', ms: '  （时间跳跃）抽取自身的记忆送到过去的自己的一种时间旅行方法。实验者会产生跳转时空和转移地点的错觉，其他人完全无法察觉被实验者的来龙去脉，因此不会有时间悖论发生，即因果律的修正。回到过去的实验者会接受从未来到达的信息，不会因“因果律”重构记忆。' },
    { mc: 'D-Mail', ms: '  能够将邮件发往过去的系统或是邮件本身的代称。D-Mail的“D”是De Lorean的缩写。亦有一说指D其实是E之前的一个字母' },
    { mc: 'El Psy Congroo', ms: '  （原版写法应为ElPsyKongroo）是伦太郎离别时的常用厨二病用语，没什么特别意义，伦太郎的造词。只是喜欢它的语感罢了。对伦太郎来说或许是再日常不过的词语，据说遇到异常的状况时也有取回平常心的功效。实际上是来自希腊语和拉丁语组成的词语，大意为强化思路。' },
    { mc: 'Steins;Gate', ms: '  面对选择项，或者说在选择时伦太郎发表的言词。红莉栖指出此词语是混杂用法，词中的“Steins（石）”源自德语，“Gate（门）”源自英语。由于是伦太郎的造词，所以本身也不具有什么意义。但在最后成为一个重要的关键字，贯通本作内容。' },
    { mc: 'Reading Steiner', ms: '  Reading Steiner （命运探知） 为冈部所拥有的类超能力，即世界线变动率改变后仍保留上一世界线的记忆。据冈部的回忆，他十岁时一次发高烧期间有着与世界线变动后相同的症状，认为此能力可能自那时获得。' },
    { mc: 'Divergence Meter', ms: '  Divergence Meter（世界线变动率计量器），探测仪的显示部分是用辉光管制作成的，共8个辉光管。其中，左起第1个辉光管是个位数，第2个是小数点，第3～8个是小数点后的六位数，其中个位数可以为-0，这时候个位数显示为空。由于全作通篇应用了世界线概念，这个东西则是用来提示“观测者”目前处于“哪一条”世界线。' },
    { mc: '世界线与世界线收束范围', ms: '  所有收束至某一结果的可能性结合起来的线，游戏中可理解为不同的选择所发生的不同路线。' },
    { mc: '世界线', ms: '  （World Line）由世界线变动计量器来观测，世界线收束范围（Attract Field）是复数的世界线汇聚在一起，形成比世界线更大的“世界的分歧路”。可以大致的分为以下几类。α世界线收束范围（约0%～约1%，实际游戏/动画中为0.3%~0.6%）：SERN统治的绝望的未来：椎名真由里、天王寺裕吾、桐生萌郁在收束范围内于2010年8月死亡桥田玲于2000年死亡，冈部伦太郎于2025年死亡，桥田至、牧濑红莉栖于2036年之前死亡，天王寺綯于2025年成为Rounder，秋叶留未惠、漆原琉华去向未知。β世界线收束范围（约1%～约2%，实际游戏/动画中为1.05%~1.4%）：命运石之门0故事所在世界线，牧濑红莉栖于2010年7月28日在广播馆大楼8楼死亡。Steins;Gate世界线（1.048596%）：本篇的真结局，未来完全未知。γ世界线收束范围（约2%～约3%）：冈伦成为300人委员会成员和Rounder首领，并成为统治日本的独裁者的世界，这个世界线被推测是让冈伦成为实际意义上观测者的源头。δ世界线收束范围（约3%～约4%）：《比翼恋理的爱人》故事所在的收束范围，这个世界线设定上并不完整，所有角色存活的世界线，类似α线又不是α线，明明不是绝望乡但是乔田铃还是会乘坐时光机来到2010年这个时间，然后回到1975年寻找IBN5100，并且她在2010年还以老年人的样子活着。ε世界线收束范围（约4.4%～约4.6%）：《线形拘束的树状图》中，冈伦在真由理死去一年后使用Time Leap由于连续使用导致失败从α线回到的世界线。Ω世界线收束范围（约-1%～约0%）：本篇菲利斯线，最后没有取消D-mail而是更改的D-mail内容，只有菲利斯和冈伦成为搭档的世界线。' }
]
let bgStr = ''
const tab = document.querySelector('.mcjx table')

for (let i = 0; i < bgsj.length; i++) {
    bgStr += `<tr>
                <th>${bgsj[i].mc}</th>
                <td width="1300" height="30">${bgsj[i].ms}</td>
              </tr>`
}
tab.innerHTML = bgStr


//动画模块
const ul = document.querySelector('.yszp ul')


let dhStr = ' '
let bjsj = [
    { url: 'url(./img/my1.webp)no-repeat', sj: '命运石之门由日本动画公司WHITE FOX制作的动画作品，2013年4月20日播出，全24话。' },
    { url: 'url(./img/my2.webp)no-repeat', sj: '命运石之门：聪明睿智的认知计算IBM与《命运石之门》的合作企划，全4话。' },
    { url: 'url(./img/my3.webp)no-repeat', sj: '命运石之门：境界面上的迷失之链2015年12月2日在日本的TOKYO MX与NICONICO上播出，全1话。' },
    { url: 'url(./img/my4.webp)no-repeat', sj: '2010年11月“β世界线”——主人公·冈部伦太郎跨越无数的苦难与悲哀，终究还是放弃拯救“她”的世界线，全23话' },
]
for (let i = 0; i < bjsj.length; i++) {
    dhStr += `
            <li>
                <div class="nr">
                    <br>
                    <br>
                    <br>
                    ${bjsj[i].sj}
                </div>
            </li>
            `
}
ul.innerHTML = dhStr

const nr = document.querySelectorAll('.yszp .nr')
const bj = document.querySelectorAll('.yszp ul li')
for (let i = 0; i < nr.length; i++) {
    bj[i].style.background = bjsj[i].url
    bj[i].style.backgroundSize = '300px 440px'
    nr[i].addEventListener('mouseenter', () => {
        bj[i].style.backgroundSize = '350px 490px'
        nr[i].style.opacity = 1
    })
    nr[i].addEventListener('mouseleave', () => {
        bj[i].style.backgroundSize = '300px 440px'
        nr[i].style.opacity = 0
    })
}

const bjt = document.querySelector('#bjt')
const dnr = document.querySelector('#nr')
dnr.addEventListener('mouseenter', () => {
    bjt.style.backgroundSize = '350px 490px'
    dnr.style.opacity = 1
})
dnr.addEventListener('mouseleave', () => {
    bjt.style.backgroundSize = '300px 440px'
    dnr.style.opacity = 0
})

//轮播模块
const lb = document.querySelector('.lb')
let lbStr = ' '
let lbsj = [
    { img: '3ydsz1.webp', wb: '3月的狮子' },
    { img: '3ydsz2.webp', wb: '3月的狮子 第二季' },
    { img: 'clannad1.webp', wb: 'CLANNAD' },
    { img: 'clannad2.webp', wb: 'CLANNAD 第二季' },
    { img: 'xm1-2.webp', wb: '夏目友人帐 第一、二季' },
    { img: 'xm3-4.webp', wb: '夏目友人帐 第三、四季' },
    { img: 'xm5.webp', wb: '夏目友人帐 第五季' },
    { img: 'xm6.webp', wb: '夏目友人帐 第六季' },
    { img: 'lz.webp', wb: '龙珠超' },
    { img: 'yxrs.webp', wb: '游戏人生' },
    { img: 'AB.webp', wb: 'Angel Beats!' },
    { img: 'KANON.webp', wb: 'KANON' },
    { img: 'lgcr2006.webp', wb: '凉宫春日的忧郁 2006' },
    { img: 'lgcr2009.webp', wb: '凉宫春日的忧郁 2009' },
    { img: 'lgcrdxs.webp', wb: '凉宫春日的消失' },
    { img: 'qysn1.webp', wb: '轻音少女 第一季' },
    { img: 'qysn2.webp', wb: '轻音少女 第二季' },
    { img: 'qysnjcb.webp', wb: '轻音少女 剧场版' },
    { img: 'djsy1.webp', wb: '刀剑神域' },
    { img: 'djsy-xlzz.webp', wb: '刀剑神域-序列之争' },
    { img: 'yyzt.webp', wb: '言叶之庭' },
    { img: 'mswlm.webp', wb: '秒数五厘米' },
    { img: 'charlotte.webp', wb: 'Charlotte' },
    { img: 'dsysndhy.webp', wb: '四月是你的谎言' },
    { img: 'gzxb.webp', wb: '工作细胞' },
    { img: 'wgjdf.webp', wb: '卫宫家今天的饭' },
    { img: 'fate06.webp', wb: 'Fate-命运之夜 06版' },
    { img: 'fateex.webp', wb: 'Fate/E L E' },
    { img: 'fatemyjnh.webp', wb: 'Fate-冠位嘉年华' },
    { img: 'fateqyyp.webp', wb: 'Fate-奇异赝品' },
    { img: 'fateubw1.webp', wb: 'Fate/UBW 第一季' },
    { img: 'fateubw2.webp', wb: 'Fate/UBW 第二季' },
    { img: 'fateZero1.webp', wb: 'Fate/Zero 第一季' },
    { img: 'fateZero2.webp', wb: 'Fate/Zero 第二季' },
    { img: 'fgoms.webp', wb: 'fgo 绝对魔兽战线' },
    { img: 'fgo.webp', wb: 'fgo ‐First Order‐' },
    { img: 'gmzr.webp', wb: '鬼灭之刃' },
    { img: 'gmzrwxlc.webp', wb: '鬼灭之刃 无限列车' },
    { img: 'gmzrygp.webp', wb: '鬼灭之刃 游郭篇' },
    { img: 'gmzrddp.webp', wb: '鬼灭之刃 锻刀篇' },

    { img: '3ydsz1.webp', wb: '3月的狮子' },
    { img: '3ydsz2.webp', wb: '3月的狮子 第二季' },
    { img: 'clannad1.webp', wb: 'CLANNAD' },
    { img: 'clannad2.webp', wb: 'CLANNAD 第二季' },
]
for (let i = 0; i < lbsj.length; i++) {
    lbStr += `
            <div class="zt">
                <div class="cen">
                    <img src="./img/${lbsj[i].img}" alt="" style="width: 250px;height: 370px;">
                </div>
                <div class="bom">${lbsj[i].wb}</div>
            </div>
    `
}
lb.innerHTML = lbStr
let x = 0
const zts = document.querySelectorAll('.lb .zt')
console.log(zts);

setInterval(function lbhs() {
    for (let i = 0; i < zts.length; i++) {
        if (x >= 250 * zts.length - 670) {
            return x = 0
        }
        zts[i].style.right = `${x++}px`
    }
}, 100)
// console.log(lbsj.length);


//滚轮模块
const dh = document.querySelector('.dh')
const gl=document.querySelectorAll('.dh .sy')
window.addEventListener('scroll', function(){
    let gun=document.documentElement.scrollTop
    console.log(gun);
    let glsj=[0,720,2300,3000,3625]
    for(let i = 0; i <gl.length; i++) {
        if(gun<=0){
            dh.style.display='none'
        }else if(gun>=110 && gun<720){
            dh.style.display='block'
            gl[i].style.background='transparent'
            gl[0].style.background='rgba(255, 165, 0,.3)'
        }else if(gun>=720 && gun <2300){
            dh.style.display='block'
            gl[i].style.background='transparent'
            gl[1].style.background='rgba(255, 165, 0,.3)'
        }else if(gun>=2300 && gun<3000){
            dh.style.display='block'
            gl[i].style.background='transparent'
            gl[2].style.background='rgba(255, 165, 0,.3)'
        }else if(gun>=3000 && gun<3625){
            dh.style.display='block'
            gl[i].style.background='transparent'
            gl[3].style.background='rgba(255, 165, 0,.3)'
        }else if(gun>=3625){
            dh.style.display='block'
            gl[i].style.background='transparent'
            gl[4].style.background='rgba(255, 165, 0,.3)'
        }
        gl[i].addEventListener('click',function(){
            // console.log(gl[0].scrollTop);
            document.documentElement.scrollTop = glsj[i]
        })
    }
})