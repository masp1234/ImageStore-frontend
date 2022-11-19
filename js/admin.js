function admin() {

    let template = document.getElementById('admin');
    let clone = template.content.cloneNode(true)
    
    
    
    appDiv.replaceChildren(clone)
    addEventListenerToFileUploadButton();
    addEventListenerToInputFiles();
    
    
}