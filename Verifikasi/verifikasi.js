let generatedOTP = "";

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString(); 
}

function showNotification(title, message) {
    if (Notification.permission === "granted") {
        new Notification(title, { body: message });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(title, { body: message });
            }
        });
    }
}

window.onload = function () {
    generatedOTP = generateOTP();
    console.log("Generated OTP:", generatedOTP); 

    showNotification("Jgn kasih tau siapa-siapa ya..., ini kode OTP nya :", generatedOTP);

    const inputs = document.querySelectorAll(".code-input");

    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            if (value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            } else if (value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && index > 0 && e.target.value === "") {
                inputs[index - 1].focus();
            }
        });
    });
};

function clearInputs() {
    document.querySelectorAll(".code-input").forEach(input => {
        input.value = "";
    });
    document.getElementById("code1").focus();
}

function verifikasi() {
    const code1 = document.getElementById("code1").value;
    const code2 = document.getElementById("code2").value;
    const code3 = document.getElementById("code3").value;
    const code4 = document.getElementById("code4").value;

    const otp = code1 + code2 + code3 + code4;

    if (otp === generatedOTP) {  
        const message = "Kode OTP Terverifikasi!";
        document.getElementById("pesan").innerText = message;
        document.getElementById("pesan").style.color = "blue";
        setTimeout(function() {
            window.location.href = '../Beranda/beranda.html'; 
        }, 2000);
    } else if (otp === "") {
        const message = "Kode OTP Kosong!";
        document.getElementById("pesan").innerText = message;
        document.getElementById("pesan").style.color = "red";
    } else {
        const message = "Kode OTP Salah!";
        document.getElementById("pesan").innerText = message;
        document.getElementById("pesan").style.color = "red";
        clearInputs();
    }
}
