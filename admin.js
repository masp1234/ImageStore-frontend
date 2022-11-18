function admin() {

    let template = document.getElementsByTagName('template')[2];
    let clone = template.content.cloneNode(true)
    console.log(clone);

    
    appDiv.replaceChildren(clone)
    console.log(appDiv);
    
}