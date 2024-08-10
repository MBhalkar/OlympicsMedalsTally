 // get country value from querystring parameters.
 let params = new URLSearchParams(window.location.search);
 let country = params.get('country');

 if (country == '') { country = 'ind';}  // set default country code.

 fetch(`https://api.olympics.kevle.xyz/medals?country=${country}`) 
 .then(function(response) {
     return response.json();
 }).then(function(data) {
     const countryName = data.results[0].country.name;
     const goldMedals = data.results[0].medals.gold;
     const silverMedals = data.results[0].medals.silver; 
     const bronzeMedals = data.results[0].medals.bronze; 
     const totalMedals = data.results[0].medals.total;
     const logText = `${countryName}: Gold - ${goldMedals}, Silver - ${silverMedals}, Bronze - ${bronzeMedals} (Total: ${totalMedals} medals)`;
     console.log(logText);
     document.querySelector("#medalsData").innerHTML= '<b>Paris 2024 Summer Olympics medal tally (API)</b> ' + logText;

 }).catch(function(error) {
     console.log(error);
 }) ;