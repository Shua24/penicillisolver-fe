document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const emailInput = document.getElementById("email").value;
    const users = JSON.parse(localStorage.getItem("userData")) || [];
    const user = users.find(user => user.email === emailInput);

    if (!user) {
        alert("Email Salah");
    } else if (user.email !== emailInput) {
        
    } else {
        window.location.href = "../Verifikasi/verifikasi.html";
    }
});