// 도우인(抖音) "Zz的眼睛" 계정 아카이브.
// 계정이 폭파(삭제)되어 원본 영상은 유튜브 재업로드 embed로 대체.
// youtubeUrl: 영상 링크 확보되는 대로 채워 넣을 것 (현재 전부 null, 확보 전까지 미디어 없이 텍스트만 노출됨)
const douyinPosts = [
{ id: 220901, date: "2022-09-21", youtubeUrl: "https://youtube.com/shorts/SAWCBBNx008?feature=share", images: [], originalText: "好像秋天真的来了", translatedText: "이제 진짜 가을이 온 것 같아" },
{ id: 221001, date: "2022-10-20", youtubeUrl: "https://youtu.be/NFMRlC90I5M", images: [], originalText: "🍂", translatedText: "🍂" },
{ id: 230201, date: "2023-02-12", youtubeUrl: "https://youtu.be/eqZP-i0SBeI", images: [], originalText: "新疆碎片", translatedText: "신장 조각" },
{ id: 240201, date: "2024-02-16", youtubeUrl: "https://youtube.com/shorts/uXgBIz4r9jU?feature=share", images: [], originalText: "赶个尾巴🧨", translatedText: "막차 탔어🧨" },
{ id: 240501, date: "2024-05-11", youtubeUrl: null, images: [], originalText: "天黑前", translatedText: "해지기 전" },
{ id: 240701, date: "2024-07-04", youtubeUrl: "https://youtube.com/shorts/N4qfJ6vAixY?feature=share", images: [], originalText: "🧊", translatedText: "🧊" },
{ id: 241101, date: "2024-11-22", youtubeUrl: "https://youtu.be/GFtTIP3J4io", images: [], originalText: "❤️", translatedText: "❤️" },
{ id: 250301, date: "2025-03-09", youtubeUrl: "https://youtube.com/shorts/ZkckZ-8M-6Y?feature=share", images: [], originalText: "巴黎碎片", translatedText: "파리 조각" },
{ id: 250401, date: "2025-04-17", youtubeUrl: "https://youtu.be/yxSXGjOKvU8", images: [], originalText: "成都碎片", translatedText: "청두 조각" },
{ id: 250501, date: "2025-05-19", youtubeUrl: "https://youtube.com/shorts/yWe_DM7g598?feature=share", images: [], originalText: "桃花坞碎片", translatedText: "도화오 조각" },
{ id: 250701, date: "2025-07-01", youtubeUrl: "https://youtube.com/shorts/Z3CaLwpglz4?feature=share", images: [], originalText: "桃花坞碎片", translatedText: "도화오 조각" },
{ id: 250702, date: "2025-07-23", youtubeUrl: "https://youtube.com/shorts/tEfNL01Wc0o?feature=share", images: [], originalText: "日常碎片", translatedText: "일상 조각" },
{ id: 251001, date: "2025-10-21", youtubeUrl: "https://youtube.com/shorts/k87cPtcc8V4?feature=share", images: [], originalText: "钓鱼碎片", translatedText: "낚시 조각" },
{ id: 251101, date: "2025-11-17", youtubeUrl: "https://youtube.com/shorts/-HFSNhPjQSY?feature=share", images: [], originalText: "新加坡碎片", translatedText: "싱가포르 조각" },
{ id: 251201, date: "2025-12-17", youtubeUrl: null, images: [], originalText: "⬆️", translatedText: "⬆️" },
{ id: 260201, date: "2026-02-17", youtubeUrl: "https://youtube.com/shorts/CqqOLznzreo?feature=share", images: [], originalText: "\"至少我们现在看的是同一场烟花\"（新年快乐🎆", translatedText: "\"적어도 지금 우리는 같은 불꽃놀이를 보고 있어\"（새해 복 많이 받아🎆" },
{ id: 260301, date: "2026-03-26", youtubeUrl: "https://youtube.com/shorts/D0iRSIg0jQ4?feature=share", images: [], originalText: "🚢🐟🏎️", translatedText: "🚢🐟🏎️" },
{ id: 260401, date: "2026-04-09", youtubeUrl: null, images: [], originalText: "大胖子你好👋", translatedText: "大胖子你好👋" }, // TODO: 번역 확인 필요 (대상 확인 중)
{ id: 260402, date: "2026-04-18", youtubeUrl: null, images: [], originalText: "限时日常", translatedText: "잠깐 공개 일상" },
{ id: 260403, date: "2026-04-24", youtubeUrl: "https://youtube.com/shorts/YcClh9OH7go?feature=share", images: [], originalText: "等待Iceman的第N天", translatedText: "Iceman 기다린 지 N일째" },
{ id: 260501, date: "2026-05-08", youtubeUrl: "https://youtube.com/shorts/elUWmfr3bfE?feature=share", images: [], originalText: "🫡🫡🫡", translatedText: "🫡🫡🫡" },
{ id: 260502, date: "2026-05-21", youtubeUrl: "https://youtube.com/shorts/Qfdj5b3ZoMA?feature=share", images: [], originalText: "🐱", translatedText: "🐱" },
{ id: 260601, date: "2026-06-07", youtubeUrl: null, images: [], originalText: "☀️", translatedText: "☀️" },
{ id: 260602, date: "2026-06-16", youtubeUrl: "https://youtube.com/shorts/v6VmvG8jpEE?feature=share", images: [], originalText: "🧩", translatedText: "🧩" }
];
