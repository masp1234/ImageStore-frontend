
// skal selvfølgelig laves anderledes
const userId = 1;

let imageURLString = "";



const inputFiles = document.querySelector('input[type="file"]');
inputFiles.addEventListener('change', (e) => {
    console.log(inputFiles.files);
    const reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
        imageURLString = reader.result.replace("data:", "")
                                        .replace(/^.+,/, "");
            const image = new Image();
            image.setAttribute('src', "data:image/jpg;base64," + imageURLString);
            document.body.appendChild(image);
            
    }
    reader.readAsDataURL(inputFiles.files[0]);
    
    

}, false)

   

const postFile = async file => {
    const formData = new FormData();
    formData.append('image', file);
    console.log(formData);
    

    await fetch('http://localhost:8080/image/add/' + userId, {
        method: "POST",
        body: formData
    })
}


