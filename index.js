const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');
const loaderEl = document.getElementById('loader');

const apiKey="SzoXoV49W+93wdvgFDMlpQ==gt5OfjokoXBahWqg"

const options={
  method: 'GET',
  headers:{
    'X-Api-Key': apiKey,
  }
}

async function getjoke(){
  console.log('clicked');
  loaderEl.classList.remove("hidden");
  jokeEl.classList.add("hidden");
  const response=await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=',options).then(response =>response.json());

  console.log(response[0].joke);
  
  loaderEl.classList.add("hidden");
  jokeEl.classList.remove("hidden");


  jokeEl.innerText =response[0].joke;


}
btnEl.addEventListener('click',getjoke);

