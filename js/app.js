/*
need to search by species/breed/sex

search for shelters, city state address, list of animals(?)
*/
const submitSearch = document.querySelector('#submit-search');

const makeAPIRequest = () => {
    const options = {
        headers: {grant_type: 'client_credentials',
            client_id: 'kTkq5OF4L9FjO4bQcMXrSSKZZZQiLKJ82ZIqG1JJhhPPt6kD4A',
            client_secret: '5fycV7UzMZBF2aoixMVXtIrQ306XSerhfkO29uZA'}
    };

    let promise = axios.get('https://api.petfinder.com/v2/oauth2/token', options)
        .then(response => console.log(response));
        console.log(promise);
}

const callapi = (event) => {
    event.preventDefault();
    let res = makeAPIRequest();
    console.log(res);
}

submitSearch.addEventListener('click', callapi);
