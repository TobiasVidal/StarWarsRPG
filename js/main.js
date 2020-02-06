$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-img]').click(OpenInfo_Click);
});

function OpenInfo_Click() {
    let imgSource = 'img/' + $(this).data('img');
    //$('#lightbox-img').prop('src', imgSource);
    $('#lightbox-trigger').prop('href', imgSource);
    $('#lightbox-trigger').click();
}
