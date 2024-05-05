
let items = [];//создаём массив

// Функция для загрузки XML и преобразования его в JSON
function loadXML(url) {//url - ссылка на xml файл(принимается при вызове функции)
    return fetch(url)//захват файла
        .then(response => response.text())//чтение файла
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))//распознование текста как xml-документа
        .then(data => {//получение данных
            items = Array.from(data.querySelectorAll('movie')).map(item => {//заполняем массив структурой где 'item' - имя тега в xml, item - имя структуры
                return {
                    age: item.querySelector('age').textContent,
                    image: item.querySelector('image').textContent,
                    name: item.querySelector('name').textContent,
                    tags: item.querySelector('tags').textContent,
                    description: item.querySelector('description').textContent,
                    time: item.querySelector('time').textContent
                };
            });
            return items;//возращаем готовый массив
        });
}


// Функция для добавления элементов в items-list
function addItemsToDOM(items) {
    const itemsList = document.querySelector('#moviesContainer');//создаём переменную хранящая элемент


    // Очищаем список перед добавлением новых элементов
    items.forEach(item => {//цикл переберающий элементы массива
        const itemDiv = document.createElement('div');//создаём контейнер для товара
        console.log(itemDiv);
        itemDiv.className= 'movie';//выдаём класс контейнеру
        itemDiv.innerHTML = `
            <img src="${item.image}">
            <h3>${item.age}</h3>
            <h2>${item.name}</h2>
            <p>${item.tags}</p>
            <a href="/HTML/MoviePage.html?name=${encodeURIComponent(item.name)}
            &age=${encodeURIComponent(item.age)}
            &image=${encodeURIComponent(item.image)}
            &tags=${encodeURIComponent(item.tags)}
            &description=${encodeURIComponent(item.description)}
            &time=${encodeURIComponent(item.time)}">Купить билет</a>
        `;//заполняем контейнер информацией
        

        itemsList.appendChild(itemDiv);//добовляем в наш .items-list созданный div
        
    });
}

document.addEventListener('DOMContentLoaded', function() {//функция вызывающаяся после загрузки страницы
loadXML('/XML/movies.xml')//заменить url на адресс xml файла(вызов функции загрузки данных)

addItemsToDOM(items)//генерация элементов
})

document.addEventListener('DOMContentLoaded', function() 
{
    loadXML('/XML/movies.xml')
    .then(items => addItemsToDOM(items)) // Исправленный вызов функции
    .catch(error => console.error('Ошибка при загрузке XML:', error));
});






