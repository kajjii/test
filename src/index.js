async function fetchData(url) {
    try {
        let response = await fetch(url)

        return await response.json()
    } catch (err) {
        return []
    }
}
export {fetchData};

//! ПРОАНАЛИЗИРУЙ
async function getPosts() {
    // Получаешь данные
    let data = await fetchData("https://jsonplaceholder.typicode.com/posts")

    data = data.splice(0, 15)

    let posts = document.querySelector(".posts")
    // Отрисовываешь
    data.forEach((post) => {
        posts.innerHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <div class="body">${post.body}</div>
                    <button class="close">Удалить</button>
                </div>
            `
    })
}
getPosts()

document.querySelector('body').onclick = (e) => {
    if(e.target.className != 'close') return
    let post = e.target.closest('.post')
    post.remove()
}