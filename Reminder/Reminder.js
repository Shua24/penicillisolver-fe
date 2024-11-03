
function updateDeadline(day) {
    const month = "Oktober";
    const year = 2024;
    const newDate = `${day} ${month} ${year}`;
    // ngubah label memakai id=update
    document.getElementById("update").innerText = newDate;
    // Men save tanggal yang udah di rubah ke local Storage
    localStorage.setItem("reminderDate", newDate);
}

// Mengambil tanggal dari Local Storage 
function loadReminderDate() {
    const savedDate = localStorage.getItem("reminderDate");
    if (savedDate) {
        document.getElementById("update").innerText = savedDate;
    }
}

// logic untuk merubah tanggal
document.addEventListener("DOMContentLoaded", function() {
    // Memuat tanggal yang disimpan
    loadReminderDate();

    const calendarButtons = document.querySelectorAll(".calendar-item");
    calendarButtons.forEach(button => {
        button.addEventListener("click", function() {
            const day = button.innerText; // Ambil teks dari tombol yang diklik
            updateDeadline(day); // Panggil fungsi untuk mengupdate tanggal
        });
    });

    // Buat memunculkan pesan kalau kita mengklik botton
    document.querySelector(".Ganti").addEventListener("click", function() {
        const currentDate = document.getElementById("update").innerText;
        localStorage.setItem("reminderDate", currentDate);
        alert("Tanggal telah disimpan: " + currentDate); // Notifikasi kalo tanggal sudah disimpan
    });
});