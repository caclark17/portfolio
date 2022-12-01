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