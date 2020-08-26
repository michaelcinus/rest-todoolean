function cancellaLista(){

    $(document).on('click', '.click', cancellaAzione);

}

function cancellaAzione() {

    var button = $(this);
    var id = button.data('id');


    $.ajax({
        url: `http://157.230.17.132:3004/todos/${id}`,
        method: 'DELETE',
        success: function(data) {

            creaLista();

        },
        error: function(err) {

            console.log('err', err);

        }
    })
}

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

        target.append(`<li><span data-id="${azione.id}" class="click"><i class="fas fa-times"></i></span>${azione.text}</http:>`);

    }
}

function init(){

    creaLista();
    popolaLista();
    cancellaLista()

}

$(document).ready(init);