
// skal selvfølgelig laves anderledes
const userId = 1;

fileUploadButton = document.getElementById('file-upload-form');

fileUploadButton.addEventListener('submit', (e) => {
    e.preventDefault();
    imageUrls.forEach(imageUrl => {
        postFile(imageUrl);
    })
} )

const inputFiles = document.querySelector('input[type="file"]');

imageUrls = [];
inputFiles.addEventListener('change', (e) => {
    console.log(inputFiles.files);
    const reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
        imageURLString = reader.result.replace("data:", "")
                                        .replace(/^.+,/, "");


        // lav om til preview image
        imageUrls.push(imageURLString)
        const image = new Image();
        image.setAttribute('src', "data:image/jpg;base64," + imageURLString);
        document.body.appendChild(image);
            
    }
    reader.readAsDataURL(inputFiles.files[0]);
    
    

}, false)



const postDataByUrl = async (url, settings) => {
    const response = await fetch(url, settings)
    const data = await response.json()
    return data;
}

const postFile = async imageUrl => {
    console.log(JSON.stringify(imageUrl))
    
    
    await fetch('http://localhost:8080/image/add/' + userId, 
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            filename: JSON.stringify("dsfdsf"),
            originalByteSize: JSON.parse(200),
            currentBiteSize: JSON.parse(350),
            title: JSON.stringify("title here"),
            description: JSON.stringify("description here"),
            image: JSON.stringify(imageUrl)

        }
    }
    )
}


