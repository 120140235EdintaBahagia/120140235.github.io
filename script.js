// JavaScript untuk menambahkan data film jika disubmit dari halaman Form Pendaftaran Film
window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const judul = urlParams.get('judul');
    const tahun = urlParams.get('tahun');
    const genre = urlParams.get('genre');
    const deskripsi = urlParams.get('deskripsi');

    if (judul && tahun && genre && deskripsi) {
        const table = document.querySelector('table tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${judul}</td>
            <td>${tahun}</td>
            <td>${genre}</td>
            <td>${deskripsi}</td>
        `;
        table.appendChild(row);
    }
});
