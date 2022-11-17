function admin() {

    let template = document.querySelector('#admin')
    let clone = template.content.cloneNode(true)

    
    appDiv.replaceChildren(clone)
    
}