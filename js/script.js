// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

// Lista Cognomi
var cognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
var listaCognomi = "";
// console.log(cognomi);
document.getElementById('lista').innerHTML = cognomi
// Chiedere all’utente il cognome
var utente = prompt("scrivi il tuo cognome");
// inserirlo in un array con gli altri cognomi
cognomi.push(utente);
console.log(cognomi);

// stampa la lista ordinata alfabeticamente post evento CLICK
var ordina = document.getElementById('button');
ordina.addEventListener('click', function ()
{
  cognomi.sort();
  var i = 0;
  do {
    listaCognomi = listaCognomi + "<li>" + cognomi[i] + "</li>"
    i++;
  } while (i < cognomi.length);

  // stampa della lista di cognomi
  console.log(listaCognomi);
  document.getElementById('stampa').innerHTML = listaCognomi
  //scrivi la posizione “umana” della lista in cui il nuovo utente si trova
  var posizione = cognomi.indexOf(utente);
  document.getElementById('position').innerHTML = "la posizione del tuo cognome in questa lista è la n°: " + ++posizione;
  // console.log(cognomi);

  // vado a disordinare la lista con un altro bottone :
  var disordina = document.getElementById('button_2');
  disordina.addEventListener('click', function ()
  {
    const randomizza = cognomi.sort(() => 0.5 - Math.random());
    let selezionato = randomizza.slice(0, 6);
    // var item = cognomi[Math.floor(Math.random()*cognomi.length)];
    document.getElementById('stampa_2').innerHTML = selezionato
  });
});


/* funzione per ordine random
function getRandom(arr, n)
{
  var result = new Array(n),
    len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
    while (n--)
    {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
        aken[x] = --len in taken ? taken[len] : len;
    }
  return result;
} */
