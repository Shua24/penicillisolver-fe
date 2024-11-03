function simpanData(tim) {
    let updateChecked = document.getElementById(`update${tim}`).checked;
    let hapusChecked = document.getElementById(`hapus${tim}`).checked;

    localStorage.setItem(`update${tim}`, updateChecked);
    localStorage.setItem(`hapus${tim}`, hapusChecked);

    alert(`Data untuk TIM ${tim} disimpan!\nUpdate Pola Kuman: ${updateChecked}\nHapus Pola Kuman: ${hapusChecked}`);

    return false;
}

function loadData(tim) {
    let updateChecked = localStorage.getItem(`update${tim}`) === 'true';
    let hapusChecked = localStorage.getItem(`hapus${tim}`) === 'true';

    document.getElementById(`update${tim}`).checked = updateChecked;
    document.getElementById(`hapus${tim}`).checked = hapusChecked;
}

window.onload = function() {
    loadData('PPI');
    loadData('PPRA');
};