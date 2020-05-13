//metodo 1
 // $('.riga').each(function () {
//     $(this).append('<p>Non poteva essere altrimenti</p>')
// })
// metodo 2
$('.riga').append('<p>Non poteva essere altrimenti</p>')

$('.riga').append('<span class="orario">17.55</span>')
// var ok = false;
// Intercetto il clicco sul microfono
// $('.icone-container-right').click(function() {
    // leggo il valore destritto inserito nel input
    // var messaggio_utente = $('#input-messaggi').val();
    // stampo in console
    // console.log(messaggio_utente);
    // var ilMioNuovoMessaggio = $('.template .nuovo-messaggio').clone();
    // ilMioNuovoMessaggio.text(messaggio_utente);
    // $('.lista-messaggi').append(ilMioNuovoMessaggio);
    // $('#input-messaggi').val('');
    // $(this).attr('placeholder', 'Scrivi un messaggio');
    // ok = true;
    // var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
// });

// if (ok) {
    // rinposto il messaggio di testo_default
//     var testo_default = $('#input-messaggi').attr('placeholder', 'Scrivi un messaggio');
// }

// inposto un controllo per l'input
// var controllo_testo_default = true;
// Creo una funzione al click dell'input
// $('#input-messaggi').click(function() {
    // entra se è il un click dispari sul input
    // if (controllo_testo_default == true) {
        // tiro via il messaggio di default sull input
        // var testo_default = $(this).attr('placeholder', '');
        // inposto il controllo a false cosi poi posso ristabilire la condizione di partenza a un click pari
        // controllo_testo_default = false;
    // }
    // else {
        // il click sul punsante è pari dunque ristabilisco il messaggio di default
        // var testo_default = $(this).attr('placeholder', 'Scrivi un messaggio');
        // inposto il controllo a true cosi poi posso levare ancora il messaggio di default ad un click dispari
        // controllo_testo_default = true;
    // }
// });

// se uso il tasto invio quando sono sull input messaggi
$('#input-messaggi').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    // codice tasto invio
    if(keycode == '13'){
        // alert('You pressed a "enter" key in somewhere');
        // leggo il valore destritto inserito nel input
        var messaggio_utente = $('#input-messaggi').val();
        // stampo in console
        // console.log(messaggio_utente);
        // verifico che il mesaggio non sia vuoto
        if (messaggio_utente != ('')) {
            var ilMioNuovoMessaggio = $('.template .messaggio-inviato').clone();
            ilMioNuovoMessaggio.find('li').text(messaggio_utente);
            // metto il selettore con l active se no mi mette il messaggio su tutte le chat anche quelle a cui non starei mandando un messaggio
            $('.lista-messaggi.active').append(ilMioNuovoMessaggio);
            // resetto l'input
            $('#input-messaggi').val('');
            // rimetto il messaggio di default
            $(this).attr('placeholder', 'Scrivi un messaggio');
            // var pcmessaggio = $('.lista-messaggi').append('<li class="messaggio-ricevuto">' + 'ok' + '</li>');
            setTimeout(function(){
            // metto un messaggio di risposta ok ad ogni messaggio dell'utente che apparirà dopo un secondo
            var pcmessaggio = $('.lista-messaggi.active').append('<li class="messaggio-ricevuto">' + 'ok' + '</li>'); }, 1000);
            // pcmessaggio.setTimeout("funzione()", tempo_in_ms);
        }// chiudo l'if controllo input diverso da stringa vuota
    }// chiudo l'if controllo input inserito da tastiera tasto 13 ossia invio
});// chiudo il keypress dell'input

// controllo l'input a sx a ogni tasto digitato (tranne canc e back-space se usassi keypress)
$('.left .input-container').keyup(function(event){
    // var keycode = (event.keyCode ? event.keyCode : event.which);
    // codice tasto invio
    // if(keycode == '13'){
        // recupero il testo dell utente e tiro via gli spazi inutili e lo rendo tutto minuscolo per un confronto ,indipendentemente dal fatto che sia maiuscolo e minuscolo, delle sole lettere
        var testo_utente = $('.left .input-container input').val().trim().toLowerCase();
        // stampo ciò che leggo
        console.log('testo utente:' + testo_utente);
        // controllo che l'utente non ha digitato nulla(ha riempito l'input)
        if (testo_utente != '') {
            // all interno di liste-chat prendo ogni h1
            $('.liste-chat .riga').each(function() {
            // recupero il testo di questo h1 e lo rendo tutto minuscolo
            var testo_h1 = $(this).find('h1').text().trim().toLowerCase();
            // stampo il testo di ogni h1
            console.log('testo h1:' + testo_h1);
            // verifico se è uguale a quello inserito
            if (testo_h1.includes(testo_utente)) {
                // allora mostro solo lui(h1)
                $(this).show();
                // stampo il testo inserito dall'utente se  è contenuto id uno dei testi presenti negli h1
                console.log('perfetto match:' + testo_utente);

            }
            else {
                // allora nascondo il resto delle .riga
                $(this).hide();
            }
            })// chiudo l'each
        }// chiudo l'if controllo input diverso da stringa vuota
        else {// allora l'input è vuoto e rimostro tutte le .riga
            $('.riga').show();
        }
    // }   // chiudo l'if del 13
});// chiudo il keyup

// intercetto il click sulle righe della chat di sx per associare la chat a dx
$('.riga').click(function() {
// tolgo la classe active a qualsiasi lista messaggi
$('.lista-messaggi').removeClass('active');
// recupero il nome della chat dalla riga su cui ho cliccato ossia il testo del suo h1 relativo
var nome_chat = $(this).find('h1').text();
// stampo il testo nel h1 della riga cliccata
console.log(nome_chat);
// recupero la chat,ossia lista messaggi, relativa a tale riga cliccata
$('.lista-messaggi[data-chat-name="' + nome_chat + '"]').addClass('active');
});

// se clicco sull messaggio che ho inviato mi apre il suo dropdown
$('.chat').on('click','.messaggio-inviato',function() {
// alert('ciao');// non funziona l alert
// inisializzo il nuovo messaggio in una variabile che mi servirà per cancellarlo
var nuovomessaggio = $(this);
// do la classe active al dropdown ,in modo da vederlo, o levo la tale classe se l ha gia in modo da nasconderlo
$(this).find('.message-options-panel').toggleClass('active');
// se clicco su messagge-destroy cancello il messaggio_utente
$(this).find('.message-destroy').click(function() {
// nascondo il messaggio sul display anche se cosi rimarrebbe nel html
// $(nuovomessaggio).hide();
// rimuove il messaggio
$(nuovomessaggio).remove();
});//chiusura click per cancellare il messaggio
});//chiusura click per aprire il dropdown
