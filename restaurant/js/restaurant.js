const requestURL = 'https://caclark17.github.io/portfolio/restaurant/menu.json';
const cards = document.querySelector('.cards');
const jsonObject = '';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const plates = jsonObject['plates'];
        console.table(jsonObject);
        plates.forEach(displayPlates);
    });

    function displayPlates(plates) {
        let card = document.createElement('section');
        let photo = document.createElement('img');
        let plateName = document.createElement('h2');
        let description = document.createElement('p');
        let price = document.createElement('p');

        plateName.textContent = `${plates.name}`;
        description.textContent = `Description: ${plates.description}`;
        price.textContent = `Price: ${plates.price}`;

        photo.setAttribute('src', plates.photo);
        photo.setAttribute('alt', `Photo for ${plates.name}`);

        card.appendChild(photo);
        card.appendChild(plateName);
        card.appendChild(description);
        card.appendChild(price);

        cards.appendChild(card);
    }

//Map API
function initMap() {
    const options = {
        zoom:14,
        center:{lat:40.7608,lng:-111.8910}
    }

    const map = new
    google.maps.Map(document.getElementById('map'),options);

    const marker = new google.maps.Marker({
        position:{lat:40.7608,lng:-111.8910},
        map:map
    })
}


//Fixed Header
const title = document.querySelector('#restName');
const topOfHeader = title.offsetTop;

function fixedHeader() {
    if(window.scrollY >= topOfHeader) {
        document.body.classList.add('fixed-header');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-header');
    }
}

window.addEventListener('scroll', fixedHeader);