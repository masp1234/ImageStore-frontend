
// skal selvfølgelig laves anderledes
const userId = 1;



const inputFiles = document.querySelector('input[type="file"]');
const fileUploadButton = document.getElementById('file-upload-form');
const previewContainer = document.getElementById('preview-container');

    fileUploadButton.addEventListener('submit', (e) => {
        e.preventDefault();
        imageUrls.forEach(imageUrl => {
            postFile(imageUrl);
        })
        inputFiles.value = "";
        imageUrls = []
        previewContainer.innerHTML = "";
    
        
    } )

imageUrls = [];

inputFiles.addEventListener('change', (e) => {
    console.log(inputFiles.files);
    const reader = new FileReader();
    
    

    reader.onload = () => {
        console.log(reader.result);
        // lad være med at fjerne data... osv uden grund
        /* imageURLString = reader.result.replace("data:", "")
                                        .replace(/^.+,/, ""); */
        // lav om til preview image
        
        imageUrls.push(reader.result)
        const image = document.createElement('img');
        image.setAttribute('src', reader.result);
        previewContainer.appendChild(image);
            
    }
    reader.readAsDataURL(inputFiles.files[0]);
    
}, false)

const postFile = async imageUrl => {

    const filebody = {
            filename: "dsfdsf",
            originalByteSize: 200,
            currentBiteSize: 350,
            title: "title here",
            description: "description here",
            image: imageUrl
    };

    const fileData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(filebody)
      };
    
    
    await fetchData(`http://localhost:8080/image/add/${userId}`, fileData);
    renderImages();
}


