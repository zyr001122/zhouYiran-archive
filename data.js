const SITE_CONFIG = {
  actorName: "周翊然",
  actorNameKr: "주익연",
  actorNameEn: "Zhou Yiran",
  primaryColor: "#F7A4B8",
  weiboLink: "https://weibo.com",
  description: "周翊然 웨이보 한국어 번역 아카이브"
};

const posts = [
  {
    id: 1,
    date: "2025-05-20",
    weiboUrl: "https://weibo.com",
    originalText: "今天拍戏很辛苦，但是看到大家的留言，心情一下子好起来了。谢谢你们一直陪着我，我会继续努力的！",
    translatedText: "오늘 촬영이 정말 힘들었는데, 여러분의 댓글을 보니 기분이 확 좋아졌어요. 항상 곁에 있어줘서 고마워요, 저도 계속 열심히 할게요!",
    images: [],
    likes: 48203,
    comments: [
      {
        id: 101,
        isActor: false,
        username: "翊然守护站",
        originalText: "翊然辛苦了！我们永远支持你！",
        translatedText: "익연아 수고했어요! 우리는 영원히 응원해요!",
        likes: 1203,
        actorReply: {
          originalText: "谢谢你们，我收到了！",
          translatedText: "고마워요, 잘 받았어요!"
        }
      },
      {
        id: 102,
        isActor: false,
        username: "星星眼周粉",
        originalText: "看到你就开心！加油翊然！",
        translatedText: "당신을 보면 행복해요! 파이팅 익연!",
        likes: 892,
        actorReply: null
      }
    ],
    tags: ["일상", "팬소통"]
  },
  {
    id: 2,
    date: "2025-05-15",
    weiboUrl: "https://weibo.com",
    originalText: "新剧杀青！感谢剧组所有人，这段时间我学到了很多。请大家期待！",
    translatedText: "새 드라마 촬영이 끝났어요! 드라마 제작진 모두에게 감사해요, 이 기간 동안 많이 배웠습니다. 많이 기대해 주세요!",
    images: ["https://picsum.photos/seed/zyr1/600/400", "https://picsum.photos/seed/zyr2/600/400"],
    likes: 102847,
    comments: [
      {
        id: 201,
        isActor: false,
        username: "周翊然全球后援",
        originalText: "恭喜杀青！等待新剧！",
        translatedText: "촬영 완료 축하해요! 새 드라마 기다릴게요!",
        likes: 3401,
        actorReply: {
          originalText: "大家要好好吃饭，等我哦~",
          translatedText: "밥 잘 챙겨드세요, 저 기다려줘요~"
        }
      }
    ],
    tags: ["촬영완료", "새드라마"]
  }
];
