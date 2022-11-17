let routes = {}
let templates = {}


const appDiv = document.getElementById('container');

function route(path, template) {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    }
    else {
        return;
    }

}
function template(name, templateFunction) {
    return templates[name] = templateFunction
}

template('home', () => {
    home();
})
template('about', () => {
    about();
})
template('admin', () => {
    admin();
})

route('/admin', 'admin');
route('/', 'home');
route('/about', 'about');

function resolveRoute(route) {
    try {
        return routes[route];
    }
    catch (e) {
        throw new Error(`Route ${route} not found`)
    }
}

function router(evt) {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);

    route();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

console.log(templates);
console.log(routes);

