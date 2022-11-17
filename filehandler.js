const fileUploadForm = document.getElementById("file-upload-form");

// skal selvfølgelig laves anderledes
const userId = 1;


fileUploadForm.addEventListener('submit', async e => {
    // vigtig, men kan ikke huske hvorfor
    e.preventDefault();

    const files = document.getElementById('file').files;

    for (const file of files) {
        postFile(file);
    }
})

const postFile = async file => {
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    

    await fetch('http://localhost:8080/image/add/' + userId, {
        method: "POST",
        body: formData
    })
}


