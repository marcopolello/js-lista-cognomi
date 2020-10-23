// Lista Cognomi
// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova

// Lista Cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
console.log(cognomi);
// Chiedere all’utente il cognome
var utente = prompt("scrivi il tuo cognome");
// inserirlo in un array con gli altri cognomi
cognomi.push(utente);
console.log(cognomi);

// stampa la lista ordinata alfabeticamente
var ordina = document.getElementById('button');
ordina.addEventLIstener('click', function()
{
  var i = 0;
  while (i < cognomi.length)
  {
    cognomi.sort();
    i++;
  }
  console.log(cognomi);
});
