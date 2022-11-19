let previewContainer = null;

const renderImages = async container => {
    getImages().then(data => {
        
        data.forEach(image => {
            container.innerHTML += `  
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
        
    })
}

const getImages = () => {
    const fileData = {
        method: 'GET'
    }
    return fetchData("http://localhost:8080/image/all", fileData)
}
const previewImage = imageUrl => {
    previewContainer = document.getElementById('preview-container');
    const image = document.createElement('img');
        image.setAttribute('src', imageUrl);
        previewContainer.replaceChildren(image);
}