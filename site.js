/* Dựng header, footer và nội dung từng trang từ du-lieu.js + san-pham-du-lieu.js */
(function () {
  const C = window.CTY, SP = window.SP, LOAI = window.LOAI, HANG = window.HANG, DV = window.DV, NGANH = window.NGANH, GT = window.GT;
  const $ = (s, r = document) => r.querySelector(s);
  const page = document.body.dataset.page;
  let io; // dùng cho reveal()
  const q = new URLSearchParams(location.search);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const tel = s => 'tel:' + s.replace(/\s/g, '');
  const zalo = 'https://zalo.me/' + C.zalo;
  const img = f => 'assets/img/sp/' + f;
  const loaiTen = id => (LOAI.find(l => l.id === id) || {}).ten || '';
  const I = {
    phone: '<svg viewBox="0 0 24 24"><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
    arr: '<svg viewBox="0 0 24 24"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',
    left: '<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
    right: '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24"><path d="M3 7h18M3 12h18M3 17h18"/></svg>',
    close: '<svg viewBox="0 0 24 24"><path d="M5 5l14 14M19 5L5 19"/></svg>'
  };

  /* ---------- Header ---------- */
  const NAV = [
    { k: 'san-pham', t: 'Sản phẩm', h: 'san-pham.html', sub: LOAI.map(l => ({ t: l.ten, h: 'san-pham.html?loai=' + l.id })) },
    { k: 'dich-vu', t: 'Dịch vụ', h: 'dich-vu.html', sub: DV.map(d => ({ t: d.ten, h: 'dich-vu.html#' + d.id })) },
    { k: 'ung-dung', t: 'Ứng dụng', h: 'ung-dung.html' },
    { k: 'gioi-thieu', t: 'Giới thiệu', h: 'gioi-thieu.html' },
    { k: 'lien-he', t: 'Liên hệ', h: 'lien-he.html' }
  ];
  const cur = page === 'chi-tiet' ? 'san-pham' : page;
  const hdr = document.createElement('header');
  hdr.className = 'hdr';
  hdr.innerHTML = `<div class="wrap nav">
    <a class="logo" href="index.html" aria-label="${esc(C.ten)} - Trang chủ"><img src="assets/logo.png" alt="${esc(C.ten)}" width="55" height="52"><img class="lg2" src="assets/logo-sang.png" alt="" width="55" height="52"></a>
    <ul class="menu">${NAV.map(n => `<li><a href="${n.h}"${n.k === cur ? ' class="on"' : ''}>${n.t}</a>${n.sub ? `<div class="sub">${n.sub.map(s => `<a href="${s.h}">${esc(s.t)}</a>`).join('')}</div>` : ''}</li>`).join('')}</ul>
    <div class="tools"><a class="tel" href="${tel(C.dt[0])}">${I.phone}${C.dt[0]}</a><button class="burger" aria-label="Mở menu" aria-expanded="false">${I.menu}</button></div>
  </div>
  <nav class="mnav" aria-label="Menu">${NAV.map(n => `<a href="${n.h}">${n.t}</a>${n.sub && n.k === 'san-pham' ? `<div class="s">${n.sub.map(s => `<a href="${s.h}">${esc(s.t)}</a>`).join('')}</div>` : ''}`).join('')}
    <a href="${tel(C.dt[0])}">Gọi ${C.dt[0]}</a></nav>`;
  document.body.prepend(hdr);
  const top = document.createElement('div');
  top.className = 'top';
  top.innerHTML = `<div class="wrap"><p><span>Hotline: <a href="${tel(C.dt[0])}">${C.dt[0]}</a> · <a href="${tel(C.dt[1])}">${C.dt[1]}</a></span><span>Email: <a href="mailto:${C.email}">${C.email}</a></span></p><p>Văn phòng TP. Hồ Chí Minh · Hà Nội · Đà Nẵng</p></div>`;
  document.body.prepend(top);
  const bg = $('.burger', hdr), mn = $('.mnav', hdr);
  bg.addEventListener('click', () => {
    const o = mn.classList.toggle('open');
    bg.setAttribute('aria-expanded', o); bg.innerHTML = o ? I.close : I.menu;
    document.documentElement.style.overflow = o ? 'hidden' : '';
    onScroll();
  });
  // Trang chủ: header tối liền khối với hero, cuộn qua hero thì về trắng
  const heroEl = page === 'home' ? document.querySelector('.hero') : null;
  const onScroll = () => {
    hdr.classList.toggle('sc', scrollY > 8);
    if (heroEl) hdr.classList.toggle('dk', !mn.classList.contains('open') && scrollY < heroEl.offsetTop + heroEl.offsetHeight - hdr.offsetHeight);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Footer + thanh gọi ---------- */
  const ftr = document.createElement('footer');
  ftr.className = 'ftr';
  ftr.innerHTML = `<div class="wrap"><div class="g">
    <div class="f1"><a class="logo" href="index.html"><img src="assets/logo.png" alt="${esc(C.ten)}" width="77" height="72" loading="lazy"></a><p>${esc(C.ten)}. Máy phun keo nhiệt, keo hot melt, vệ sinh, sửa chữa và cho thuê máy cho nhà máy trên cả nước.</p></div>
    <div class="f2"><h4>Sản phẩm</h4><ul>${LOAI.map(l => `<li><a href="san-pham.html?loai=${l.id}">${esc(l.ten)}</a></li>`).join('')}</ul></div>
    <div class="f3"><h4>Công ty</h4><ul><li><a href="dich-vu.html">Dịch vụ</a></li><li><a href="ung-dung.html">Ứng dụng</a></li><li><a href="gioi-thieu.html">Giới thiệu</a></li><li><a href="lien-he.html">Liên hệ</a></li></ul></div>
    <div class="f4"><h4>Liên hệ</h4><ul>${C.dt.map(d => `<li><a href="${tel(d)}">${d}</a></li>`).join('')}<li><a href="mailto:${C.email}">${C.email}</a></li>${C.vanPhong.map(v => `<li>${esc(v.tp)}: ${esc(v.dc)}</li>`).join('')}</ul></div>
  </div><div class="fb"><span>© ${new Date().getFullYear()} ${esc(C.ten)}</span><span>Bản demo giao diện</span></div></div>`;
  document.body.append(ftr);
  const mb = document.createElement('div');
  mb.className = 'mbar';
  mb.innerHTML = `<a href="${tel(C.dt[0])}">${I.phone}Gọi ngay</a><a href="${zalo}" target="_blank" rel="noopener">${I.chat}Zalo</a>`;
  document.body.append(mb);

  /* ---------- Mẩu dùng chung ---------- */
  const card = (p, d = 0) => `<a class="pc rv" style="--d:${d}s" href="chi-tiet.html?id=${p.id}"><div class="im"><img src="${img(p.anh[0])}" alt="${esc(p.ten)}" loading="lazy">${p.anh[1] ? `<img class="alt" src="${img(p.anh[1])}" alt="" loading="lazy">` : ''}</div><p class="lb">${esc(p.hang || loaiTen(p.loai))}</p><h3>${esc(p.ten)}</h3><span class="q">Liên hệ báo giá${I.arr}</span></a>`;
  const ind = (n, d = 0) => `<a class="ind rv" style="--d:${d}s" href="ung-dung.html#${n.id}"><div class="im"><img src="assets/img/nganh/${n.id}.jpg" alt="${esc(n.ten)}" loading="lazy"></div><div class="tx"><h3>${esc(n.ten)}</h3><p>${esc(n.mo)}</p></div></a>`;
  const crumb = (items) => `<nav class="crumb lb"><a href="index.html">Trang chủ</a>${items.map(i => i.h ? `<a href="${i.h}">${esc(i.t)}</a>` : `<span>${esc(i.t)}</span>`).join('')}</nav>`;
  const set = (id, html) => { const e = document.getElementById(id); if (e) e.innerHTML = html; return e; };

  function rowNav(row, prev, next) {
    const upd = () => { prev.disabled = row.scrollLeft < 4; next.disabled = row.scrollLeft + row.clientWidth >= row.scrollWidth - 4; };
    const step = () => row.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(row).columnGap || 24);
    prev.onclick = () => row.scrollBy({ left: -step() });
    next.onclick = () => row.scrollBy({ left: step() });
    row.addEventListener('scroll', upd, { passive: true }); addEventListener('resize', upd); upd();
  }

  /* ---------- Trang chủ ---------- */
  if (page === 'home') {
    // Hero: máy đã tách nền + thông số thật, tự chuyển 6 giây, rê chuột thì máy nhích nhẹ
    const hs = window.HERO.map(h => Object.assign({}, SP.find(p => p.id === h.id), h)).filter(p => p.ten);
    const stage = set('stage', hs.map((p, i) => `<figure${i ? '' : ' class="on"'}><img src="assets/img/hero/${p.anh}" alt="${esc(p.ten)}"${i ? '' : ' fetchpriority="high"'}></figure>`).join(''));
    const cap = $('#capt'), dots = $('#dots'), spec = $('#spec');
    dots.innerHTML = hs.map((_, i) => `<button aria-label="Máy ${i + 1}"><span>0${i + 1}</span><i></i></button>`).join('');
    let k = 0, tm;
    const DUR = 6000;
    const show = i => {
      k = i;
      stage.querySelectorAll('figure').forEach((f, j) => f.classList.toggle('on', j === i));
      dots.querySelectorAll('button').forEach((b, j) => { b.classList.remove('on'); if (j === i) { void b.offsetWidth; b.classList.add('on'); } });
      const p = hs[i];
      cap.innerHTML = `<a href="chi-tiet.html?id=${p.id}"><span class="lb">${esc(p.hang)}</span><b>${esc(p.ten)}</b><span class="go">Xem máy${I.arr}</span></a>`;
      spec.innerHTML = p.ts.map(t => `<div><dt>${esc(t[0])}</dt><dd>${esc(t[1])}</dd></div>`).join('');
      spec.classList.remove('sw'); void spec.offsetWidth; spec.classList.add('sw');
    };
    const auto = () => { clearInterval(tm); tm = setInterval(() => show((k + 1) % hs.length), DUR); };
    dots.querySelectorAll('button').forEach((b, i) => b.onclick = () => { show(i); auto(); });
    document.documentElement.style.setProperty('--dur', DUR + 'ms');
    show(0); auto();
    const hero = $('.hero');
    if (matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)').matches) {
      hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        stage.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3));
        stage.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3));
      });
    }

    set('homeCats', LOAI.map((l, i) => `<a class="cat rv" style="--d:${(i % 3) * .06}s" href="san-pham.html?loai=${l.id}"><div class="im"><img src="${img(l.anh)}" alt="" loading="lazy"></div><div><h3>${esc(l.ten)}</h3><span class="lb">${SP.filter(p => p.loai === l.id).length} sản phẩm</span></div></a>`).join(''));
    const pick = ['thung-keo-robatech-concept-b','dau-sung-phun-keo-cao-cap-nordson-miniblue-ii', 'thung-keo-robatech-diamond', 'may-keo-nhiet-hes-1106', 'may-phun-keo-pur', 'dau-sung-phun-keo-mf-eof', 'thung-keo-ec-melter', 'sung-phun-keo-nhiet-mini-mhg'];
    set('homeProds', pick.map(id => SP.find(p => p.id === id)).filter(Boolean).map((p, i) => card(p, (i % 4) * .06)).join(''));
    set('homeBrands', HANG.map(h => `<a href="san-pham.html?hang=${encodeURIComponent(h)}">${esc(h)}</a>`).join(''));
    // Dịch vụ: rê chuột (hoặc tab) vào dòng nào thì khung ảnh bên phải đổi theo
    const svc = set('homeSvc', DV.map((d, i) => `<li><a class="rv${i ? '' : ' on'}" data-i="${i}" href="dich-vu.html#${d.id}"><span class="n">0${i + 1}</span><h3>${esc(d.ten)}</h3><p>${esc(d.mo)}</p><span class="ar">${I.arr}</span></a></li>`).join(''));
    const sf = set('svcFig', DV.map((d, i) => `<img${i ? '' : ' class="on"'} src="assets/img/${d.anh}" alt="" loading="lazy"${d.anh.startsWith('nganh') ? ' data-ph' : ''}>`).join(''));
    const pickSvc = i => { svc.querySelectorAll('a').forEach((a, j) => a.classList.toggle('on', j === i)); sf.querySelectorAll('img').forEach((m, j) => m.classList.toggle('on', j === i)); };
    svc.querySelectorAll('a').forEach(a => { a.addEventListener('mouseenter', () => pickSvc(+a.dataset.i)); a.addEventListener('focus', () => pickSvc(+a.dataset.i)); });
    // Nguyên lý: bước nào nằm giữa màn hình thì sơ đồ sáng phần đó
    const plan = $('#plan'), steps = document.querySelectorAll('.st');
    const setStep = n => { plan.dataset.s = n; steps.forEach(s => s.classList.toggle('on', s.dataset.s === String(n))); };
    if ('IntersectionObserver' in window) {
      const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setStep(e.target.dataset.s); }), { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(s => so.observe(s));
    }
    steps.forEach(s => s.addEventListener('click', () => setStep(s.dataset.s)));
    setStep(1);
    const row = set('homeInd', NGANH.map((n, i) => ind(n, Math.min(i, 3) * .06)).join(''));
    rowNav(row, $('#indPrev'), $('#indNext'));
    set('homeOffs', C.vanPhong.map(v => `<li><b>${esc(v.tp)}</b><span>${esc(v.dc)}</span></li>`).join(''));
  }

  /* ---------- Danh mục sản phẩm ---------- */
  if (page === 'san-pham') {
    let loai = q.get('loai') || '', hang = q.get('hang') || '';
    const tabs = $('#tabs'), sel = $('#hang'), grid = $('#grid'), cnt = $('#cnt');
    tabs.innerHTML = [{ id: '', ten: 'Tất cả' }, ...LOAI].map(l => `<button data-l="${l.id}">${esc(l.ngan || l.ten)}</button>`).join('');
    sel.innerHTML = `<option value="">Tất cả hãng</option>` + HANG.map(h => `<option>${esc(h)}</option>`).join('');
    const draw = () => {
      tabs.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.l === loai));
      sel.value = hang;
      const list = SP.filter(p => (!loai || p.loai === loai) && (!hang || p.hang === hang));
      cnt.textContent = list.length + ' sản phẩm';
      const t = loai ? loaiTen(loai) : 'Sản phẩm';
      $('#pgT').textContent = hang ? t + ' · ' + hang : t;
      grid.innerHTML = list.length ? list.map((p, i) => card(p, (i % 4) * .05)).join('') : '';
      $('#empty').hidden = !!list.length;
      const u = new URLSearchParams(); if (loai) u.set('loai', loai); if (hang) u.set('hang', hang);
      history.replaceState(null, '', 'san-pham.html' + (u.toString() ? '?' + u : ''));
      reveal();
    };
    tabs.onclick = e => { const b = e.target.closest('button'); if (b) { loai = b.dataset.l; draw(); } };
    sel.onchange = () => { hang = sel.value; draw(); };
    $('#reset').onclick = () => { loai = ''; hang = ''; draw(); };
    draw();
  }

  /* ---------- Chi tiết sản phẩm ---------- */
  if (page === 'chi-tiet') {
    const p = SP.find(x => x.id === q.get('id'));
    if (!p) { set('pd', `<div class="empty" style="grid-column:1/-1"><h1 class="h5">Không tìm thấy sản phẩm</h1><p style="margin:16px 0 32px">Sản phẩm có thể đã đổi tên.</p><a class="btn" href="san-pham.html">Xem tất cả sản phẩm</a></div>`); }
    else {
      document.title = p.ten + ' | ' + C.ngan;
      set('crumb', crumb([{ t: 'Sản phẩm', h: 'san-pham.html' }, { t: loaiTen(p.loai), h: 'san-pham.html?loai=' + p.loai }]));
      // mô tả: dòng bắt đầu bằng "-" là gạch đầu dòng
      let html = '', ul = [];
      const flush = () => { if (ul.length) { html += '<ul>' + ul.map(l => `<li>${esc(l)}</li>`).join('') + '</ul>'; ul = []; } };
      p.mota.forEach(l => { if (/^[-–•]\s*/.test(l)) ul.push(l.replace(/^[-–•]\s*/, '')); else { flush(); html += `<p>${esc(l)}</p>`; } });
      flush();
      const ask = encodeURIComponent(p.id);
      set('pd', `<div class="gal"><div class="main"><img id="mainImg" src="${img(p.anh[0])}" alt="${esc(p.ten)}" fetchpriority="high"></div>
        ${p.anh.length > 1 ? `<div class="thumbs">${p.anh.map((a, i) => `<button${i ? '' : ' class="on"'} data-i="${i}" aria-label="Ảnh ${i + 1}"><img src="${img(a)}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}</div>
        <div class="info"><p class="lb">${esc(p.hang || 'Hoành Uy')}</p><h1 class="h5">${esc(p.ten)}</h1>
          <div class="price"><span class="lb">Giá</span><b>Liên hệ báo giá</b></div>
          <div class="desc">${html || '<p>Liên hệ để nhận thông số và báo giá.</p>'}</div>
          <div class="btns"><a class="btn" href="${tel(C.dt[0])}">${I.phone}Gọi báo giá ${C.dt[0]}</a><a class="btn o" href="${zalo}" target="_blank" rel="noopener">Nhắn Zalo</a><a class="btn o" href="lien-he.html?sp=${ask}">Gửi yêu cầu</a></div>
          <dl class="spec"><div><dt class="lb">Hãng</dt><dd>${esc(p.hang || '—')}</dd></div><div><dt class="lb">Nhóm</dt><dd><a href="san-pham.html?loai=${p.loai}">${esc(loaiTen(p.loai))}</a></dd></div><div><dt class="lb">Tình trạng</dt><dd>${/qua sử dụng/i.test(p.ten) ? 'Đã qua sử dụng' : 'Hàng mới, có hàng đã qua sử dụng theo yêu cầu'}</dd></div></dl>
        </div>`);
      const th = document.querySelectorAll('.thumbs button'), mi = $('#mainImg');
      th.forEach(b => b.onclick = () => { th.forEach(x => x.classList.toggle('on', x === b)); mi.style.opacity = 0; setTimeout(() => { mi.src = img(p.anh[+b.dataset.i]); mi.style.opacity = 1; }, 150); });
      const rel = SP.filter(x => x.loai === p.loai && x.id !== p.id).slice(0, 4);
      if (rel.length < 4) rel.push(...SP.filter(x => x.hang && x.hang === p.hang && x.id !== p.id && !rel.includes(x)).slice(0, 4 - rel.length));
      set('rel', rel.map((x, i) => card(x, i * .06)).join(''));
      if (!rel.length) $('#relSec').hidden = true;
    }
  }

  /* ---------- Dịch vụ ---------- */
  if (page === 'dich-vu') {
    set('svList', DV.map((d, i) => `<section class="g sv" id="${d.id}"><div class="im rv${d.anh.startsWith('nganh') ? ' ph' : ''}"><img src="assets/img/${d.anh}" alt="${esc(d.ten)}" loading="lazy"></div>
      <div class="tx rv" style="--d:.08s"><p class="lb">0${i + 1}</p><h2 class="h5">${esc(d.ten)}</h2><p class="p3">${esc(d.mo)}</p><ul>${d.y.map(y => `<li>${esc(y)}</li>`).join('')}</ul><a class="btn" href="lien-he.html?dv=${d.id}">Yêu cầu tư vấn</a></div></section>`).join(''));
  }

  /* ---------- Ứng dụng ---------- */
  if (page === 'ung-dung') {
    set('indGrid', NGANH.map((n, i) => ind(n, (i % 3) * .06).replace('<a class="ind', `<a id="${n.id}" class="ind`).replace(/href="[^"]*"/, 'href="lien-he.html?nganh=' + n.id + '"')).join(''));
  }

  /* ---------- Giới thiệu ---------- */
  if (page === 'gioi-thieu') {
    set('why', GT.lyDo.map((l, i) => `<li class="rv" style="--d:${i * .06}s"><h3>${esc(l.t)}</h3><p>${esc(l.m)}</p></li>`).join(''));
    set('gtList', DV.map(d => `<li>${esc(d.ten)}</li>`).join(''));
    set('gtOffs', C.vanPhong.map(v => `<li><b>${esc(v.tp)}</b><span>${esc(v.dc)}</span></li>`).join(''));
  }

  /* ---------- Liên hệ ---------- */
  if (page === 'lien-he') {
    set('kv', `<div><dt class="lb">Điện thoại</dt><dd>${C.dt.map(d => `<a href="${tel(d)}">${d}</a>`).join('<br>')}</dd></div><div><dt class="lb">Zalo</dt><dd><a href="${zalo}" target="_blank" rel="noopener">${C.dt[0]}</a></dd></div><div><dt class="lb">Email</dt><dd><a href="mailto:${C.email}">${C.email}</a></dd></div>` +
      C.vanPhong.map(v => `<div><dt class="lb">${esc(v.tp)}</dt><dd>${esc(v.dc)}</dd></div>`).join(''));
    const f = $('#fm'), nd = f.elements.nd;
    const sp = SP.find(x => x.id === q.get('sp')), dv = DV.find(x => x.id === q.get('dv')), ng = NGANH.find(x => x.id === q.get('nganh'));
    if (sp) nd.value = 'Tôi cần báo giá: ' + sp.ten + '\n';
    else if (dv) nd.value = 'Tôi cần tư vấn dịch vụ: ' + dv.ten + '\n';
    else if (ng) nd.value = 'Tôi cần tư vấn máy phun keo cho ngành: ' + ng.ten + '\n';
    f.onsubmit = e => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      const v = n => f.elements[n].value.trim();
      const body = `Họ tên: ${v('ten')}\nCông ty: ${v('cty')}\nĐiện thoại: ${v('dt')}\nEmail: ${v('em')}\n\n${v('nd')}`;
      location.href = `mailto:${C.email}?subject=${encodeURIComponent('Yêu cầu tư vấn từ website - ' + v('ten'))}&body=${encodeURIComponent(body)}`;
      $('#msg').textContent = 'Đang mở ứng dụng email của bạn. Nếu không mở được, hãy gọi ' + C.dt[0] + '.';
    };
  }

  /* ---------- Hiện dần khi cuộn ---------- */
  function reveal() {
    const els = document.querySelectorAll('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
    // phần đang nằm trong màn hình: hiện ngay, không chờ observer
    requestAnimationFrame(() => els.forEach(e => { const r = e.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) e.classList.add('in'); }));
    io = io || new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
    els.forEach(e => io.observe(e));
  }
  reveal();
})();
