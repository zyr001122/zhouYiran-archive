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
        id: 100,
        username: "周翊然Tz",
        originalText: "我走了 大家早点休息！🧑‍🚀 大家好好照顾自己 也希望我和大家能一切顺利 希望评论区的锦鲤许的愿能实现",
        translatedText: "나 이제 갈게 다들 일찍 쉬어 🧑‍🚀 다들 몸 잘 챙기고 우리 다 모든 일이든 잘 풀릴 거야 댓글에 있던 행운의 잉어한테 빈 소원들이 다 이루어지면 좋겠다",
        images: [],
        actorReply: null
      },
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
        images: ["images/food-qingjiao-porridge.jpg"],
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
        actorReplies: [
          {
            originalText: "一个字 绝了",
            translatedText: "한마디로 끝"
          },
          {
            originalText: "哦不对 是两个字 🤦",
            translatedText: "아 아니네 두 글자구나 🤦🏻"
          }
        ],
        actorReply: null
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
  },
  {
    id: 2,
    date: "2026-04-22T20:30",
    weiboUrl: "https://weibo.com/5994946077/5290585814469338",
    originalText: "周翊然超话 来了",
    translatedText: "주익연 초화 왔어",
    images: [],
    comments: [
      {
        id: 201,
        username: "周翊然Tz",
        originalText: "最后分享一张 上班的照片 我先走了下次见！！",
        translatedText: "마지막으로 출근 사진 한 장 공유할게 나 먼저 갈게 다음에 봐!!",
        images: ["images/work-back.jpg"],
        actorReply: null
      },
      {
        id: 202,
        username: "只吃两碗饭-",
        originalText: "请问这位训狗届最严厉的父亲 茅妹和拉瑞除了坐下和不准吃开发出什么新技能了吗！🙊",
        translatedText: "반려견 훈련계의 가장 엄격한 아버님께 여쭙니다 마오메이랑 라루이는 앉아랑 먹지 마 말고 새로 개발한 개인기 있어?! 🙊",
        images: ["images/maotai-hat.jpg"],
        actorReply: {
          originalText: "还有 站起来",
          translatedText: "그리고 일어서기"
        }
      },
      {
        id: 203,
        username: "翊分钟恋人z",
        originalText: "哥哥难道你当时在copy这个？",
        translatedText: "오빠 설마 너 그때 이거 카피하고 있었던 거야?",
        images: ["images/valorant-chamber.jpg"],
        actorReply: {
          originalText: "那个时候我还没有玩这个游戏🙄",
          translatedText: "그때 난 아직 이 게임 안 했었어 🙄"
        }
      },
      {
        id: 204,
        username: "熹然Z相逢",
        originalText: "翊然，此时此刻看着它，你在想什么呢～",
        translatedText: "익연아 지금 이 순간 이걸 보면서 무슨 생각 하고 있어~",
        images: ["images/black-sportscar.jpg"],
        actorReply: {
          originalText: "在想 弄什么涂装好看",
          translatedText: "어떤 랩핑 해야 예쁠까 생각 중"
        }
      },
      {
        id: 205,
        username: "魚肉蛋黄酥o_",
        originalText: "哥哥 送你一个表情包 请收好🤔",
        translatedText: "오빠 조공 하나 할게 잘 받아 🤔",
        images: ["images/ferrari-headset.jpg"],
        actorReply: {
          originalText: "法拉利什么段位哈哈哈哈",
          translatedText: "페라리 티어가 어떻게 돼 ㅋㅋㅋㅋ"
        }
      },
      {
        id: 206,
        username: "翊分钟恋人z",
        originalText: "给假面骑士 滑雪 开车 打瓦排个名 我好想知道现在假面骑士排第几🤭🤭",
        translatedText: "가면라이더 스키 운전 발로란트 순위 좀 매겨줘 지금 가면라이더가 몇 등인지 너무 알고 싶어 🤭🤭",
        images: ["images/figure-ski.jpg"],
        actorReply: {
          originalText: "每个季节 有每个季节该做的事情🫡",
          translatedText: "계절마다 그 계절에 해야 할 일이 있어 🫡"
        }
      },
      {
        id: 207,
        username: "轻轻茉莉不加冰-",
        originalText: "哥哥 给你看我新换的耳钉🫡",
        translatedText: "오빠 나 새로 바꾼 귀걸이 보여줄게 🫡",
        images: ["images/earring-shinchan.jpg"],
        actorReply: {
          originalText: "好看 蜡笔小新也很可爱",
          translatedText: "예뻐 짱구도 귀엽네"
        }
      },
      {
        id: 208,
        username: "亿口甜粥_",
        originalText: "哥哥这是去当赛车拉拉队了吗 体验感怎么样👀",
        translatedText: "오빠 이번에 레이싱 응원단 하러 간 거야 체감 어때 👀",
        images: ["images/racing-staff.jpg"],
        actorReply: {
          originalText: "不如自己开👀",
          translatedText: "직접 운전하는 것만 못해 👀"
        }
      },
      {
        id: 209,
        username: "樱花味的cherry",
        originalText: "哥哥你的微博有没有语音评论的功能呀",
        translatedText: "오빠 웨이보에 음성 댓글 기능 없어?",
        images: ["images/maotai-forehead.jpg"],
        actorReply: {
          originalText: "看了一下 没有",
          translatedText: "방금 봤는데 없어"
        }
      },
      {
        id: 210,
        username: "BianTaoTi-",
        originalText: "你怎么只喷这个贴纸 你没有别的喷漆图案了吗哈哈哈哈😂",
        translatedText: "너 왜 이 스티커만 뿌려 다른 스프레이 도안은 없어 ㅋㅋㅋㅋ 😂",
        images: ["images/valorant-sticker.jpg"],
        actorReply: {
          originalText: "这是给队友点赞用的",
          translatedText: "이건 팀원들한테 좋아요 누르는 용도야"
        }
      },
      {
        id: 211,
        username: "只吃两碗饭-",
        originalText: "老公给你分享两张刚洗出来的胶片~要是我有间暗房能自己洗胶卷就好了！！🧑‍🧒‍🧒",
        translatedText: "여보 방금 인화한 필름 사진 두 장 공유할게~ 나한테 암실이 있어서 필름 직접 현상할 수 있으면 얼마나 좋을까!! 🧑‍🧒‍🧒",
        images: ["images/alley.jpg", "images/china-film.jpg"],
        actorReply: {
          originalText: "自己洗照片  厉害啊",
          translatedText: "사진을 직접 인화하다니 대단하네"
        }
      },
      {
        id: 212,
        username: "尴尬家小柴",
        originalText: "送你一个表情包🤩",
        translatedText: "짤 하나 선물할게 🤩",
        images: ["images/dog-laydown.jpg"],
        actorReply: {
          originalText: "哈哈哈哈哈哈哈",
          translatedText: "ㅋㅋㅋㅋㅋㅋㅋ"
        }
      },
      {
        id: 213,
        username: "王一本啊",
        originalText: "看我听到了什么，春日部版Beauty And A Beat",
        translatedText: "내가 뭘 들었는지 좀 봐 카스카베 버전 Beauty And A Beat",
        images: ["images/beauty-beat.jpg"],
        actorReply: {
          originalText: "？？？",
          translatedText: "???"
        }
      },
      {
        id: 214,
        username: "小狗蔓越莓",
        originalText: "哥哥现在在干嘛发个照片报备一下",
        translatedText: "오빠 지금 뭐 해 사진 올려서 보고해 줘",
        images: ["images/ribbon-dog.jpg"],
        actorReply: {
          originalText: "",
          translatedText: "",
          replyImages: ["images/xianxia-movie.jpg"]
        }
      },
      {
        id: 215,
        username: "祈川十里春",
        originalText: "这么大一条鱼钓了多久呀？要不要考虑分享一下钓鱼技术！",
        translatedText: "이렇게 큰 물고기를 낚는 데 얼마나 걸렸어? 낚시 기술 좀 공유해 줄 생각 없어?",
        images: ["images/fishing-bw.jpg"],
        actorReply: {
          originalText: "遛鱼十分钟",
          translatedText: "물고기랑 힘겨루기 10분"
        }
      },
      {
        id: 216,
        username: "Campbe_眠雪碎眠悸",
        originalText: "最近我皮肤真的不是很好，他们都让我自己补充点维生素，但是我根本不需要那玩意，因为你就是我的维E。",
        translatedText: "요즘 내 피부가 진짜 별로라 다들 나보고 비타민 좀 챙겨 먹으라는데 난 그런 거 전혀 필요 없어 왜냐면 네가 내 비타민E니까.",
        images: ["images/mint-meme.jpg"],
        actorReply: {
          originalText: "…..",
          translatedText: "….."
        }
      },
      {
        id: 217,
        username: "Eternal-翊序哼痣",
        originalText: "人太多了，不喜欢，标记一下，走了，记得回复",
        translatedText: "사람이 너무 많아서 별로야 마크하고 갈게 답장 기억해 줘",
        images: ["images/baby-cat.jpg"],
        actorReply: {
          originalText: "OKOK",
          translatedText: "OKOK"
        }
      },
      {
        id: 218,
        username: "忙内专家",
        originalText: "猜你想念重庆的火锅了",
        translatedText: "네가 충칭 훠궈 그리워하고 있을 거라고 추측 중",
        images: ["images/hotpot1.jpg", "images/hotpot2.jpg"],
        actorReply: {
          originalText: "又来诱惑我🙂",
          translatedText: "또 나 유혹하네 🙂"
        }
      },
      {
        id: 219,
        username: "喝口QQ粥-",
        originalText: "哥哥你这拍的是什么呀 看半天没有看出来是什么",
        translatedText: "오빠 이거 뭘 찍은 거야 한참 봐도 뭔지 모르겠어",
        images: ["images/leaf-tree.jpg"],
        actorReply: {
          originalText: "树上全是公鸡 看不出来吧哈哈哈",
          translatedText: "나무 위에 수탉이 가득해 안 보이지 ㅋㅋㅋ"
        }
      },
      {
        id: 220,
        username: "Michelleq_0915",
        originalText: "哥哥请选择你的英雄",
        translatedText: "오빠 너의 영웅을 선택해 줘",
        images: ["images/racing-green.jpg", "images/naci-green.jpg", "images/purple-hat-green.jpg"],
        actorReply: {
          originalText: "画得很好啊",
          translatedText: "잘 그렸네"
        }
      }
    ]
  }
];
