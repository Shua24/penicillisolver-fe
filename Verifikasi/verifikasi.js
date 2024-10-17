function verifikasi() {
    const code1 = document.getElementById("code1").value;
    const code2 = document.getElementById("code2").value;
    const code3 = document.getElementById("code3").value;
    const code4 = document.getElementById("code4").value;

    const otp = code1 + code2 + code3 + code4;

    if (otp === "1234") {
        document.getElementById("pesan").innerText = "Nah gitu dong, dari tadi kek...";
        document.getElementById("pesan").style.color = "#008080";
        setTimeout(function() {
            window.location.href = '../Beranda/beranda.html';
        }, 2000);
    } else if(otp === "") {
        document.getElementById("pesan").innerText = "Isi OTPnya AJG !";
        document.getElementById("pesan").style.color = "red";
        highlightErrorInputs();
    } else {
        document.getElementById("pesan").innerText = "isi yg bener ASW !";
        document.getElementById("pesan").style.color = "red";
        highlightErrorInputs();
    }
    
}
