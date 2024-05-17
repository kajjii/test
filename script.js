/** ----------------1----------------------
 * Разобраться с импортами/экспортами. Сделать так, чтобы
 * функцию fetchData можно было использовать в двух файлах:
 * page-photos.js и script.js
 */

/** -------------------2---------------
 * Сделать удаление постов из DOM
 */

/** -----------------3--------------
 * Переделать циклы в обычный forEach/map
 */

/**
 * Разберись с темой, что такое мутация в языках программирования, например, js
 * приведи пример с объяснениями
 */

async function fetchData(url) {
    try {
        let response = await fetch(url)

        return await response.json()
    } catch (err) {
        return []
    }
}

//! ПРОАНАЛИЗИРУЙ
async function getPosts() {
    // Получаешь данные
    let data = await fetchData("https://jsonplaceholder.typicode.com/posts")

    data.splice(0, 15)

    let posts = document.querySelector(".posts")

    // Отрисовываешь
    data.forEach((post) => {
        posts.innerHTML += `
                <div class="post">
                    <h3>${post.title}</h3>
                    <div class="body">${post.body}</div>
                    <button>Удалить</button>
                </div>
            `
    })
}

getPosts()
