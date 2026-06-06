

























document.addEventListener('DOMContentLoaded', function() {
    let lbAnh = [], lbIndex = 0;

    function capNhatThumbs(index) {
        const thumbs = document.getElementById('lightbox-thumbs');
        thumbs.innerHTML = lbAnh.map((src, i) => `
            <img src="${src}" class="${i === index ? 'active' : ''}" data-index="${i}" />
        `).join('');
        thumbs.querySelectorAll('img').forEach(t => {
            t.addEventListener('click', e => {
                e.stopPropagation();
                lbIndex = parseInt(t.dataset.index);
                chuyenAnh(lbIndex);
            });
        });
        setTimeout(() => {
            const activeThumb = thumbs.querySelector('.active');
            if (activeThumb) {
                thumbs.scrollTo({
                    left: activeThumb.offsetLeft - (thumbs.offsetWidth / 2) + (activeThumb.offsetWidth / 2),
                    behavior: 'smooth'
                });
            }
        }, 50);
    }

    function chuyenAnh(index) {
        const img = document.getElementById('lightbox-img');
        img.style.opacity = 0;
        setTimeout(() => {
            img.src = lbAnh[index];
            img.style.opacity = 1;
            capNhatThumbs(index);
        }, 300);
    }

    document.querySelectorAll('[data-anh]').forEach(el => {
        el.addEventListener('click', () => {
            lbAnh = JSON.parse(el.dataset.anh);
            lbIndex = 0;
            const lightbox = document.getElementById('lightbox');
            const img = document.getElementById('lightbox-img');
            img.style.opacity = 0;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                img.src = lbAnh[0];
                img.style.opacity = 1;
                capNhatThumbs(0);
            }, 300);
        });
    });

    document.getElementById('lightbox').addEventListener('click', e => {
        if (e.target === e.currentTarget) {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.getElementById('lb-prev').addEventListener('click', e => {
        e.stopPropagation();
        lbIndex = (lbIndex - 1 + lbAnh.length) % lbAnh.length;
        chuyenAnh(lbIndex);
    });

    document.getElementById('lb-next').addEventListener('click', e => {
        e.stopPropagation();
        lbIndex = (lbIndex + 1) % lbAnh.length;
        chuyenAnh(lbIndex);
    });

    document.querySelectorAll('.nhanloiyeuthuong')[0].addEventListener('click', (e) => {
        e.preventDefault();
        const loiChuc = [
    "♥️💝Chúc bạn luôn tràn đầy năng lượng và đạt được mọi ước mơ trong cuộc sống! 🌟",
    "♥️💝Dù con đường phía trước có khó khăn, hãy tin rằng bạn đủ mạnh để vượt qua! 💪",
    "♥️💝Chúc bạn luôn giữ nụ cười tươi sáng và lan tỏa hạnh phúc đến mọi người xung quanh! 😊",
    "♥️💝Tương lai rực rỡ đang chờ đón bạn, hãy bước đi với trái tim đầy nhiệt huyết! 🔥",
    "♥️💝Chúc bạn tìm được con đường mình yêu thích và thành công rực rỡ trên hành trình đó! 🎯",
    "♥️💝Mỗi ngày là một trang mới, hãy viết nên câu chuyện đẹp nhất của chính mình! 📖",
    "♥️💝Chúc bạn luôn được yêu thương, trân trọng và sống trọn vẹn từng khoảnh khắc! 💕",
    "♥️💝Dù đi đến đâu, hãy nhớ rằng luôn có những người yêu thương và tin tưởng bạn! 🏡",
    "♥️💝Chúc bạn có sức khỏe dồi dào, tinh thần vững vàng để chinh phục mọi thử thách! 💊",
    "♥️💝Hãy tin vào bản thân vì bạn có đủ tài năng để làm nên những điều phi thường! ✨",
    "♥️💝Chúc bạn luôn giữ được ngọn lửa đam mê cháy mãi trong trái tim mình! 🔥",
    "♥️💝Mong bạn luôn có những người bạn tốt đồng hành trên mọi chặng đường của cuộc đời! 👫",
    "♥️💝Chúc bạn thành công trong học tập và sự nghiệp, xứng đáng với công sức bỏ ra! 🎓",
    "♥️💝Hãy sống hết mình với từng khoảnh khắc vì tuổi trẻ chỉ đến một lần duy nhất! 🌈",
    "♥️💝Chúc bạn luôn bình an trong tâm hồn và tìm thấy niềm vui trong những điều nhỏ bé! 🌸",
    "Dù cuộc sống có bao nhiêu sóng gió, mong bạn luôn đứng vững và tiến về phía trước! 🌊",
    "Chúc bạn gặp được những người xứng đáng và có một tình yêu đẹp như mơ! 💑",
    "Mong bạn luôn biết ơn những gì mình có và không ngừng cố gắng để tốt hơn mỗi ngày! 🙏",
    "Chúc bạn có một sự nghiệp vững chắc và cuộc sống sung túc như lòng hằng mong ước! 💼",
    "Hãy dũng cảm theo đuổi ước mơ vì không có giấc mơ nào là quá lớn với bạn! 🚀",
    "Chúc bạn luôn được bao bọc bởi tình yêu thương của gia đình và bạn bè thân thiết! 👨‍👩‍👧",
    "Mong bạn luôn giữ được tâm hồn trong sáng và trái tim rộng lượng với mọi người! 💛",
    "Chúc bạn vượt qua mọi khó khăn và trở thành phiên bản tốt nhất của chính mình! 🏆",
    "Hãy nhớ rằng mỗi thất bại là một bài học quý giá giúp bạn trưởng thành hơn! 📚",
    "Chúc bạn luôn có đủ can đảm để nói lên điều mình nghĩ và làm điều mình tin! 🗣️",
    "Mong bạn tìm thấy ý nghĩa thực sự của cuộc sống và sống đúng với con người mình! 🌿",
    "Chúc bạn luôn rạng rỡ như ánh mặt trời và ấm áp như những ngày đông giá lạnh! ☀️",
    "Hãy trân trọng từng kỷ niệm đẹp vì đó là kho báu quý giá nhất của tuổi trẻ! 📸",
    "Chúc bạn luôn có đủ nghị lực để đứng dậy sau mỗi lần vấp ngã trong cuộc đời! 🌱",
    "Mong bạn luôn được sống trong yêu thương và mang lại hạnh phúc cho những người xung quanh! 🤗",
    "Chúc bạn đạt được mọi mục tiêu đã đặt ra và còn vươn xa hơn những gì mình nghĩ! 🎯",
    "Hãy luôn nhớ rằng bạn là người đặc biệt và thế giới cần có sự hiện diện của bạn! 🌍",
    "Chúc bạn có một cuộc sống đầy màu sắc, trọn vẹn yêu thương và không thiếu tiếng cười! 🎨",
    "Mong bạn luôn giữ được sự lạc quan và nhìn thấy điều tích cực trong mọi hoàn cảnh! 🌤️",
    "Chúc bạn thực hiện được những chuyến đi mơ ước và khám phá thế giới rộng lớn! ✈️",
    "Hãy sống với trái tim biết ơn và tâm hồn rộng mở để đón nhận mọi điều tốt đẹp! 🙌",
    "Chúc bạn luôn có sức mạnh tinh thần để vượt qua những ngày tháng khó khăn nhất! 💎",
    "Mong bạn luôn được ngủ ngon, ăn ngon và có những ngày tràn đầy năng lượng tích cực! 😴",
    "Chúc bạn xây dựng được những mối quan hệ tốt đẹp và ý nghĩa trong cuộc sống! 🤝",
    "Hãy tin vào hành trình của mình dù đôi khi con đường có vẻ dài và gian nan! 🛤️",
    "Chúc bạn luôn là nguồn cảm hứng cho những người xung quanh bằng chính cuộc sống của mình! 💫",
    "Mong bạn luôn tìm thấy niềm vui trong công việc và ý nghĩa trong từng việc mình làm! 🎵",
    "Chúc bạn có một gia đình hạnh phúc, ấm áp và luôn là bến bờ bình yên cho bạn! 🏠",
    "Hãy sống thật với chính mình vì đó là cách duy nhất để tìm thấy hạnh phúc thật sự! 🌺",
    "Chúc bạn luôn được may mắn mỉm cười và những điều tốt đẹp liên tục đến với bạn! 🍀",
    "Mong bạn không bao giờ từ bỏ ước mơ dù con đường có khó khăn đến mức nào! 🌙",
    "Chúc bạn trưởng thành từng ngày và ngày càng trở nên khôn ngoan hơn qua mỗi trải nghiệm! 🦋",
    "Hãy yêu thương bản thân mình nhiều hơn vì bạn xứng đáng được hưởng mọi điều tốt đẹp! 💝",
    "Chúc bạn luôn giữ được tình bạn đẹp và những kỷ niệm thời học trò mãi trong tim! 📝",
    "Mong rằng dù thời gian có trôi qua, tình cảm của chúng ta mãi bền chặt và ấm áp! 🎀",
];;
        const ngauNhien = loiChuc[Math.floor(Math.random() * loiChuc.length)];
        document.getElementById('noiDungLoi').innerText = ngauNhien;
const popup = document.getElementById('popupLoi');
popup.style.display = 'block';
setTimeout(() => popup.classList.add('active'), 10);

    });
});

function toggleAlbum12a5() {
    const box = document.getElementById('album12a5');
    const btn = document.getElementById('btnAlbum12a5');
    const fade = document.getElementById('album12a5Fade');
    const isCollapsed = box.classList.contains('collapsed');
    if (isCollapsed) {
        box.classList.remove('collapsed');
        btn.textContent = '⬆️ Thu gọn ⬆️';
        fade.style.display = 'none';
    } else {
        box.classList.add('collapsed');
        btn.textContent = '⬇️ Xem thêm ⬇️';
        fade.style.display = 'block';
    }
}

function toggleCard() {
    const card = document.getElementById('cardAlbum');
    const btn = document.getElementById('btnXemThem');
    const fade = document.getElementById('xemthemFade');
    const isCollapsed = card.classList.contains('collapsed');
    if (isCollapsed) {
        card.classList.remove('collapsed');
        btn.textContent = '⬆️ Thu gọn';
        fade.style.display = 'none';
    } else {
        card.classList.add('collapsed');
        btn.textContent = '⬇️ Xem thêm ⬇️';
        fade.style.display = 'block';
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('cardAlbum');
    const fade = document.getElementById('xemthemFade');
    if (card) { card.classList.add('collapsed'); }
    if (fade) { fade.style.display = 'block'; }

    renderLuuBut();
});

// ===== PHẦN LƯU BÚT - JSONBIN =====
const ADMIN_PASS = "xacnhanxoa";
const BIN_ID = "6a2402c8f5f4af5e29c210b3";
const API_KEY = "$2a$10$nQb8E2FsCr2IFBogT76xee7Obj2dzRiVQKxV9NEB4Qt6GDYxMfeve";
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

let mauDaChon = "#fff9c4";
let idDangXoa = null;
let cachedData = [];

// ===== CANVAS CHỮ KÝ =====
let dangVe = false;
let canvasKy, ctxKy;

function khoiDongCanvas() {
  canvasKy = document.getElementById("kyTenCanvas");
  if (!canvasKy) return;
  ctxKy = canvasKy.getContext("2d");
  ctxKy.strokeStyle = "#2d2d2d";
  ctxKy.lineWidth = 2.5;
  ctxKy.lineCap = "round";
  ctxKy.lineJoin = "round";

  canvasKy.addEventListener("mousedown", e => { dangVe = true; ctxKy.beginPath(); ctxKy.moveTo(...layToaDo(e)); });
  canvasKy.addEventListener("mousemove", e => { if (!dangVe) return; ctxKy.lineTo(...layToaDo(e)); ctxKy.stroke(); });
  canvasKy.addEventListener("mouseup",   () => dangVe = false);
  canvasKy.addEventListener("mouseleave",() => dangVe = false);
  canvasKy.addEventListener("touchstart", e => { e.preventDefault(); dangVe = true; ctxKy.beginPath(); ctxKy.moveTo(...layToaDo(e.touches[0])); }, { passive: false });
  canvasKy.addEventListener("touchmove",  e => { e.preventDefault(); if (!dangVe) return; ctxKy.lineTo(...layToaDo(e.touches[0])); ctxKy.stroke(); }, { passive: false });
  canvasKy.addEventListener("touchend",   () => dangVe = false);
}

function layToaDo(e) {
  const r = canvasKy.getBoundingClientRect();
  const scaleX = canvasKy.width / r.width;
  const scaleY = canvasKy.height / r.height;
  return [(e.clientX - r.left) * scaleX, (e.clientY - r.top) * scaleY];
}

function xoaChuKy() {
  if (ctxKy) ctxKy.clearRect(0, 0, canvasKy.width, canvasKy.height);
}

function canvasCoNoidung() {
  if (!canvasKy) return false;
  const d = ctxKy.getImageData(0, 0, canvasKy.width, canvasKy.height).data;
  for (let i = 3; i < d.length; i += 4) if (d[i] > 0) return true;
  return false;
}

let tabKyHienTai = "ten";

function chonTabKy(loai) {
  tabKyHienTai = loai;
  const tabTen = document.getElementById("tabKyTen");
  const tabVe  = document.getElementById("tabKyVe");
  const panelTen = document.getElementById("panelKyTen");
  const panelVe  = document.getElementById("panelKyVe");
  if (loai === "ten") {
    tabTen.style.background = "#7c3aed"; tabTen.style.color = "#fff";
    tabVe.style.background  = "#f3e8ff"; tabVe.style.color  = "#7c3aed";
    panelTen.style.display = "block";
    panelVe.style.display  = "none";
  } else {
    tabVe.style.background  = "#7c3aed"; tabVe.style.color  = "#fff";
    tabTen.style.background = "#f3e8ff"; tabTen.style.color = "#7c3aed";
    panelVe.style.display  = "block";
    panelTen.style.display = "none";
    setTimeout(() => { khoiDongCanvas(); }, 50);
  }
}

function xemTruocKyTen() {
  const ten = document.getElementById("inputKyTen").value;
  document.getElementById("xuatKyTen").textContent = ten;
}

function kyTenCoNoidung() {
  if (tabKyHienTai === "ten") {
    return document.getElementById("inputKyTen").value.trim().length > 0;
  } else {
    return canvasCoNoidung();
  }
}

function layAnhChuKy() {
  if (tabKyHienTai === "ten") {
    const ten = document.getElementById("inputKyTen").value.trim();
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = 340; tmpCanvas.height = 90;
    const ctx = tmpCanvas.getContext("2d");
    ctx.fillStyle = "#fffdf7";
    ctx.fillRect(0, 0, tmpCanvas.width, tmpCanvas.height);
    ctx.font = "56px \'Dancing Script\', cursive";
    ctx.fillStyle = "#4c1d95";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(ten, tmpCanvas.width / 2, tmpCanvas.height / 2);
    return tmpCanvas.toDataURL("image/png");
  } else {
    return canvasKy.toDataURL("image/png");
  }
}

function moFormLuuBut() {
  document.getElementById("formLuuBut").style.display = "flex";
  document.getElementById("inputNoiDung").value = "";
  document.getElementById("inputKyTen").value = "";
  document.getElementById("xuatKyTen").textContent = "";
  tabKyHienTai = "ten";
  document.getElementById("tabKyTen").style.background = "#7c3aed";
  document.getElementById("tabKyTen").style.color = "#fff";
  document.getElementById("tabKyVe").style.background = "#f3e8ff";
  document.getElementById("tabKyVe").style.color = "#7c3aed";
  document.getElementById("panelKyTen").style.display = "block";
  document.getElementById("panelKyVe").style.display = "none";
  dangVe = false;
}
function dongFormLuuBut() {
  document.getElementById("formLuuBut").style.display = "none";
  dangVe = false;
}

function chonMau(el) {
  mauDaChon = el.dataset.mau;
  document.querySelectorAll(".mau-option").forEach(e => e.classList.remove("active-mau"));
  el.classList.add("active-mau");
}

async function layDuLieu() {
  const res = await fetch(API_URL + "/latest", {
    headers: { "X-Master-Key": API_KEY }
  });
  const json = await res.json();
  return json.record.luubut || [];
}

async function luuDuLieu(data) {
  await fetch(API_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY
    },
    body: JSON.stringify({ luubut: data })
  });
}

