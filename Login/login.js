document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // data apa aja yg diambil buat login
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // ngambil data user di localStorage
    const users = JSON.parse(localStorage.getItem("userData")) || [];

    // buat nyari data pengguna yg udh terdaftar
    const user = users.find(user => user.email === emailInput);

    if (!user) {
        alert("User belum terdaftar!");
    } else if (user.password !== passwordInput) {
        alert("Kata sandi salah!");
    } else {
        alert("Login berhasil!");
        window.location.href = "../Beranda/beranda.html";
    }
});