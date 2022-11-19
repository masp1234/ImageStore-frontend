

const home = () => {
    
    const template = document.getElementById('home');
    const clone = template.content.cloneNode(true);
    
    let imageContainer = clone.getElementById('image-container');
    renderImages(imageContainer);
    
    appDiv.replaceChildren(clone);

    
    

    


    
}

