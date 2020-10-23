// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

// Lista Cognomi
var cognomi = ["bianchi", "rossi", "duzioni", "balsano", "verdi"];
// console.log(cognomi);
document.getElementById('lista').innerHTML = cognomi
// Chiedere all’utente il cognome
var utente = prompt("scrivi il tuo cognome");
// inserirlo in un array con gli altri cognomi
cognomi.push(utente);
console.log(cognomi);

// stampa la lista ordinata alfabeticamente
var ordina = document.getElementById('button');
ordina.addEventListener('click', function ()
{
  cognomi.sort();
  var i = 0;
  while (i < cognomi.length)
  {
    // var cognomi = cognomi + "<li>" + cognomi[i] + "</li>"
    i++;
  }
  console.log(cognomi);

  document.getElementById('stampa').innerHTML = cognomi
});
