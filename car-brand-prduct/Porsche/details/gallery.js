function changeImage(clickedImage) {
    const mainImage = document.getElementById('mainImage');
    const mainImageContainer = mainImage.parentElement;
    
    // Tambahkan class fade untuk memulai animasi fade out
    mainImageContainer.classList.add('fade');
    
    // Tunggu animasi fade out selesai
    setTimeout(() => {
        // Update gambar
        mainImage.src = clickedImage.src;
        mainImage.alt = clickedImage.alt;
        
        // Update thumbnail yang aktif
        const thumbnails = document.querySelectorAll('.thumbnail-grid img');
        thumbnails.forEach(img => img.classList.remove('active'));
        clickedImage.classList.add('active');
        
        // Hapus class fade untuk memulai animasi fade in
        mainImageContainer.classList.remove('fade');
    }, 300); // Sesuaikan dengan durasi transisi di CSS
}

// Inisialisasi thumbnail pertama sebagai active
document.addEventListener('DOMContentLoaded', function() {
    const firstThumbnail = document.querySelector('.thumbnail-grid img');
    if (firstThumbnail) {
        firstThumbnail.classList.add('active');
    }
});