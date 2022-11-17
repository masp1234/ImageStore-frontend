function home() {
    const div = document.createElement('div');
    const link = document.createElement('a');
    
    // husk # først i endpointet. Ved ikke hvorfor det er nødvendigt.
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);

    appDiv.replaceChildren(div);

    getImages().then(data => {
        const imageContainer = document.createElement('div');
        
        data.forEach(image => {
            imageContainer.innerHTML += `  
                <div class="imageElement">
                    <img src=${image.image} alt="">
                    <p>${image.filename}</p>
                    <p>${image.timeStamp}</p>
                    <p>${image.originalByteSize}</p>
                    <p>${image.description}</p>
                </div>
            ` 
        });
        appDiv.appendChild(imageContainer)
        console.log(data)
    })
}

async function getImages(){
    const fileData = {
        method: 'GET'
    }
    return fetchData("http://localhost:8080/image/all", fileData)
}