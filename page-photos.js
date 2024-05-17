async function getPhotos() {
    let data = await fetchData("https://jsonplaceholder.typicode.com/photos")
    data = data.splice(0, 15)

    let photos = document.querySelector(".photos")

    let key

    for (key in data) {
        photos.innerHTML += `
            <div class="photo">
                <h3>${data[key].title}</h3>
                <img src= "${data[key].url}" </img>
            </div>
        `
        data[key]
    }
}

getPhotos()
