document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form submit untuk validasi

    // Ambil nilai input dari form
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // Ambil data pengguna yang tersimpan di localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Validasi apakah pengguna terdaftar atau tidak
    if (!userData || userData.email !== emailInput) {
        alert("User belum terdaftar!");
    } else if (userData.password !== passwordInput) {
        alert("Kata sandi salah!");
    } else {
        alert("Login berhasil!");
        // Arahkan ke halaman beranda jika login berhasil
        window.location.href = "../Beranda/beranda.html";
    }
});
