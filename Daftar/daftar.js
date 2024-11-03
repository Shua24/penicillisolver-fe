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

    // buat nyimpen data user sementara
    const userData = { nama, email, sip, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    // ke login.html
    window.location.href = "../Login/login.html";
});
