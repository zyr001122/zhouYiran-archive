const posts = [
  {
    id: 1,
    date: "2026-05-22T23:32",
    weiboUrl: "https://weibo.com/5994946077/R0CYdlWZC",
    originalText: "🫡",
    translatedText: "🫡",
    images: [],
    comments: [
      {
        id: 101,
        username: "yiiii___________",
        originalText: "占有欲发作了 现在马上告诉我你在干嘛 @周翊然Tz",
        translatedText: "집착 발동 지금 당장 뭐 하고 있는지 말해줘 @周翊然Tz",
        images: ["images/cat-white.jpg"],
        actorReply: { originalText: "在看你的表情包 😑", translatedText: "네 짤 보고 있어 😑" }
      },
      {
        id: 102,
        username: "Dear-喇巴粥",
        originalText: "人。你在翻评论吗？@周翊然Tz",
        translatedText: "너 댓글 내리고 있었지? @周翊然Tz",
        images: ["images/cat-green.jpg"],
        actorReply: { originalText: "对的 人", translatedText: "맞음" }
      },
      {
        id: 103,
        username: "周翊然Tz",
        originalText: "才落地 来得有点晚了 😵",
        translatedText: "이제 막 착륙해서 오느라 좀 늦었네 😵",
        images: [],
        actorReply: null
      },
      {
        id: 104,
        username: "Zz的小嘉Tz",
        originalText: "看看倒序吧哥😭 @周翊然Tz",
        translatedText: "오빠 최신순으로도 좀 봐줘 😭 @周翊然Tz",
        images: ["images/post-799.jpg"],
        actorReply: { originalText: "看到了！", translatedText: "봤어!" }
      },
      {
        id: 105,
        username: "椰椰糕冷",
        originalText: "哥哥这是你第一次做蛤蜊煎吗！看着好好吃！",
        translatedText: "오빠 이거 처음 만들어보는 굴전이야?! 진짜 맛있어 보여",
        images: ["images/food-egg.jpg"],
        actorReply: { originalText: "对啊 😏", translatedText: "맞아 😏" }
      },
      {
        id: 106,
        username: "芝士椰啵脆",
        originalText: "宝宝如果小法和小茅会撕名牌，你觉得谁会赢？",
        translatedText: "자기야 만약에 페라리랑 마오타이가 이름표 뜯기 하면 누가 이길 것 같아",
        images: ["images/ferrari-maotai.jpg"],
        actorReply: { originalText: "🤦 难到我了", translatedText: "🤦 난처해지네" }
      },
      {
        id: 107,
        username: "翊分钟恋人z",
        originalText: "哥哥 人家沙爹撕你 你为什么要往前倒（沙爹对不起🙏）",
        translatedText: "오빠 이름표 뜯기는 건 사테오빤데 왜 오빠가 앞으로 넘어졌어 (사테 미안 🙏)",
        images: ["images/variety-uncle.jpg"],
        actorReply: { originalText: "脑子宕机了…", translatedText: "뇌 정지와서…" }
      },
      {
        id: 108,
        username: "粥粥盐hioo7",
        originalText: "我好奇国外什么温度还能用到这个！！",
        translatedText: "외국은 날씨가 어떻길래 아직도 이걸 쓰는거야!!",
        images: ["images/campfire.jpg"],
        actorReply: { originalText: "超级冷 早上晚上只有四度这样", translatedText: "엄청 추워 아침 저녁으로 해봤자 4도 밖에 안 돼" }
      },
      {
        id: 109,
        username: "BianTaoTi-",
        originalText: "感觉这个番茄炒蛋比青椒炒肉卖相还好的样子 所以哪个好吃一些🤤",
        translatedText: "이 토달볶이 친자오로스보다 비주얼이 더 좋아 보이는데 뭐가 더 맛있어 🤤",
        images: ["images/food-qingjiao-egg.jpg"],
        actorReply: { originalText: "都挺好吃的啊", translatedText: "둘 다 꽤 맛있어" }
      },
      {
        id: 110,
        username: "翊橘Tz_",
        originalText: "看我设计的美甲怎么样 还有很多你的元素 好好看不 🧑‍🚀",
        translatedText: "내가 디자인한 네일아트 어때 오빠랑 관련된 포인트도 많이 들어가 있어 예쁘지 🧑‍🚀",
        images: ["images/nail.jpg"],
        actorReply: { originalText: "好看！", translatedText: "예쁘다" }
      },
      {
        id: 111,
        username: "小巴粥o",
        originalText: "哥哥，这个问题很重要快告诉我你做🍅炒🥚放糖了吗 🧑‍🚀",
        translatedText: "오빠 이 질문 정말 중요하니까 빨리 말해줘 토마토 🍅 달걀 🍳 볶음 만들 때 설탕 넣었어? 🧑‍🚀",
        images: ["images/food-qingjiao-rice.jpg"],
        actorReply: { originalText: "我都吃咸的", translatedText: "난 다 짜게 먹어" }
      },
      {
        id: 112,
        username: "翊口韩式拌饭-Tz",
        originalText: "哥哥你看！电脑作业画的三视图 你猜猜是哪个活动造型！（很简单哦！）但是我肤色颜色没抓好 难受🫳🏻求夸！",
        translatedText: "오빠 이것 봐 컴퓨터 과제로 그린 삼면도인데 어떤 행사 스타일링인지 맞춰봐 (엄청 쉬워) 근데 내가 피부색 톤을 잘 못 잡아서 속상해 🫳🏻 칭찬해 줘",
        images: ["images/hair-pink.jpg"],
        actorReply: { originalText: "我猜是apm", translatedText: "APM 행사 같은데" }
      },
      {
        id: 113,
        username: "轻轻茉莉不加冰-",
        originalText: "你这个视频剪了多久！去哪进修了 😏",
        translatedText: "이 영상 편집하는 데 얼마나 걸렸어 어디 가서 배워온 거야 😏",
        images: ["images/racing.jpg"],
        actorReply: { originalText: "我要能拍出来这样的 摄影师都可以下岗了 😑", translatedText: "내가 이런 걸 찍어낼 수 있다면 촬영 감독님들은 다 실직하셔야 해 😑" }
      },
      {
        id: 114,
        username: "BianTaoTi",
        originalText: "你这次去法国有吃到什么好吃的发出来看看👀",
        translatedText: "이번에 프랑스 가서 맛있게 먹은 거 있으면 올려줘 👀",
        images: ["images/crayon-shin.jpg"],
        actorReply: { originalText: "我自己做的饭好吃啊", translatedText: "내가 직접 만든 밥이 제일 맛있더라" }
      },
      {
        id: 115,
        username: "白月光的月_tz",
        originalText: "这只喵好帅啊！！在法国和你们同住吗！！",
        translatedText: "고양이 진짜 잘생겼다 프랑스 숙소에서 너희랑 같이 지낸 거야?!!",
        images: ["images/cat.jpg"],
        actorReply: { originalText: "一睡醒就跑进来了 😹", translatedText: "자고 일어나니까 침입해있었어 😹" }
      },
      {
        id: 116,
        username: "BianTaoTi-",
        originalText: "哥哥快看我今天拼豆拼的车车 知道是哪款车吗🤲🏻",
        translatedText: "오빠 내가 오늘 펄러비즈로 맞춘 차 좀 빨리 봐봐 무슨 차인지 알겠어 🤲🏻",
        images: ["images/racing-model.jpg"],
        actorReply: { originalText: "法拉利", translatedText: "페라리" }
      },
      {
        id: 117,
        username: "悲伤甜甜圈圈",
        originalText: "看到锦鲤许个愿吧",
        translatedText: "행운의 잉어를 봤으니 소원 빌어봐",
        images: ["images/fish-koi.jpg"],
        actorReply: { originalText: "🙏希望我和评论区的所有人都一切顺利！！！", translatedText: "🙏 나랑 댓글에 있는 모든 사람들 원하는 대로 다 잘 풀리길" }
      },
      {
        id: 118,
        username: "舟上雨入愿",
        originalText: "哥 我明天会考！",
        translatedText: "오빠 나 내일 졸업시험이야",
        images: ["images/score.jpg"],
        actorReply: { originalText: "加油！", translatedText: "파이팅!" }
      },
      {
        id: 119,
        username: "轻轻茉莉不加冰-",
        originalText: "这个黑黑的是什么！",
        translatedText: "이거 까맣게 생긴 건 뭐야?!",
        images: ["images/coal.jpg"],
        actorReply: { originalText: "煤炭啊 😹", translatedText: "석탄이야 😹" }
      },
      {
        id: 120,
        username: "樱花味的cherry",
        originalText: "厨艺进步了啊 🤧",
        translatedText: "요리 실력 늘었네 🤧",
        images: ["images/egg.jpg", "images/food-qingjiao-porridge.jpg"],
        actorReply: { originalText: "😏 没差过啊", translatedText: "😏 나빴던 적이 없는데" }
      },
      {
        id: 121,
        username: "然然不转弯zz",
        originalText: "是自己做的吗哥哥",
        translatedText: "오빠가 직접 만든 거야?",
        images: ["images/food-qingjiao-porridge.jpg"],
        actorReply: { originalText: "你猜", translatedText: "맞춰봐" }
      },
      {
        id: 122,
        username: "翊粒紫然Tz",
        originalText: "好看吗 拼了好长时间",
        translatedText: "예쁘지 오랫동안 맞췄어",
        images: ["images/racing-purple.jpg"],
        actorReply: { originalText: "牛！", translatedText: "짱이다!" }
      },
      {
        id: 123,
        username: "安颜颜颜颜Tz",
        originalText: "然然 感觉做的蛤蜊煎蛋很美味 😋",
        translatedText: "익연이가 만든 굴계란전 엄청 맛있어 보이더라😋",
        images: ["images/food-zyr.jpg"],
        actorReply: { originalText: "😏", translatedText: "😏" }
      },
      {
        id: 124,
        username: "忙内专家",
        originalText: "你猜这是什么",
        translatedText: "이게 뭔지 맞춰봐",
        images: ["images/candy-choco.jpg"],
        actorReply: { originalText: "巧克力？", translatedText: "초콜릿?" }
      },
      {
        id: 125,
        username: "黄忆一个秋hyq",
        originalText: "看上哪盘菜了 我帮你吃",
        translatedText: "어떤 요리가 마음에 들어 내가 대신 먹어줄게",
        images: ["images/food-chongqing.jpg"],
        actorReply: { originalText: "看图的就知道ip在哪儿", translatedText: "사진만 봐도 IP가 어디인지 알겠네" }
      },
      {
        id: 126,
        username: "祈川十里春",
        originalText: "这样搭配真的好吃吗😭",
        translatedText: "이 조합 진짜 맛있는 거 맞아? 😭",
        images: ["images/food-qingjiao-porridge.jpg"],
        actorReplies: [
          { originalText: "一个字 绝了", translatedText: "한글자로 대박" },
          { originalText: "哦不对 是两个字 🤦", translatedText: "아 아니네 두 글자구나 🤦🏻" }
        ],
        actorReply: null
      },
      {
        id: 127,
        username: "喝口QQ粥-",
        originalText: "哥哥最近有单曲循环的歌吗",
        translatedText: "요즘 한 곡 반복 재생하는 노래 있어?",
        images: ["images/cat-meme.jpg"],
        actorReply: { originalText: "此时此刻 🎵", translatedText: "딱 지금 <妥协> 🎵" }
      },
      {
        id: 128,
        username: "·抹茶麦旋风·",
        originalText: "哥哥会不会颠锅翻面呀！！🤭",
        translatedText: "오빠 웍질로 뒤집는 거 할 줄 알아? 🤭",
        images: ["images/food-egg-drawing.jpg"],
        actorReply: { originalText: "难道没看到我预告中那快离地一米的翻面吗", translatedText: "예고편에 내가 바닥에서 거의 1미터 높이로 뒤집는 거 못 봤어?" }
      },
      {
        id: 129,
        username: "翊碗小新Tz",
        originalText: "你猜猜是什么猅？😋",
        translatedText: "무슨 고기인지 맞춰봐 😋",
        images: ["images/food-meat.jpg"],
        actorReply: { originalText: "我猜鸡肉", translatedText: "닭고기인가" }
      },
      {
        id: 130,
        username: "翊条鱼鱼tz",
        originalText: "哥哥这个表情包你喜欢不👀👀",
        translatedText: "오빠 이 짤 맘에 들어? 👀👀",
        images: ["images/meme-bug.jpg"],
        actorReply: { originalText: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈", translatedText: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ" }
      },
      {
        id: 100,
        username: "周翊然Tz",
        originalText: "我走了 大家早点休息！🧑‍🚀 大家好好照顾自己 也希望我和大家能一切顺利 希望评论区的锦鲤许的愿能实现",
        translatedText: "나 이제 갈게 다들 일찍 쉬어 🧑‍🚀 다들 몸 잘 챙기고 우리 다 모든 일이든 잘 풀릴 거야 댓글에 있던 행운의 잉어한테 빈 소원들이 다 이루어지면 좋겠다",
        images: [],
        actorReply: null
      }
    ]
  },
  {
    id: 2,
    date: "2026-04-22T20:30",
    weiboUrl: "https://weibo.com/5994946077/5290585814469338",
    originalText: "来了 ​​​",
    translatedText: "왔어",
    images: [],
    comments: [
      {
        id: 202,
        username: "只吃两碗饭-",
        originalText: "请问这位训狗届最严厉的父亲 茅妹和拉瑞除了坐下和不准吃开发出什么新技能了吗！🙊",
        translatedText: "반려견 훈련계의 가장 엄격한 아버지에게 질문 마오타이랑 페라리는 앉아랑 먹지 마 말고 새로 배운 개인기 있어?! 🙊",
        images: ["images/maotai-hat.jpg"],
        actorReply: { originalText: "还有 站起来", translatedText: "그거랑 일어서기" }
      },
      {
        id: 203,
        username: "翊分钟恋人z",
        originalText: "哥哥难道你当时在copy this？",
        translatedText: "오빠 설마 그때 이거 카피하고 있었던 거야?",
        images: ["images/valorant-chamber.jpg"],
        actorReply: { originalText: "那个时候我还没有玩这个游戏🙄", translatedText: "그때는 아직 이 게임 안 했었어 🙄" }
      },
      {
        id: 204,
        username: "熹然Z相逢",
        originalText: "翊然，此时此刻看着它，你在想什么呢～",
        translatedText: "익연, 이 순간에 보면서 무슨 생각 하고 있던 거야?~",
        images: ["images/black-sportscar.jpg"],
        actorReply: { originalText: "在想 弄什么涂装好看", translatedText: "어떤 랩핑 해야 예쁠까" }
      },
      {
        id: 205,
        username: "魚肉蛋黄酥o_",
        originalText: "哥哥 送你一个表情包 请收好🤔",
        translatedText: "오빠 조공 하나 할게 잘 받아 🤔",
        images: ["images/ferrari-headset.jpg"],
        actorReply: { originalText: "法拉利什么段位哈哈哈哈", translatedText: "페라리는 티어 뭔데 ㅋㅋㅋㅋ" }
      },
      {
        id: 206,
        username: "翊分钟恋人z",
        originalText: "给假面骑士 滑雪 开车 打瓦排个名 我好想知道现在假面骑士排第几🤭🤭",
        translatedText: "가면라이더 스키 운전 발로란트 순위 매겨줘 지금 가면라이더가 몇 등인지 너무 알고 싶어 🤭🤭",
        images: ["images/figure-ski.jpg"],
        actorReply: { originalText: "每个季节 有每个季节该做的事情🫡", translatedText: "계절마다 그 계절에 해야 할 일이 있는 거지 🫡" }
      },
      {
        id: 207,
        username: "轻轻茉莉不加冰-",
        originalText: "哥哥 给你看我新换的耳钉🫡",
        translatedText: "오빠 새로 바꾼 귀걸이 보여줄게 🫡",
        images: ["images/earring-shinchan.jpg"],
        actorReply: { originalText: "好看 蜡笔小新也很可爱", translatedText: "예쁘네 짱구도 귀엽다" }
      },
      {
        id: 208,
        username: "亿口甜粥_",
        originalText: "哥哥这是去当赛车拉拉队了吗 体验感怎么样👀",
        translatedText: "오빠 이번에 레이싱 응원단 하러 가보니까 어땠어 👀",
        images: ["images/racing-staff.jpg"],
        actorReply: { originalText: "不如自己开👀", translatedText: "직접 운전하는 것만 못하더라 👀" }
      },
      {
        id: 209,
        username: "樱花味的cherry",
        originalText: "哥哥你的微博有没有语音评论的功能呀",
        translatedText: "오빠 웨이보에 음성 댓글 기능 없어?",
        images: ["images/maotai-forehead.jpg"],
        actorReply: { originalText: "看了一下 没有", translatedText: "방금 봤는데 없네" }
      },
      {
        id: 210,
        username: "BianTaoTi-",
        originalText: "你怎么只喷这个贴纸 你没有别的喷漆图案了吗哈哈哈哈😂",
        translatedText: "왜 이 스티커만 뿌려 다른 스프레이 없어? ㅋㅋㅋㅋ 😂",
        images: ["images/valorant-sticker.jpg"],
        actorReply: { originalText: "这是给队友点赞用的", translatedText: "이건 팀원들 잘했다고 좋아요 해주는 용도야" }
      },
      {
        id: 211,
        username: "只吃两碗饭-",
        originalText: "老公给你分享两张刚洗出来的胶片~要是我有间暗房能自己洗胶卷就好了！！🧑‍🧒‍🧒",
        translatedText: "여보 방금 인화한 필름 사진 두 장 공유할게~ 나한테 암실이 있어서 직접 현상할 수 있으면 얼마나 좋을까!! 🧑‍🧒‍🧒",
        images: ["images/alley.jpg", "images/china-film.jpg"],
        actorReply: { originalText: "自己洗照片  厉害啊", translatedText: "직접 인화라니 대단하다" }
      },
      {
        id: 212,
        username: "尴尬家小柴",
        originalText: "送你一个表情包🤩",
        translatedText: "짤 하나 선물할게 🤩",
        images: ["images/dog-laydown.jpg"],
        actorReply: { originalText: "哈哈哈哈哈哈哈", translatedText: "ㅋㅋㅋㅋ<<<ㅋㅋㅋ" }
      },
      {
        id: 213,
        username: "王一本啊",
        originalText: "看我听到了什么，春日部版Beauty And A Beat",
        translatedText: "내가 뭘 들었는지 좀 봐 카스카베 버전 Beauty And A Beat",
        images: ["images/beauty-beat.jpg"],
        actorReply: { originalText: "？？？", translatedText: "???" }
      },
      {
        id: 214,
        username: "小狗蔓越莓",
        originalText: "哥哥现在在干嘛发个照片报备一下",
        translatedText: "오빠 지금 뭐 해 사진 올려서 보고해 줘",
        images: ["images/ribbon-dog.jpg"],
        actorReply: { replyImages: ["images/xianxia-movie.jpg"] }
      },
      {
        id: 215,
        username: "祈川十里春",
        originalText: "这么大一条鱼钓了多久呀？要不要考虑分享一下钓鱼技术！",
        translatedText: "이렇게 큰 물고기는 낚는 데 얼마나 걸려? 낚시 기술 좀 공유해 줄 생각 없어?",
        images: ["images/fishing-bw.jpg"],
        actorReply: { originalText: "遛鱼十分钟", translatedText: "물고기랑 10분동안 힘싸움했어" }
      },
      {
        id: 216,
        username: "Campbe_眠雪碎眠悸",
        originalText: "最近我皮肤真的不是很好，他们都让我自己补充点维生素，但是我根本不需要那玩意，因为你就是我的维E。",
        translatedText: "요즘 내 피부가 진짜 안 좋나봐 다들 나보고 비타민 좀 챙겨 먹으래 근데 난 그런 거 전혀 필요 없는데 왜냐면 네가 내 비타민E니까.",
        images: ["images/mint-meme.jpg"],
        actorReply: { originalText: "…..", translatedText: "….." }
      },
      {
        id: 217,
        username: "Eternal-翊序哼痣",
        originalText: "人太多了，不喜欢，标记一下，走了，记得回复",
        translatedText: "사람이 너무 많아서 별로야 마크하고 갈게 답장 기억해 줘",
        images: ["images/baby-cat.jpg"],
        actorReply: { originalText: "OKOK", translatedText: "OKOK" }
      },
      {
        id: 218,
        username: "忙内专家",
        originalText: "猜你想念重庆的火锅了",
        translatedText: "충칭 훠궈 땡기지",
        images: ["images/hotpot1.jpg", "images/hotpot2.jpg"],
        actorReply: { originalText: "又来诱惑我🙂", translatedText: "또 나 유혹하네 🙂" }
      },
      {
        id: 219,
        username: "喝口QQ粥-",
        originalText: "哥哥你这拍的是什么呀 看半天没有看出来是什么",
        translatedText: "오빠 이거 뭘 찍은 거야 한참 봐도 뭔지 모르겠어",
        images: ["images/leaf-tree.jpg"],
        actorReply: { originalText: "树上全是公鸡 看不出来吧哈哈哈", translatedText: "나무 위에 수탉이 가득한데 안 보이나보네 ㅋㅋㅋ" }
      },
      {
        id: 220,
        username: "Michelleq_0915",
        originalText: "哥哥请选择你的英雄",
        translatedText: "오빠 캐릭 선택해 줘",
        images: ["images/racing-green.jpg", "images/naci-green.jpg", "images/purple-hat-green.jpg"],
        actorReply: { originalText: "画得很好啊", translatedText: "잘 그렸다" }
      },
      {
        id: 201,
        username: "周翊然Tz",
        originalText: "最后分享一张 上班的照片 我先走了下次见！！",
        translatedText: "마지막으로 출근 사진 한 장 공유할게 나 먼저 갈게 다음에 봐!!",
        images: ["images/work-back.jpg"],
        actorReply: null
      }
    ]
  },
  {
    id: 4,
    date: "2026-03-03T23:07",
    weiboUrl: "https://weibo.com/5994946077/5279276314135607",
    originalText: "元宵节快乐",
    translatedText: "즐거운 원소절 보내",
    images: ["images/yuanxiao.jpg"],
    comments: []
  },
  {
    id: 3,
    date: "2026-03-22T15:30",
    weiboUrl: "https://weibo.com/5994946077",
    originalText: "hello ​​​",
    translatedText: "hello",
    images: [],
    comments: [
      {
        id: 302,
        username: "哭泣鱼丸丸丸-",
        originalText: "Hi！好看吗！小然@周翊然Tz",
        translatedText: "Hi！익연아 예쁘지? @周翊然Tz",
        images: ["images/sunset-3shot.jpg"],
        actorReply: { originalText: "手机拍的吗", translatedText: "폰으로 찍은 거야?" }
      },
      {
        id: 303,
        username: "烟竹阮桐粥",
        originalText: "轮家庭地位这一块🤔 @周翊然Tz",
        translatedText: "집안 서열에 대해서는 말이지🤔 @周翊然Tz",
        images: ["images/family-3shot.jpg"],
        actorReply: { originalText: "？？", translatedText: "？？" }
      },
      {
        id: 304,
        username: "yi翊口小周",
        originalText: "哥哥 法拉利也来开赛车啦！！",
        translatedText: "오빠 페라리도 레이싱카 타러 왔어!!",
        images: ["images/ferrari-racing.jpg"],
        actorReply: { originalText: "牛………..", translatedText: "대박이네………." }
      },
      {
        id: 305,
        username: "樱花味的cherry",
        originalText: "回重庆吃啥好吃的没有啊？🥰",
        translatedText: "충칭 왔을 때 맛있는 거 뭐 먹었어?🥰",
        images: ["images/chongqing-bridge.jpg", "images/chongqing-food.jpg"],
        actorReply: { originalText: "你这家店怎么很熟悉", translatedText: "이 가게 왜 이렇게 낯이 익지" }
      },
      {
        id: 306,
        username: "r男朋友真的只想开车",
        originalText: "是不是偷偷去学画画了🙄",
        translatedText: "혹시 몰래 그림 배우러 다녔나🙄",
        images: ["images/sunflower-drawing.jpg", "images/sunflower-drawing2.jpg"],
        actorReply: { originalText: "是不是画得不错😏", translatedText: "내가 그림 좀 잘 그리지😏" }
      },
      {
        id: 307,
        username: "轻轻茉莉不加冰-",
        originalText: "小然 好奇上次vlog里这个角度是咋拍的！🤔",
        translatedText: "익연아 궁금한 게 지난 브이로그에서 이 각도는 어떻게 찍은 거야!🤔",
        images: ["images/paris-vlog.jpg"],
        actorReply: { originalText: "把相机放在地上 拍完再跑回去捡🫡", translatedText: "카메라를 바닥에 두고 찍은 다음에 다시 뛰어가서 주워왔어🫡" }
      },
      {
        id: 308,
        username: "脆皮灿包",
        originalText: "来看日落咯@周翊然Tz",
        translatedText: "일몰 보러 왔어@周翊然Tz",
        images: ["images/sea-wave.jpg"],
        actorReply: { originalText: "拍的真好 手机拍的吗", translatedText: "진짜 잘 찍었다 폰으로 찍었어?" }
      },
      {
        id: 309,
        username: "然后煮翊碗周",
        originalText: "然然快看 昨天一块钱转盘转到一只小乌龟🐢 可爱不🥰",
        translatedText: "익연 빨리 봐봐 어제 1위안짜리 뽑기 돌려서 꼬마 거북이 한 마리 뽑았어🐢 귀엽지🥰",
        images: ["images/turtle.jpg"],
        actorReply: { originalText: "我小时候也抽到过这个", translatedText: "나도 어릴 때 이거 뽑아본 적 있는데" }
      },
      {
        id: 310,
        username: "nuori纯",
        originalText: "然然每次给yummy画的妆怎么都是一样的@周翊然Tz",
        translatedText: "익연이는 야미한테 메이크업해 줄 때마다 왜 다 똑같이 해주는 거야@周翊然Tz",
        images: ["images/apm-bear.jpg"],
        actorReply: { originalText: "实在想不到其他的了", translatedText: "진짜 다른 게 안 떠올라서 그래" }
      },
      {
        id: 311,
        username: "翊粒紫然Tz",
        originalText: "谢谢周哥的翻牌，虽然还没翻，可能是忘了，但是提前谢谢了，周哥总不可能真的不翻吧，肯定不可能，毕竟哥哥超级心软，我怕一会翻我的时候哥哥看不到의 my thank you, 这里提前谢谢全宇宙超级无敌第一帅的哥哥‼️你最棒‼️@周翊然Tz",
        translatedText: "오빠 답글 고마워, 비록 아직 안 달아줬고 까먹었을 수도 있지만, 그래도 미리 고마워, 우리 오빠가 설마 답글을 안 달아줄 리가 없잖아, 절대 그럴 리 없지, 왜냐면 오빠는 엄청 마음이 약하니까, 이따가 나한테 답글 달아줄 때 오빠가 내 감사 인사를 못 볼까 봐 미리 전 우주에서 제일 최고로 잘생긴 오빠한테 감사 인사를 남겨‼️ 네가 최고야‼️@周翊然Tz",
        images: ["images/shaving.jpg"],
        actorReply: { originalText: "来了啊", translatedText: "등장" }
      },
      {
        id: 312,
        username: "藤孥Love-翊",
        originalText: "好玩吗这个迷你版赛车🙃",
        translatedText: "재밌어? 미니 레이싱카🙃",
        images: ["images/racing-assembly.jpg"],
        actorReply: { originalText: "拼起来要点时间😏", translatedText: "조립하는 데 시간 좀 걸리더라😏" }
      },
      {
        id: 313,
        username: "翊口韩式拌饭-Tz",
        originalText: "哥哥！耳洞打的时候疼不疼啊 我也想打 但怕疼 推荐一个给我😚",
        translatedText: "오빠！귀 뚫을 때 아파? 나도 뚫고 싶은데 아플까 봐 무서워 위치 한 곳만 추천해 줘😚",
        images: ["images/ear-gun.jpg"],
        actorReply: { originalText: "你打和我一个位置应该是最不疼的", translatedText: "너도 나랑 같은 위치에 뚫어 그럼 안 아플 거야" }
      },
      {
        id: 314,
        username: "我那比不直耶的男朋友",
        originalText: "然然 好奇手里是什么@周翊然Tz",
        translatedText: "익연아 궁금한 게 손에 들고 있는 거 뭐야?@周翊然Tz",
        images: ["images/hand-food.jpg"],
        actorReply: { originalText: "牛肉干！", translatedText: "육포！" }
      },
      {
        id: 315,
        username: "JuscHe",
        originalText: "好看的很😏 @周翊然Tz",
        translatedText: "엄청 멋있지😏 @周翊然Tz",
        images: ["images/cart-3shot.jpg"],
        actorReply: { originalText: "出门就能看f1是吧🙄", translatedText: "집 밖에만 나가면 바로 F1 볼 수 있겠네🙄" }
      },
      {
        id: 316,
        username: "周了个粥呀",
        originalText: "第一次发现你这么有绘画天赋",
        translatedText: "너가 이렇게 그림에 재능이 있는지 처음 알았어",
        images: ["images/sunflower-1shot.jpg"],
        actorReply: { originalText: "真的假的？？", translatedText: "진심이야？？" }
      },
      {
        id: 317,
        username: "只修兔纸Tz",
        originalText: "哥哥去重庆吃好吃的了吗❤️",
        translatedText: "오빠 충칭 가서 맛있는 거 먹었어?❤️",
        images: ["images/chongqing-noodle.jpg"],
        actorReply: { replyImages: ["images/jeonbyeong-food.jpg"] }
      },
      {
        id: 318,
        username: "白月光的月_tz",
        originalText: "如何🏎️？",
        translatedText: "레이싱 어때🏎️？",
        images: ["images/labubu-racing.jpg"],
        actorReply: { originalText: "？？ 这是你家吗", translatedText: "？？ 여기 너네 집이야?" }
      },
      {
        id: 319,
        username: "YZ翊小楠",
        originalText: "哥哥你是不是最近偷偷健身了🥱",
        translatedText: "오빠 최근에 몰래 운동 했지🥱",
        images: ["images/chongqing-v3.jpg"],
        actorReply: { originalText: "角度问题", translatedText: "각도 때문이야" }
      },
      {
        id: 320,
        username: "落知梦Tz",
        originalText: "说，这个视频你拍了多久？",
        translatedText: "대답해봐, 너 이 영상 찍는 데 얼마나 걸렸어 오래 걸렸지?",
        images: ["images/charles-challenge.jpg"],
        actorReply: { originalText: "一遍！", translatedText: "한 번에！" }
      },
      {
        id: 321,
        username: "yisiyiiiiii",
        originalText: "看这是谁",
        translatedText: "이게 누구인지 봐봐",
        images: ["images/red-cart.jpg"],
        actorReply: { originalText: "这个人看起来应该挺会开赛车的", translatedText: "보니까 레이싱 엄청 잘하게 생겼네" }
      },
      {
        id: 322,
        username: "追十七秒的日落",
        originalText: "哥哥 这次回重庆拍摄悦游好吗！快推荐一些重庆打卡地方👽",
        translatedText: "오빠 이번에 충칭 가서 트래블러(잡지) 촬영한 거 좋았어!빨리 충칭에 가볼 만한 곳 몇 군데만 추천해 줘👽",
        images: [],
        actorReply: { originalText: "大扶梯！ 真的很厉害 我还是第一次去", translatedText: "皇冠大扶梯(대형 에스컬레이터)！ 진짜 대박이더라 나도 이번에 처음 가봤어" }
      },
      {
        id: 323,
        username: "喝口QQ粥-",
        originalText: "哥哥你尚博勒的评分多少呀🫡",
        translatedText: "오빠 체임버 점수 몇 점이야🫡",
        images: ["images/chamber-card.jpg"],
        actorReply: { originalText: "400往上😏", translatedText: "400점 이상😏" }
      },
      {
        id: 324,
        username: "夜雨愀",
        originalText: "哥哥和偶像拍手势舞是啥感觉🥰 @周翊然Tz",
        translatedText: "오빠 우상이랑 같이 제스처 챌린지 찍을 때 기분이 어땠어🥰 @周翊然Tz",
        images: [],
        actorReply: { originalText: "爽！！！！", translatedText: "쩔었지！！！！" }
      },
      {
        id: 301,
        username: "周翊然Tz",
        originalText: "走啦 下次见各位🫡",
        translatedText: "갈게 다음에 보자🫡",
        images: [],
        actorReply: null
      }
    ]
  },
  {
    id: 5,
    date: "2026-02-16T20:07",
    weiboUrl: "https://weibo.com/5994946077/5267024815330726",
    originalText: "最后祝大家新年快乐 还是那句 希望大家天天开心 这很重要  我们多多见面🫡",
    translatedText: "마지막으로 모두 새해 복 많이 받고 항상 하는 말이지만 모두 매일 행복해야 돼 이게 제일 중요해 우리 자주 만나자 🫡",
    images: [],
    comments: [
      {
        id: 501,
        username: "周翊然Tz",
        originalText: "我也去蹭蹭烟花看看了🫡",
        translatedText: "나도 슬쩍 불꽃놀이 보러 갔다 왔어 🫡",
        images: [],
        actorReply: null
      }
    ]
  },
  {
    id: 6,
    date: "2026-01-23T00:08",
    weiboUrl: "https://weibo.com/5994946077",
    originalText: "睡觉了吗 大家",
    translatedText: "다들 자려나?",
    images: [],
    comments: [
      {
        id: 601,
        username: "周翊然Tz",
        originalText: "🙄刚吃完饭 现在去机场的路上",
        translatedText: "🙄방금 막 밥 다 먹고 지금 공항 가고 있어",
        images: [],
        actorReply: null
      },
      {
        id: 603,
        username: "烟竹阮桐粥",
        originalText: "！！翊然！！！出大事了，我在外面闯祸了，对方说要你的自拍50张，我还价还到500张了！！！快拍！😋😋 @周翊然Tz",
        translatedText: "！！익연아！！！큰일 났어, 내가 밖에서 사고 쳤는데, 상대방이 너 셀카 50장이 있어야 한다길래, 내가 흥정해서 500장으로 늘려놨어！！！！빨리 찍어줘! 😋😋 @周翊然Tz",
        images: ["images/copa-so.jpg"],
        actorReply: { originalText: "谢谢你啊", translatedText: "참 고맙네" }
      },
      {
        id: 604,
        username: "椰椰糕冷",
        originalText: "每次法拉利和茅妹打架最后谁赢啊哈哈",
        translatedText: "매번 페라리랑 마오타이랑 붙으면 마지막엔 누가 이길까 궁금ㅋㅋ",
        images: ["images/dogs-taekwondo.jpg"],
        actorReply: { originalText: "？？？", translatedText: "？？？" }
      },
      {
        id: 605,
        username: "烟竹阮桐粥",
        originalText: "这里有个老粉要翻车了，要不要帮忙翻一下？😭 @周翊然Tz",
        translatedText: "여기 고인물 팬 한 명 타기 직전인데, 뒤집어줄 생각 없어?(답댓 달아줄 생각 없어?) 😭 @周翊然Tz",
        images: ["images/dog-nose.jpg"],
        actorReply: { originalText: "🪏", translatedText: "🪏" }
      },
      {
        id: 606,
        username: "祈川十里春",
        originalText: "小然vlog剪得怎么样了！",
        translatedText: "익연아 브이로그 편집은 어떻게 돼가!",
        images: ["images/muscle-meme.jpg"],
        actorReply: { originalText: "后面的内容很稀疏哈哈哈", translatedText: "뒷부분 내용이 아주 조각조각이야ㅋㅋㅋ" }
      },
      {
        id: 607,
        username: "是我的小土豆-Tz",
        originalText: "然然你终于来了 我已经在被窝里了🛏️",
        translatedText: "익연이 드디어 왔구나 난 이미 이불 속이야🛏️",
        images: ["images/bed-meme.jpg"],
        actorReply: { originalText: "晚安哈哈哈", translatedText: "잘 자ㅋㅋㅋ" }
      },
      {
        id: 608,
        username: "烟竹阮桐粥",
        originalText: "茅妹现在在干嘛？💩 @周翊然Tz",
        translatedText: "마오타이 지금 뭐 하는 중? 💩 @周翊然Tz",
        images: ["images/maotai-tongue.jpg"],
        actorReply: { originalText: "理毛", translatedText: "그루밍" }
      },
      {
        id: 609,
        username: "咬一口脆皮年糕_",
        originalText: "哥哥在剪辑吗 我想你了",
        translatedText: "오빠 편집하고 있지? 보고 싶어",
        images: ["images/yiran-hostage.jpg"],
        actorReply: { originalText: "在的在的", translatedText: "하고 있지 하고 있어" }
      },
      {
        id: 610,
        username: "是我的小土豆-Tz",
        originalText: "你新打的耳洞看到了 恢复怎么样～",
        translatedText: "새로 귀걸이 한 거 봤어 귀는 좀 어때～",
        images: ["images/yiran-sunglasses.jpg"],
        actorReply: { originalText: "现在都正常了", translatedText: "지금은 다 괜찮아졌어" }
      },
      {
        id: 611,
        username: "桃子泡泡面er",
        originalText: "宝宝你看 我两天前打的耳洞！！",
        translatedText: "자기야 이것 봐 나 이틀 전에 귀 뚫었어！！",
        images: ["images/earring-new.jpg"],
        actorReply: { originalText: "好看！", translatedText: "예쁘네！" }
      },
      {
        id: 612,
        username: "樱花味的cherry",
        originalText: "哥哥吃法棍了吗？☺️",
        translatedText: "오빠 바게트 먹었어? ☺️",
        images: ["images/baguette-girl.jpg"],
        actorReply: { originalText: "差点把牙磕掉", translatedText: "이빨 다 부러질 뻔" }
      },
      {
        id: 613,
        username: "家有小狗i开车",
        originalText: "给我回复我的csgo段位能到S",
        translatedText: "나한테 답글 달아주면 나 카스 티어 S 찍는다",
        images: ["images/s-rank.jpg"],
        actorReply: { originalText: "我已经S了🫡", translatedText: "난 이미 S인데🫡" }
      },
      {
        id: 614,
        username: "家有小狗i开车",
        originalText: "周翊然给我回复！",
        translatedText: "주익연 답글 달아달라고！",
        images: ["images/wechat-capture.jpg"],
        actorReply: { 
          originalText: "", 
          translatedText: "",
          replyImages: ["images/watermelon-meme.gif"]
        }
      },
      {
        id: 615,
        username: "秃兮",
        originalText: "然然手势舞拍了多久😏",
        translatedText: "익연아 제스처 챌린지 찍는데 얼마나 오래 걸렸어?😏",
        images: ["images/dance-challenge.jpg"],
        actorReply: { originalText: "雨里拍了半个小时左右😂", translatedText: "빗속에서 30분 정도 찍었을 걸😂" }
      },
      {
        id: 616,
        username: "芝士椰啵脆",
        originalText: "宝宝我过几天要做个小手术好紧张怎么办",
        translatedText: "자기야 나 며칠 뒤에 작은 수술을 받아야 하는데 너무 긴장돼 어떡하지?",
        images: ["images/shy-meme.jpg"],
        actorReply: { originalText: "会没事的 不要紧张 🫡", translatedText: "다 잘 될 거야 긴장하지 마 🫡" }
      },
      {
        id: 617,
        username: "_周의粥",
        originalText: "宝宝这件衣服你到底有多喜欢，都破了还穿，是给我们开的\"加油窗口\"吗？不行我要第一个进场🙃",
        translatedText: "자기야 이 옷 얼마나 좋아하면 찢어졌는데도 입고 다녀, 우리 들어오라고 뚫어놓은 거야? 안 되겠다 내가 1등으로 들어간다🙃",
        images: ["images/torn-clothes.jpg"],
        actorReply: { originalText: "衣柜里拿到什么穿什么😂", translatedText: "옷장에 잡히는 대로 입은 건데😂" }
      },
      {
        id: 618,
        username: "家有小狗i开车",
        originalText: "oi 哥哥我今天生日！",
        translatedText: "oi 오빠 나 오늘 생일이야！",
        images: ["images/d-day-0.jpg"],
        actorReply: { originalText: "生日快乐！", translatedText: "생일 축하해！" }
      },
      {
        id: 619,
        username: "咬一口脆皮年糕_",
        originalText: "哥哥帮我选一个内耳钉",
        translatedText: "오빠 나 이너컨츠 피어싱 하나만 골라줘",
        images: ["images/earring-pick.jpg"],
        actorReply: { originalText: "第一个真的好看", translatedText: "첫 번째 거 제일 예쁘다" }
      },
      {
        id: 620,
        username: "锦鲤然子_",
        originalText: "你看！",
        translatedText: "이거 봐！",
        images: ["images/childhood-circle.jpg"],
        actorReply: { originalText: "有意思", translatedText: "좀 웃겼다" }
      },
      {
        id: 621,
        username: "梨涡加一又加一",
        originalText: "哥哥！！！我刚买！..是勒克莱尔年末在阿布扎比猛刷紫色的那辆车！！",
        translatedText: "오빠！！！ 방금 샀어！.. 연말에 르클레르가 아부다비에서 엄청 빨리 패스티스트 랩 찍었던 그 차！！",
        images: ["images/racing-kid.jpg"],
        actorReply: { originalText: "sf25", translatedText: "sf25" }
      },
      {
        id: 622,
        username: "司徒绾w",
        originalText: "宝宝猜猜这是什么品种",
        translatedText: "자기야 무슨 품종인지 맞춰봐",
        images: ["images/black-cat.jpg"],
        actorReply: { originalText: "哈吉米", translatedText: "哈吉米(고먐미 같은 고양이 애칭)" }
      },
      {
        id: 623,
        username: "Tttt_zzzy3199",
        originalText: "哥哥晚上一个人看怪奇物语好怕怎么办🤤",
        translatedText: "오빠 밤에 혼자 기묘한 이야기 보니까 무섭던데 어떡하지🤤",
        images: [],
        actorReply: { originalText: "那白天看🙄", translatedText: "그럼 낮에 보면 되지🙄" }
      },
      {
        id: 624,
        username: "婧然Tz-",
        originalText: "从法国回来第一件事是什么",
        translatedText: "프랑스에서 돌아와서 제일 먼저 한 일이 뭐야",
        images: [],
        actorReply: { originalText: "回家睡觉😂", translatedText: "집에 와서 취침😂" }
      },
      {
        id: 625,
        username: "Kiojydbxkwydnckdyebc",
        originalText: "吃小龙坎了吗 跟在四川吃的一个味道",
        translatedText: "샤오롱칸 먹었어? 사천에서 먹었던 맛이랑 똑같지",
        images: [],
        actorReply: { originalText: "吃了 还不错哈哈哈", translatedText: "먹었는데 은근 괜찮더라ㅋㅋㅋ" }
      },
      {
        id: 626,
        username: "要再见翊面",
        originalText: "翊总手势舞进步了~ 看来是背后偷偷练了",
        translatedText: "익연이 제스처 실력이 늘었더라~ 보아하니 뒤에서 몰래 연습한 것 같은데",
        images: [],
        actorReply: { originalText: "吃火锅的时候也在练", translatedText: "훠궈 먹을 때도 연습했어" }
      },
      {
        id: 627,
        username: "Yzraaaaaaaa",
        originalText: "哥哥最近想打耳洞 打完之后护理有什么tips吗",
        translatedText: "오빠 최근에 귀 뚫을까 고민 중인데 뚫고 나서 관리 팁 같은 거 있어?",
        images: [],
        actorReply: { originalText: "滴眼药水消炎好 具体名字忘了 还有红霉素眼膏真的不错", translatedText: "소염제 같은 걸로 소독해주면 좋아 정확한 이름이 기억이 안나네 그리고 안연고 같은 거 효과 진짜 좋아" }
      },
      {
        id: 602,
        username: "周翊然Tz",
        originalText: "睡一下 大家早点休息 别熬夜了 晚安😴😴😴",
        translatedText: "나 차에서 잠깐 눈 좀 붙일게 다들 일찍 자고 밤새지 마 잘 자😴😴😴",
        images: [],
        actorReply: null
      }
    ]
  }
];
