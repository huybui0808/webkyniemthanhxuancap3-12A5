





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
});




