document.addEventListener('DOMContentLoaded', function () {
    const cherryBlossoms = document.querySelector('.cherry-blossoms');

    // Tạo 100 hạt hoa anh đào
    for (let i = 0; i < 100; i++) {
        const blossom = document.createElement('div');
        blossom.classList.add('cherry-blossom');
        cherryBlossoms.appendChild(blossom);

        // Đặt vị trí ban đầu ngẫu nhiên cho từng hạt hoa
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        blossom.style.left = `${randomX}px`;
        blossom.style.top = `${randomY}px`;

        // Độ trễ ngẫu nhiên
        const randomDelay = Math.random() * 8;
        blossom.style.animationDelay = `${randomDelay}s`;
    }
});
