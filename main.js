//Calls Cat API
function getCatPhoto(){
    fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then (catData =>{
        let catPics = catData.file;
    document.getElementById('catImage').src=catPics;
    })
};

getCatPhoto();

// Generates new cat image
function newCatImage(){
    getCatPhoto();
};

//Calls Dog API
function getDogPhoto(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then (dogData =>{
        let dogPics = dogData.message;
    document.getElementById('dogImage').src=dogPics;
    })
};

getDogPhoto();

//Generates new dog image
function newDogImage(){
    getDogPhoto();
};




