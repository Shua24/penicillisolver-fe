document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // biar gk reload

    // ngambil data dari inputan form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const sip = document.getElementById("sip").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // ngecek biar sama pssword sama confirmpassword
    if (password !== confirmPassword) {
        alert("Password dengan Konfirmasi Password tidak cocok!");
        return; // stop klo misalkan salah
    }
    if (!selectedRole) {
        alert("Silakan pilih salah satu role");
        return; 
    }
    let users = JSON.parse(localStorage.getItem("userData")) || [];
    if (!Array.isArray(users)) {
        users = []; // klo bukan array, reset menjadi array kosong
    }

    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("Email sudah terdaftar!");
        return; // muncul pesan klo misalkan email udh didaftarin
    }
    // buat nyimpen data user sementara
    const userData = { nama, email, sip, password, role: selectedRole };
    users.push(userData);
    localStorage.setItem("userData", JSON.stringify(users));

    // ke login.html
    window.location.href = "../Login/login.html";
});

let selectedRole = ''; // Variabel buat nyimpen role

function selectRole(role) {
    selectedRole = role; // nyimpen role yg dipilih
    // Anda bisa menambahkan logika visual untuk menandai tombol yang dipilih, misalnya:
    const buttons = document.querySelectorAll('.role-selection button');
    buttons.forEach(button => {
        button.classList.remove('selected'); // Hapus kelas 'selected' dari semua tombol
    });
    event.target.classList.add('selected'); // Tambahkan kelas 'selected' pada tombol yang dipilih
}
