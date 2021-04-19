async function chatAsync() {
  let req = await fetch(`https://api.thecatapi.com/v1/images/search`);

  let data = await req.json();
  console.log(data);

  const img = document.querySelector('img');

  img.setAttribute('src', data[0].url)
}

chatAsync();

// Methode 1 :

// async function operationAsync() {
//   const attenteAsync = await new Promise( resolve => {

//     true ? resolve('ok !') : null

//   })

//   console.log(attenteAsync);
// }

// operationAsync();

// Methode 2 :

// function returnPromise() {
//   return new Promise( resolve => {

//     true ? resolve('ok : method 2 !') : null

//   })
// }

// async function operationAsync() {
//   const attenteAsync = await returnPromise()

//   console.log(attenteAsync);
// }

// operationAsync();