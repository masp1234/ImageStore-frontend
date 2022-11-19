
// skal selvfølgelig laves anderledes
const userId = 1;
let fileUploadButton = null;
let inputFileTitle = null;
let inputFileDescription = null;
let inputFiles = null;




const addEventListenerToFileUploadButton = () => {
    fileUploadButton = document.getElementById('file-upload-form');
    inputFileTitle = document.getElementById('file-title');
    inputFileDescription = document.getElementById('file-description');
    
    fileUploadButton.addEventListener('submit', (e) => {
        e.preventDefault();

        const imageFile = {
            filename: file.name,
            originalByteSize: file.size,
            currentByteSize: 200,
            title: inputFileTitle.value,
            description: inputFileDescription.value,
            image: imageUrl
        }
        
        postFile(imageFile);
        
        inputFiles.value = "";
        imageUrl = ""
        previewContainer.innerHTML = "";
    } )
}

let imageUrl = "";
let file = null;

const addEventListenerToInputFiles = () => {
    inputFiles = document.querySelector('input[type="file"]');
    inputFiles.addEventListener('change', (e) => {
        const reader = new FileReader();
        
        file = inputFiles.files[0];
        console.log(file);
        
    
        reader.onload = () => {
           
            imageUrl = reader.result;
            previewImage(imageUrl);        
        }
        reader.readAsDataURL(file);
        
    }, false)
}



const postFile = async file => {

    const fileData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(file)
      };
    
    await fetchData(`http://localhost:8080/image/add/${userId}`, fileData);
}


