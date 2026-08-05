// 스케줄 캘린더 데이터
// category: 'live'(브랜드/비즈니스 라이브 방송, 노란색) | 'event'(브랜드/비즈니스 행사·오프라인 행사, 분홍색) | 'shoot'(촬영: 예능/광고/잡지/비즈니스 촬영 등, 보라색)
// time은 없으면 빈 문자열로 두면 됨 (하루 종일 일정 등)
const scheduleEvents = [
  { date: '2026-08-04', time: '', title: '비즈니스 촬영', category: 'shoot' },
  { date: '2026-08-08', time: '21:00', title: '브랜드 라이브방송 - APM Monaco <a href="https://pages-fast.m.taobao.com/wow/z/app/mtb/tblive-preview-h5/home?tabChannel=PREVIEW&fromLiveRoom=1&h5LiveId=1604753178024966&suid=7203B628-980D-4272-8EE9-AD75A23ADFC5&x-ssr=true&sp_tk=aDFiVmd5VXVqbjM%3D&isNeedHome=0&_afc_link=1&bxsign=scdaoiRmLx2eFd2hsHGuAuCWk-MEhfYEUEB3PS8u3cFJlQPI1cS5uz3jC5DWUP8VpRPwpG2QV0jEjHIgU-j1zVnZ06TqIUAzEq5TI4ARAAv2-9fpQGjClapGrsqE4iE-BCPTGQZtBrN54mcSqDZ9LsuKA&un=2d338b0a5cb31364a11ecd8b6bf592ec&disableNav=YES&id=1604753178024966&shareurl=true&share_crt_v=1&ut_sk=1.ZpY/TedjlxADACs/mi0Upkwe_21380790_1785916872369.Copy.zhibochuchuang&afcflow=unkown&cpp=1&h5AnchorId=RAzN8214YLDBs464Tm3t1t1cQHPTUMZaae1DLNH8A5huqeuLiXSyfHKFmmUzVSwvsfcMzJ3pN73imiso&pha_manifest=default&needLogin=false&surge_ssr=true&spm=a2141.live_waitou&async=false&un_site=0&sourceType=other&disableProgress=true&livesource=anchor_pc_share&short_name=h.8TZ5ZcX&utparamcnt=%7B%22_afc_link%22%3A%221%22%7D&tk=h1bVgyUujn3&app=apple_web_kit" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">↗</a>', category: 'live' },
  { date: '2026-08-09', time: '', title: '웨이보 기우기 📍광저우', category: 'event' },
  { date: '2026-08-11', time: '', title: '예능 촬영 (1일차)', category: 'shoot' },
  { date: '2026-08-12', time: '', title: '예능 촬영 (2일차)', category: 'shoot' },
  { date: '2026-08-13', time: '', title: '예능 촬영 (3일차)', category: 'shoot' },
  { date: '2026-08-14', time: '', title: '예능 촬영 (4일차)', category: 'shoot' },
  { date: '2026-08-15', time: '', title: '예능 촬영 (5일차)', category: 'shoot' },
  { date: '2026-08-16', time: '', title: '예능 촬영 (6일차)', category: 'shoot' },
  { date: '2026-08-21', time: '', title: '비즈니스 행사 📍해외', category: 'event' },
  { date: '2026-08-22', time: '', title: '브랜드 행사 📍상하이', category: 'event' },
  { date: '2026-08-24', time: '', title: '비즈니스 촬영', category: 'shoot' },
  { date: '2026-08-29', time: '', title: '브랜드 행사', category: 'event' },
  { date: '2026-08-31', time: '', title: '브랜드 행사 📍상하이', category: 'event' },
];
