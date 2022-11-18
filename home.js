

const home = () => {
    
    const template = document.getElementsByTagName('template')[0];
    const clone = template.content.cloneNode(true);
    
    let imageContainer = clone.getElementById('image-container');
    renderImages(imageContainer);
    
    appDiv.replaceChildren(clone);
    

    


    
}

