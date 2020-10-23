var utente = prompt("scrivi il tuo cognome");
if (utente && utente.length >= 1)
{
  var primoCarattere = utente.charAt(0);
  var restoStringa = utente.slice(1);
  utente = primoCarattere.toUpperCase() + restoStringa;
}
console.log(utente);
