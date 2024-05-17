// async function getPosts() {
//    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//    let data = await response.json()
//    data = data.splice(0, 15)

//    let posts = document.querySelector('.posts')
   
//    data.forEach(post => {
//         posts.append(post)
//    });
// }

// getPosts()

async function getPosts() {
       let response = await fetch('https://jsonplaceholder.typicode.com/posts')
       let data = await response.json()
       data = data.splice(0, 15)
    
       let posts = document.querySelector('.posts')

       let key;

       for (key in data){

            posts.innerHTML += `
                <div class="post">
                    <h3>${data[key].title}</h3>
                    <div class="body">${data[key].body}</div>
                </div>
            `
            data[key]
       }
    }
getPosts()

async function getPhotos() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos')
    let data = await response.json()
    data = data.splice(0, 15)
 
    let photos = document.querySelector('.photos')

    let key;

    for (key in data){

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