const posts = [
  {
    id: 1,
    date: "2026-05-22T23:32",
    weiboUrl: "https://weibo.com/u/5994946077",
    originalText: "我走了 大家早点休息！🧑‍🚀 大家好好照顾自己 也希望我和大家能一切顺利 希望评论区的锦鲤许的愿能实现",
    translatedText: "저 이만 갈게요 모두 일찍 쉬세요! 🧑‍🚀 모두 몸 잘 챙기시고, 저도 여러분도 모두 잘 됐으면 좋겠어요. 댓글창의 잉어들이 소원을 이룰 수 있기를 바라요",
    images: [],
    comments: [
      {
        id: 101,
        username: "yiiii___________",
        originalText: "占有欲发作了 现在马上告诉我你在干嘛 @周翊然Tz",
        translatedText: "독점욕 발동했어요 지금 당장 뭐하는지 말해줘요 @周翊然Tz",
        actorReply: {
          originalText: "在看你的表情包 😑",
          translatedText: "네 짤 보고 있잖아요 😑"
        }
      },
      {
        id: 102,
        username: "Dear-喇巴粥",
        originalText: "人。你在翻评论吗？@周翊然Tz",
        translatedText: "야. 댓글 보는 거예요? @周翊然Tz",
        actorReply: {
          originalText: "对的 人",
          translatedText: "맞아요 야"
        }
      },
      {
        id: 103,
        username: "周翊然Tz",
        originalText: "才落地 来得有点晚了 😵",
        translatedText: "방금 착륙했어요 좀 늦었네요 😵",
        actorReply: null
      },
      {
        id: 104,
        username: "Zz的小嘉Tz",
        originalText: "看看倒序吧哥😭 @周翊然Tz",
        translatedText: "역순으로 보세요 오빠😭 @周翊然Tz",
        actorReply: {
          originalText: "看到了！",
          translatedText: "봤어요!"
        }
      },
      {
        id: 105,
        username: "椰椰糕冷",
        originalText: "哥哥这是你第一次做蛤蜊煎吗！看着好好吃！",
        translatedText: "오빠 바지락 계란찜 처음 만드는 거예요?! 정말 맛있어 보여요!",
        actorReply: {
          originalText: "对啊 🐺",
          translatedText: "맞아요 🐺"
        }
      },
      {
        id: 106,
        username: "芝士椰啵脆",
        originalText: "宝宝如果小法和小茅会撕名牌，你觉得谁会赢？",
        translatedText: "만약 샤오파(페라리)랑 샤오마오(마오타이)가 명찰떼기 하면 누가 이길 것 같아요?",
        actorReply: {
          originalText: "🤦 难到我了",
          translatedText: "🤦 어렵네요"
        }
      },
      {
        id: 107,
        username: "翊分钟恋人z",
        originalText: "哥哥 人家沙爹撕你 你为什么要往前倒（沙爹对不起🙏）",
        translatedText: "오빠 사디에(캐릭터)가 오빠 명찰 뜯는데 왜 앞으로 넘어가요 (사디에 미안해요🙏)",
        actorReply: {
          originalText: "脑子宕机了…",
          translatedText: "머리가 멈췄어요…"
        }
      },
      {
        id: 108,
        username: "粥粥盐hioo7",
        originalText: "我好奇国外什么温度还能用到这个！！",
        translatedText: "해외에서 무슨 날씨에 저걸 쓰는 건지 궁금해요!!",
        actorReply: {
          originalText: "超级冷 早上晚上只有四度这样",
          translatedText: "엄청 추워요 아침저녁으로 4도밖에 안 돼요"
        }
      },
      {
        id: 109,
        username: "BianTaoTi-",
        originalText: "感觉这个番茄炒蛋比青椒炒肉卖相还好的样子 所以哪个好吃一些🤤",
        translatedText: "토마토 계란볶음이 청椒육사채볶음보다 더 맛있어 보이는데 어떤 게 더 맛있어요?🤤",
        actorReply: {
          originalText: "都挺好吃的啊",
          translatedText: "둘 다 맛있어요"
        }
      },
      {
        id: 110,
        username: "翊橘Tz_",
        originalText: "看我设计的美甲怎么样 还有很多你的元素 好看不 🧑‍🚀",
        translatedText: "제가 디자인한 네일 어때요 오빠 요소가 많이 들어갔어요 예쁘죠 🧑‍🚀",
        actorReply: {
          originalText: "好看！",
          translatedText: "예뻐요!"
        }
      },
      {
        id: 111,
        username: "小巴粥o",
        originalText: "哥哥，这个问题很重要快告诉我你做🍅炒🥚放糖了吗 🧑‍🚀",
        translatedText: "오빠, 이거 중요해요 빨리 말해줘요 🍅볶음🥚 만들 때 설탕 넣었어요? 🧑‍🚀",
        actorReply: {
          originalText: "我都吃咸的",
          translatedText: "저는 짠 거 먹어요"
        }
      },
      {
        id: 112,
        username: "翊口韩式拌饭-Tz",
        originalText: "哥哥你看！电脑作业画的三视图 你猜猜是哪个活动造型！（很简单哦！）但是我肤色颜色没抓好 难受🫳🏻求夸！",
        translatedText: "오빠 봐요! 컴퓨터 숙제로 그린 삼면도예요 어떤 활동 의상인지 맞춰봐요! (쉬워요!) 근데 피부색을 잘 못 잡았어요 속상해요🫳🏻 칭찬해주세요!",
        actorReply: {
          originalText: "我猜是apm",
          translatedText: "apm(활동)인 것 같은데요"
        }
      },
      {
        id: 113,
        username: "轻轻茉莉不加冰-",
        originalText: "你这个视频剪了多久！去哪进修了 🐺",
        translatedText: "이 영상 얼마나 편집한 거예요! 어디서 배워온 거예요 🐺",
        actorReply: {
          originalText: "我要能拍出来这样的 摄影师都可以下岗了 😑",
          translatedText: "제가 이렇게 찍을 수 있으면 촬영감독이 실직하겠죠 😑"
        }
      },
      {
        id: 114,
        username: "BianTaoTi",
        originalText: "你这次去法国有吃到什么好吃的发出来看看👀",
        translatedText: "이번에 프랑스 가서 맛있는 거 먹었어요? 올려줘요👀",
        actorReply: {
          originalText: "我自己做的饭好吃啊",
          translatedText: "제가 직접 만든 밥이 맛있어요"
        }
      },
      {
        id: 115,
        username: "白月光的月_tz",
        originalText: "这只喵好帅啊！！在法国和你们同住吗！！",
        translatedText: "이 고양이 너무 멋있어요!! 프랑스에서 같이 살아요!!",
        actorReply: {
          originalText: "一睡醒就跑进来了 🤦",
          translatedText: "자고 일어나자마자 뛰어 들어왔어요 🤦"
        }
      },
      {
        id: 116,
        username: "BianTaoTi-",
        originalText: "哥哥快看我今天拼豆拼的车车 知道是哪款车吗🤲🏻",
        translatedText: "오빠 오늘 제가 구슬로 만든 자동차 봐요 어떤 차인지 알아요?🤲🏻",
        actorReply: {
          originalText: "法拉利",
          translatedText: "페라리"
        }
      },
      {
        id: 117,
        username: "悲伤甜甜圈圈",
        originalText: "看到锦鲤许个愿吧",
        translatedText: "잉어 보고 소원 빌어요",
        actorReply: {
          originalText: "🙏希望我和评论区的所有人都一切顺利！！！",
          translatedText: "🙏 저와 댓글창의 모든 분들이 다 잘 됐으면 좋겠어요!!!"
        }
      },
      {
        id: 118,
        username: "舟上雨入愿",
        originalText: "哥 我明天会考！",
        translatedText: "오빠 저 내일 중학교 입시예요!",
        actorReply: {
          originalText: "加油！",
          translatedText: "파이팅!"
        }
      },
      {
        id: 119,
        username: "轻轻茉莉不加冰-",
        originalText: "这个黑黑的是什么！",
        translatedText: "이 까만 게 뭐예요!",
        actorReply: {
          originalText: "煤炭啊 🤦",
          translatedText: "석탄이잖아요 🤦"
        }
      },
      {
        id: 120,
        username: "樱花味的cherry",
        originalText: "厨艺进步了啊 🤧",
        translatedText: "요리 실력이 늘었네요 🤧",
        actorReply: {
          originalText: "🐺 没差过啊",
          translatedText: "🐺 원래부터 잘했는데요"
        }
      },
      {
        id: 121,
        username: "然然不转弯zz",
        originalText: "是自己做的吗哥哥",
        translatedText: "직접 만든 거예요 오빠",
        actorReply: {
          originalText: "你猜",
          translatedText: "맞춰봐요"
        }
      },
      {
        id: 122,
        username: "翊粒紫然Tz",
        originalText: "好看吗 🐱 拼了好长时间 🐶",
        translatedText: "예뻐요? 🐱 엄청 오래 만들었어요 🐶",
        actorReply: {
          originalText: "牛！",
          translatedText: "대박!"
        }
      },
      {
        id: 123,
        username: "安颜颜颜颜Tz",
        originalText: "然然 感觉做的蛤蜊煎蛋很美味 😋",
        translatedText: "연연 바지락 계란찜 정말 맛있어 보여요 😋",
        actorReply: {
          originalText: "🐺",
          translatedText: "🐺"
        }
      },
      {
        id: 124,
        username: "忙内专家",
        originalText: "你猜这是什么",
        translatedText: "이게 뭔지 맞춰봐요",
        actorReply: {
          originalText: "巧克力？",
          translatedText: "초콜릿?"
        }
      },
      {
        id: 125,
        username: "黄忆一个秋hyq",
        originalText: "看上哪盘菜了 我帮你吃",
        translatedText: "어떤 요리가 맘에 들어요 제가 대신 먹어줄게요",
        actorReply: {
          originalText: "看图的就知道ip在哪儿",
          translatedText: "사진 보면 어디 있는지 알겠죠"
        }
      },
      {
        id: 126,
        username: "祈川十里春",
        originalText: "这样搭配真的好吃吗😭",
        translatedText: "이렇게 조합하면 진짜 맛있어요?😭",
        actorReply: {
          originalText: "哦不对 是两个字 🤦",
          translatedText: "아 아니다 두 글자예요 🤦"
        }
      },
      {
        id: 127,
        username: "喝口QQ粥-",
        originalText: "哥哥最近有单曲循环的歌吗",
        translatedText: "오빠 요즘 반복 재생하는 노래 있어요?",
        actorReply: {
          originalText: "此时此刻 🎵",
          translatedText: "지금 이 순간 🎵"
        }
      },
      {
        id: 128,
        username: "·抹茶麦旋风·",
        originalText: "哥哥会不会颠锅翻面呀！！🤭",
        translatedText: "오빠 팬 흔들어서 뒤집을 수 있어요?!!🤭",
        actorReply: {
          originalText: "难道没看到我预告中那快离地一米的翻面吗",
          translatedText: "예고편에서 거의 1미터 뜬 뒤집기 못 봤어요?"
        }
      },
      {
        id: 129,
        username: "翊婉小新Tz",
        originalText: "你猜猜是什么猅？😋",
        translatedText: "이게 뭔지 맞춰봐요?😋",
        actorReply: {
          originalText: "我猜鸡肉",
          translatedText: "닭고기인 것 같은데요"
        }
      },
      {
        id: 130,
        username: "翊条鱼鱼tz",
        originalText: "哥哥这个表情包你喜欢不👀👀",
        translatedText: "오빠 이 짤 좋아요?👀👀",
        actorReply: {
          originalText: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
          translatedText: "하하하하하하하하하하하하하하하하하하"
        }
      }
    ]
  }
];
