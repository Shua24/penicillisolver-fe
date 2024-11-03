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
        alert("Silakan pilih salah satu peran!");
        return; // Hentikan proses jika tidak ada role yang dipilih
    }
    // buat nyimpen data user sementara
    const userData = { nama, email, sip, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // ke login.html
    window.location.href = "../Login/login.html";
});
