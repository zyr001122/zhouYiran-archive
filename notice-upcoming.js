// 공지 팝업 위쪽에 '다가오는 일정'을 붙여서 공지 + 스케줄을 한 팝업으로 보여준다.
// 일정은 data-schedule.js, 공지는 data-notice.js 를 그대로 읽으므로 이 파일은 고칠 일이 거의 없음.
// 각 페이지 </body> 바로 위에 <script src="notice-upcoming.js"></script> 한 줄만 있으면 됨.
(function () {
  var MAX_ITEMS = 4;      // 팝업에 보여줄 일정 개수
  var DAYS_AHEAD = 30;    // 오늘부터 며칠 뒤 일정까지 보여줄지
  var COLORS = { live: '#FFC53D', event: 'var(--pink)', shoot: '#8B5FBF' };
  var WEEK = ['일', '월', '화', '수', '목', '금', '토'];

  var modal = document.querySelector('.notice-modal');
  var dateEl = document.getElementById('noticeModalDate');
  if (!modal || !dateEl || document.getElementById('noticeUpcoming')) return;

  var style = document.createElement('style');
  style.textContent =
    '.nu-label { font-size: 11px; font-weight: 700; color: var(--pink); letter-spacing: 0.02em; margin: 12px 0 8px; }' +
    '.nu-row { display: flex; align-items: flex-start; gap: 8px; font-size: 12.5px; line-height: 1.5; margin-bottom: 7px; color: var(--black); }' +
    '.nu-row:last-child { margin-bottom: 0; }' +
    '.nu-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }' +
    '.nu-date { flex-shrink: 0; font-weight: 700; min-width: 58px; }' +
    '.nu-date.today { color: var(--pink); }' +
    '.nu-time { color: var(--pink); font-weight: 600; flex-shrink: 0; }' +
    '.nu-empty { font-size: 12px; color: var(--gray-muted); }' +
    '.nu-more { display: block; margin: 10px 0 0 auto; background: none; border: none; padding: 0; font-family: inherit; font-size: 11.5px; font-weight: 700; color: var(--pink); cursor: pointer; }' +
    '.nu-more:hover { text-decoration: underline; }' +
    '.nu-divider { height: 1px; background: var(--border); margin: 16px 0 14px; }';
  document.head.appendChild(style);

  function dayStart(d) { return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function parseDate(s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }

  var today = dayStart(new Date());
  var until = new Date(today.getFullYear(), today.getMonth(), today.getDate() + DAYS_AHEAD);
  var events = (typeof scheduleEvents !== 'undefined' ? scheduleEvents : [])
    .map(function (e) { return { e: e, d: parseDate(e.date) }; })
    .filter(function (x) { return x.d >= today && x.d <= until; })
    .sort(function (a, b) { return a.d - b.d || String(a.e.time || '').localeCompare(String(b.e.time || '')); })
    .slice(0, MAX_ITEMS);

  var rows = events.map(function (x) {
    var isToday = x.d.getTime() === today.getTime();
    var label = isToday ? '오늘' : (x.d.getMonth() + 1) + '.' + x.d.getDate() + ' (' + WEEK[x.d.getDay()] + ')';
    return '<div class="nu-row">' +
      '<span class="nu-dot" style="background:' + (COLORS[x.e.category] || 'var(--pink)') + '"></span>' +
      '<span class="nu-date' + (isToday ? ' today' : '') + '">' + label + '</span>' +
      (x.e.time ? '<span class="nu-time">' + x.e.time + '</span>' : '') +
      '<span>' + x.e.title + '</span></div>';
  }).join('');

  var wrap = document.createElement('div');
  wrap.id = 'noticeUpcoming';
  wrap.innerHTML =
    '<div class="nu-label">다가오는 일정</div>' +
    (rows || '<div class="nu-empty">예정된 일정이 없습니다.</div>') +
    '<button type="button" class="nu-more">전체 일정 보기 →</button>' +
    '<div class="nu-divider"></div>';
  wrap.querySelector('.nu-more').addEventListener('click', function () {
    if (typeof closeNotice === 'function') closeNotice();
    if (typeof openSchedule === 'function') openSchedule();
  });
  modal.insertBefore(wrap, dateEl);
})();
