'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {
  const html = `<article class="country">
            <img class="country__img" src="${data[0].flag}" />
            </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     const countryData = data[0];

//     renderCountry(countryData);

//     const neighbour = countryData.borders?.[0]; // ✅ Fix here
//     console.log('Neighbour code:', neighbour);

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2); // ✅ No array here
//     });
//   });
// };

// getCountryAndNeighbour('india');

//PROMISES
// const country = prompt('Enter Country Name:');
// const request = fetch(`https://restcountries.com/v2/name/${country}`);
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => res.json())
    .then(data => renderCountry(data))
    .catch(error => console.error(`this is error: ${error}`));
};
getCountryData('india');
