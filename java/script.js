// JavaScript untuk menangani dropdown
document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector('.dropdown-toggle');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Menutup dropdown saat mengklik di luar dropdown
    document.addEventListener('click', function(e) {
        if (!dropdownToggle.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Ambil semua link kelas
    const classLinks = document.querySelectorAll('.class-link');

    // Tambahkan event listener untuk setiap link kelas
    classLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Hentikan perilaku default link

            // Toggle (munculkan / sembunyikan) detail kelas yang sesuai dengan link yang diklik
            const classDetail = this.nextElementSibling;
            classDetail.classList.toggle('show');
        });
    });
});
