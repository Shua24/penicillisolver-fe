function getInfo() {
    document.getElementById('dynamic-content').innerHTML += `
        <h2>Bagaimana cara membaca pola kuman?</h2>
        <p>Cara membaca pola kuman sebagai berikut:</p>
        <ol>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Curabitur tristique hendrerit leo faucibus mattis.</li>
            <li>Nullam nec lacus est. Nullam id facilisis sapien, hendrerit ullamcorper velit.</li>
            <li>Sed congue lobortis dolor eget commodo.</li>
        </ol>
    `;
    document.getElementById('load-content').remove();
}
