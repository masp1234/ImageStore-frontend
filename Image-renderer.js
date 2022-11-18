

const renderImages = async () => {
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = "";

    getImages().then(data => {
        
        data.forEach(image => {
            imageContainer.innerHTML += `  
                <div class="imageElement">
                    <div class="image-inner-container">
                        <img src=${image.image} alt="image not found" width=200>
                    </div>
                    <div class="image-text-container">
                        <p>${image.filename}</p>
                        <p>${image.timeStamp}</p>
                        <p>${image.originalByteSize}</p>
                        <p>${image.title}</p>
                        <p>${image.description}</p>
                    </div>
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