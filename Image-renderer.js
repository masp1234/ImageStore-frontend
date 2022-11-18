

const renderImages = async () => {
    const imageContainer = document.getElementById('image-container')
    imageContainer.innerHTML = "";

    getImages().then(data => {
        
        
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