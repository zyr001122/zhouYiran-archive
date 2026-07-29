// 웨이보 숏코드 -> 로컬 이미지 파일명 매핑
// 이미지 파일은 emoticons/ 폴더 안에 [파일명].png 로 저장해야 함
// 매핑에 없는 코드는 원문 텍스트([코드]) 그대로 표시됨 (fallback)
const WEIBO_EMOTICON_MAP = {
  '微笑': 'weixiao', '可爱': 'keai', '太开心': 'taikaixin', '鼓掌': 'guzhang',
  '嘻嘻': 'xixi', '哈哈': 'haha_zh', '笑cry': 'xiaocry', '挤眼': 'jiyan',
  '馋嘴': 'chanzui', '黑线': 'heixian', '汗': 'han', '挖鼻': 'wabi',
  '哼': 'heng', '怒': 'nu', '委屈': 'weiqu', '可怜': 'kelian',
  '失望': 'shiwang', '悲伤': 'beishang', '泪': 'lei', '允悲': 'yunbei',
  '害羞': 'haixiu', '污': 'wu', '爱你': 'aini', '亲亲': 'qinqin',
  '色': 'se', '憧憬': 'chongjing', '舔屏': 'tianping', '坏笑': 'huaixiao',
  '阴险': 'yinxian', '笑而不语': 'xiaoerbuyu', '偷笑': 'touxiao', '酷': 'ku',
  '并不简单': 'bingbujiandan', '思考': 'sikao', '疑问': 'yiwen', '费解': 'feijie',
  '晕': 'yun', '衰': 'shuai', '骷髅': 'kulou', '嘘': 'xu',
  '闭嘴': 'bizui', '傻眼': 'shayan', '吃惊': 'chijing', '吐': 'tu',
  '感冒': 'ganmao', '生病': 'shengbing', '拜拜': 'baibai', '鄙视': 'bishi',
  '白眼': 'baiyan', '左哼哼': 'zuohengheng', '右哼哼': 'youhengheng', '抓狂': 'zhuakuang',
  '怒骂': 'numa', '打脸': 'dalian', '顶': 'ding', '互粉': 'hufen',
  '钱': 'qian', '哈欠': 'haqian', '困': 'kun', '睡': 'shui',
  '求饶': 'qiurao', '吃瓜': 'chigua', '打call': 'dacall', 'awsl': 'awsl',
  '裂开': 'liekai', '牛年大吉': 'niuniandaji', '牛大发': 'niudafa', '牛哞哞': 'niumoumou',
  'doge': 'doge', '二哈': 'erha', '喵喵': 'miaomiao', '酸': 'suan',
  '中国赞': 'zhongguozan', '抱抱': 'baobao', '摊手': 'tanshou', '跪了': 'guile',
  '鲜花': 'xianhua', '红灯笼': 'hongdenglong', '烟花': 'yanhua', '雪花': 'xuehua',
  '心': 'xin', '伤心': 'shangxin', '男孩儿': 'nanhaier', '女孩儿': 'nvhaier',
  '握手': 'woshou', '赞': 'zan', 'good': 'good', '弱': 'ruo',
  'NO': 'no', '耶': 'ye', '拳头': 'quantou', 'ok': 'ok',
  '加油': 'jiayou', '来': 'lai', '作揖': 'zuoyi', 'haha': 'haha_en',
  '熊猫': 'xiongmao', '兔子': 'tuzi', '猪头': 'zhutou', '草泥马': 'caonima',
  '奥特曼': 'aoteman', '太阳': 'taiyang', '月亮': 'yueliang', '浮云': 'fuyun',
  '下雨': 'xiayu', '沙尘暴': 'shachenbao', '围观': 'weiguan', '飞机': 'feiji',
  '照相机': 'zhaoxiangji', '话筒': 'huatong', '音乐': 'yinyue', '喜': 'xi',
  '给力': 'geili', '威武': 'weiwu', '可乐': 'kele', '干杯': 'ganbei',
  '纸飞机': 'zhifeiji', '炸鸡腿': 'zhajitui', '武汉加油': 'wuhanjiayou', '点亮橙色': 'diangliangchengse',
  '锦鲤': 'jinli', '微风': 'weifeng', '蜡烛': 'lazhu', '蛋糕': 'dangao',
  '看涨': 'kanzhang', '看跌': 'kandie', '带着微博去旅行': 'daizhaoweibolvxing',
  // 표준 세트에 없던 추가 코드
  '抱一抱': 'hug',
  '小心心': 'xiaoxinxin',
  '爱慕': 'adore',
  '躺平': 'takearest',
  '耶耶': 'yeahyeah',
  '苦': 'bitter',
  '开学季': 'kaixueji',
  '2025': '2025',
  '收到': 'get',
  '哇': 'wow',
  '甜': 'tian',
  '融化': 'melt',
  '笑哈哈': 'laugh_mobile',
};

/**
 * 텍스트 안의 [코드] 패턴을 이모티콘 이미지 태그로 치환.
 * 매핑에 없는 코드는 원문 텍스트 그대로 둠 (fallback).
 * originalText, translatedText, 댓글 텍스트 등 렌더링하는 모든 곳에서 호출해서 쓰면 됨.
 */
function renderWeiboEmoticons(text) {
  if (!text) return text;
  return text.replace(/\[([^\[\]]+)\]/g, function (match, code) {
    const filename = WEIBO_EMOTICON_MAP[code];
    if (!filename) return match;
    return '<img src="emoticons/' + filename + '.png" alt="' + code + '" class="weibo-emoticon" />';
  });
}
