function about() {
    const div = document.createElement('div');
    const link = document.createElement('a');

    link.href = '#/'
    link.innerText = 'Home';

    div.innerHTML = '<h1>About</h1>'
    div.appendChild(link);

    appDiv.replaceChildren(div);
}