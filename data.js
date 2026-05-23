const posts = [
  {
    id: 1,
    date: "2026-05-22T23:32",
    weiboUrl: "https://weibo.com/u/5994946077",
    originalText: "我走了 大家早点休息！🧑‍🚀 大家好好照顾自己 也希望我和大家能一切顺利 希望评论区的锦鲤许的愿能实现",
    translatedText: "나 이제 갈게 다들 일찍 쉬어 🧑‍🚀 다들 몸 잘 챙기고 우리 다 모든 일이든 잘 풀릴 거야 댓글에 있던 행운의 잉어한테 빈 소원들이 다 이루어지면 좋겠다",
    images: [],
    comments: [
      {
        id: 101,
        username: "yiiii___________",
        originalText: "占有欲发作了 现在马上告诉我你在干嘛 @周翊然Tz",
        translatedText: "소유욕 발동 지금 당장 뭐 하고 있는지 말해줘 @周翊然Tz",
        images: ["images/cat-white.jpg"],
        actorReply: {
          originalText: "在看你的表情包 😑",
          translatedText: "네 짤 보고 있어 😑"
        }
      },
      {
        id: 102,
        username: "Dear-喇巴粥",
        originalText: "人。你在翻评论吗？@周翊然Tz",
        translatedText: "야, 댓글 내리고 있었지 @周翊然Tz",
        images: ["images/cat-green.jpg"],
        actorReply: {
          originalText: "对的 人",
          translatedText: "맞음"
        }
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
        actorReply: {
          originalText: "看到了！",
          translatedText: "봤어!"
        }
      },
      {
        id: 105,
        username: "椰椰糕冷",
        originalText: "哥哥这是你第一次做蛤蜊煎吗！看着好好吃！",
        translatedText: "오빠 이거 처음 만들어보는 굴전이야?! 진짜 맛있어 보여",
        images: ["images/food-egg.jpg"],
        actorReply: {
          originalText: "对啊 😏",
          translatedText: "맞아 😏"
        }
      },
      {
        id: 106,
        username: "芝士椰啵脆",
        originalText: "宝宝如果小法和小茅会撕名牌，你觉得谁会赢？",
        translatedText: "자기야 만약에 페라리랑 마오타이가 이름표 뜯기 하면 누가 이길 것 같아",
        images: ["images/ferrari-maotai.jpg"],
        actorReply: {
          originalText: "🤦 难到我了",
          translatedText: "🤦 난처해지네"
        }
      },
      {
        id: 107,
        username: "翊分钟恋人z",
        originalText: "哥哥 人家沙爹撕你 你为什么要往前倒（沙爹对不起🙏）",
        translatedText: "오빠 이름표 뜯기는 건 사테오빤데 왜 오빠가 앞으로 넘어졌어 (사테 미안 🙏)",
        images: ["images/variety-uncle.jpg"],
        actorReply: {
          originalText: "脑子宕机了…",
          translatedText: "뇌 정지와서…"
        }
      },
      {
        id: 108,
        username: "粥粥盐hioo7",
        originalText: "我好奇国外什么温度还能用到这个！！",
        translatedText: "거기는 날씨가 어떻길래 아직도 이걸 쓰는지 궁금해",
        images: ["images/campfire.jpg"],
        actorReply: {
          originalText: "超级冷 早上晚上只有四度这样",
          translatedText: "엄청 추워 아침 저녁으로 해봤자 4도 밖에 안 돼"
        }
      },
      {
        id: 109,
        username: "BianTaoTi-",
        originalText: "感觉这个番茄炒蛋比青椒炒肉卖相还好的样子 所以哪个好吃一些🤤",
        translatedText: "이 토달볶이 친자오로스보다 비주얼이 더 좋아 보이는데 뭐가 더 맛있어 🤤",
        images: ["images/food-qingjiao-egg.jpg"],
        actorReply: {
          originalText: "都挺好吃的啊",
          translatedText: "둘 다 꽤 맛있어"
        }
      },
      {
        id: 110,
        username: "翊橘Tz_",
        originalText: "看我设计的美甲怎么样 还有很多你的元素 好看不 🧑‍🚀",
        translatedText: "내가 디자인한 네일아트 어때 오빠랑 관련된 포인트도 많이 들어가 있어 예쁘지 🧑‍🚀",
        images: ["images/nail.jpg"],
        actorReply: {
          originalText: "好看！",
          translatedText: "예쁘다"
        }
      },
      {
        id: 111,
        username: "小巴粥o",
        originalText: "哥哥，这个问题很重要快告诉我你做🍅炒🥚放糖了吗 🧑‍🚀",
        translatedText: "오빠 이 질문 정말 중요하니까 빨리 말해줘 토마토 🍅 달걀 🍳 볶음 만들 때 설탕 넣었어? 🧑‍🚀",
        images: ["images/food-qingjiao-rice.jpg"],
        actorReply: {
          originalText: "我都吃咸的",
          translatedText: "난 다 짜게 먹어"
        }
      },
      {
        id: 112,
        username: "翊口韩式拌饭-Tz",
        originalText: "哥哥你看！电脑作业画的三视图 你猜猜是哪个活动造型！（很简单哦！）但是我肤色颜色没抓好 难受🫳🏻求夸！",
        translatedText: "오빠 이것 봐 컴퓨터 과제로 그린 삼면도인데 어떤 행사 스타일링인지 맞춰봐 (엄청 쉬워) 근데 내가 피부색 톤을 잘 못 잡아서 속상해 🫳🏻 칭찬해 줘",
        images: ["images/hair-pink.jpg"],
        actorReply: {
          originalText: "我猜是apm",
          translatedText: "APM 행사 때?"
        }
      },
      {
        id: 113,
        username: "轻轻茉莉不加冰-",
        originalText: "你这个视频剪了多久！去哪进修了 😏",
        translatedText: "이 영상 편집하는 데 얼마나 걸렸어 어디 가서 배워온 거야 😏",
        images: ["images/racing.jpg"],
        actorReply: {
          originalText: "我要能拍出来这样的 摄影师都可以下岗了 😑",
          translatedText: "내가 이런 걸 찍어낼 수 있다면 촬영 감독님들은 다 실직하셔야 해 😑"
        }
      },
      {
        id: 114,
        username: "BianTaoTi",
        originalText: "你这次去法国有吃到什么好吃的发出来看看👀",
        translatedText: "이번에 프랑스 가서 맛있게 먹은 거 있으면 올려줘 👀",
        images: ["images/crayon-shin.jpg"],
        actorReply: {
          originalText: "我自己做的饭好吃啊",
          translatedText: "내가 직접 만든 밥이 맛있던데"
        }
      },
      {
        id: 115,
        username: "白月光的月_tz",
        originalText: "这只喵好帅啊！！在法国和你们同住吗！！",
        translatedText: "고양이 진짜 잘생겼다 프랑스 숙소에서 너희랑 같이 지낸 거야?!!",
        images: ["images/cat.jpg"],
        actorReply: {
          originalText: "一睡醒就跑进来了 😹",
          translatedText: "자고 일어나니까 뛰어 들어왔어 😹"
        }
      },
      {
        id: 116,
        username: "BianTaoTi-",
        originalText: "哥哥快看我今天拼豆拼的车车 知道是哪款车吗🤲🏻",
        translatedText: "오빠 내가 오늘 펄러비즈로 맞춘 차 좀 빨리 봐봐 무슨 차인지 알겠어 🤲🏻",
        images: ["images/racing-model.jpg"],
        actorReply: {
          originalText: "法拉利",
          translatedText: "페라리"
        }
      },
      {
        id: 117,
        username: "悲伤甜甜圈圈",
        originalText: "看到锦鲤许个愿吧",
        translatedText: "행운의 잉어를 봤으니 소원 빌어봐",
        images: ["images/fish-koi.jpg"],
        actorReply: {
          originalText: "🙏希望我和评论区的所有人都一切顺利！！！",
          translatedText: "🙏 나랑 댓글에 있는 모든 사람들 다 모든 일이 다 잘 풀리길"
        }
      },
      {
        id: 118,
        username: "舟上雨入愿",
        originalText: "哥 我明天会考！",
        translatedText: "오빠 나 내일 졸업시험이야",
        images: ["images/score.jpg"],
        actorReply: {
          originalText: "加油！",
          translatedText: "파이팅!"
        }
      },
      {
        id: 119,
        username: "轻轻茉莉不加冰-",
        originalText: "这个黑黑的是什么！",
        translatedText: "이거 까맣게 생긴 건 뭐야?",
        images: ["images/coal.jpg"],
        actorReply: {
          originalText: "煤炭啊 😹",
          translatedText: "석탄이지 😹"
        }
      },
      {
        id: 120,
        username: "樱花味的cherry",
        originalText: "厨艺进步了啊 🤧",
        translatedText: "요리 실력 늘었네 🤧",
        images: ["images/egg.jpg", "images/food-qingjiao-porridge.jpg"],
        actorReply: {
          originalText: "😏 没差过啊",
          translatedText: "😏 나빴던 적이 없는데"
        }
      },
      {
        id: 121,
        username: "然然不转弯zz",
        originalText: "是自己做的吗哥哥",
        translatedText: "오빠가 직접 만든 거야?",
        images: ["images/food-qingjiao-cook.jpg"],
        actorReply: {
          originalText: "你猜",
          translatedText: "맞춰봐"
        }
      },
      {
        id: 122,
        username: "翊粒紫然Tz",
        originalText: "好看吗 拼了好长时间",
        translatedText: "예쁘지 오랫동안 맞췄어",
        images: ["images/racing-purple.jpg"],
        actorReply: {
          originalText: "牛！",
          translatedText: "짱이다!"
        }
      },
      {
        id: 123,
        username: "安颜颜颜颜Tz",
        originalText: "然然 感觉做的蛤蜊煎蛋很美味 😋",
        translatedText: "익연이가 만든 굴계란전 엄청 맛있어 보이는데 😋",
        images: ["images/food-zyr.jpg"],
        actorReply: {
          originalText: "😏",
          translatedText: "😏"
        }
      },
      {
        id: 124,
        username: "忙内专家",
        originalText: "你猜这是什么",
        translatedText: "이게 뭔지 맞춰봐",
        images: ["images/candy-choco.jpg"],
        actorReply: {
          originalText: "巧克力？",
          translatedText: "초콜릿?"
        }
      },
      {
        id: 125,
        username: "黄忆一个秋hyq",
        originalText: "看上哪盘菜了 我帮你吃",
        translatedText: "어떤 요리가 마음에 들어 내가 대신 먹어줄게",
        images: ["images/food-chongqing.jpg"],
        actorReply: {
          originalText: "看图的就知道ip在哪儿",
          translatedText: "사진만 봐도 IP가 어디인지 알겠네"
        }
      },
      {
        id: 126,
        username: "祈川十里春",
        originalText: "这样搭配真的好吃吗😭",
        translatedText: "이 조합 진짜 맛있는 거 맞아? 😭",
        images: ["images/food-qingjiao-porridge.jpg"],
        actorReply: {
          originalText: "哦不对 是两个字 🤦",
          translatedText: "아 아니네 두 글자구나 🤦🏻"
        }
      },
      {
        id: 127,
        username: "喝口QQ粥-",
        originalText: "哥哥最近有单曲循环的歌吗",
        translatedText: "요즘 한 곡 반복 재생하는 노래 있어?",
        images: ["images/cat-meme.jpg"],
        actorReply: {
          originalText: "此时此刻 🎵",
          translatedText: "딱 지금 <妥协> 🎵"
        }
      },
      {
        id: 128,
        username: "·抹茶麦旋风·",
        originalText: "哥哥会不会颠锅翻面呀！！🤭",
        translatedText: "오빠 웍질로 뒤집는 거 할 줄 알아? 🤭",
        images: ["images/food-egg-drawing.jpg"],
        actorReply: {
          originalText: "难道没看到我预告中那快离地一米的翻面吗",
          translatedText: "예고편에서 내가 땅에서 거의 1미터 높이로 뒤집는 거 못 봤어?"
        }
      },
      {
        id: 129,
        username: "翊碗小新Tz",
        originalText: "你猜猜是什么猅？😋",
        translatedText: "무슨 고기인지 맞춰봐 😋",
        images: ["images/food-meat.jpg"],
        actorReply: {
          originalText: "我猜鸡肉",
          translatedText: "닭고기 같은데"
        }
      },
      {
        id: 130,
        username: "翊条鱼鱼tz",
        originalText: "哥哥这个表情包你喜欢不👀👀",
        translatedText: "오빠 이 짤 맘에 들어? 👀👀",
        images: ["images/meme-bug.jpg"],
        actorReply: {
          originalText: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          translatedText: "ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ"
        }
      }
    ]
  }
];
