function addResults(bacteria, sickness) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const ol = document.createElement('ol');

    if (bacteria) {
        ol.innerHTML += `<p>Hasil pencarian untuk bakteri: ${bacteria}</p>`;
        ol.innerHTML += '<li>Amikacin - 50</li>';
        ol.innerHTML += '<li>Gentamicin - 50</li>';
        ol.innerHTML += '<li>Ampicillin - 49</li>';
    } else if (sickness) {
        ol.innerHTML += `<p>Hasil pencarian untuk penyakit: ${sickness}</p>`;
        ol.innerHTML += '<li>Gentamicin - 50</li>';
        ol.innerHTML += '<li>Ampicillin - 49</li>';
        ol.innerHTML += '<li>Chauvanic Acid - 20</li>'
    }

    resultsDiv.appendChild(ol);
}

function handleSubmit(event) {
    event.preventDefault();
    const bacteria = document.getElementById('bacteria').value;
    const sickness = document.getElementById('sickness').value;

    addResults(bacteria, sickness);
}
