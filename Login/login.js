document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // data apa aja yg diambil buat login
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // ngambil data user di localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    // buat nyari data user yang udah terdaftar
    if (!userData || userData.email !== emailInput) {
        alert("User belum terdaftar!");
    } else if (userData.password !== passwordInput) {
        alert("Kata sandi salah!");
    } else {
        alert("Login berhasil!");
       
        window.location.href = "../Beranda/beranda.html";
    }
});
