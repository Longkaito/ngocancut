const showCake = () => {
    document.querySelector('#cake-holder').classList.add('done');
    
    // Hiển thị popup sau khi thổi nến
    setTimeout(() => {
        const popup = document.getElementById('birthday-popup');
        popup.style.display = 'block';
        
        // Thêm event listener để đóng popup khi click ra ngoài
        document.addEventListener('click', function closePopup(e) {
            if (!popup.contains(e.target)) {
                popup.style.display = 'none';
                // Xóa event listener sau khi đóng popup
                document.removeEventListener('click', closePopup);
            }
        });
    }, 1000); // Đợi 1 giây sau khi nến tắt
}