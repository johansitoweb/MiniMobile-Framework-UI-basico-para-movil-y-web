```javascript
const routes = {
    '/': 'home.html',
    '/pagina2': 'pagina2.html',
    '/detalle/123': 'detalle.html'
};

function navigateTo(path) {
    if (routes[path]) {
        fetch(routes[path])
            .then(response => response.text())
            .then(html => {
                document.getElementById('main-content').innerHTML = html;
            });
    } else {
        console.error('Ruta no encontrada:', path);
    }
}

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('/')) {
        event.preventDefault();
        const path = event.target.getAttribute('href');
        navigateTo(path);
        window.history.pushState({ path }, '', path);
    }
});

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.path) {
        navigateTo(event.state.path);
    } else {
        navigateTo('/');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    navigateTo(window.location.pathname);
});
```