async function luuLuuBut() {
  const noiDung = document.getElementById("inputNoiDung").value.trim();
  if (!noiDung) { alert("Bạn chưa viết nội dung!"); return; }
  if (!kyTenCoNoidung()) { alert("Bạn chưa ký tên!"); return; }

  const kyTenImg = layAnhChuKy();

  const btnGui = document.querySelector("#formLuuBut .btn-guibut");
  btnGui.textContent = "⏳ Đang gửi...";
  btnGui.disabled = true;

  try {
    const data = await layDuLieu();
    data.unshift({
      id: Date.now(), noiDung, kyTenImg, mau: mauDaChon,
      thoiGian: new Date().toLocaleDateString("vi-VN")
    });
    await luuDuLieu(data);
    // Gửi thông báo Telegram
const tenNguoi = data[0].kyTenImg ? "(chữ ký tay)" : data[0].kyTen;
fetch(`https://api.telegram.org/bot8857796580:AAETscIeHnblH2DEM6lL2Gu-YTLK5JUKXps/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    chat_id: "6091315052",
    text: `📝 Có lưu bút mới!\n\n✍️ Nội dung: ${data[0].noiDung}\n🖊️ Ký tên: ${tenNguoi}\n📅 Ngày: ${data[0].thoiGian}`,
    parse_mode: "HTML"
  })
});
    cachedData = data;
    dongFormLuuBut();
    renderLuuBut();
  } catch(e) {
    alert("Lỗi kết nối, thử lại nhé!");
  } finally {
    btnGui.textContent = "💾 Gửi lời lưu bút";
    btnGui.disabled = false;
  }
}

async function renderLuuBut() {
  const khung = document.getElementById("khungluubut");
  if (!khung) return;
  khung.innerHTML = '<p style="text-align:center;color:#aaa;font-style:italic;padding:40px 0;">⏳ Đang tải...</p>';
  try {
    const data = await layDuLieu();
    cachedData = data;
    if (!data.length) {
      khung.innerHTML = '<p style="text-align:center;color:#aaa;font-style:italic;padding:40px 0;width:100%;">Chưa có lời lưu bút nào. Hãy là người đầu tiên! 🌸</p>';
      return;
    }
    khung.innerHTML = data.map(item => `
      <div class="sticky-note" style="background:${item.mau};">
        <div class="sticky-pin">📌</div>
        <div class="sticky-content">${item.noiDung.replace(/\n/g,'<br>')}</div>
        <div class="sticky-footer">
          <span class="sticky-ky">${item.kyTenImg ? `<img src="${item.kyTenImg}" style="max-width:100px;max-height:36px;display:block;">` : `— ${item.kyTen||''}`}</span>
          <span class="sticky-ngay">${item.thoiGian}</span>
        </div>
        <button class="btn-xoa-note" onclick="moModalXoa(${item.id})" title="Xóa (Admin)">🗑️</button>
      </div>
    `).join("");
  } catch(e) {
    khung.innerHTML = '<p style="text-align:center;color:red;padding:40px 0;">❌ Không tải được lưu bút!</p>';
  }
}

function moModalXoa(id) {
  idDangXoa = id;
  document.getElementById("inputMatKhau").value = "";
  document.getElementById("thongBaoSai").style.display = "none";
  document.getElementById("modalXoa").style.display = "flex";
}
function dongModalXoa() {
  document.getElementById("modalXoa").style.display = "none";
  idDangXoa = null;
}
async function xacNhanXoa() {
  if (document.getElementById("inputMatKhau").value !== ADMIN_PASS) {
    document.getElementById("thongBaoSai").style.display = "block";
    return;
  }
  try {
    const data = cachedData.filter(i => i.id !== idDangXoa);
    await luuDuLieu(data);
    cachedData = data;
    dongModalXoa();
    renderLuuBut();
  } catch(e) {
    alert("Lỗi khi xóa, thử lại nhé!");
  }
}







