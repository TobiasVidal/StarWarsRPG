$("#items").load("Inventory.html");
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

function ItemList_UpdateTotalPrice() {
    let total = 0;
    $('.item-row').each(function (){
      let amount = +$(this).find('.item-qty').text();
      let price = +$(this).find('.item-price').text();
      total += amount * price;
    });
    
    $('#itemlist-total-price').text(total);
}