$('.ui.dropdown').dropdown();

$('.message .close').on('click', function () {
    $(this)
        .closest('.message')
        .transition('fade')
})

$('#abrir').on('click', function () {
    $('.ui.page.dimmer').dimmer('show');
})

$('#cerrar').on('click', function () {
    $('.ui.page.dimmer').dimmer('hide');
})