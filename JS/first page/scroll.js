let items = [];

function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            items = Array.from(data.querySelectorAll('movie')).map(item => {
                return {
                    age: item.querySelector('age').textContent,
                    image: item.querySelector('image').textContent,
                    name: item.querySelector('name').textContent,
                    tags: item.querySelector('tags').textContent,
                    description: item.querySelector('description').textContent,
                    time: item.querySelector('time').textContent,
                    trailer: item.querySelector('trailer').textContents

                };
            });
            return items;
        });
}
function addItemsToDOM(items) {
    const itemsList = document.querySelector('#moviesContainer');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        console.log(itemDiv);
        itemDiv.className= 'movie';
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
            &time=${encodeURIComponent(item.time)}
            &trailer=${encodeURIComponent(item.trailer)}">Купить билет</a>
        `;
        itemsList.appendChild(itemDiv);
        
    });
}
document.addEventListener('DOMContentLoaded', function() {
loadXML('/Cinema/XML/movies.xml')

addItemsToDOM(items)
});

document.addEventListener('DOMContentLoaded', function() 
{
    loadXML('/Cinema/XML/movies.xml')
    .then(items => addItemsToDOM(items))
    .catch(error => console.error('Ошибка при загрузке XML:', error));
});






