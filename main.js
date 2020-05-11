//metodo 1
 // $('.riga').each(function () {
//     $(this).append('<p>Non poteva essere altrimenti</p>')
// })
// metodo 2
$('.riga').append('<p>Non poteva essere altrimenti</p>')

$('.riga').append('<span class="orario">17.55</span>')
// controllo se il pulsante invio e stato cliccato
// if (PremoPulsanteInvio()) {
//     var messaggio_utente = $('#input-messaggi').val();
//     console.log(messaggio_utente);
// }
var ok = false;
// Intercetto il clicco sul microfono
$('.icone-container-right').click(function() {
    // leggo il valore destritto inserito nel input
    var messaggio_utente = $('#input-messaggi').val();
    // stampo in console
    console.log(messaggio_utente);
    var ilMioNuovoMessaggio = $('.template .nuovo-messaggio').clone();
    ilMioNuovoMessaggio.text(messaggio_utente);
    $('.lista-messaggi').append(ilMioNuovoMessaggio);
    // ok = true;
    // var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
});

// if (ok) {
    // rinposto il messaggio di testo_default
//     var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
// }

// inposto un controllo per l'input
var controllo_testo_default = true;

// Creo una funzione al click dell'input
$('#input-messaggi').click(function() {
    // entra se è il un click dispari sul input
    if (controllo_testo_default == true) {
        // tiro via il messaggio di default sull input
        var testo_default = $(this).attr('placeholder', '');
        // inposto il controllo a false cosi poi posso ristabilire la condizione di partenza a un click pari
        controllo_testo_default = false;
    }
    else {

        // il click sul punsante è pari dunque ristabilisco il messaggio di default
        var testo_default = $(this).attr('placeholder', 'Scrivi un messaggio');
        // inposto il controllo a true cosi poi posso levare ancora il messaggio di default ad un click dispari
        controllo_testo_default = true;
    }
});

// funzione che se uso il tasto invio mi da true
function PremoPulsanteInvio(event){
  var keyCode = event.which;
  if (keyCode === 13){
    //istruzioni da eseguire
    return false;
  }else{
    return true;
  }
}
