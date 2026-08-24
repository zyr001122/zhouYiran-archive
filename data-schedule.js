// 스케줄 캘린더 데이터
// category: 'live'(브랜드/비즈니스 라이브 방송, 노란색) | 'event'(브랜드/비즈니스 행사·오프라인 행사, 분홍색) | 'shoot'(촬영: 예능/광고/잡지/비즈니스 촬영 등, 보라색)
// time은 없으면 빈 문자열로 두면 됨 (하루 종일 일정 등)
const scheduleEvents = [
  { date: '2026-08-04', time: '', title: '비즈니스 촬영', category: 'shoot' },
  { date: '2026-08-08', time: '21:00', title: '브랜드 라이브방송 - APM Monaco <a href="https://weibo.com/6782683822/5329809855220777" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">↗</a>', category: 'live' },
  { date: '2026-08-09', time: '', title: '웨이보 기우기 📍광저우', category: 'event' },
  { date: '2026-08-11', time: '', title: '예능 촬영 (1일차)', category: 'shoot' },
  { date: '2026-08-12', time: '', title: '예능 촬영 (2일차)', category: 'shoot' },
  { date: '2026-08-13', time: '', title: '예능 촬영 (3일차)', category: 'shoot' },
  { date: '2026-08-14', time: '', title: '예능 촬영 (4일차)', category: 'shoot' },
  { date: '2026-08-15', time: '', title: '예능 촬영 (5일차)', category: 'shoot' },
  { date: '2026-08-16', time: '', title: '예능 촬영 (6일차)', category: 'shoot' },
  { date: '2026-08-19', time: '', title: '브랜드 라이브방송 - 红之 <a href="https://weibo.com/6782683822/5333929181583688" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">↗</a>', category: 'live' },
  { date: '2026-08-19', time: '', title: '비즈니스 촬영', category: 'shoot' },
  { date: '2026-08-21', time: '', title: 'HAPPITAT 행사 📍태국', category: 'event' },
  { date: '2026-08-22', time: '', title: '凯旋1664 행사 📍상하이', category: 'event' },
  { date: '2026-08-24', time: '', title: '비즈니스 촬영', category: 'shoot' },
  { date: '2026-08-29', time: '', title: '브랜드 행사 📍시안', category: 'event' },
  { date: '2026-08-31', time: '', title: '브랜드 행사 📍상하이', category: 'event' },
];
