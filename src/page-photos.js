import {fetchData} from './index.js';

async function getPhotos() {
    let data = await fetchData("https://jsonplaceholder.typicode.com/photos")
    data = data.splice(0, 15)

    let photos = document.querySelector(".photos")

    data.forEach((photo) => {
        photos.innerHTML += `
            <div class="photo">
                <h3>${photo.title}</h3>
                <img src= "${photo.url}" </img>
                <button class="close">Удалить</button>
            </div>
        `
    })
}
getPhotos()

document.querySelector('body').onclick = (e) => {
    if(e.target.className != 'close') return
    let post = e.target.closest('.photo')
    post.remove()
}