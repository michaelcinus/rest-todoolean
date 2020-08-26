function creaLista(){

    $.ajax({
        url: 'http://157.230.17.132:3004/todos',
        method: 'GET',
        success: function(data) {

            stampaLista(data);

        },
        error: function(err) {

        }
    })
}

function stampaLista(lista){

    var target = $('#lista');
    target.text('');

    for (var i = 0; i<lista.lenght; i++) {

        var alimento = lista[i];

        target.append(`<li>${alimento.text} - <span class="click"><b><i class="fas fa-times"></i></b></span></li>`);

    }
}

function init(){

    creaLista();

}

$(document).ready(init);