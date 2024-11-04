function getInfo() {
    document.getElementById('dynamic-content').innerHTML += `
        <h2>Bagaimana cara mencari pola kuman?</h2>
        <p>Cara mencari pola kuman sebagai berikut:</p>
        <ol>
            <li>
                <div class="inline">
                    Pergi ke halaman cari antibiotik.
                    <div class="textlink" onclick="window.location.href='../cariAntibiotik/cariAntibiotik.html'">Cari Antibiotik</div>
                </div>
            </li>
            <li>Masukkan species bakteri/penyakit pada kolom input.</li>
            <li>Klik button "cari" untuk menampilkan hasil pencariannya.</li>
            <li>Gunakan hasil pencarian untuk dipakai di kasus anda!</li>
        </ol>
    `;
    document.getElementById('load-content').remove();
}
