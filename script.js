








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
});


