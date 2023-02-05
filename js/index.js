let types = ['student', 'senior', 'junior', 'officer']

for (let type of types) {
    loadLinks(type, config[type]);
}

function loadLinks(type, links) {
    let container = document.getElementById(type);
    for (let link of links) {
        container.innerHTML += `<a href="${link[1]}" role="button" class="contrast" target="_blank">${link[0]}</a>`;
    }
}