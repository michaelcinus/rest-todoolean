function popolaLista() {

    var target = $('#button');
    target.click(inserisciAzione);

}

function inserisciAzione() {

    var target = $('#testo');
    var text = target.val();
    target.val('');

    $.ajax({
        url: 'http://157.230.17.132:3004/todos',
        method: 'POST',
        data: {
            text: text

        },
        success: function(data) {

            creaLista();

        },
        error: function(err) {

            console.log('err', err);

        }
    })

}

function creaLista() {

    $.ajax({
        url: 'http://157.230.17.132:3004/todos',
        method: 'GET',
        success: function(data) {

            stampaLista(data);

        },
        error: function(err) {

            console.log('err', err);

        }
    })
}

function stampaLista(lista) {

    var target = $('#lista-azioni');
    target.text('');

    for (var i = 0; i< lista.length; i++) {

        var azione = lista[i];

        target.append(`<li><span class = "click"><i class="fas fa-times"></i></span>${azione.text}</li>`);

    }
}

function init(){

    creaLista();
    popolaLista();

}

$(document).ready(init);