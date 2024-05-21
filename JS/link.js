document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const nameURL = decodeURIComponent(params.get('name'));
    const ageURL = decodeURIComponent(params.get('age'));
    const imageURL = decodeURIComponent(params.get('image'));
    const altimageURL = decodeURIComponent(params.get('altimage'));
    const tagsURL = decodeURIComponent(params.get('tags'));
    const descriptURL = decodeURIComponent(params.get('description'));
    const timeURL = decodeURIComponent(params.get('time')); 
    const date1URL = decodeURIComponent(params.get('dateone'));
    const date2URL = decodeURIComponent(params.get('datetwo'));
    const date3URL = decodeURIComponent(params.get('datethree'));
    const cinemaURL = decodeURIComponent(params.get('cinema'));
    const trailerURL = decodeURIComponent(params.get('trailer'));
    
document.querySelector('.name').textContent = nameURL;
document.querySelector('.age').textContent = ageURL;
document.querySelector('.image').src = imageURL;
document.querySelector('.altimage').src = altimageURL;
document.querySelector('.tags').textContent = tagsURL;
document.querySelector('.description').textContent = descriptURL;
document.querySelector('.time').textContent = timeURL;
document.querySelector('.dateone').textContent = date1URL;
document.querySelector('.datetwo').textContent = date2URL;
document.querySelector('.datethree').textContent = date3URL;
document.querySelector('.cinema').textContent = cinemaURL;
const itemList = document.querySelector('.trailer');
const itemDiv = document.createElement('div');
itemDiv.innerHTML = `<iframe ${trailerURL}></iframe>`;
itemList.appendChild(itemDiv);
document.title = nameURL;
});