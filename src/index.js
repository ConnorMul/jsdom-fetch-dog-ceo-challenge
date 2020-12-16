console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []
fetch(imgUrl)
.then((response) => response.json())
.then((data) => renderImage(data))

function renderImage(images) {

    images.message.forEach(function(image) {
        let img = document.createElement("img")
        
        img.src = image

        let dogDiv = document.querySelector("#dog-image-container")
        dogDiv.append(img)
    })
}

fetch(breedUrl)
.then((response) => response.json())
.then((data) => {

    breeds = Object.keys(data.message)
}
)

function renderBreed(breeds) {
    breeds.forEach(function(breed) {
        let li = document.createElement("li")
      
        li.innerText = breed
    
        let breedUl = document.querySelector("#dog-breeds")
        breedUl.append(li)
        li.addEventListener("click", updateColor)
    }
)}

function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }