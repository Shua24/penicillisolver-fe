document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah submit form agar tidak reload halaman

    // Ambil data dari input form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const sip = document.getElementById("sip").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Cek apakah Password dan Konfirmasi Password cocok
    if (password !== confirmPassword) {
        alert("Password dengan Konfirmasi Password tidak cocok!");
        return; // Hentikan proses jika password tidak cocok
    }

    // Jika password cocok, simpan data ke localStorage dalam bentuk JSON
    const userData = { nama, email, sip, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect ke halaman login
    window.location.href = "../Login/login.html";
});
